import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'releases', data: { breadcrumb: 'Releases' }, loadChildren: () => import('./releases/releases.module').then(m => m.ReleasesModule) },
        { path: 'release-templates', data: { breadcrumb: 'Release Templates' }, loadChildren: () => import('./release-templates/release-templates.module').then(m => m.ReleaseTemplatesModule) },
        { path: 'create-release-template', data: { breadcrumb: 'Create Release Template' }, loadChildren: () => import('./create-release-template/create-release-template.module').then(m => m.CreateReleaseTemplateModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ReleaseOrchestrationRoutingModule { }
