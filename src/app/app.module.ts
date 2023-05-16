import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule } from '@angular/forms';
import { OffcanvasDirective } from './shared/offcanvas.directive';
import { AboutComponent } from './pages/about/about.component';
import { PressComponent } from './pages/press/press.component';
import { VastTokenComponent } from './pages/vast-token/vast-token.component';
import { CommunityComponent } from './community/community.component';
import { MemberService } from './shared/member.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    OffcanvasDirective,
    AboutComponent,
    PressComponent,
    VastTokenComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
