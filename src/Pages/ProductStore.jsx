import { useParams } from "react-router-dom"

const ProductStore = () => {
    const params = useParams()
/* https://fakestoreapi.com/products/1*/
    return (
        <div>
            <h1>Product Store: {params.id}</h1>
        </div>
    )
}

export default ProductStore