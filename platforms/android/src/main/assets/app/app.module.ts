import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes } from "./app.routing";
import { FirebaseService } from "./services/firebase.service";

import { ListModule } from "./components/mrlist.module";
@NgModule({
     schemas: [
        NO_ERRORS_SCHEMA
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
         ListModule
    ],
    declarations: [
        AppComponent,
       
    ],
    providers: [
        FirebaseService
    ]
})
export class AppModule { }
