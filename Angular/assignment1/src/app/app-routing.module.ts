import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SpellsComponent } from './spells/spells.component';
import { DescriptionComponent } from './description/description.component';
import { BackstoryComponent } from './backstory/backstory.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: "full" },
  { path: 'stats', component: StatsComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'description', component: DescriptionComponent},
  { path: 'backstory', component: BackstoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
