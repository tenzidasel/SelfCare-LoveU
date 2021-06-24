import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhysicalComponent} from '../app/components/pages/physical/physical.component'
import {HomeComponent} from '../app/components/pages/home/home.component'
import {EmotionalComponent} from '../app/components/pages/emotional/emotional.component'
import {AboutusComponent} from '../app/components/pages/aboutus/aboutus.component'

const routes: Routes = [{path:'Physical',component:PhysicalComponent}, {path: '', component:HomeComponent}, {path: 'Emotional', component:EmotionalComponent}, 
{path: 'AboutUs', component:AboutusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
