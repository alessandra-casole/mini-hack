import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './feature/home/home.component';
import { CompanyComponent } from './feature/company/company.component';
import { CompaniesComponent } from './feature/companies/companies.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    CompanyComponent,
    CompaniesComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
