var onStartup = function (context) {
	
	var PxCookUI_FrameworkPath = PxCookUI_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent().stringByDeletingLastPathComponent();
	var PxCookUI_Log = PxCookUI_Log || log;
	(function () {
		var mocha = Mocha.sharedRuntime();
		var frameworkName = "PxCookUI";
		var directory = PxCookUI_FrameworkPath;

		var index = directory.toLowerCase().indexOf("plugins/")
		var pluginFolderPath = directory.substring(0, index + 8);

		var old1Path = pluginFolderPath + "PxCook.sketchplugin";
		var old2Path = pluginFolderPath + "PxCook2.sketchplugin";
		var fm = [NSFileManager defaultManager];
		[fm removeItemAtPath: old1Path error: nil];
		[fm removeItemAtPath: old2Path error: nil];
	 
		if (mocha.valueForKey(frameworkName)) {
			PxCookUI.initFrameworkPath(PxCookUI_FrameworkPath + "/" + frameworkName + ".framework");
			return true;
		} else if ([mocha loadFrameworkWithName: frameworkName inDirectory: directory]) {
			mocha.setValue_forKey_(true, frameworkName);
			PxCookUI.initFrameworkPath(PxCookUI_FrameworkPath + "/" + frameworkName + ".framework");
			return true;
		} else {
			return false;
		}
	})();
};

var onOpenDocument = function (context) {
	var frameworkName = "PxCookUI";
	var mocha = Mocha.sharedRuntime();
	//兼容如果 如果因为其他插件无法自动调取 onStartup 所以判断一下
	if (!mocha.valueForKey(frameworkName)) {
		onStartup(context);
	}
	coscript.setShouldKeepAround(true);
	checkDocument(context);
}

var checkDocument = function (context) {
	if(context.actionContext && context.actionContext.document){
		coscript.setShouldKeepAround(false);
		currentDocument = context.actionContext.document;
		PxCookUI.initWithDocument(currentDocument);
	}else{
		if (MSDocument.currentDocument && MSDocument.currentDocument()) {
			currentDocument = MSDocument.currentDocument();
			coscript.setShouldKeepAround(false);
			PxCookUI.initWithDocument(currentDocument);
		} else {
			coscript.scheduleWithInterval_jsFunction(0.1, function () { checkDocument(context) });
		}
	}
}

var toggleDisplay = function (context) {
	PxCookUI.toggleDisplay();
}
var about = function(context){
	PxCookUI.about();
}
var home = function(context){
	PxCookUI.home();
}
var checkUpdate = function (context) {
	PxCookUI.checkUpdate();
}
var onSelectionChanged = function (context) {
	PxCookUI.onSelectionChanged();
}
var onDocumentSaved = function (context) {
	PxCookUI.onDocumentSaved();
}
