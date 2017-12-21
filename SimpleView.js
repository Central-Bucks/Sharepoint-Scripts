function overrideView(ctx) {
	var ret = "<h2>" + ctx.CurrentItem.FileLeafRef + "</h2>";
	return ret;
}

(function (){
	var overrideContext =  {};
	overrideContext.Templates = {};
	overrideContext.Templates.Header = "<div id='NewView'>"
	overrideContext.Templates.Item = overrideView;
	overrideContext.Templates.Footer = "</div>";
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideContext);

}) ();




