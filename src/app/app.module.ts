import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {SearchComponent} from './components/search/search.component';
import {loginComponent} from './components/buttons/login/login.component';
import {popupComponent} from './components/buttons/popup/popup.component';
import {BasketComponent} from './components/basket/basket.component';
import {PopupComponent} from './components/popup/popup.component';
import {ProductComponent} from './components/product/product.component';
import {ProductLineComponent} from './components/product-line/product-line.component';
import {ProductsService} from '../service/products.service';
import {CartService} from '../service/cart.service';
import {CounterComponent} from './components/buttons/counter/counter.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RegistrationComponent} from './components/registration/registration.component';
import {UserService} from '../service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {AddProductComponent} from './components/admin/add-product/add-product.component';
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
        ProductLineComponent,
        CounterComponent,
        UserProfileComponent,
        ProductDescriptionComponent,
        PageNotFoundComponent,
        RegistrationComponent,
        AddProductComponent
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductsService, CartService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
