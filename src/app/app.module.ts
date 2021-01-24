import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {NavBarComponent} from './components/navBar/navBar.component';
import {SearchComponent} from './components/search/search.component';
import {loginComponent} from './components/buttons/login/login.component';
import {popupComponent} from './components/buttons/popup/popup.component';
import {BasketComponent} from './components/basket/basket.component';
import {PopupComponent} from './components/popup/popup.component';
import {ProductComponent} from './components/product/product.component';
import {ProductLineComponent} from './components/productLine/productLine.component';
import {ProductsService} from '../service/products.service';
import {CartService} from '../service/cart.service';

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
    ProductComponent,
    ProductLineComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
