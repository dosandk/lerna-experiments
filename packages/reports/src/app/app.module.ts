import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Shared lib
import { EagleControlModule } from '@eagle/ui-kit';
// import { EagleControlModule } from '../../../shared/lib_build/@eagle-ui-kit';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EagleControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
