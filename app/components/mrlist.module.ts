import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { RunListComponent } from "../components/mrlist.component";
import { WicketListComponent } from "../components/mwlist.component";
@NgModule({
  
    schemas: [
        NO_ERRORS_SCHEMA
    ],
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