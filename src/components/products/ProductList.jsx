import ProductItem from "./ProductItem";

function ProductList({products}){
    
    return(
        <div className="md:container mx-auto grid grid-cols-4 gap-4 justify-center">
            {
                products.map((product)=>{
                    return (
                        <ProductItem key={product.id} product={product} />
                    )
                })
            }
        </div>
    );
}

export default ProductList