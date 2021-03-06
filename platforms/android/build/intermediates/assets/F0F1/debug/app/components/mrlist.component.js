"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../services/firebase.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var RunListComponent = (function () {
    function RunListComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    RunListComponent.prototype.ngOnInit = function () {
        this.players$ = this.firebaseService.getPlayersList();
    };
    return RunListComponent;
}());
RunListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "mr",
        templateUrl: "./mrlist.component.html",
    }),
    __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
        firebase_service_1.FirebaseService,
        router_1.Router])
], RunListComponent);
exports.RunListComponent = RunListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJsaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ybGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFJakQsMENBQXdEO0FBQ3hELGlFQUErRDtBQUUvRCxtRkFBaUY7QUFTakYsSUFBYSxnQkFBZ0I7SUFRekIsMEJBQTJCLGdCQUFpQyxFQUNwRCxlQUFnQyxFQUNoQyxNQUFjO1FBRksscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNwRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUd0QixDQUFDO0lBR0osbUNBQVEsR0FBUjtRQUNPLElBQUksQ0FBQyxRQUFRLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsdUJBQUM7QUFBRCxDQUFDLEFBbkJMLElBbUJLO0FBbkJRLGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxJQUFJO1FBQ2YsV0FBVyxFQUFDLHlCQUF5QjtLQUV2QyxDQUFDO3FDQVM4QyxvQ0FBZ0I7UUFDbkMsa0NBQWU7UUFDeEIsZUFBTTtHQVZiLGdCQUFnQixDQW1CeEI7QUFuQlEsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2UsIEZpcmViYXNlTGlzdE9ic2VydmFibGUgfSBmcm9tIFwiYW5ndWxhcmZpcmUyL2RhdGFiYXNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSxSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYXllcnNcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJtclwiLFxyXG4gICB0ZW1wbGF0ZVVybDpcIi4vbXJsaXN0LmNvbXBvbmVudC5odG1sXCIsXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgUnVuTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgaWQ6IHN0cmluZztcclxuICAgbmFtZSA6IHN0cmluZztcclxuICAgVUlEOiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBwbGF5ZXJzJCA6IE9ic2VydmFibGU8YW55PjtcclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKVxyXG4gICAgeyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllcnMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRQbGF5ZXJzTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuIl19