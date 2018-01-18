"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var mrlist_component_1 = require("../components/mrlist.component");
var mwlist_component_1 = require("../components/mwlist.component");
var ListModule = (function () {
    function ListModule() {
    }
    return ListModule;
}());
ListModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
        ],
        declarations: [
            mrlist_component_1.RunListComponent,
            mwlist_component_1.WicketListComponent
        ]
    })
], ListModule);
exports.ListModule = ListModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJsaXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ybGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQXlDO0FBQ3pDLG9EQUFxRTtBQUVyRSxtRUFBa0U7QUFDbEUsbUVBQXFFO0FBYXJFLElBQWEsVUFBVTtJQUF2QjtJQUF5QixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsVUFBVTtJQVp0QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1NBRXhCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osbUNBQWdCO1lBQ2hCLHNDQUFtQjtTQUVwQjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUc7QUFBYixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bkxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tcmxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpY2tldExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9td2xpc3QuY29tcG9uZW50XCI7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyAgICBcclxuICAgIFJ1bkxpc3RDb21wb25lbnQsXHJcbiAgICBXaWNrZXRMaXN0Q29tcG9uZW50XHJcbiAgICBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0TW9kdWxlIHt9Il19