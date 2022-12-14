import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/models/cart-item";
import { Product } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";
import { MessengerService } from "src/app/services/messenger.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calCartTotal();
    });
  }

  calCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item: { prod_qty: number; prod_price: number }) => {
      this.cartTotal += item.prod_qty * item.prod_price;
    });
  }
}
