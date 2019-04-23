import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppStoreModule } from './app-store/app-store.module';
import { BASE_SERIVICES, CORE_SERIVICES } from './services';
import { CacheInterceptor } from './interceptors';
import { SharedModule } from './shared';
import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    SharedModule,
    AppStoreModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  exports: [SharedModule],
  bootstrap: [AppComponent],
  providers: [
    ...BASE_SERIVICES,
    ...CORE_SERIVICES,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ]
})
export class AppModule {}
