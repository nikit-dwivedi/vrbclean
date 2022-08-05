import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ManageManagersComponent } from './manage-managers/manage-managers.component';
import { ManageHomesComponent } from './manage-homes/manage-homes.component';
import { ManageCleanersComponent } from './manage-cleaners/manage-cleaners.component';
import { ViewDamageComponent } from './view-damage/view-damage.component';
import { ViewCleaningsComponent } from './view-cleanings/view-cleanings.component';
import { ManageGuestsComponent } from './manage-guests/manage-guests.component';
import { OwnerRezAPIComponent } from './owner-rez-api/owner-rez-api.component';
import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'manage-managers',
    component: ManageManagersComponent
  },
  {
    path: 'manage-homes',
    component: ManageHomesComponent
  },

  {
    path: 'manage-cleaners',
    component: ManageCleanersComponent
  },

  {
    path: 'view-damage',
    component: ViewDamageComponent
  },
  {
    path: 'view-cleanings',
    component: ViewCleaningsComponent
  },
  {
    path: 'manage-guests',
    component: ManageGuestsComponent
  },
  {
    path: 'ownerRez-API',
    component: OwnerRezAPIComponent
  },
  {
    path: 'global-settings',
    component: BillingInfoComponent
  },
  {
    path: 'billing-info',
    component: BillingInfoComponent
  }

]

@NgModule({
  declarations: [
    HomeComponent,
    ManageManagersComponent,
    ManageHomesComponent,
    ManageCleanersComponent,
    ViewDamageComponent,
    ViewCleaningsComponent,
    ManageGuestsComponent,
    OwnerRezAPIComponent,
    GlobalSettingsComponent,
    BillingInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)

  ]
})
export class DashboardModule { }
