import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FooterComponent} from './components/Footer/footer.component';
import {HeaderComponent} from './components/Header/header.component';
import {NavBarComponent} from './components/NavBar/navBar.component';
import {SearchComponent} from './components/Search/search.component';
import {loginComponent} from './components/Buttons/Login/login.component';
import {popupComponent} from './components/Buttons/Popup/popup.component';
import {BasketComponent} from './components/Basket/basket.component';
import {PopupComponent} from './components/Popup/popup.component';
import {productComponent} from './components/Product/product.component';

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
    productComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
