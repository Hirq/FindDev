import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


const appRoutes: Routes = [
  {
    path: "workers",
    loadChildren: "../app/workers/workers.module#WorkersModule"
  },
  {
    path: "account",
    loadChildren: "../app/account/account.module#AccountModule"
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}