"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var app_module_1 = require("./app.module");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    persist: true,
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var AppComponentModule = AppComponentModule_1 = (function () {
    function AppComponentModule() {
    }
    return AppComponentModule;
}());
AppComponentModule = AppComponentModule_1 = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
        ],
        providers: [AppComponentModule_1]
    })
], AppComponentModule);
exports.AppComponentModule = AppComponentModule;
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
var AppComponentModule_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBQzVFLHNDQUF5QztBQUN6QywyQ0FBeUM7QUFDekMsZ0ZBQThFO0FBQzlFLGlEQUErQztBQUMvQyxzREFBdUU7QUFDdkUsNkNBQXlEO0FBS3pELHVEQUEwRDtBQUUxRCxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ1osa0ZBQWtGO0lBQ2xGLDZCQUE2QjtJQUU3QixPQUFPLEVBQUUsSUFBSTtDQUVkLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQyxRQUFRO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsRUFDRCxVQUFDLEtBQUs7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDRixDQUFDO0FBY0YsSUFBYSxrQkFBa0I7SUFBL0I7SUFHQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLGtCQUFrQjtJQVg5QixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQzFCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN0QztRQUNOLFNBQVMsRUFBRSxDQUFDLG9CQUFrQixDQUFDO0tBQ2xDLENBQUM7R0FFVyxrQkFBa0IsQ0FHOUI7QUFIWSxnREFBa0I7QUFJL0Isc0NBQTJCLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgcm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IFJ1bkxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21ybGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdpY2tldExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL213bGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXJmaXJlMlwiO1xuXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuZmlyZWJhc2UuaW5pdCh7XG4gIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cblxuICBwZXJzaXN0OiB0cnVlLFxuIC8vIHN0b3JhZ2VCdWNrZXQ6IFwiZGVtb2FwbC02ODIxMC5hcHBzcG90LmNvbVwiLFxufSkudGhlbihcbiAgKGluc3RhbmNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gIH0sXG4gIChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gIH1cbik7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gICAgICAgICBdLFxuICAgIHByb3ZpZGVyczogW0FwcENvbXBvbmVudE1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnRNb2R1bGVcbntcblxufVxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=