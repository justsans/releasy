import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReleasesComponent } from './releases.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ReleasesComponent }
	])],
	exports: [RouterModule]
})
export class ReleasesRoutingModule { }
