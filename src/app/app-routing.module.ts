import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicComponent } from './pages/comic/comic.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SuperheroeComponent } from './pages/superheroe/superheroe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comic/:id', component: ComicComponent },
  { path: 'superheroe', component: SuperheroeComponent },
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
