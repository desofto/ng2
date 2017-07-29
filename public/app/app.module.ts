import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { HomeComponent }    from './home.component';

import { SharedModule }     from './shared/module';
import { ApiModule }        from './api/module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
