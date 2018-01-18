// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppModule } from "./app.module";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule, routes } from "./app.routing";
import { RunListComponent } from "./components/mrlist.component";
import { WicketListComponent } from "./components/mwlist.component";
import { AngularFireModule } from "angularfire2";

import firebase = require("nativescript-plugin-firebase");

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.

  persist: true,
 // storageBucket: "demoapl-68210.appspot.com",
}).then(
  (instance) => {
    console.log("firebase.init done");
  },
  (error) => {
    console.log("firebase.init error: " + error);
  }
);


@NgModule({
  declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
         ],
    providers: [AppComponentModule]
})

export class AppComponentModule
{

}
platformNativeScriptDynamic().bootstrapModule(AppModule);
