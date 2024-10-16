import { useContext, useEffect, useState } from "react";
import NotFoundPage from "./NotFoundPage";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/contexts/CartContextProvider";
import CartListModal from "../components/modals/CartListModal";
import FloatingCartList from "../components/floating/FloatingCartList";
import { ProductContext } from "../components/contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import Ratings from "../components/Ratings";

function ProductPage() {
  const addToCart = useContext(CartContext).addToCart;
  const [isFetching, setIsFetching] = useState(true);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const formatPHP = useContext(ProductContext).formatPHP;
  const products = useContext(ProductContext).products;
  const cartList = useContext(CartContext).cartList;
  const navigate = useNavigate();

  useEffect(() => {
    const id = parseInt(productId);
    const currentProduct = products.find((item) => item.id === id);
    setProduct(currentProduct);
    if (products.length > 0) {
      setIsFetching(false);
    }
  }, [products, productId]);

  if (!isFetching && !product) {
    return <NotFoundPage />;
  }

  if (product) {
    return (
      <div className="sm:container mx-auto">
        <CartListModal />
        <FloatingCartList />
        <div className="lg:flex m-5 p-5 space-y-5 lg:space-y-0 lg:space-x-5  rounded-xl bg-ct-F2F7F2 dark:bg-ct-222824">
          <div className=" flex items-center">
            <img
              src={product.image}
              alt="Product Image"
              className="object-contain drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]"
            />
          </div>
          <div className="lg:w-2/3 space-y-2">
            <div className="text-3xl font-bold text-ct-191819 dark:text-ct-F2F7F2 space-y-2 mt-2 lg:mt-0">
              <div>{product.title}</div>
            </div>

            <div className="flex items-center space-x-2 text-ct-080D08 dark:text-ct-D9E8D9">
              <div className="text-3xl font-medium">
                {formatPHP(product.price)}
              </div>
              <Ratings rating={4.5} starSize={20} />
              <div className="text-xl">{(2).toFixed(1)}</div>
            </div>

            <div>
              <button
                className="m-2 p-1 font-bold bg-ct-5D985E text-xl border-2 border-black rounded-md text-ct-F2F7F2 "
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className={
                  "m-2 p-1 font-bold bg-ct-5D985E text-xl border-2 border-black rounded-md text-ct-F2F7F2 " +
                  (cartList.length > 0 ? " " : " hidden")
                }
              >
                Check Out
              </button>
            </div>
          </div>
        </div>

        <div className="px-5 ">
          <span className="text-2xl ml-2 p-2 font-medium rounded-tl-lg rounded-tr-lg text-ct-191819 bg-ct-F2F7F2 dark:text-ct-F2F7F2 dark:bg-ct-222824 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]">
            Product Details
          </span>
          <div className="bg-ct-F2F7F2 dark:bg-ct-222824 text-ct-191819 dark:text-ct-F2F7F2 p-4 rounded-tl-sm rounded-tr-sm">
            <ul className="list-disc list-inside">
              <li>Brand: {product.brand}</li>
              <li>Model: {product.model}</li>
              <li>Color: {product.color}</li>
            </ul>
            <p>{product.description}</p>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
