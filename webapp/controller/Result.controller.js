sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Aklny.Aklny.controller.Result", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Aklny.Aklny.view.Result
		 */
		onInit: function () {
			var resultText = this.getView().byId("resultText");
			var resultImage = this.getView().byId("resultImage");
			$.get("/Result" + "?employee_id=" 
				+ jQuery.sap.storage(jQuery.sap.storage.Type.local)
			.get("employeeId"), function(response, status){
					var jsonRespond =  JSON.parse(response);
					// TODO 
					// if nothing was chosen
				  	resultText.setText(jsonRespond.description);
				  	resultImage.setSrc(jsonRespond.imageUrl);
			});
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Aklny.Aklny.view.Result
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Aklny.Aklny.view.Result
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Aklny.Aklny.view.Result
		 */
		//	onExit: function() {
		//
		//	}

	});

});