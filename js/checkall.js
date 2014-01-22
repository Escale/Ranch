/* ========================================================================
 * Ranch: checkall.js vX.X.X @TODO
 * URL DEMO @TODO
 * ========================================================================
 * Copyright 2014 Escale Digitale SARL.
 * Licensed under MIT (URL LICENCE @TODO)
 * ======================================================================== */


+function ($) {
	'use strict';

	// CHECKALL CLASS DEFINITION
	// ====================

	var CheckAll = function (element) {
		this.element = $(element);
		this.collection = this.element.attr("data-multicheck-toggle");
	}


	CheckAll.prototype.toggle = function() {
		$('input[type="checkbox"][data-multicheck="'+ this.collection +'"]').prop('checked',this.element.prop('checked'));
	}

	CheckAll.prototype.checkAll = function() {
		$('input[type="checkbox"][data-multicheck="'+ this.collection +'"]').prop('checked',true);
	}

	CheckAll.prototype.unCheckAll = function() {
		$('input[type="checkbox"][data-multicheck="'+ this.collection +'"]').prop('checked',false);
	}


	// CHECKALL PLUGIN DEFINITION
	// =====================

	var old = $.fn.checkAll

	$.fn.checkAll = function ( option ) {
		return this.each(function () {
			var $this = $(this)
			var data  = $this.data('bs.checkAll')

			if (!data) $this.data('bs.checkAll', (data = new CheckAll(this)))
			if (typeof option == 'string') data[option]()
		})
	}

	$.fn.checkAll.Constructor = CheckAll


	// CHECKALL NO CONFLICT
	// ===============

	$.fn.checkAll.noConflict = function () {
		$.fn.checkAll = old
		return this
	}


	// CHECKALL DATA-API
	// ============

	$("input[data-multicheck-toggle]").change(function() {
		$(this).checkAll('toggle');
	});


}(jQuery);