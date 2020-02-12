export default store => {
  store.on('@init', () => ({ cart: [] }))

  store.on('cart/add', ({ cart }, product) => {
    const isHaveInCart = cart.find(item => item.id === product.id)

    if (isHaveInCart) {
      const clonedCart = [...cart];
      const index = clonedCart.findIndex(item => item.id === product.id);

      clonedCart[index] = {...product, count: isHaveInCart.count + 1};

      return {cart: [...clonedCart]}
    }
    return {cart: cart.concat([{...product, count: 1}])}
  })

  store.on('cart/del', ({ cart }, id) => {
    console.log(id)
    console.log(cart)
    return {cart: cart.filter(item => item.id !== id)}
  })

  store.on('cart/changeCount', ({ cart }, product) => {

    const productCount = Number(product.count);
    const isHaveInCart = cart.find(item => item.id === product.id);

    if (isHaveInCart) {
      const clonedCart = [...cart];
      const index = clonedCart.findIndex(item => item.id === product.id);

      clonedCart[index] = {...product, count: productCount};

      return {cart: [...clonedCart]}
    }

    return {cart: cart.concat([{...product, count: productCount}])}
  })
}