(function()
{
	Sidebar.prototype.addFlowchartPalette = function(expand) /* URFU */
	{
		var w = 100;
		var h = 100;
		var s = 'strokeWidth=2;rounded=0;html=1;verticalLabelPosition=middle;verticalAlign=middle;shape=mxgraph.flowchart.';
		var s2 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;rounded=0;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.flowchart.';
		var s3 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;rounded=0;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=';
		var gn = 'mxgraph.flowchart';
		var dt = '';
		this.setCurrentSearchEntryLibrary('flowchart');
		
        /* URFU: somehow strokeWidth=2; in the <s> variable
           does exactly absolutely nothing!
           Why do I exist on this planet?
           UDPATE: nevermind, it worked...
        */
		this.addPaletteFunctions('flowchart', mxResources.get('flowchart'), (expand != null) ? expand : true, /* URFU */
		[
            /* URFU:
                Maybe create a PR: why don't the original code use mxResources.get() to retreive
                localized titles for blocks? Am I doing something wrong? It works perfect!
                NOTE: the localization files are now OUT OF SYNC with the upstream repo. That
                means they ARE NOT auto-generated anymore. Ignore those comments in them!
            */
			this.createVertexTemplateEntry(s + 'annotation_1;align=left;pointerEvents=1;strokeWidth=2;', w * 0.5, h, '', mxResources.get('fc_annotation'), null, null, this.getTagsForStencil(gn, 'annotation_1', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'annotation_2;align=left;labelPosition=right;pointerEvents=1;strokeWidth=2;', w * 0.5, h, '', mxResources.get('fc_annotation'), null, null, this.getTagsForStencil(gn, 'annotation_2', dt).join(' ')),
			this.createVertexTemplateEntry(s3 + 'card;whiteSpace=wrap;size=20;arcSize=12;strokeWidth=2;', w, h * 0.6, '', mxResources.get('fc_card'), null, null, this.getTagsForStencil(gn, 'card', dt).join(' ')),
			this.createVertexTemplateEntry('shape=parallelogram;html=1;strokeWidth=2;perimeter=parallelogramPerimeter;whiteSpace=wrap;rounded=0;arcSize=12;size=0.23;', w, h * 0.6, '', mxResources.get('fc_data'), null, null, this.getTagsForStencil(gn, 'data', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'decision;whiteSpace=wrap;strokeWidth=2;', w, h, '', mxResources.get('fc_decision'), null, null, this.getTagsForStencil(gn, 'decision', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'direct_data;whiteSpace=wrap;strokeWidth=2;', w, h * 0.6, '', mxResources.get('fc_directData'), null, null, this.getTagsForStencil(gn, 'direct_data', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'display;whiteSpace=wrap;strokeWidth=2;', w, h * 0.6, '', mxResources.get('fc_display'), null, null, this.getTagsForStencil(gn, 'display', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'document2;whiteSpace=wrap;size=0.25;strokeWidth=2;', w, h * 0.6, '', mxResources.get('fc_document'), null, null, this.getTagsForStencil(gn, 'document', dt).join(' ')),
			this.createVertexTemplateEntry('shape=internalStorage;whiteSpace=wrap;html=1;dx=15;dy=15;rounded=0;arcSize=8;strokeWidth=2;', w * 0.7, h * 0.7, '', mxResources.get('fc_internalStorage'), null, null, this.getTagsForStencil(gn, 'internal_storage', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'loop_limit;whiteSpace=wrap;strokeWidth=2;', w, h * 0.6, '', mxResources.get('fc_loopLimit'), null, null, this.getTagsForStencil(gn, 'loop_limit', dt).join(' ')),
			this.createVertexTemplateEntry('html=1;strokeWidth=2;shape=manualInput;whiteSpace=wrap;rounded=0;size=26;arcSize=11;', w, h * 0.6, '', mxResources.get('fc_manualInput'), null, null, this.getTagsForStencil(gn, 'manual_input', dt).join(' ')),
			this.createVertexTemplateEntry('verticalLabelPosition=middle;verticalAlign=middle;html=1;strokeWidth=2;shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;size=0.23;arcSize=10;flipV=1;labelPosition=center;align=center;', w, h * 0.6, '', mxResources.get('fc_manualOperation'), null, null, this.getTagsForStencil(gn, 'manual_operation', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'on-page_reference;strokeWidth=2;', w * 0.6, h * 0.6, '', mxResources.get('fc_reference'), null, null, this.getTagsForStencil(gn, 'on-page_reference', dt).join(' ')),
			this.createVertexTemplateEntry('shape=tape;whiteSpace=wrap;html=1;strokeWidth=2;size=0.19;strokeWidth=2;', w, h * 0.65, '', mxResources.get('fc_tape'), null, null, this.getTagsForStencil(gn, 'tape', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'parallel_mode;pointerEvents=1;strokeWidth=2;', w * 0.95, h * 0.4, '', mxResources.get('fc_parallelMode'), null, null, this.getTagsForStencil(gn, 'parallel_mode', dt).join(' ')),
			this.createVertexTemplateEntry(s3 + 'process;whiteSpace=wrap;rounded=0;size=0.14;strokeWidth=2;arcSize=6;', w, h * 0.6, '', mxResources.get('fc_predefinedProcess'), null, null, this.getTagsForStencil(gn, 'predefined_process', dt).join(' ')),
			this.createVertexTemplateEntry(s3 + 'hexagon;perimeter=hexagonPerimeter2;arcSize=6;strokeWidth=2;size=0.27;', w, h * 0.6, '', mxResources.get('fc_preparation'), null, null, this.getTagsForStencil(gn, 'preparation', dt).join(' ')),
			this.createVertexTemplateEntry('rounded=0;whiteSpace=wrap;html=1;absoluteArcSize=1;arcSize=14;strokeWidth=2;', w, h, '', mxResources.get('fc_process'), null, null, this.getTagsForStencil(gn, 'process', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'sequential_data;strokeWidth=2;whiteSpace=wrap;', w, h, '', mxResources.get('fc_sequentialData'), null, null, this.getTagsForStencil(gn, 'sequential_data', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'stored_data;strokeWidth=2;whiteSpace=wrap;', w, h * 0.6, '', mxResources.get('fc_storedData'), null, null, this.getTagsForStencil(gn, 'stored_data', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'terminator;strokeWidth=2;whiteSpace=wrap;', w, h * 0.6, '', mxResources.get('fc_terminator'), null, null, this.getTagsForStencil(gn, 'terminator', dt).join(' ')),
		]);
		
		this.setCurrentSearchEntryLibrary();
    };	
})();
