import {Component, OnInit}    from 'angular2/core'
import {RouteParams}          from 'angular2/router'

import {ContenteditableModel} from './shared/contenteditable-model'
import {InputModel}           from './shared/input-model'
import {FocusMe}              from './shared/focus-me'

@Component({
  selector: 'home',
  templateUrl: '/app/home.component.html',
  directives: [ContenteditableModel, InputModel, FocusMe]
})
export class HomeComponent implements OnInit {
  constructor(private _routeParams: RouteParams) {}

  message: String = 'Rails Ng2 Starter'

  ngOnInit() {
    this.message = 'test'
  }
}
