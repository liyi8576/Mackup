/*
 * @Author: smallStone 
 * @Date: 2017-07-24 18:34:25 
 * @Last Modified by: smallStone
 * @Last Modified time: 2017-09-26 19:15:27
 */
var utils = {
	version:0.71,
	
	escapedFileName: function(string){
		var notAllowedChars = [NSCharacterSet characterSetWithCharactersInString:@"\\<>=,!#$&'()*+/:;=?@[]%"];
		var cleanString = [[string componentsSeparatedByCharactersInSet:notAllowedChars] componentsJoinedByString:@""];
		return cleanString;
	},

	getUserDefaultsValue: function(context, key){
		var value = NSUserDefaults.standardUserDefaults().objectForKey(key);
		if (value) {
			return value;
		} else {
			return false;
		}
	},

	setUserDefaultsValue: function(context, key, val){
		[[NSUserDefaults standardUserDefaults] setObject:val forKey:key];
		[[NSUserDefaults standardUserDefaults] synchronize];
		this.sketchLog("setUserDefaultsValue(): key:" + key + ", value:" + val);
	},

	removeUserDefaultsValue: function(context, key) {
		NSUserDefaults.standardUserDefaults().removeObjectForKey(key);
		this.sketchLog("removeUserDefaultsValue(): key:" + key);
	},

	sketchLog: function(string){
		NSLog("lanhuLog::" + string)
	},

	alert: function(context, text, title ){
		var alert = NSAlert.alloc().init();
		var plugin = context.plugin;
		var imageFilePath=[plugin urlForResourceNamed:"logo.png"];
		var imageData = [NSData dataWithContentsOfURL:imageFilePath];
		var image = NSImage.alloc().initWithData(imageData);
		alert.setIcon(image);
		alert.setInformativeText(text);
		if(title){
			alert.setMessageText(title);
		}else{
			alert.setMessageText('似乎出了点小问题~');
		};
		alert.addButtonWithTitle("我知道了");
		alert.runModal();
		this.sketchLog(context,"alert(): title:" + title + ", text:" + text);
	},

	renderWebView: function(context,isAll,selectedObj,callback){
		var result = false,
			width = 540,
			height = 430,
			_this = this,
			bgcolor = NSColor.colorWithRed_green_blue_alpha(1, 1, 1, 1);
		url = rootUrl + '/sketch' + '?time='+Math.random()*100;

        COScript.currentCOScript().setShouldKeepAround_(true);

		var webViewPanel = NSPanel.alloc().init();
		webViewPanel.setTitleVisibility(NSWindowTitleHidden);
		webViewPanel.setTitlebarAppearsTransparent(true);
        webViewPanel.standardWindowButton(NSWindowCloseButton).setHidden(false);
        webViewPanel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
        webViewPanel.standardWindowButton(NSWindowZoomButton).setHidden(true);
        webViewPanel.setFrame_display(NSMakeRect(0, 0, width, height ), false);
        webViewPanel.setBackgroundColor(bgcolor);

        var contentView = webViewPanel.contentView(),
            webView = WebView.alloc().initWithFrame(NSMakeRect(0, 0, width, height)),
            windowObject = webView.windowScriptObject(),
            delegate = new MochaJSDelegate();
			
		delegate.setHandlerForSelector("webView:didFinishLoadForFrame:", function(webView, webFrame){
			//initialize settings
			windowObject.evaluateWebScript("vm.artboards="+Object.keys(selectedObj).length);
			var lanhuToken = _this.getUserDefaultsValue(context, 'lanhuToken');
			var select = _this.getUserDefaultsValue(context, 'select');
			if(lanhuToken && select){
				windowObject.evaluateWebScript("vm.status.isLogin=true");
				var scale = _this.getUserDefaultsValue(context, 'scale');
				
				if(select){
					//进入上传页面
					var data = {
						token: new String(lanhuToken).toString(),
						select: new String(select).toString()
					};
					// windowObject.evaluateWebScript("vm.scale=" + scale)
					windowObject.evaluateWebScript("vm.goUpload(" + JSON.stringify(data) + ")");
				};
				
				if(scale){
					//进入选择倍数
					windowObject.evaluateWebScript("vm.scale=" + scale);
				};

				if(isAll){
					windowObject.evaluateWebScript("vm.uploadType='all'");
				}else{
					windowObject.evaluateWebScript("vm.uploadType='selected'");
				}
				// var selectType = _this.getUserDefaultsValue(context, 'type');
				// if(selectType){
				// 	var data = {
				// 		type: new String(selectType).toString(),
				// 	}
				// 	log('selectType:'+JSON.stringify(data))
				// 	windowObject.evaluateWebScript("vm.defaultType(" + JSON.stringify(data) + ")")
				// }else{
				// 	windowObject.evaluateWebScript("vm.uploadType='all'")
				// }
			}else{
				//第一次登录
				windowObject.evaluateWebScript("vm.status.isLogin=false");
			};
			//windowObject.evaluateWebScript("webViewInit(" + JSON.stringify(settings) + ")");
			windowObject.evaluateWebScript("vm.getNewVersion('" + _this.version + "')");
			COScript.currentCOScript().setShouldKeepAround_(false);
		});
		
		delegate.setHandlerForSelector("webView:didChangeLocationWithinPageForFrame:", function(webView, webFrame){
			var webViewRequest = NSURL.URLWithString(webView.mainFrameURL()).fragment();

			if(webViewRequest == "close") {
				COScript.currentCOScript().setShouldKeepAround_(false);
				webViewPanel.orderOut(nil);
				NSApp.stopModal();
			} else {
				//get result data and execute callback
				var webViewData = JSON.parse(decodeURI(windowObject.valueForKey("webViewData")));
				callback(webViewPanel, NSApp, webViewRequest, webViewData, windowObject);
				result = true;
			}
			COScript.currentCOScript().setShouldKeepAround_(false);
		});

        contentView.setWantsLayer(true);
        contentView.layer().setFrame( contentView.frame() );
        contentView.layer().setCornerRadius(6);
        contentView.layer().setMasksToBounds(true);

        webView.setBackgroundColor(bgcolor);
        webView.setFrameLoadDelegate_(delegate.getClassInstance());
        webView.setMainFrameURL_(url);

		contentView.addSubview(webView);
		// var btn = NSButton.alloc().init()
		// btn.setFrame(CGRectMake(0, 100, 40, 40))
		// btn.setButtonType(NSSwitchButton)		    
		// btn.setCOSJSTargetFunction(function(sender){
		// 	log(123321)            
		// })
		// contentView.addSubview(btn);

        var closeButton = webViewPanel.standardWindowButton(NSWindowCloseButton);
        closeButton.setCOSJSTargetFunction(function(sender) {
			self.wantsStop = true;
			// webViewPanel.close();
            // webViewPanel.orderOut(nil);
            NSApp.stopModal();
        });
        closeButton.setAction("callAction:");
		NSApp.runModalForWindow(webViewPanel);
		// webViewPanel.becomeKeyWindow();
		// webViewPanel.setLevel(NSFloatingWindowLevel);
		// webViewPanel.center();
		// webViewPanel.makeKeyAndOrderFront(nil);
        // return result;
    }
}