"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../services/firebase.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var WicketListComponent = (function () {
    function WicketListComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    WicketListComponent.prototype.ngOnInit = function () {
        this.players$ = this.firebaseService.getBowlerList();
    };
    return WicketListComponent;
}());
WicketListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "mw",
        templateUrl: "./mwlist.component.html",
    }),
    __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
        firebase_service_1.FirebaseService,
        router_1.Router])
], WicketListComponent);
exports.WicketListComponent = WicketListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXdsaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm13bGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFJakQsMENBQXdEO0FBQ3hELGlFQUErRDtBQUUvRCxtRkFBaUY7QUFRakYsSUFBYSxtQkFBbUI7SUFTNUIsNkJBQTJCLGdCQUFpQyxFQUNwRCxlQUFnQyxFQUNoQyxNQUFjO1FBRksscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNwRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUd0QixDQUFDO0lBR0osc0NBQVEsR0FBUjtRQUNPLElBQUksQ0FBQyxRQUFRLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsMEJBQUM7QUFBRCxDQUFDLEFBcEJMLElBb0JLO0FBcEJRLG1CQUFtQjtJQUwvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxJQUFJO1FBQ2YsV0FBVyxFQUFDLHlCQUF5QjtLQUN2QyxDQUFDO3FDQVU4QyxvQ0FBZ0I7UUFDbkMsa0NBQWU7UUFDeEIsZUFBTTtHQVhiLG1CQUFtQixDQW9CM0I7QUFwQlEsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2UsIEZpcmViYXNlTGlzdE9ic2VydmFibGUgfSBmcm9tIFwiYW5ndWxhcmZpcmUyL2RhdGFiYXNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSxSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYXllcnNcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJtd1wiLFxyXG4gICB0ZW1wbGF0ZVVybDpcIi4vbXdsaXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWNrZXRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICBuYW1lIDogc3RyaW5nO1xyXG4gICBVSUQ6IHN0cmluZztcclxuICAgcHVibGljIHBsYXllcnMkIDogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpXHJcbiAgICB7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheWVycyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldEJvd2xlckxpc3QoKTtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiJdfQ==