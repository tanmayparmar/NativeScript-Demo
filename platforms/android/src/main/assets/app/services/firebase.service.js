"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/share");
var FirebaseService = (function () {
    //   private players : Players[];
    function FirebaseService(ngZone) {
        this.ngZone = ngZone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
    }
    FirebaseService.prototype.getBatsmanList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'batsmanList';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getBowlerList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'bowlerList';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.handleSnapshot = function (data) {
        this._allItems = [];
        // this.players = [];
        if (data) {
            for (var name_1 in data) {
                //   let result = (<any>Object).assign({id:name},data[name]);
                var result = data[name_1];
                //  result.id = id;
                this._allItems.push(result);
            }
            this.publishUpdates();
        }
        return this._allItems;
        // return this.players;
    };
    FirebaseService.prototype.publishUpdates = function () {
        this._allItems.sort(function (a, b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
        });
        this.items.next(this._allItems.slice());
        //this.players.next([...this.players]);
    };
    FirebaseService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFFbkQsdURBQTBEO0FBQzFELDhDQUE2QztBQUM3Qyx3REFBdUQ7QUFDdkQsbUNBQWlDO0FBR2pDLElBQWEsZUFBZTtJQUMzQixpQ0FBaUM7SUFFOUIseUJBQ1ksTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFHMUIsVUFBSyxHQUFvQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekQsY0FBUyxHQUFvQixFQUFFLENBQUM7SUFIbkMsQ0FBQztJQUtWLHdDQUFjLEdBQWQ7UUFBQSxpQkFnQkM7UUFmRyxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLFVBQUMsUUFBYTtZQUVoQyxJQUFJLElBQUksR0FBRyxhQUFhLENBQUM7WUFFekIsSUFBSSxZQUFZLEdBQUcsVUFBQyxRQUFhO2dCQUVqQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFFWixJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUE7b0JBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxNQUFJLElBQU0sQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELHVDQUFhLEdBQWI7UUFBQSxpQkFnQkM7UUFmRyxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLFVBQUMsUUFBYTtZQUVoQyxJQUFJLElBQUksR0FBRyxZQUFZLENBQUM7WUFFeEIsSUFBSSxZQUFZLEdBQUcsVUFBQyxRQUFhO2dCQUVqQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFFWixJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUE7b0JBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxNQUFJLElBQU0sQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUdELHdDQUFjLEdBQWQsVUFBZSxJQUFRO1FBRWxCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHFCQUFxQjtRQUNqQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FDUixDQUFDO1lBQ0csR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFJLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDdEIsNkRBQTZEO2dCQUMxRCxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBSSxDQUFDLENBQUM7Z0JBQ2xDLG1CQUFtQjtnQkFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsdUJBQXVCO0lBQ3pCLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQztZQUc1QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQTtRQUVKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFLLElBQUksQ0FBQyxTQUFTLFNBQUUsQ0FBQztRQUN2Qyx1Q0FBdUM7SUFDdkMsQ0FBQztJQUNHLHNDQUFZLEdBQVosVUFBYSxLQUFLO1FBRWQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFJTCxzQkFBQztBQUFELENBQUMsQUF0RkQsSUFzRkM7QUF0RlksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUtXLGFBQU07R0FKakIsZUFBZSxDQXNGM0I7QUF0RlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2V7XHJcbiAvLyAgIHByaXZhdGUgcGxheWVycyA6IFBsYXllcnNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXHJcbiAgICApXHJcbiAgICB7ICAgIH1cclxuICAgIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8UGxheWVycz4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2FsbEl0ZW1zIDogQXJyYXk8UGxheWVycz4gPSBbXTtcclxuXHJcbmdldEJhdHNtYW5MaXN0KCk6IE9ic2VydmFibGU8YW55PntcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSk9PlxyXG4gICAge1xyXG4gICAgICAgIGxldCBwYXRoID0gJ2JhdHNtYW5MaXN0JztcclxuXHJcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiBcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykgKVxyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgfSkuc2hhcmUoKTtcclxufVxyXG5nZXRCb3dsZXJMaXN0KCk6IE9ic2VydmFibGU8YW55PntcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSk9PlxyXG4gICAge1xyXG4gICAgICAgIGxldCBwYXRoID0gJ2Jvd2xlckxpc3QnO1xyXG5cclxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHRzKSApXHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpO1xyXG59XHJcblxyXG5cclxuaGFuZGxlU25hcHNob3QoZGF0YTphbnkpXHJcbntcclxuICAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4vLyB0aGlzLnBsYXllcnMgPSBbXTtcclxuICAgIGlmKGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBkYXRhKXtcclxuICAgICAgICAgLy8gICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOm5hbWV9LGRhdGFbbmFtZV0pO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0OlBsYXllcnMgPSBkYXRhW25hbWVdO1xyXG4gICAgICAgICAgLy8gIHJlc3VsdC5pZCA9IGlkO1xyXG4gICAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuICAvLyByZXR1cm4gdGhpcy5wbGF5ZXJzO1xyXG59XHJcblxyXG5wdWJsaXNoVXBkYXRlcygpXHJcbntcclxuICAgIHRoaXMuX2FsbEl0ZW1zLnNvcnQoZnVuY3Rpb24oYSxiKVxyXG4gIC8vICB0aGlzLnBsYXllcnMuc29ydChmdW5jdGlvbihhLGIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYoYS5kYXRlID4gYi5kYXRlKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0pXHJcblxyXG4gIHRoaXMuaXRlbXMubmV4dChbLi4udGhpcy5fYWxsSXRlbXNdKTtcclxuLy90aGlzLnBsYXllcnMubmV4dChbLi4udGhpcy5wbGF5ZXJzXSk7XHJcbn1cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcilcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbn0iXX0=