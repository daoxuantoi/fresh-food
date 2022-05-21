import { fetchCart, fetchUser } from "../utils/fetchLocalStorage";

const userInfor = fetchUser();
const cartInfor = fetchCart()


export const initialState={
    user: userInfor,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfor
    // cartItems:cartInfor

}