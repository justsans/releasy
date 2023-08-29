import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReleaseTemplatesComponent } from './release-templates.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ReleaseTemplatesComponent }
	])],
	exports: [RouterModule]
})
export class ReleaseTemplatesRoutingModule { }
