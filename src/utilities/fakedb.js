// use local storage as your db for now
const addToDb = (id, cartName) => {
  const exists = getDb(cartName);
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  }
  else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart, cartName);
}

const getDb = (cartName) => localStorage.getItem(cartName);
const updateDb = (cart, cartName) => {
  localStorage.setItem(cartName, JSON.stringify(cart));
}

const removeFromDb = (id, cartName)=> {
  const exists = getDb(cartName);
  if (!exists) {

  }
  else {
    const shopping_cart = JSON.parse(exists);
    if(shopping_cart[id]==1) delete shopping_cart[id];
    else shopping_cart[id]--;
    updateDb(shopping_cart, cartName);
  }
}

const getStoredCart = (cartName) => {
  const exists = getDb(cartName);
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
