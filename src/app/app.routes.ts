import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PartisansComponent} from "./pages/militant/partisans/partisans.component";
import {ImportPartisansComponent} from "./pages/militant/import-partisans/import-partisans.component";
import {ElectionMonitoringComponent} from "./pages/election-monitoring/election-monitoring.component";

export const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "partisans",
    component: PartisansComponent
  },
  {
    path: "partisans/import",
    component: ImportPartisansComponent
  },
  {
    path: "monitoring",
    component: ElectionMonitoringComponent
  }
];
