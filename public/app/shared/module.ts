import { NgModule }             from '@angular/core';

import { ContenteditableModel } from './contenteditable-model';
import { InputModelSelected }   from './input-model-selected';
import { FocusMe }              from './focus-me';

@NgModule({
  imports: [
  ],
  declarations: [
    ContenteditableModel,
    InputModelSelected,
    FocusMe
  ],
  exports: [
    ContenteditableModel,
    InputModelSelected,
    FocusMe
  ]
})

export class SharedModule {}
