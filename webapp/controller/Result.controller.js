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
				  	resultText.setText(jsonRespond.description);
				  	resultImage.setSrc(jsonRespond.imageUrl);
			});
		},

	});

});