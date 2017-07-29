import { Component, OnInit }    from '@angular/core';

import { PingApi }              from './api/ping';

@Component({
  selector: 'my-app',
  templateUrl: '/app/home.component.html',
  viewProviders: [
    PingApi
  ],
  styles: [
    'button.active { background-color: blue; }'
  ]
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

  setState(state: String): void {
    this.state = state;
  }

  states: Array<string> = ['open', 'closed', 'waiting'];

  state: String = 'closed'
}
