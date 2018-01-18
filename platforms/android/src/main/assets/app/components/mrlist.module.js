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
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJsaXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ybGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELG9EQUFxRTtBQUVyRSxtRUFBa0U7QUFDbEUsbUVBQXFFO0FBaUJyRSxJQUFhLFVBQVU7SUFBdkI7SUFBeUIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFVBQVU7SUFoQnRCLGVBQVEsQ0FBQztRQUVOLE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtRQUNILE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7U0FFeEI7UUFDRCxZQUFZLEVBQUU7WUFDWixtQ0FBZ0I7WUFDaEIsc0NBQW1CO1NBRXBCO0tBQ0YsQ0FBQztHQUNXLFVBQVUsQ0FBRztBQUFiLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgUnVuTGlzdENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21ybGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgV2lja2V0TGlzdENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL213bGlzdC5jb21wb25lbnRcIjtcclxuQE5nTW9kdWxlKHtcclxuICBcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgICAgXHJcbiAgICBSdW5MaXN0Q29tcG9uZW50LFxyXG4gICAgV2lja2V0TGlzdENvbXBvbmVudFxyXG4gICAgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdE1vZHVsZSB7fSJdfQ==