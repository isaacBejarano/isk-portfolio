import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MasterheadComponent } from './masterhead/masterhead.component';
import { FeaturedComponent } from './featured/featured.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { ScrollComponent } from './scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MasterheadComponent,
    FeaturedComponent,
    PortfolioComponent,
    FooterComponent,
    SocialComponent,
    ScrollComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
