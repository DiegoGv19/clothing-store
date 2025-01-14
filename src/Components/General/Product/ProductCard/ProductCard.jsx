import { Link } from "react-router-dom"

import "./ProductCard.css"

const ProductCard = ({id, title, price, description, image}) => {
    return (
        <div className="product-card">
            <img className="product-card-image" src={image} alt={title} />
            <div className="product-card-information">
                <h1 className="product-card-title">{title}</h1>
                <p className="product-card-description">{description}</p>
                <div className="product-card-buy">
                    <p className="product-card-price">Price: ${price}</p>
                    <Link className="product-card-link" to={`/product/${id}`}>View</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard