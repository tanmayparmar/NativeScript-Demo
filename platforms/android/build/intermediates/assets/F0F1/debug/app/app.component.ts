import { Component,EventEmitter,Output,OnInit } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router,NavigationStart,NavigationEnd } from "@angular/router";
import { routes } from "./app.routing";
import buttonModule  = require("ui/button");
import { WicketListComponent } from "./components/mwlist.component";
import { RunListComponent } from "./components/mrlist.component";
import firebase = require("nativescript-plugin-firebase");
var runButton = new buttonModule.Button();

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",

})
export class AppComponent implements OnInit{ 
   public content: string;

  public  constructor(private router: Router)
   {
       
   } 


getWicketList()
 {
    this.router.navigateByUrl('/wicketList');
 }

getRunList()
 {
     this.router.navigateByUrl('/runList');
 }

ngOnInit() {

        let firebaseOptions = {
            persist: false
        };
  
 



}
}



