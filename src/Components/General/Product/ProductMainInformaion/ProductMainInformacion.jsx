import "./ProductMainInformacion.css"

const ProductMainInformacion = ({title, image, price, count}) => {
    return (
        <div className="product-main-information">
            <div className="product-information-image">
                <img className="product-image" src={image} alt={title} />
            </div>
            <div className="product-information-text">
                <h1 className="product-title">{title}</h1>
                <p className="product-price">${price}</p>
                <p className="product-count">Count: <span>{count}</span></p>
            </div>
        </div>
    )
}

export default ProductMainInformacion