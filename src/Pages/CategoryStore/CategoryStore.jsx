import { useParams } from "react-router-dom"

import "./CategoryStore.css"
import StringUpperCase from "../../Helpers/StringUpperCase";
import ProductGrid from "../../Components/General/Product/ProductGrid/ProductGrid";

const CategoryStore = () => {
    const params = useParams();
    const categoryName = params.categoryName

    return (
        <section className="category-store">
            <h1 className="category-store-title">Category: {StringUpperCase(categoryName)}</h1>
            <ProductGrid endpoint={`products/category/${categoryName}`}/>
        </section>
    )
}

export default CategoryStore