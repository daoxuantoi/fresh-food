export const fetchUser = () =>{
    const userInfor = localStorage.getItem('user') !== undefined ? 
    JSON.parse(localStorage.getItem('user')) : localStorage.clear()
    return userInfor;
}


export const fetchCart = () =>{
    const cartInfor = localStorage.getItem('cartItems') !== undefined ? 
    JSON.parse(localStorage.getItem('cartItems')) : localStorage.clear()
    return cartInfor ? cartInfor : [];
}