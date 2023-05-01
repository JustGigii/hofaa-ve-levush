import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './content/home-page/home-page.component';
import { InstructionComponent } from './content/instruction/instruction.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
