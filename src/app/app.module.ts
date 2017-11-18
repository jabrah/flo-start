import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// In-memory web API stuff. TODO replace with MongoDB junk
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './data/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataTableComponent } from './pages/data-table.component';
import { PersonDetailComponent } from './pages/person-details.component';
import { AboutComponent } from './pages/about.component';
import { PostsComponent } from './pages/posts.component';

import { DataService } from './data/data.service';
import { PostsService } from './data/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    PersonDetailComponent,
    AboutComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    // DataService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
