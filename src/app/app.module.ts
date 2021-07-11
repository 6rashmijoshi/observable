import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitHubService } from './services/github.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,NgModule,FormsModule 
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
