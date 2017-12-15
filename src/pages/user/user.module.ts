import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import { HttpModule } from "@angular/http";

import { ComponentsModule } from "./components/components.module";
import { PipesModule } from "./pipes/pipes.module";
import { UserDataProvider } from './providers/data/data';


@NgModule({
  declarations: [
    UserPage
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(UserPage),
    HttpModule
  ],
  providers: [
    UserDataProvider
  ]
})
export class UserPageModule {}
