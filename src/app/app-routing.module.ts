import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {ProductComponent} from './components/product/product.component';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';
import {LocalStorageGuard} from '../guards/local-storage.guard';
import {RegistrationComponent} from './components/registration/registration.component';
import {AddProductComponent} from './components/admin/add-product/add-product.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [LocalStorageGuard]},
  // добавить старничку под все задачки админа
  {path: 'add-product', component: AddProductComponent, canActivate: [LocalStorageGuard]},
  {path: 'products', component: ProductComponent},
  {path: 'products/:productId', component: ProductDescriptionComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
