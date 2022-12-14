import { environment } from "src/environments/environment";

export const apiUrl = environment.production
  ? "http://api.shopsy.com/"
  : "http://localhost:3000";
export const productsUrl = apiUrl + "/products";
export const cartItemsUrl = apiUrl + "/cartItems";
export const wishListUrl = apiUrl + "/wishlist";

export const WebApiUrl = "https://localhost:7081/api";

export const registerUserUrl = WebApiUrl + "/User/Register";
export const sendVeriEmailUrl = WebApiUrl + "/User/SendVerificationEmail";
export const VeriUserUrl = WebApiUrl + "/User/VerifyToken";
export const loginUserUrl = WebApiUrl + "/User/Login";
export const authenticateUserUrl = WebApiUrl + "/User/Authenticate";

export const productURL = WebApiUrl + "/Product";
export const cartURL = WebApiUrl + "/Cart";
