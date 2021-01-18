import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FooterComponent} from './components/Footer/footer.component';
import {HeaderComponent} from './components/Header/header.component';
import {NavBarComponent} from './components/NavBar/navBar.component';
import {SearchComponent} from './components/Search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
