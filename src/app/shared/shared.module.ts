import { NgModule } from '@angular/core';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES]
})
export class SharedModule {}
