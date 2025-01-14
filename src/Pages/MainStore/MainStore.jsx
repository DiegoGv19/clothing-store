import ProductGrid from "../../Components/General/Product/ProductGrid/ProductGrid";

import "./MainStore.css"

const MainStore = () => {
    return (
        <section className="main-store">
            <h1 className="main-store-title">Wellcome</h1>
            <p className="main-store-description">Here you will find the best products.</p>
            <ProductGrid endpoint={`products`}/>
        </section>
    )
}

export default MainStore
