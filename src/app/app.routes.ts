import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/militant/home/home.component";
import {PartisansComponent} from "./pages/militant/partisans/partisans.component";
import {ImportPartisansComponent} from "./pages/militant/import-partisans/import-partisans.component";

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
  }
];
