import { Component, OnInit }    from 'angular2/core';
import { RouteParams }          from 'angular2/router';

import { ContenteditableModel } from './shared/contenteditable-model';
import { InputModel }           from './shared/input-model';
import { FocusMe }              from './shared/focus-me';

import { PingApi }              from './api/ping';

@Component({
  templateUrl: '/app/home.component.html',
  directives: [ContenteditableModel, InputModel, FocusMe],
  viewProviders: [PingApi],
})

export class HomeComponent implements OnInit {
  constructor(
    private ping: PingApi
  ) {}

  message: String = 'Rails Ng2 Starter';

  ngOnInit() {
    this.message = 'test';

    this.ping.run().subscribe(data => {
      this.message = data.ping;
    });
  }
}
