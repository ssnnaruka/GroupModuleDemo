import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list';
import { IonicModule } from 'ionic-angular/module';
@NgModule({
	declarations: [UserListComponent],
	imports: [IonicModule],
	exports: [UserListComponent]
})
export class ComponentsModule {}
