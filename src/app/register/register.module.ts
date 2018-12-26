import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { registerRoutes } from './register.routes';
import { RegisterWrapperComponent } from './register-wrapper/register-wrapper.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterWrapperComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(registerRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class RegisterModule { }
