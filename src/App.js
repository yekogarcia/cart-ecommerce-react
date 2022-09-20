import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Products } from './components/Products/Products';
import { TopMenu } from './components/TopMenu./TopMenu';
import { useFetch } from './hooks/useFetch';
import { STORAGE_PRODUCTS_CART, urlApiProducts } from './utils/constants';


function App() {

  const products = useFetch(urlApiProducts, null);
  const [productsCart, setProductsCart] = useState([])

  useEffect(() => {
    getProductsCart();
  }, [])


  const getProductsCart = () => {
    const idProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
    if (idProducts) {
      const idsProducts = idProducts.split(",");
      setProductsCart(idsProducts);
    } else {
      setProductsCart([]);
    }
  }

  const addProductCart = (id, name) => {
    console.log(name);
    const idProducts = productsCart;
    idProducts.push(id);
    setProductsCart(idProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success(`${name} añadido al carrito correctamente`);
  }

  return (
    <div className="App">
      <TopMenu
        productsCart={productsCart}
        getProductsCart={getProductsCart}
        products={products}
      />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer
        position='bottom-left'
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
