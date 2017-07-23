import {Directive, ElementRef, Input, Output, EventEmitter, OnChanges} from "angular2/core"
import {isPropertyUpdated} from "angular2/src/common/forms/directives/shared"

@Directive({
  selector: '[contenteditableModel]',
  host: {
    '(blur)': 'onEdit()',
    '(keyup)': 'onEdit()'
  }
})

export class ContenteditableModel implements OnChanges {
  @Input('contenteditableModel') model: any
  @Output('contenteditableModelChange') update = new EventEmitter()

  private lastViewModel: any

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes) {
    if( isPropertyUpdated(changes, this.lastViewModel) ) {
      this.lastViewModel = this.model
      this.refreshView()
    }
  }

  onEdit() {
    var value = this.elementRef.nativeElement.innerText
    this.lastViewModel = value
    this.update.emit(value)
  }

  private refreshView() {
    this.elementRef.nativeElement.textContent = this.model
  }
}
