import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SpellsComponent } from './spells/spells.component';
import { BackstoryComponent } from './backstory/backstory.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    HomepageComponent,
    SpellsComponent,
    BackstoryComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
