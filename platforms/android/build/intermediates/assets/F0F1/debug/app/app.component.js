"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var buttonModule = require("ui/button");
var runButton = new buttonModule.Button();
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.getWicketList = function () {
        this.router.navigateByUrl('/wicketList');
    };
    AppComponent.prototype.getRunList = function () {
        this.router.navigateByUrl('/runList');
    };
    AppComponent.prototype.ngOnInit = function () {
        var firebaseOptions = {
            persist: false
        };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFFckUsMENBQXVFO0FBRXZFLHdDQUE0QztBQUk1QyxJQUFJLFNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU8xQyxJQUFhLFlBQVk7SUFHdkIsc0JBQTRCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBR3pDLENBQUM7SUFHSixvQ0FBYSxHQUFiO1FBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVGLGlDQUFVLEdBQVY7UUFFSyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUYsK0JBQVEsR0FBUjtRQUVRLElBQUksZUFBZSxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUM7SUFNVixDQUFDO0lBQ0QsbUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7S0FFcEMsQ0FBQztxQ0FJb0MsZUFBTTtHQUgvQixZQUFZLENBOEJ4QjtBQTlCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxFdmVudEVtaXR0ZXIsT3V0cHV0LE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIsTmF2aWdhdGlvblN0YXJ0LE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IGJ1dHRvbk1vZHVsZSAgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuaW1wb3J0IHsgV2lja2V0TGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXdsaXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUnVuTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXJsaXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG52YXIgcnVuQnV0dG9uID0gbmV3IGJ1dHRvbk1vZHVsZS5CdXR0b24oKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyBcbiAgIHB1YmxpYyBjb250ZW50OiBzdHJpbmc7XG5cbiAgcHVibGljICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKVxuICAge1xuICAgICAgIFxuICAgfSBcblxuXG5nZXRXaWNrZXRMaXN0KClcbiB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3dpY2tldExpc3QnKTtcbiB9XG5cbmdldFJ1bkxpc3QoKVxuIHtcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3J1bkxpc3QnKTtcbiB9XG5cbm5nT25Jbml0KCkge1xuXG4gICAgICAgIGxldCBmaXJlYmFzZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwZXJzaXN0OiBmYWxzZVxuICAgICAgICB9O1xuICBcbiBcblxuXG5cbn1cbn1cblxuXG5cbiJdfQ==