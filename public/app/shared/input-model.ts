import {Component, Input, Output, EventEmitter} from "angular2/core"
import {ContenteditableModel} from './contenteditable-model'

@Component({
  selector: 'input-model',
  template: '<div contenteditable="true" (focus)="selectAllContent($event)" [contenteditableModel]="model" (contenteditableModelChange)="onEdit($event)"></div>',
  directives: [ContenteditableModel]
})

export class InputModel {
  @Input('model') model: any
  @Output('modelChange') update = new EventEmitter()

  onEdit(value) {
    this.update.emit(value)
  }

  selectAllContent($event) {
    setTimeout( () => document.execCommand('selectAll', false, null), 0 )
  }
}
