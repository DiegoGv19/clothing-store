import Categories from "../../Components/General/Category/CategoriesGrid/CategoriesGrid"

import "./CategoriesStore.css"

const CategoriesStore = () => {
    return (
        <section className="categories-store">
            <h1 className="categories-store-title">Categories</h1>
            <Categories />
        </section>
    )
}

export default CategoriesStore