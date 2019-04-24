sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Aklny.Aklny.controller.DishForm", {

	onInit: function () {
			var dishGroup = this.getView().byId("dish_group");
			var locationGroup = this.getView().byId("location_group");
			$.get("/DishRegistration", function(response, status){
					var jsonArray =  JSON.parse(response);
				  	var JsonModel = new sap.ui.model.json.JSONModel(jsonArray);
				  	dishGroup.setModel(JsonModel, "model");
				  	locationGroup.setModel(JsonModel, "model");
				
			});
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ecs.demo.Demo.view.dish_form
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ecs.demo.Demo.view.dish_form
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ecs.demo.Demo.view.dish_form
		 */
		//	onExit: function() {
		//
		//	}
			onSubmitPressed: function() {
				var text = this.getView().byId("text0");
				// text.setText("logging");
				var chosenDish = this.getView().byId("dish_group").getSelectedItem().getProperty("key");
				var chosenLocation = this.getView().byId("dish_group").getSelectedItem().getProperty("key");
				var data = {
					dish_id: chosenDish,
					location_id: chosenLocation,
					employee_id: jQuery.sap.storage(jQuery.sap.storage.Type.local).get("employeeId"),
				};
				
	            var router = this.getRouter();
				$.post("/DishRegistration", data).done(function(response){
					 router.navTo("Result");
				})
				.fail(function(response){
					//TODO
					// display error 
				});
		},
			getRouter: function() {
				return this.getOwnerComponent().getRouter();
		},

	});

});