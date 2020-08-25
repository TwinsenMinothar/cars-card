import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { CarsComponent } from "./cars/cars.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "makers",
    pathMatch: "full"
  },
  { path: "cars", redirectTo: "makers", pathMatch: "full" },
  { path: "cars/:maker", component: CarsComponent },
  {
    path: "makers",
    loadChildren: () =>
      import("./makers/makers.module").then(m => m.MakersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
