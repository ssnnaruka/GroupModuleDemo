import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateGroupPage } from './create-group';
import { HttpModule } from "@angular/http";
import { DataProvider } from '../../providers/data/data';

@NgModule({
  declarations: [
    CreateGroupPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(CreateGroupPage),
  ],
  providers: [
    DataProvider
  ],
})
export class CreateGroupPageModule {}
