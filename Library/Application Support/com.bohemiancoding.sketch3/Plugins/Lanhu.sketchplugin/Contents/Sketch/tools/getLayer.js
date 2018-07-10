/*
 * @Author: smallStone 
 * @Date: 2017-07-24 18:34:25 
 * @Last Modified by: smallStone
 * @Last Modified time: 2017-09-26 19:08:53
 */
@import 'tools/tool.js';

var getLayer = function () {
	this.context = null;
	this.document = null;
	this.data = {};
	
    this.init = function (context, document, progressCallback) {
		this.context = context;
		this.document = document;
    };

    this.getArtboard = function (msArtboard) {
		this.data = {};
		var document = this.document,
			context = this.context;

        if (msArtboard instanceof MSArtboardGroup) {

			var artId = msArtboard.objectID(),
				msReact = msArtboard.absoluteRect(),
				ruleX = msReact.x(),
				ruleY = msReact.y(),
				artScale = utils.getUserDefaultsValue(context, 'scale') || 1;

			utils.sketchLog('artScale:' + artScale);
			//计算比例
			var sliceScale,
				originalWidth = Math.round(msReact.width() * 10) / 10;
			// 320 360 375 540  放大4倍
			// 480              放大2.67倍
			// 750 720 640      放大2倍
			// 1080 1242 1440   放大1.5倍
			// 2160             不放大
			// 其余放大2倍
			if(originalWidth== 320 || originalWidth==360 || originalWidth == 375 || originalWidth == 540){
				sliceScale = 4;
			}else if(originalWidth == 480){
				sliceScale = 2.67;
			}else if(originalWidth == 1080 || originalWidth == 1242 || originalWidth == 1440){
				sliceScale = 1.5;
			}else if(originalWidth == 2160){
				sliceScale = 1;
			}else{
				sliceScale = 2;
			};
            artWidth = Math.round(msReact.width() * 10) / 10 * artScale,
			artHeight = Math.round(msReact.height() * 10) / 10 * artScale;

			var filename = msArtboard.objectID() + ".png";
			var path = NSTemporaryDirectory() + '/' + msArtboard.objectID() + '.png';

			var request = MSExportRequest.new();
			request.rect = msArtboard.absoluteInfluenceRect();
			request.format = 'png';
			request.scale = artScale;
			request.includeArtboardBackground = true;
			[document saveExportRequest:request toFile:path];

			utils.sketchLog("openSyncArtboards: saveArtboardOrSlice complete - filename - " + filename);

			//read file content and convert to base64
			var dataURL = NSURL.fileURLWithPath(path);
			var dataImg = [[NSData alloc] initWithContentsOfURL:dataURL];
			var base64 = dataImg.base64EncodedStringWithOptions(0);

			var dataImgAttrs = [[NSFileManager defaultManager] attributesOfItemAtPath:path error:nil],
				dataImgSize = dataImgAttrs.fileSize();
			
			this.data = {
				artScale:this.toStringValue(artScale),
				ArtboardID:this.toStringValue(artId),
				info:[],
				pageName:this.toStringValue(document.currentPage().name()),
				sliceScale:sliceScale
			};

			this.data['info'].push({
				name:this.toStringValue(msArtboard.name()),
				left:0,
				top:0,
				width:artWidth,
				height:artHeight,
				position_x:msReact.x()/4 * artScale,
				position_y:msReact.y()/4 * artScale,
			});

			if(msArtboard.hasBackgroundColor()){
				this.data['info'][0].fills = [{
					color:this.getLayerColor(msArtboard.backgroundColor()),
					type:"color"
				}]
			};
			utils.sketchLog("导出artboard完成: " + msArtboard.name());
			this.exportLayer(msArtboard,ruleX,ruleY,artWidth,artHeight,artScale,sliceScale);
			
			return {
				data:this.data,
				base64:this.toStringValue(base64),
			}
		}
	};
	
	this.exportLayer = function(msArtboard,ruleX,ruleY,artWidth,artHeight,artScale,sliceScale){
		var msLayersLoop = msArtboard.children().objectEnumerator();
		while (msLayer = msLayersLoop.nextObject()) {
			try {
				var msGroup = msLayer.parentGroup();
				var layerProperties = this.getLayerProperties(msLayer);
				var layer = {};
				
				if (!layerProperties.isVisible || msGroup.class() == "MSShapeGroup" || layerProperties.layerType == "symbol-master" || layerProperties.layerType == 'artboard-group' || (layerProperties.layerType == 'layer-group' && !layerProperties.isExportable) || msLayer.name().indexOf('-x-')==0) {
					//忽略-x-开头的图层
					continue;
				};
				
				var layerRect = msLayer.absoluteRect(),
					left = (Math.round((layerRect.x() - ruleX) * 10) / 10) * artScale,
					top = (Math.round((layerRect.y() - ruleY) * 10) / 10) * artScale,
					width = (Math.round(layerRect.width() * 10) / 10) * artScale,
					height = (Math.round(layerRect.height() * 10) / 10) * artScale;

				//mask child
				if(layerProperties.isMaskChildLayer){
					//忽略以下图层
					if(left > this.maskRect.width + this.maskRect.left){
						continue;
					};
					if(top > this.maskRect.top + this.maskRect.height){
						continue;
					};
					if(top + height < this.maskRect.top){
						continue;
					};
					if(left + width < this.maskRect.left){
						continue;
					};

					//超出的裁掉
					if(left + width > this.maskRect.left + this.maskRect.width){
						width = this.maskRect.left + this.maskRect.width - left;
					};
					if(top + height > this.maskRect.top + this.maskRect.height){
						height =  this.maskRect.top + this.maskRect.height - top;
					};
					if(top < this.maskRect.top){
						height = top + height - this.maskRect.top;
						top = this.maskRect.top;
					};
					if(left < this.maskRect.left){
						width = width + left - this.maskRect.left;
						left = this.maskRect.left;
					};
				};

				layer.name = this.toStringValue(msLayer.name());
				layer.type = layerProperties.layerType;
				layer.top = top;
				layer.left = left;
				layer.height = height;
				layer.width = width;

				//超出部分裁剪掉
				if(layer.width + layer.left>artWidth){
					layer.width = artWidth - layer.left;
				};
				if(layer.left < 0){
					layer.width = layer.width - Math.abs(layer.left);
					layer.left = 0;
				};
				if(layer.height + layer.top > artHeight){
					layer.height = artHeight - layer.top;
				};
				if(layer.top < 0){
					layer.height = layer.height- Math.abs(layer.top);
					layer.top = 0;
				};

				if (layerProperties.isExportable) {
					layer.image = {};
					if (layerProperties.layerType == "bitmap") {
						var bitmapBase64 = this.exportLayerAsBitmap(msLayer, layer.name, 1);
						layer.image['bitmap'] = this.toStringValue(bitmapBase64);
					}else{
						var bitmapBase64 = this.exportLayerAsBitmap(msLayer, layer.name, sliceScale);
						var vectorBase64 = this.exportLayerAsVector(msLayer, layer.name);
						layer.image['bitmap'] = this.toStringValue(bitmapBase64);
						layer.image['vector'] = this.toStringValue(vectorBase64);
					}
					layer.exportable = true;
				} else {
					layer.exportable = false;
				};

				if (layerProperties.isRenderable) {
					//基础样式
					var layerStyle = msLayer.style();

					layer.opacity = Math.round(layerStyle.contextSettings().opacity() * 10000) / 100;		
					
					var radius = this.getLayerRadius(msLayer);
					if(radius) layer.radius = radius;
					
					var borders = this.getLayerBorders(msLayer, layerStyle, artScale);
					if(borders.length > 0) layer.borders = borders;

					var dash = this.getborderOptions(msLayer, layerStyle);
					if(dash.length>0) layer.dash = dash;

					var fills = this.getLayerFills(msLayer, layerStyle, artScale);
					if(fills.length > 0) layer.fills = fills;
					
					var shadow = this.getLayerShadow(msLayer, layerStyle, artScale);
					if(shadow.length > 0) layer.shadow = shadow;

					var blur = this.getLayerBlur(msLayer, layerStyle);
					if(blur) layer.blur = blur;
				}

				if (layerProperties.layerType == "text") {
					try {
						var textAligns = ["left", "right", "center", "justify", "left"];
						var tree = msLayer.attributedStringValue().treeAsDictionary();
						
						layer.font = {
							content: this.toStringValue(tree.text.replace(/\s+/g," ")),
							font: this.toStringValue(msLayer.fontPostscriptName()),
							size: msLayer.fontSize() * artScale,
							line: msLayer.lineHeight()>0?msLayer.lineHeight() * artScale : msLayer.font().defaultLineHeightForFont() * artScale,
							spacing: msLayer.characterSpacing() == null ? this.toStringValue(0) : this.toStringValue(Math.round(msLayer.characterSpacing() * 100)/100 * artScale),
							align: textAligns[msLayer.textAlignment()],
							color: this.getLayerColor(msLayer.textColor())
						};
						
						var styles = [];
						var attributes = tree.attributes.objectEnumerator();
						while (attribute = attributes.nextObject()) {
							var color = attribute.NSColor.color;
							color = color.substring(color.indexOf("(") + 1,color.indexOf(")")).split(",");
							var r = Math.round(color[0] * 255),
								g = Math.round(color[1] * 255),
								b = Math.round(color[2] * 255),
								a = Math.round(color[3]),
								value = `rgba(${r},${g},${b},${a})`;

							var lineHeight,content,family,letterSpacing,fontSize;
							if(attribute.NSParagraphStyle && attribute.NSParagraphStyle.style.maximumLineHeight && attribute.NSParagraphStyle.style.maximumLineHeight!=0){
								lineHeight = attribute.NSParagraphStyle.style.maximumLineHeight * artScale;
							}else{
								lineHeight = msLayer.lineHeight() * artScale || msLayer.font().defaultLineHeightForFont() * artScale;
							};
							
							if(attribute.NSFont && attribute.NSFont.attributes && attribute.NSFont.attributes.NSFontNameAttribute) {
								family = attribute.NSFont.attributes.NSFontNameAttribute;
							} else {
								family = attribute.NSFont.family;
							};

							if(attribute.NSKern){
								letterSpacing = Math.round(attribute.NSKern * 100)/100 * artScale;
							}else{
								letterSpacing = 0;
							};

							if(attribute.NSFont && attribute.NSFont.attributes && attribute.NSFont.attributes.NSFontSizeAttribute){
								fontSize = attribute.NSFont.attributes.NSFontSizeAttribute * artScale;
							}else{
								fontSize = msLayer.fontSize() * artScale;
							};
							
							styles.push({
								content: this.toStringValue(attribute.text.replace(/\s+/g," ")),
								font: this.toStringValue(family),
								size: this.toStringValue(fontSize),
								line: this.toStringValue(lineHeight),
								spacing: this.toStringValue(letterSpacing),
								align: this.toStringValue(textAligns[attribute.NSParagraphStyle.style.alignment]),
								color:{
									r:this.toStringValue(r),
									g:this.toStringValue(g),
									b:this.toStringValue(b),
									a:this.toStringValue(a),
									value:this.toStringValue(value)
								}
							});
						}
						
						if (styles.length > 0) {
							layer.font.styles = styles;
						};
					} catch (e) {
						utils.sketchLog("getArtboard: exception while parsing text:" + e.message);
					}
				}

				if (msLayer.hasClippingMask()) {
					this.maskObjectID = msGroup.objectID();
					this.maskRect = {
						width:layer.width,
						height:layer.height,
						top:layer.top,
						left:layer.left
					};
				} else if (this.maskObjectID != msGroup.objectID() || msLayer.shouldBreakMaskChain()) {
					this.maskObjectID = undefined;
					this.maskRect = undefined;
				};

				if (layerProperties.layerType == "symbol") {
					var tempSymbol = msLayer.duplicate();
					var temp = tempSymbol.detachByReplacingWithGroup();
					temp.resizeToFitChildrenWithOption(0);
					this.exportLayer(temp,ruleX,ruleY,artWidth,artHeight,artScale,sliceScale);
					var container = temp.parentGroup();
					if (container) container.removeLayer(temp);
				}else{
					this.data['info'].push(layer);
				};
			} catch (e) {
				utils.sketchLog("getArtboard: exception:" + e.message);
			}
		}
	}
};

