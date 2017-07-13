import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef, HostListener, Renderer } from '@angular/core';

import { AppComponent } from './app.component';
import { NgforExampleComponent } from './components/ngfor-example/ngfor-example.component';
import { GroupExampleComponent } from './components/group-example/group-example.component';
import { NgifExampleComponent } from './components/ngif-example/ngif-example.component';
import { NgswitchExampleComponent } from './components/ngswitch-example/ngswitch-example.component';
import { NgclassExampleComponent } from './components/ngclass-example/ngclass-example.component';
import { CardHoverDirective } from './directives/card-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgforExampleComponent,
    GroupExampleComponent,
    NgifExampleComponent,
    NgswitchExampleComponent,
    NgclassExampleComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
