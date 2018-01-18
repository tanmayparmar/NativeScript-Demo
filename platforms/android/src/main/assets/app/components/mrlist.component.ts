import { Component,OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import firebase = require("nativescript-plugin-firebase");
import { ActivatedRoute,Router } from "@angular/router";
import { FirebaseService } from "../services/firebase.service";
import { Players } from "../models/players";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "mr",
   templateUrl:"./mrlist.component.html",
   
})
export class RunListComponent implements OnInit{
   id: string;
   name : string;
   UID: string;
   public players$ : Observable<any>;



    public constructor(private routerExtensions:RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router)
    { 

    }

    
 ngOnInit(): void {
        this.players$ = <any>this.firebaseService.getBatsmanList();
    }

    
    }

