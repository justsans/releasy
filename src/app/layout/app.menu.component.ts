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
                icon: 'fa-solid fa-rectangle-list',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'fa-solid fa-rectangle-list',
                        routerLink: ['/ro/release-templates']
                    },
                    {
                        label: 'Create New Template',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/ro/create-release-template']
                    }
                ]
            },
            {
                label: 'Deployment Tools',
                icon: 'fa-solid fa-timeline',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'fa-solid fa-rectangle-list',
                        routerLink: ['/ro/release-templates']
                    },
                    {
                        label: 'Create New',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/ro/create-release-template']
                    }
                ]
            },
            {
                label: 'Application Platforms',
                icon: 'fa-brands fa-product-hunt',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'fa-solid fa-rectangle-list',
                        routerLink: ['/ro/release-templates']
                    },
                    {
                        label: 'Create New',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/ro/create-release-template']
                    }
                ]
            },
            {
                label: 'Components',
                icon: 'fa-brands fa-windows',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'fa-solid fa-rectangle-list',
                        routerLink: ['/ro/release-templates']
                    },
                    {
                        label: 'Create New',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/ro/create-release-template']
                    }
                ]
            },
            {
                label: 'Engineering Maturity',
                icon: 'fa-solid fa-scale-balanced',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'fa-solid fa-rectangle-list',
                        routerLink: ['/ro/releases']
                    }
                ]
            },
            {
                label: 'Dashboards',
                icon: 'fa-solid fa-timeline',
                items: [
                    {
                        label: 'Release Dashboard',
                        icon: 'fa-solid fa-guage',
                        routerLink: ['/ro/release-templates']
                    },
                    {
                        label: 'Engineering Maturity Dashboard',
                        icon: 'fa-solid fa-rectangle-list',
                        routerLink: ['/ro/create-release-template']
                    }
                ]
            },
            {
                label: 'Org Rules',
                icon: 'fa-solid fa-gavel',
                items: [
                    {
                        label: 'BU Level Settings',
                        icon: 'fa-solid fa-rectangle-list',
                        routerLink: ['/ro/releases']
                    }
                ]
            },
            {
                label: 'Admin',
                icon: 'fa-solid fa-screwdriver-wrench',
                items: [
                    {
                        label: 'SSPD Settings',
                        icon: 'fa-solid fa-screwdriver-wrench',
                        routerLink: ['/ro/releases']
                    }
                ]
            },
        ];
    }
}
