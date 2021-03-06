import { Component, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Multiselect, FilterPipe } from './components/multiselect/multiselect.component';
import { Tristate } from './components/tristate/tristate.component';
import { CustomTable, CustomTableOptions, CustomTableConfig, CustomTableColumnDefinition } from './components/customTable/customTable.component';
import { Filter, CustomFilterPipe } from './components/filter/filter.component';
import { EqualPipe } from './pipes/equal-pipe';
import { GroupByPipe } from './pipes/group-by.pipe';
import { Pager } from './components/pager/pager.component';
import { AppComponent } from './components/app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './app-error.handler';
import { Route1Component } from './components/route1/route1.component';
import { Route2Component } from './components/route2/route2.component';
import { Route3Component } from './components/route3/route3.component';
import { Route4Component } from './components/route4/route4.component';
import { NavigationService } from './services/navigation.service';
import { ApiService } from './services/api.service';
import { DialogService, DialogComponent } from './services/dialog.service';
import { NotificationService } from './services/notification.service';
import { DataService } from './services/data.service';
import { LoremIpsumService } from './services/loremIpsum.service';
import { SpinService, SpinInterceptor } from './services/spin.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestOptions, XHRBackend } from '@angular/http';
import { ToastyModule } from 'ng2-toasty';

import 'jquery';
import 'bootstrap';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule, HttpClientModule, NgbModule.forRoot(), AppRoutingModule, ToastyModule.forRoot()],
    declarations: [AppComponent, Route1Component, Route2Component, Route3Component, Route4Component, DialogComponent, Multiselect, Tristate, CustomTable, Pager, Filter, CustomFilterPipe, FilterPipe, EqualPipe, GroupByPipe ],
    providers: [
        EqualPipe,
        { provide: APP_BASE_HREF, useValue: document.location.pathname },
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        { provide: ErrorHandler, useClass: AppErrorHandler },
        { provide: HTTP_INTERCEPTORS, useClass: SpinInterceptor, multi: true },
        //{
        //    provide: HttpClient,
        //    useFactory: httpFactory,
        //    deps: [XHRBackend, RequestOptions, SpinService]
        //},
        NavigationService, NotificationService, DialogService, ApiService, DataService, LoremIpsumService, SpinService],
    entryComponents: [DialogComponent],
    bootstrap: [AppComponent],
})

export class AppModule {
}

//export function httpFactory(backend: XHRBackend, options: RequestOptions, spinSvc: SpinService) {
//    return new HttpService(backend, options, spinSvc);
//}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}