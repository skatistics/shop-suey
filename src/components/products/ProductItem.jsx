import websiteLogo from "../../assets/logo/logo.png";

function ProductItem({ product }) {
  return (
    <div className="border-2 border-black p-4 bg-ct-dark-green-164A41">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt=""
          onError={(e) => {
            e.target.onError = null;
            e.target.src = websiteLogo;
          }}
          className="size-80"
        />
      </div>
      <div className="text-center">{product.title}</div>
      <div className="text-center">{product.category.name}</div>
    </div>
  );
}

export default ProductItem;
