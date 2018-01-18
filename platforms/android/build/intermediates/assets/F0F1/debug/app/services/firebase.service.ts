import { Injectable, NgZone } from "@angular/core";
import { Players } from "../models/players";
import firebase = require("nativescript-plugin-firebase");
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/share';

@Injectable()
export class FirebaseService{
    private players : Players[];

    constructor(
        private ngZone: NgZone
    )
    {

    }
  //  items: BehaviorSubject<Array<Players>> = new BehaviorSubject([]);
    
   // private _allItems : Array<Players> = [];

getPlayersList(): Observable<any>{
    return new Observable((observer: any)=>
    {
        let path = 'playersList';
        let onValueEvent = (snapshot: any) => 
    {
        this.ngZone.run(()=>
        {
            let results = this.handleSnapshot(snapshot.value);
            console.log(JSON.stringify(results) + "hi")
            observer.next(results);
        });
    };
    firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();
}

handleSnapshot(data:any)
{
 //    this._allItems = [];
 this.players = [];
    if(data)
    {
        for (let id in data){
            //let result = (Object).assign({id:id},data[id]);
            var result:Players = data[id];
            result.id = id;
            this.players.push(result);
        }
        this.publishUpdates();
    }
   // return this._allItems;
   return this.players;
}

publishUpdates()
{
   // this._allItems.sort(function(a,b)
    this.players.sort(function(a,b)
    {
        if(a.date < b.date) return -1;
        if(a.date > b.date) return 1;
        return 0;
    })

//    this.items.next([...this._allItems]);
//this.players.next([...this.players]);
}
    handleErrors(error)
    {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    }
}