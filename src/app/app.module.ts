import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    PipesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
