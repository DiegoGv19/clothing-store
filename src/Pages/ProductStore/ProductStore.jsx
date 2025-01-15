import { useParams } from "react-router-dom"
import useRequestApi from "../../Hooks/useRequestApi"
import ProductMainInformacion from "../../Components/General/Product/ProductMainInformaion/ProductMainInformacion";

import "./ProductStore.css"
import ProductSecondInformaion from "../../Components/General/Product/ProductSecondInformaion/ProductSecondInformaion";

const ProductStore = () => {
    const params = useParams()
    const product = useRequestApi(`products/${params.id}`);
    return (
        (product) && (
            <section className="product-section">
                <ProductMainInformacion title={product.title} image={product.image} price={product.price} count={product.rating.count} />
                <ProductSecondInformaion description={product.description} category={product.category}/>
            </section>
        )
    )
}

export default ProductStore