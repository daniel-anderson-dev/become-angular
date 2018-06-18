import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyheaderComponent } from './shared/myheader/myheader.component';
import { RandomWordService } from './shared/random-word.service';

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ RandomWordService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
