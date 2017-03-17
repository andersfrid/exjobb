import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArenaComponent } from './components/arena/arena.component';
import { StudyhallComponent } from './components/studyhall/studyhall.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { AchievementComponent } from './components/achievement/achievement.component';

import { ValidateService} from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService} from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { FightComponent } from './components/fight/fight.component';
import { FaqComponent } from './components/faq/faq.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'studyhall', component: StudyhallComponent, canActivate:[AuthGuard]},
  {path:'arena', component: ArenaComponent, canActivate:[AuthGuard]},
  {path:'create-char', component: CharacterCreationComponent, canActivate:[AuthGuard]},
  {path:'achievement', component: AchievementComponent, canActivate:[AuthGuard]},
  {path:'fight', component: FightComponent, canActivate:[AuthGuard]},
  {path:'faq', component: FaqComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ArenaComponent,
    StudyhallComponent,
    CharacterCreationComponent,
    AchievementComponent,
    FightComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
