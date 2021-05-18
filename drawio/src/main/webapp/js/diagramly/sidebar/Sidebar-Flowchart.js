(function()
{
	Sidebar.prototype.addFlowchartPalette = function(expand) /* URFU */
	{
		var w = 100;
		var h = 100;
		var s = 'strokeWidth=2;html=1;shape=mxgraph.flowchart.';
		var s2 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;shape=mxgraph.flowchart.';
		var s3 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;shape=';
		var gn = 'mxgraph.flowchart';
		var dt = '';
		this.setCurrentSearchEntryLibrary('flowchart');
		
        /* URFU: somehow strokeWidth=2; in the <s> variable
           does exactly absolutely nothing!
           Why do I exist on this planet?
        */
		this.addPaletteFunctions('flowchart', mxResources.get('flowchart'), (expand != null) ? expand : true, /* URFU */
		[
			this.createVertexTemplateEntry(s + 'annotation_1;align=left;pointerEvents=1;strokeWidth=2;', w * 0.5, h, '', 'Annotation', null, null, this.getTagsForStencil(gn, 'annotation_1', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'annotation_2;align=left;labelPosition=right;pointerEvents=1;strokeWidth=2;', w * 0.5, h, '', 'Annotation', null, null, this.getTagsForStencil(gn, 'annotation_2', dt).join(' ')),
			this.createVertexTemplateEntry(s3 + 'card;whiteSpace=wrap;size=20;arcSize=12;strokeWidth=2;', w, h * 0.6, '', 'Card', null, null, this.getTagsForStencil(gn, 'card', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'collate;strokeWidth=2;', w, h, '', 'Collate', null, null, this.getTagsForStencil(gn, 'collate', dt).join(' ')),
			this.createVertexTemplateEntry('shape=parallelogram;html=1;strokeWidth=2;perimeter=parallelogramPerimeter;whiteSpace=wrap;rounded=0;arcSize=12;size=0.23;', w, h * 0.6, '', 'Data', null, null, this.getTagsForStencil(gn, 'data', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'database;whiteSpace=wrap;strokeWidth=2;', w * 0.6, h * 0.6, '', 'Database', null, null, this.getTagsForStencil(gn, 'database', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'decision;whiteSpace=wrap;strokeWidth=2;', w, h, '', 'Decision', null, null, this.getTagsForStencil(gn, 'decision', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'delay;whiteSpace=wrap;strokeWidth=2;', w, h * 0.6, '', 'Delay', null, null, this.getTagsForStencil(gn, 'delay', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'direct_data;whiteSpace=wrap;strokeWidth=2;', w, h * 0.6, '', 'Direct Data', null, null, this.getTagsForStencil(gn, 'direct_data', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'display;whiteSpace=wrap;strokeWidth=2;', w, h * 0.6, '', 'Display', null, null, this.getTagsForStencil(gn, 'display', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'document2;whiteSpace=wrap;size=0.25;strokeWidth=2;', w, h * 0.6, '', 'Document', null, null, this.getTagsForStencil(gn, 'document', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'extract_or_measurement;whiteSpace=wrap;strokeWidth=2;', w * 0.95, h * 0.6, '', 'Extract or Measurement', null, null, this.getTagsForStencil(gn, 'extract_or_measurement', dt).join(' ')),
			this.createVertexTemplateEntry('shape=internalStorage;whiteSpace=wrap;html=1;dx=15;dy=15;rounded=0;arcSize=8;strokeWidth=2;', w * 0.7, h * 0.7, '', 'Internal Storage', null, null, this.getTagsForStencil(gn, 'internal_storage', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'loop_limit;whiteSpace=wrap;strokeWidth=2;', w, h * 0.6, '', 'Loop Limit', null, null, this.getTagsForStencil(gn, 'loop_limit', dt).join(' ')),
			this.createVertexTemplateEntry('html=1;strokeWidth=2;shape=manualInput;whiteSpace=wrap;rounded=0;size=26;arcSize=11;', w, h * 0.6, '', 'Manual Input', null, null, this.getTagsForStencil(gn, 'manual_input', dt).join(' ')),
			this.createVertexTemplateEntry('verticalLabelPosition=middle;verticalAlign=middle;html=1;strokeWidth=2;shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;size=0.23;arcSize=10;flipV=1;labelPosition=center;align=center;', w, h * 0.6, '', 'Manual Operation', null, null, this.getTagsForStencil(gn, 'manual_operation', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'merge_or_storage;whiteSpace=wrap;strokeWidth=2;', w * 0.95, h * 0.6, '', 'Merge or Storage', null, null, this.getTagsForStencil(gn, 'merge_or_storage', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'multi-document;whiteSpace=wrap;strokeWidth=2;', w * 0.88, h * 0.6, '', 'Multi-Document', null, null, this.getTagsForStencil(gn, 'multi-document', dt).join(' ')),
			this.createVertexTemplateEntry(s3 + 'offPageConnector;rounded=0;size=0.5;strokeWidth=2;', w * 0.6, h * 0.6, '', 'Off-Page Reference', null, null, this.getTagsForStencil(gn, 'off-page_reference', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'on-page_reference;strokeWidth=2;', w * 0.6, h * 0.6, '', 'On-Page Reference', null, null, this.getTagsForStencil(gn, 'on-page_reference', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'summing_function;strokeWidth=2;', w * 0.7, h * 0.7, '', 'Or', null, null, this.getTagsForStencil(gn, 'summing_function', dt).join(' ')),
			this.createVertexTemplateEntry('shape=tape;whiteSpace=wrap;html=1;strokeWidth=2;size=0.19;strokeWidth=2;', w, h * 0.65, '', 'Tape', null, null, this.getTagsForStencil(gn, 'tape', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'parallel_mode;pointerEvents=1;strokeWidth=2;', w * 0.95, h * 0.4, '', 'Parallel Mode', null, null, this.getTagsForStencil(gn, 'parallel_mode', dt).join(' ')),
			this.createVertexTemplateEntry(s3 + 'process;whiteSpace=wrap;rounded=0;size=0.14;strokeWidth=2;arcSize=6;', w, h * 0.6, '', 'Predefined Process', null, null, this.getTagsForStencil(gn, 'predefined_process', dt).join(' ')),
			this.createVertexTemplateEntry(s3 + 'hexagon;perimeter=hexagonPerimeter2;arcSize=6;strokeWidth=2;size=0.27;', w, h * 0.6, '', 'Preparation', null, null, this.getTagsForStencil(gn, 'preparation', dt).join(' ')),
			this.createVertexTemplateEntry('rounded=0;whiteSpace=wrap;html=1;absoluteArcSize=1;arcSize=14;strokeWidth=2;', w, h, '', 'Process', null, null, this.getTagsForStencil(gn, 'process', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'sequential_data;strokeWidth=2;whiteSpace=wrap;', w, h, '', 'Sequential Data', null, null, this.getTagsForStencil(gn, 'sequential_data', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'sort;strokeWidth=2;', w, h, '', 'Sort', null, null, this.getTagsForStencil(gn, 'sort', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'start_1;strokeWidth=2;whiteSpace=wrap;', w, h * 0.6, '', 'Start', null, null, this.getTagsForStencil(gn, 'start_1', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'start_2;strokeWidth=2;whiteSpace=wrap;', w, h, '', 'Start', null, null, this.getTagsForStencil(gn, 'start_2', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'stored_data;strokeWidth=2;whiteSpace=wrap;', w, h * 0.6, '', 'Stored Data', null, null, this.getTagsForStencil(gn, 'stored_data', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'or;strokeWidth=2;', w * 0.7, h * 0.7, '', 'Summing Junction', null, null, this.getTagsForStencil(gn, 'or', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'terminator;strokeWidth=2;whiteSpace=wrap;', w, h * 0.6, '', 'Terminator', null, null, this.getTagsForStencil(gn, 'terminator', dt).join(' ')),
			this.createVertexTemplateEntry(mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;strokeWidth=2;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;notch=0;', w, h * 0.7, '', 'Transfer', null, null, this.getTagsForStencil(gn, 'transfer', dt).join(' '))
		]);
		
		this.setCurrentSearchEntryLibrary();
    };	
})();
