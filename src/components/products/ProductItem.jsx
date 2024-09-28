import websiteLogo from "../../assets/logo/logo.png";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("tl-PH", {
    style: "currency",
    currency: "PHP",
  });

  function onClickProduct() {
    navigate(`/products/${product.id}`);
  }

  return (
    <div className="p-4 rounded-xl hover:shadow-lg hover:shadow-ct-dark-green-164A41 dark:hover:shadow-ct-dark-green-9DC88D bg-gradient-to-br from-ct-white-FEFCFF  to-ct-dark-green-9DC88D dark:from-ct-black-19191A dark:to-ct-dark-green-164A41">
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

      <div className="flex justify-end text-2xl font-bold text-ct-dark-green-164A41 dark:text-ct-dark-green-9DC88D">
        {formatter.format(product.price * 50)}
      </div>

      <div className="flex px-2 py-1 mt-1 space-x-2 justify-center items-center">
        <button
          className="h-10 w-8/12 py-2 px-6 bg-ct-dark-green-9DC88D dark:bg-ct-dark-green-164A41 rounded-md"
          onClick={() => onClickProduct()}
        >
          Buy Now
        </button>
        <button className="h-10 px-2 bg-ct-dark-green-9DC88D dark:bg-ct-dark-green-164A41 rounded-md">
          <IoCart className="size-8" />
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
