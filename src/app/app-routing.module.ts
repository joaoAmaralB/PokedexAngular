import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "pokemon-stats/:id",
    component: PokemonStatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
