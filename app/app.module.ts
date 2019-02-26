import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageCComponent } from './page-c/page-c.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { LinksComponent } from './links/links.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pageA', component: PageAComponent },
  { path: 'pageB', component: PageBComponent },
  { path: 'pageC', component: PageCComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent,
    LinksComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
