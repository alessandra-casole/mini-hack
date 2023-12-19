import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './feature/company/company.component';
import { HomeComponent } from './feature/home/home.component';
import { CompaniesComponent } from './feature/companies/companies.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "companies", component: CompaniesComponent },
  { path: "company/:id", component: CompanyComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
