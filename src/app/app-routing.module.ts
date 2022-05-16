import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@components/error/error.component';
import { AboutMeComponent } from '@pages/about-me/about-me.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { PortfolioComponent } from '@pages/portfolio/portfolio.component';


const routes: Routes = [
  { path: '', component: AboutMeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', pathMatch: 'full', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
