import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AbonosComponent } from "./abonos/abonos.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EgresosComponent } from "./egresos/egresos.component";
import { InformesComponent } from "./informes/informes.component";
import { MediaComponent } from "./media/media.component";
import { PagesComponent } from "./pages/pages.component";
import { SettingsComponent } from "./settings/settings.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component: DashboardComponent},
    {path:'egresos', component: EgresosComponent},
    {path:'abonos', component: AbonosComponent},
    {path:'informes', component: InformesComponent},
    {path:'media', component: MediaComponent},
    {path:'settings', component: SettingsComponent},
    {path:'statistics', component: StatisticsComponent},
    {path:'users', component: UsersComponent},
    {path:'pages', component: PagesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}