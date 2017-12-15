import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListConfirmPage } from './user-list-confirm';
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    UserListConfirmPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(UserListConfirmPage),
  ],
})
export class UserListConfirmPageModule {}
