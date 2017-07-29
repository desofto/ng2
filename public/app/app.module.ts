import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { HomeComponent }    from './home.component';

import { SharedModule }     from './shared/module';
import { ApiModule }        from './api/module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    ApiModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})

export class AppModule {}
