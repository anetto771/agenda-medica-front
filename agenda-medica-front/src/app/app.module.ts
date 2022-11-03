import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './shared/pages/pages.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { UtilsModule } from './utils/utils.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    ToastrModule.forRoot({
      timeOut:4000,
      progressBar: true,
      closeButton: true
    }),
    HttpClientModule,
    JwtModule,
    UtilsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
