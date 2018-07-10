/*
 * @Author: smallStone 
 * @Date: 2017-07-24 18:34:25 
 * @Last Modified by: smallStone
 * @Last Modified time: 2017-09-26 19:12:01
 */
@import 'tools/MochaJSDelegate.js';
@import 'tools/tool.js';
@import 'tools/getLayer.js';

var projectId = '',
	selectedObj = {},
	rootUrl = "https://lanhuapp.com";

var onRun = function (context,isAll) {
    //get token
	var lanhuToken = utils.getUserDefaultsValue(context, 'lanhuToken');
	
	var proId = utils.getUserDefaultsValue(context, 'proId');
	getSelected(context);
	
	if(lanhuToken && proId){
		projectId = proId;
	};

    utils.renderWebView(context,isAll,selectedObj,function(webViewPanel, NSApp, webViewRequest, webViewData, windowObject) {
		var document = context.document,scale;
		//execute action received from webview
		if (webViewRequest == "login") {
            // utils.alert(context,webViewData)
            var lanhuToken = webViewData.token;
            utils.setUserDefaultsValue(context,'lanhuToken',lanhuToken);
            utils.sketchLog('登录成功！' );
		};

		if (webViewRequest == "scale") {
			scale = webViewData.scale;
			utils.setUserDefaultsValue(context,'scale',scale);
			utils.sketchLog('选择上传倍数' )
		};

		if (webViewRequest == "changeType") {
            // utils.alert(context,webViewData)
            var type = webViewData.type;
            utils.setUserDefaultsValue(context,'type',type);
            utils.sketchLog('type:' +  type)
		};

        if (webViewRequest == "selected") {
			var select = JSON.stringify(webViewData);
			var proId = webViewData.selected.proId;
			projectId = proId;
			utils.setUserDefaultsValue(context,'select',select);
			utils.setUserDefaultsValue(context,'proId',proId);
            utils.sketchLog('选择团队和项目' );
        };
		
		if (webViewRequest == "logout") {
			utils.sketchLog("click logout");
			utils.removeUserDefaultsValue(context, "lanhuToken");
			utils.removeUserDefaultsValue(context, "select");
		};

		if (webViewRequest == "all" || (webViewRequest == "pages" && Object.keys(selectedObj).length>0)) {
			// COScript.currentCOScript().setShouldKeepAround_(true);
			
			if(document.currentPage().artboards().length==0){
				utils.alert(context,'当前pages似乎没有artboard');
				utils.sketchLog('当前pages似乎没有artboard');
				return false;
			};
			
			var loop = document.currentPage().artboards().objectEnumerator(),
				result = 0,
				allData = [];

			for(var i = 0 ; i < document.currentPage().artboards().length; i++){
				if(document.currentPage().artboards()[i].class()=='MSArtboardGroup'){
					if(webViewRequest == "pages"){
						//导出选中
						for(var j in selectedObj){
							if(j==document.currentPage().artboards()[i].objectID()){
								result++;
							}
						}
					}else{
						//导出全部
						result++
					}
				}
			};
			if(result==0){
				utils.alert(context,'当前pages似乎没有artboard');
				utils.sketchLog('当前pages似乎没有artboard');
				return false;
			};
			var res = {
				result:new String(result).toString()
			};
			windowObject.evaluateWebScript("vm.getAllProcess(" + JSON.stringify(res) + ")");

			getLayerObj = new getLayer();
			getLayerObj.init(context, document);
			
			while(msArtboard = loop.nextObject()){
				if(msArtboard.class()=='MSArtboardGroup'){
					if(webViewRequest == "pages"){
						//导出选中
						for(var j in selectedObj){
							if(j==msArtboard.objectID()){
								windowObject.evaluateWebScript("vm.process()");
								var info = getLayerObj.getArtboard(msArtboard);
								allData.push(info)
							}
						}
					}else{
						//导出全部
						windowObject.evaluateWebScript("vm.process()");
						var info = getLayerObj.getArtboard(msArtboard);
						allData.push(info)
					}
				}
			};
			
			// try {
				coscript.shouldKeepAround = true;
				utils.sketchLog('111循环~！！');
				var index=0;
				// coscript.scheduleWithRepeatingInterval_jsFunction(0,function(interval) {
					utils.sketchLog('111循环~！！');
				for(var i = 0; i < allData.length; i++){
					windowObject.evaluateWebScript("vm.uploadJSON(" + JSON.stringify(allData[i].data) + ", '" +allData[i].base64 + "')");
					if(index>allData.length) {
						interval.cancel();
					}
					log('第'+index)
					index++
				}
				windowObject.evaluateWebScript("vm.cocoaDone='true'");
				utils.sketchLog('循环完了~！！');
				// var maxlen = 100000;
				// if(layerData.length>maxlen){
				// 	utils.sketchLog('分批次导出~！！')
				// 	for(var i = 0;i<layerData.length;i+=maxlen){
				// 		utils.sketchLog(i)
				// 		windowObject.evaluateWebScript("vm.splitData(" + JSON.stringify(layerData.substring(i,i+maxlen)) +")")
				// 	}
				// 	utils.sketchLog('导出完啦~！！' +layerData )

				// 	windowObject.evaluateWebScript("vm.splitDone()")
				// }else{
				// 	utils.sketchLog(layerData)
				// 	windowObject.evaluateWebScript("vm.uploadJSON(" + layerData +")")
				// } 
			// } catch (error) {
			// 	utils.alert(context,'好像解析失败了哦');
			// 	utils.sketchLog(error);
			// }
		};

		if (webViewRequest == "register") {
			utils.sketchLog("click register");
			var webUrl = rootUrl + '/web/#!/user/register';
			var url = [NSURL URLWithString:webUrl];
			[[NSWorkspace sharedWorkspace] openURL:url];
		};

		if (webViewRequest == "web1") {
			utils.sketchLog("click web1");
			var webUrl = rootUrl + '/web';
			var url = [NSURL URLWithString:webUrl];
			[[NSWorkspace sharedWorkspace] openURL:url];
		};

		if (webViewRequest == "web") {
			utils.sketchLog("click web");
			var webUrl = rootUrl + '/web/#!/item/board?pid=' + projectId;
			var url = [NSURL URLWithString:webUrl];
			[[NSWorkspace sharedWorkspace] openURL:url];
		};
		
		if (webViewRequest == "help") {
			utils.sketchLog("openLogin: click help");
			var url = [NSURL URLWithString:@"http://help.lanhuapp.com/hc/kb/article/1068673"];
			[[NSWorkspace sharedWorkspace] openURL:url];
		};

		if (webViewRequest == "url") {
			var webUrl = webViewData.url;
			var url = [NSURL URLWithString:webUrl];
			[[NSWorkspace sharedWorkspace] openURL:url];
		};

		if(webViewRequest == 'newversion'){
			//新版本
			var cancelalert = NSAlert.alloc().init();
			var cancelplugin = context.plugin;
			var cancelimageFilePath=[cancelplugin urlForResourceNamed:"logo.png"];
			var cancelimageData = [NSData dataWithContentsOfURL:cancelimageFilePath];
			var cancelimage = NSImage.alloc().initWithData(cancelimageData);
			cancelalert.setIcon(cancelimage);
			cancelalert.setMessageText('哇~发现超腻害的新版本，要不要现在体验下？');
			cancelalert.addButtonWithTitle("带朕看看");
			cancelalert.addButtonWithTitle("朕就不要");
			var code = cancelalert.runModal();
			utils.sketchLog(code);
			if(code == 1000){
				var url = [NSURL URLWithString:webViewData.url];
				[[NSWorkspace sharedWorkspace] openURL:url];
			};
		};

		if (webViewRequest == "report") {
			utils.sketchLog("openReportIssue: click report");
			utils.sketchLog(webViewData);
			// //read log and send
			// var root = "/private/var/log/system.log";
			// var sysLogs = [NSString stringWithContentsOfFile:root encoding:NSUTF8StringEncoding error:nil]

			// // first, separate by new line
			// var logs = [sysLogs componentsSeparatedByCharactersInSet:[NSCharacterSet newlineCharacterSet]],
			// filteredLogs = [];

			// //filter cf logs
			// for (var i = 0; i <= 100; i++) {
			// 	filteredLogs.push(logs[i]);
			// }

			// filteredLogs = filteredLogs.join("\n");
			if(webViewData.length>0){
				var errstr = webViewData.join("\n");
				[[NSPasteboard generalPasteboard] declareTypes:[NSArray arrayWithObject:NSStringPboardType] owner:self];
				[[NSPasteboard generalPasteboard] setString:errstr forType:NSStringPboardType];
				utils.alert(context,'cmd+v即可粘贴','复制成功');
			}else{
				utils.alert(context,'好像没有错误日志哦~','');
			}
		}
    });
};

var uploadAllArtboard = function(context){
	onRun(context,true);
};

var uploadSelectArtboard = function(context){
	onRun(context,false)
};

var getSelected = function (context){
    //获取用户选择的
    var seletctCount = 0;
    for (var i = 0; i < context.selection.count(); i++) {
        seletctCount++;
        var artid = context.selection[i].parentArtboard().objectID();
        selectedObj[artid] = true;
    }
};