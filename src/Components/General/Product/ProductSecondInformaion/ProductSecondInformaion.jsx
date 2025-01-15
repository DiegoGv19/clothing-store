import "./ProductSecondInformaion.css"

const ProductSecondInformaion = ({description, category}) => {
    return (
        <div className="product-second-information">
            <h2 className="product-information-title">Product Features</h2>
            <p className="product-description">{description}</p>
            <h2 className="product-information-title">Category</h2>
            <p className="product-category">{category}</p>
        </div>
    )
}

export default ProductSecondInformaion