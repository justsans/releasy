import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Releases',
                icon: 'fa-solid fa-rocket',
                items: [
                    {
                        label: 'Release Dashboard',
                        icon: 'fa-solid fa-rectangle-list',
                        routerLink: ['/ro/releases']
                    }
                ]
            },
            {
                label: 'Release Templates',
                icon: 'fa-solid fa-timeline',
                items: [
                    {
                        label: 'Template Dashboard',
                        icon: 'fa-solid fa-rectangle-list',
                        routerLink: ['/ro/release-templates']
                    },
                    {
                        label: 'Create New Template',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/ro/create-release-template']
                    },
                    {
                        label: 'New Template',
                        icon: 'pi pi-fw pi-plus-',
                        routerLink: ['/ro/release-template-builder']
                    }
                ]
            },
        ];
    }
}
