import { useContext } from "react";
import websiteLogo from "../../assets/logo/logo.png";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../App";

function ProductItem({ product }) {
  const navigate = useNavigate();
  const addToCart = useContext(ShopContext).addToCart;

  const formatter = new Intl.NumberFormat("tl-PH", {
    style: "currency",
    currency: "PHP",
  });

  function onClickProduct() {
    navigate(`/products/${product.id}`);
  }

  return (
    <div className="p-4 rounded-xl hover:shadow-lg text-ct-080D08 bg-ct-F2F7F2 dark:bg-[#222824] dark:text-ct-F2F7F2 group">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt=""
          onError={(e) => {
            e.target.onError = null;
            e.target.src = websiteLogo;
          }}
          className="size-80 rounded-xl"
        />
      </div>
      <div className="h-14">
        <div className="line-clamp-2">{product.title}</div>
      </div>

      <div className="flex justify-end text-2xl font-bold">
        {formatter.format(product.price * 50)}
      </div>

      <div className="flex px-2 py-1 mt-1 space-x-2 justify-center items-center ">
        <button
          className="h-10 w-8/12 py-2 px-6  rounded-md opacity-0 group-hover:opacity-100 transition-all bg-[#6ad678] dark:bg-[#00ff3770]"
          onClick={() => onClickProduct()}
        >
          Buy Now
        </button>
        <button
          className="h-10 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-all"
          onClick={() => addToCart(product)}
        >
          <IoCart className="size-8 dark:text-[#00ff3770]" />
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
