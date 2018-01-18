import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RunListComponent } from "./components/mrlist.component";
import { WicketListComponent} from "./components/mwlist.component";

export const routes: Routes = [
   
  // {path:"",redirectTo:"runList",pathMatch:"full"},
  // {path:"home",component: AppComponent},
    { path: "runList", component: RunListComponent},
    { path: "wicketList", component: WicketListComponent}
   ]
     

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})


export class AppRoutingModule { }