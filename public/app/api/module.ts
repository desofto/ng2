import { NgModule }   from '@angular/core';
import { HttpModule } from '@angular/http';

import { PingApi }    from './ping';

@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    PingApi
  ]
})

export class ApiModule {}
