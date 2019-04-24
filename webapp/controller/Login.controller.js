sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Aklny.Aklny.controller.Login", {
		onInit: function () {
			var employeesSelect = this.getView().byId("employees");
			
			$.get("/Users", function(response, status){
					var jsonArray =  JSON.parse(response);
				  	var JsonModel = new sap.ui.model.json.JSONModel(jsonArray.d);
				  	employeesSelect.setModel(JsonModel, "model");
				
			});
			
			
		},
		
		onLoginPressed: function() {
			var text = this.getView().byId("result");
			// text.setText("logging");
			var employeesSelect = this.getView().byId("employees");
			var username = employeesSelect.getSelectedItem().getProperty("key");
			var password = this.getView().byId("passwordInput").getValue();
			var data = {
				username: username,
				password: password
			};
			
            var router = this.getRouter();
			$.post("/Users", data).done(function(response){
				text.setText("success");
				 var jsonArray =  JSON.parse(response);
				 jQuery.sap.storage(jQuery.sap.storage.Type.local).put("employeeId", jsonArray.user_id);
				 if	(jsonArray.status == "can_register")
					router.navTo("DishForm");
				else
				router.navTo("Result");
				
			})
			.fail(function(response){
				text.setText("Wrong credintials");
			});
		},
		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		},
	});
});