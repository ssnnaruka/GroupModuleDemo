import { NgModule } from '@angular/core';
import { UserObjToArrayPipe } from './user-obj-to-array/user-obj-to-array';
@NgModule({
	declarations: [UserObjToArrayPipe],
	imports: [],
	exports: [UserObjToArrayPipe]
})
export class PipesModule {}
