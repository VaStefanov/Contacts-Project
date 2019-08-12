import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About' , component: AboutComponent},
  { path: 'Contacts', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