getLayer.prototype = {
    extend: function (options, target) {
		var target = target || this;

		for ( var key in options ){
			target[key] = options[key];
		};
		return target;
    },
    exportLayerAsBitmap: function (layer, name, scale) {
        var slice;
        var sliceRect = null;
        var document = this.document;

        var absoluteRect = layer.absoluteRect();
        var exportName = NSTemporaryDirectory() + name + '.png';

        sliceRect = NSMakeRect(absoluteRect.x(), absoluteRect.y(), absoluteRect.width(), absoluteRect.height());
        slice = [[MSExportRequest exportRequestsFromExportableLayer:layer] firstObject];
        slice.page = document.currentPage();
        slice.format = 'png';
        slice.scale = scale;
        [document saveArtboardOrSlice:slice toFile:exportName];

        var url = [NSURL fileURLWithPath:exportName];
        var data = [[NSData alloc]initWithContentsOfURL: url];
        var base64 = [data base64EncodedStringWithOptions:0];

        [[NSFileManager defaultManager] removeItemAtURL:url error:nil];
        return base64;
    },
    exportLayerAsVector: function (layer, name) {
        var slice;
        var sliceRect = null;
        var document = this.document;

        var absoluteRect = layer.absoluteRect();
        var exportName = NSTemporaryDirectory() + name + '.svg';

        sliceRect = NSMakeRect(absoluteRect.x(), absoluteRect.y(), absoluteRect.width(), absoluteRect.height());
        slice = [[MSExportRequest exportRequestsFromExportableLayer:layer] firstObject];
        slice.page = document.currentPage();
        slice.format = 'svg';
        [document saveArtboardOrSlice:slice toFile:exportName];

        var url = [NSURL fileURLWithPath:exportName];
        var data = [[NSString alloc] initWithContentsOfURL:url encoding:NSUTF8StringEncoding error:nil];

        [[NSFileManager defaultManager] removeItemAtURL:url error:nil];
        return data;
    },
	getLayerProperties: function(layer) {
        var isVisible = true,
            isLocked = false,
            hasSlice = false,
            isEmpty = false,
			isMaskChildLayer = false;
		var layerTemp = layer;
        while (layerTemp.class() != "MSArtboardGroup" && layerTemp.class() != "MSSymbolMaster") {
            var group = layerTemp.parentGroup();

            if (!layerTemp.isVisible()) {
                isVisible = false;
            };

            if (layerTemp.isLocked()) {
                isLocked = true;
            };

            if (layerTemp.exportOptions().exportFormats().count() > 0) {
                hasSlice = true;
            };

            if (this.maskObjectID && group.objectID() == this.maskObjectID && !layerTemp.shouldBreakMaskChain()) {
                isMaskChildLayer = true;
            };

            if (layerTemp.class() == "MSTextLayer" && layerTemp.isEmpty()) {
                isEmpty = true;
            };

            layerTemp = group;
        }
		
        var layerType = "shape",
            isExportFormatsAvailable = layer.exportOptions().exportFormats().count() > 0;

		//get type of layer
		if (layer.class() == "MSTextLayer") {
			layerType = "text";
		} else if (layer.class() == "MSSymbolInstance") {
			layerType = "symbol";
		} else if (layer.class() == "MSSymbolMaster") {
			layerType = "symbol-master";
		} else if (layer.class() == "MSSliceLayer") {
			layerType = "slice";
		} else if (layer.class() == "MSLayerGroup") {
			layerType = "layer-group";
		} else if (layer.class() == "MSArtboardGroup") {
			layerType = "artboard-group";
		} else if(layer.class() == "MSBitmapLayer"){
			layerType = "bitmap";
		};
        
		var isExportable = layerType != "artboard-group" && isExportFormatsAvailable;
		
        var isRenderable = layer.class() == "MSTextLayer" ||
			layer.class() == "MSShapeGroup" ||
			layer.class() == "MSBitmapLayer" ||
			layer.class() == "MSSymbolInstance";

		isRenderable = isRenderable && !isEmpty && !hasSlice && !isLocked;
		
		return {
            isVisible: isVisible,
            isLocked: isLocked,
            hasSlice: hasSlice,
            isMaskChildLayer: isMaskChildLayer,
            isEmpty: isEmpty,
			layerType: layerType,
			isExportFormatsAvailable: isExportFormatsAvailable,
			isExportable: isExportable,
			isRenderable: isRenderable
		}
	},
    getLayerMaskRect: function (layer) {
        var layer = this.extend(layer, {});
        layer.maxX = layer.x + layer.width;
        layer.maxY = layer.y + layer.height;
        var mask = this.extend(this.maskRect, {});
        mask.maxX = mask.x + mask.width;
        mask.maxY = mask.y + mask.height;
        var x = layer.x;
        var y = layer.y;
        var width = layer.width;
        var height = layer.height;
        var dx = 0;
        var dy = 0;
		
		var isLayerMaskOverlap = !(
			layer.maxX <= mask.x ||
			layer.x >= mask.maxX ||
			layer.y >= mask.maxY ||
			layer.maxY <= mask.y
		);

        if (isLayerMaskOverlap) {
            if (layer.x < mask.x) {
                x = mask.x;
                dx = mask.x - layer.x;
            };

            if (layer.y < mask.y) {
                y = mask.y;
                dy = mask.y - layer.y;
            };

            if (layer.maxX > mask.maxX) {
                width = width - (layer.maxX - mask.maxX) - dx;
            } else {
                width = width - dx;
            };

            if (layer.maxY > mask.maxY) {
                height = height - (layer.maxY - mask.maxY) - dy;
            } else {
                height = height - dy;
            };

            return {
                x: x,
                y: y,
                width: width,
                height: height
            }
        } else {
            return false
        }

    },
    toStringValue: function (NSStr) {
        var config = arguments.length > 1 ? arguments[1] : null;
        var str = new String(NSStr).toString();

        if (config && config.escapeLine) {
            str = str.replace(/\\-/g, '-');
        };

        if (config && config.encode) {
            str = encodeURIComponent(str);
        };
        return str;
    },
    getLayerRect: function(rect, referenceRect) {
        if (referenceRect) {
            return {
                x: rect.x() - referenceRect.x(),
                y: rect.y() - referenceRect.y(),
                width: rect.width(),
                height: rect.height()
            };
        };

        return {
            x: rect.x(),
            y: rect.y(),
            width: rect.width(),
            height: rect.height()
        };
    },
    getLayerColor: function(color) {
		var r = Math.round(color.red() * 255),
			g = Math.round(color.green() * 255),
			b = Math.round(color.blue() * 255),
			a = Math.round(color.alpha()*100)/100,
			value = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
        return {
            r: r,
            g: g,
            b: b,
			a: a,
			value:value
        };
    },
    getLayerGradient: function(msLayer, gradient) {
		try {
			var colorStops = [],
				gradientTypes = ["linear", "radial", "angular"],
				colorStopsLoop = gradient.stops().objectEnumerator();
			while (colorStop = colorStopsLoop.nextObject()) {
				colorStops.push({
					color: this.getLayerColor(colorStop.color()),
					position: colorStop.position()
				});
			};

			return {
				type: gradientTypes[gradient.gradientType()],
				from: {
					x: parseFloat(gradient.from().x),
					y: parseFloat(gradient.from().y)
				},
				to:  {
					x: parseFloat(gradient.to().x),
					y: parseFloat(gradient.to().y)
				},
				colorStops: colorStops
			};
		} catch(e) {
			utils.sketchLog("getSharedStyle: exception: name-" + this.toStringValue(msLayer.name()) + ", class-" + this.toStringValue(msLayer.class()));
			utils.sketchLog("getLayerGradient: exception:" + e.message);
		};
		return {};
    },
	getLayerRadius: function(msLayer) {
		try {
			if (msLayer.layers && msLayer.layers().firstObject().fixedRadius) {
				var radius1 = msLayer.layers().firstObject().path().points().objectAtIndex(0).cornerRadius();
				var radius2 = msLayer.layers().firstObject().path().points().objectAtIndex(1).cornerRadius();
				var radius3 = msLayer.layers().firstObject().path().points().objectAtIndex(2).cornerRadius();
				var radius4 = msLayer.layers().firstObject().path().points().objectAtIndex(3).cornerRadius();
				if(radius1 == 0 && radius2 == 0 && radius3 == 0 && radius4==0){
					return false;
				}else{
					if(radius1 == radius2 && radius2 == radius3 && radius3 == radius4){
						return [radius1];
					} else {
						return [radius1,radius2,radius3,radius4]
					}
				};
			}
		} catch(e) {
			utils.sketchLog("getSharedStyle: exception: name-" + this.toStringValue(msLayer.name()) + ", class-" + this.toStringValue(msLayer.class()));
			utils.sketchLog("getLayerRadius: exception:" + e.message);
		};
		return 0;
	},
    getLayerBorders: function(msLayer, layerStyle, artScale) {
        var layerBorders = [],
			borderPositions = ["中心边框", "内边框", "外边框"],
            layerBordersLoop = layerStyle.borders().objectEnumerator();
		
		try {
			//loop fills and calculate
			while (border = layerBordersLoop.nextObject()) {
				if (border.isEnabled()) {
					if (border.fillType() == 0) {
						layerBorders.push({
							type: "color",
							position: borderPositions[border.position()],
							thickness: border.thickness() * artScale,
							color: this.getLayerColor(border.color())
						});
					} else if (border.fillType() == 1) {
						layerBorders.push({
							type: "gradient",
							position: borderPositions[border.position()],
							thickness: border.thickness() * artScale,
							gradient: this.getLayerGradient(msLayer, border.gradient())
						});
					}
				}
			}
		} catch(e) {
			utils.sketchLog("getSharedStyle: exception: name-" + this.toStringValue(msLayer.name()) + ", class-" + this.toStringValue(msLayer.class()));
			utils.sketchLog("getLayerBorders: exception:" + e.message);
		};

        return layerBorders;
	},
	getborderOptions:function(msLayer, layerStyle){
		var loop = layerStyle.borderOptions().dashPattern().objectEnumerator(),
			dashPattern = [];
		try {
			while(dash = loop.nextObject()){
				dashPattern.push(this.toStringValue(dash))
			}
		}catch(e){};
		return dashPattern;
	},
    getLayerFills: function(msLayer, layerStyle) {
        var layerFills = [],
			layerFillsLoop = layerStyle.fills().objectEnumerator();
		
		try {
			//loop fills and calculate
			while (fill = layerFillsLoop.nextObject()) {
				if (fill.isEnabled()) {
					if (fill.fillType() == 0) {
						layerFills.push({
							type: "color",
							color: this.getLayerColor(fill.color())
						});
					} else if (fill.fillType() == 1) {
						layerFills.push({
							type: "gradient",
							gradient: this.getLayerGradient(msLayer, fill.gradient())
						});
					}
				}
			}
		} catch(e) {
			utils.sketchLog("getSharedStyle: exception: name-" + this.toStringValue(msLayer.name()) + ", class-" + this.toStringValue(msLayer.class()));
			utils.sketchLog("getLayerFills: exception:" + e.message);
		};

        return layerFills;
	},
	getLayerBlur:function(msLayer, layerStyle){
		//模糊
		var blurObj = {},
			blurType = {
				0:'高斯模糊',
				1:'动感模糊',
				2:'径向模糊'
			};
		try{
			var blur = layerStyle.blur();
			if(blur && blur.isEnabled()){
				blurObj = {
					type:blurType[blur.type()],
					radius:Math.round(blur.radius())
				};
				return blurObj;
			}else{
				return false;
			}
		}catch(e){
			return false;
		}
		
	},
    getLayerShadow: function(msLayer, layerStyle, artScale) {
        var layerShadow = [],
			layerShadowLoop = layerStyle.shadows().objectEnumerator(),
			layerInnerShadowLoop = layerStyle.innerShadows().objectEnumerator();
			
		try {
			//loop shadow and calculate
			while (shadow = layerShadowLoop.nextObject()) {
				if (shadow.isEnabled()) {
					layerShadow.push({
						type: shadow instanceof MSStyleShadow ? "外阴影" : "内阴影",
						offsetX: shadow.offsetX() * artScale,
						offsetY: shadow.offsetY() * artScale,
						blurRadius: shadow.blurRadius() * artScale,
						spread: shadow.spread() * artScale,
						color: this.getLayerColor(shadow.color())
					});
				}
			}
			//loop inner shadow and calculate
			while (shadow = layerInnerShadowLoop.nextObject()) {
				if (shadow.isEnabled()) {
					layerShadow.push({
						type: shadow instanceof MSStyleShadow ? "外阴影" : "内阴影",
						offsetX: shadow.offsetX() * artScale,
						offsetY: shadow.offsetY() * artScale,
						blurRadius: shadow.blurRadius() * artScale,
						spread: shadow.spread() * artScale,
						color: this.getLayerColor(shadow.color())
					});
				}
			}
		} catch(e) {
			utils.sketchLog("getSharedStyle: exception: name-" + this.toStringValue(msLayer.name()) + ", class-" + this.toStringValue(msLayer.class()));
			utils.sketchLog("getLayerShadow: exception:" + e.message);
		};
		
        return layerShadow;
    },
    getSharedStyle: function(msLayer){
		try {
			var sharedStyles = [];
			var sharedStyleID = msLayer.style().sharedObjectID();
			
			if (sharedStyleID != null) {
				if (msLayer.class() == "MSTextLayer") {
					sharedStyles = this.document.documentData().layerTextStyles()
				} else {
					sharedStyles = this.document.documentData().layerStyles();
				};
			
				var styles = sharedStyles.objects();
				for (var i = 0; i < styles.count(); i++) {
					var style = styles.objectAtIndex(i);
					var styleID = this.toStringValue(style.objectID());
					
					if (styleID == sharedStyleID) {
						//shared style found
						return {
							name: this.toStringValue(style.name()),
							sid: styleID
						}
					}
				}
			}
		} catch (e) {
			utils.sketchLog("getSharedStyle: exception: name-" + this.toStringValue(msLayer.name()) + ", class-" + this.toStringValue(msLayer.class()));
			utils.sketchLog("getSharedStyle: exception:" + e.message);
		};
        return null;
	},
}
