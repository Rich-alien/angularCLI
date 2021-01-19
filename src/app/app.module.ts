import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/Header/header.component';
import {NavBarComponent} from './components/NavBar/navBar.component';
import {SearchComponent} from './components/Search/search.component';
import {loginComponent} from './components/Buttons/login/login.component';
import {popupComponent} from './components/Buttons/popup/popup.component';
import {BasketComponent} from './components/basket/basket.component';
import {PopupComponent} from './components/Popup/popup.component';
import {ProductComponent} from './components/Product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    SearchComponent,
    loginComponent,
    popupComponent,
    BasketComponent,
    PopupComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
