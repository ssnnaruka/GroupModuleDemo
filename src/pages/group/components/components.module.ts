import { NgModule } from '@angular/core';
import { GroupListComponent } from './group-list/group-list';
import { GroupFooterComponent } from './group-footer/group-footer';
import { IonicModule } from 'ionic-angular/module';
@NgModule({
	declarations: [GroupListComponent, GroupFooterComponent],
	imports: [IonicModule],
	exports: [GroupListComponent, GroupFooterComponent]
})
export class ComponentsModule {}
