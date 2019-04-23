import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared';
import { HOME_COMPONENTS } from './components';
import { ROUTES } from './home.rounting';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ...HOME_COMPONENTS],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  bootstrap: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule {}
