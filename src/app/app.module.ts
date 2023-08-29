import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FontAwesomeModule,
        BrowserAnimationsModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
