import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { RunListComponent } from "../components/mrlist.component";
import { WicketListComponent } from "../components/mwlist.component";
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    
  ],
  declarations: [    
    RunListComponent,
    WicketListComponent
    
  ]
})
export class ListModule {}