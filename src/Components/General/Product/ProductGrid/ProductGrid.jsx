import useRequestApi from "../../../../Hooks/useRequestApi"
import ProductCard from "../ProductCard/ProductCard"

import "./ProductGrid.css"

const ProductGrid = ({endpoint}) => {
    const products = useRequestApi(endpoint)

    if (!products) {
        return (<p className="load-data">Cargando Productos...</p>)
    }

    if (products.length > 0) {
        return (
            <div className="product-grid">
                {
                    products.map(product => (
                        <ProductCard key={product.id}
                                     id={product.id}
                                     title={product.title}
                                     price={product.price}
                                     description={product.description}
                                     image={product.image} />
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            <p className="no-products">There are no products in this category.</p>
        </div>
    )
}

export default ProductGrid