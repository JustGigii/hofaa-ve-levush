import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './content/home-page/home-page.component';
import { InstructionComponent } from './content/instruction/instruction.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'instraction/:season', component: InstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
