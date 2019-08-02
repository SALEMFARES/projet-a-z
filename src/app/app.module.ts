import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

import { AppareilService } from './services/appareil.service';

import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from './services/auth.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent},
  { path: 'edit', component: EditAppareilComponent  },
  { path: '', component: AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,

    AppareilViewComponent,

    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
