import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupPage } from './group';
import { HttpModule } from "@angular/http";
import {ReactiveFormsModule} from '@angular/forms';
import { ComponentsModule } from "./components/components.module";
import { DataProvider } from './providers/data/data';

@NgModule({
  declarations: [
    GroupPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GroupPage),
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    DataProvider
  ],
  exports : [
    
  ]
})
export class GroupPageModule {}
