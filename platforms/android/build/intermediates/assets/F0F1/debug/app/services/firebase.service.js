"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/share");
var FirebaseService = (function () {
    function FirebaseService(ngZone) {
        this.ngZone = ngZone;
    }
    //  items: BehaviorSubject<Array<Players>> = new BehaviorSubject([]);
    // private _allItems : Array<Players> = [];
    FirebaseService.prototype.getPlayersList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'playersList';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results) + "hi");
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.handleSnapshot = function (data) {
        //    this._allItems = [];
        this.players = [];
        if (data) {
            for (var id in data) {
                //let result = (Object).assign({id:id},data[id]);
                var result = data[id];
                result.id = id;
                this.players.push(result);
            }
            this.publishUpdates();
        }
        // return this._allItems;
        return this.players;
    };
    FirebaseService.prototype.publishUpdates = function () {
        // this._allItems.sort(function(a,b)
        this.players.sort(function (a, b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
        });
        //    this.items.next([...this._allItems]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFFbkQsdURBQTBEO0FBQzFELDhDQUE2QztBQUU3QyxtQ0FBaUM7QUFHakMsSUFBYSxlQUFlO0lBR3hCLHlCQUNZLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBSTFCLENBQUM7SUFDSCxxRUFBcUU7SUFFcEUsMkNBQTJDO0lBRTlDLHdDQUFjLEdBQWQ7UUFBQSxpQkFlQztRQWRHLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQUMsVUFBQyxRQUFhO1lBRWhDLElBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQztZQUN6QixJQUFJLFlBQVksR0FBRyxVQUFDLFFBQWE7Z0JBRWpDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUVaLElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7b0JBQzNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxNQUFJLElBQU0sQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxJQUFRO1FBRXRCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUNSLENBQUM7WUFDRyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNqQixpREFBaUQ7Z0JBQ2pELElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBQ0YseUJBQXlCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBRUcsb0NBQW9DO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUM7WUFFMUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUE7UUFFTiwyQ0FBMkM7UUFDM0MsdUNBQXVDO0lBQ3ZDLENBQUM7SUFDRyxzQ0FBWSxHQUFaLFVBQWEsS0FBSztRQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDO0FBbEVZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FLVyxhQUFNO0dBSmpCLGVBQWUsQ0FrRTNCO0FBbEVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVycyB9IGZyb20gXCIuLi9tb2RlbHMvcGxheWVyc1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNle1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJzIDogUGxheWVyc1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcclxuICAgIClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbiAgLy8gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8UGxheWVycz4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgICBcclxuICAgLy8gcHJpdmF0ZSBfYWxsSXRlbXMgOiBBcnJheTxQbGF5ZXJzPiA9IFtdO1xyXG5cclxuZ2V0UGxheWVyc0xpc3QoKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KT0+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBhdGggPSAncGxheWVyc0xpc3QnO1xyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4gXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpICsgXCJoaVwiKVxyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgfSkuc2hhcmUoKTtcclxufVxyXG5cclxuaGFuZGxlU25hcHNob3QoZGF0YTphbnkpXHJcbntcclxuIC8vICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiB0aGlzLnBsYXllcnMgPSBbXTtcclxuICAgIGlmKGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSl7XHJcbiAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IChPYmplY3QpLmFzc2lnbih7aWQ6aWR9LGRhdGFbaWRdKTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdDpQbGF5ZXJzID0gZGF0YVtpZF07XHJcbiAgICAgICAgICAgIHJlc3VsdC5pZCA9IGlkO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICB9XHJcbiAgIC8vIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuICAgcmV0dXJuIHRoaXMucGxheWVycztcclxufVxyXG5cclxucHVibGlzaFVwZGF0ZXMoKVxyXG57XHJcbiAgIC8vIHRoaXMuX2FsbEl0ZW1zLnNvcnQoZnVuY3Rpb24oYSxiKVxyXG4gICAgdGhpcy5wbGF5ZXJzLnNvcnQoZnVuY3Rpb24oYSxiKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGEuZGF0ZSA8IGIuZGF0ZSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmKGEuZGF0ZSA+IGIuZGF0ZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KVxyXG5cclxuLy8gICAgdGhpcy5pdGVtcy5uZXh0KFsuLi50aGlzLl9hbGxJdGVtc10pO1xyXG4vL3RoaXMucGxheWVycy5uZXh0KFsuLi50aGlzLnBsYXllcnNdKTtcclxufVxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59Il19