import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/militant/home/home.component";
import {PartisansComponent} from "./pages/militant/partisans/partisans.component";

export const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "partisans",
    component: PartisansComponent
  }
];
