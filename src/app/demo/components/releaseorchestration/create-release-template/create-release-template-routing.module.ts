import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateReleaseTemplateComponent } from './create-release-template.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CreateReleaseTemplateComponent }
	])],
	exports: [RouterModule]
})
export class CreateReleaseTemplateRoutingModule { }
