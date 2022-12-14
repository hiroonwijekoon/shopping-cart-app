import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-rounting.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { NavComponent } from "./components/shared/nav/nav.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { FiltersComponent } from "./components/shopping-cart/filters/filters.component";
import { ProductListComponent } from "./components/shopping-cart/product-list/product-list.component";
import { CartComponent } from "./components/shopping-cart/cart/cart.component";
import { CartItemComponent } from "./components/shopping-cart/cart/cart-item/cart-item.component";
import { ProductItemComponent } from "./components/shopping-cart/product-list/product-item/product-item.component";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component";
import { RegisterComponent } from "./components/register/register.component";
import { RegisterSuccessComponent } from "./components/shared/register-success/register-success.component";
import { AccountVerifyComponent } from "./components/shared/account-verify/account-verify.component";
import { SearchBarComponent } from "./components/shopping-cart/search-bar/search-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    AccountVerifyComponent,
    SearchBarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
