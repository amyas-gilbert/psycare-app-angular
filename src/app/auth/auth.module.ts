import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  exports: [
    AuthComponent,
    SharedModule,
    FormsModule
  ]
})
export class AuthModule {}
