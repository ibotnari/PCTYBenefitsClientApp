import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbButtonModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbTreeGridModule,
    FormsModule,
  ],
  declarations: [
    PagesComponent, NotFoundComponent, DashboardComponent,
  ],
})
export class PagesModule {
}
