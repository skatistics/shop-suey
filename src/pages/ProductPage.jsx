import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CartListModal from "../components/modals/CartListModal";
import FloatingCartList from "../components/floating/FloatingCartList";
import ProductRatings from "../components/products/ProductRatings";
import NotFoundPage from "./NotFoundPage";
import { useCartContext } from "../components/contexts/CartContextProvider";
import { useProductContext } from "../components/contexts/ProductContextProvider";
import ProductImage from "../components/products/ProductImage";
import ProductDetails from "../components/products/ProductDetails";
import RelatedProducts from "../components/products/RelatedProducts";

function ProductPage() {
  const { formatPHP, products } = useProductContext();
  const { addToCart, cartList } = useCartContext();
  const [isFetching, setIsFetching] = useState(true);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    function randomInt(min, max) {
      const value = Math.random() * (max - min + 1) + min;
      const result = Math.floor(value * 10) / 10;

      if (result > 5) return 5;

      return result;
    }
    setRating(randomInt(1, 5));
  }, []);

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
        <div className="lg:flex m-5 p-5 space-y-5 lg:space-y-0 lg:space-x-5 rounded-xl bg-ct-F2F7F2 dark:bg-ct-222824">
          <div className="flex items-center">
            <ProductImage image={product.image} />
          </div>
          <div className="lg:w-2/3 space-y-4">
            <div className="text-3xl font-bold text-ct-191819 dark:text-ct-F2F7F2 space-y-2 mt-2 lg:mt-0">
              <div>{product.title}</div>
            </div>

            <div className="flex  space-x-2 items-center text-ct-080D08 dark:text-ct-D9E8D9">
              <div className="text-3xl font-medium">
                {formatPHP(product.price)}
              </div>
              <ProductRatings rating={rating} starSize={20} />
              <div className="text-xl">{rating.toFixed(1)}</div>
            </div>

            <div>
              <button
                className="m-2 py-1 px-2 font-bold bg-ct-5D985E text-xl border-2 border-ct-191819 rounded-md text-ct-F2F7F2 "
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className={
                  "m-2 py-1 px-2 font-bold bg-ct-5D985E text-xl border-2 border-ct-191819 rounded-md text-ct-F2F7F2 " +
                  (cartList.length > 0 ? " " : " hidden")
                }
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
        <ProductDetails product={product} />
        <RelatedProducts products={products} currentProduct={product} />
      </div>
    );
  }
}

export default ProductPage;
