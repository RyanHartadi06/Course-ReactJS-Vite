import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState, useRef } from "react";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/login.service";
import useLogin from "../hooks/useLogin";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]); //TODO :  useState itu untuk menyimpan data yang akan di render ulang, dan useState itu akan selalu dijalankan ketika ada perubahan pada data yang disimpan
  const username = useLogin();
  const totalPriceRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotal(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  //TODO :  array dalam useEffect seperti componentdiidUpdate, dia akan selalu dijalankan ketika ada perubahan pada array tersebut

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product, key) => {
              return (
                <CardProduct key={key}>
                  <CardProduct.Header
                    image={product.image}
                    id={product.id}
                  ></CardProduct.Header>
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    id={product.id}
                    handleAddToCart={handleAddToCart}
                  ></CardProduct.Footer>
                </CardProduct>
              );
            })}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-5">Cart</h1>
          <ul></ul>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item, key) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={key}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>{item.qty}</td>
                      <td>
                        ${" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>
                        ${" "}
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    ${" "}
                    {total.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
