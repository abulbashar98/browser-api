


const addToCart = () => {
    // get cart item 
    const product = getCartItem();


    // add to local storage 


    addProductToCart(product);

    // display product on UI 
    displayProduct(product);

}

const getCartItem = () => {
    const productInputField = document.getElementById('product-input');
    const productName = productInputField.value;
    document.getElementById('product-input').value = '';
    return productName;
}


const getCartInStorage = () => {
    const storage = window.localStorage;
    const cart = storage.getItem('cart')
    let cartObject;

    if (cart) {
        const cartObject = JSON.parse(cart);
        return cartObject;
    }

    else {
        cartObject = {};
        return cartObject
    }
}

const addProductToCart = name => {
    const cart = getCartInStorage();

    cart[name] = 1;
    // console.log(cart) 
    cartStringified = JSON.stringify(cart);

    localStorage.setItem('cart', cartStringified);

}


const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}