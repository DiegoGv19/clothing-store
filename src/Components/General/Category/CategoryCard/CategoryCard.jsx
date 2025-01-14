import { Link } from "react-router-dom"
import StringUpperCase from "../../../../Helpers/StringUpperCase"
import "./CategoryCard.css"

const CategoryCard = ({name, image}) => {
    return (
        <Link className="category-card" to={`/categories/${name}`}>
            <img className="category-card-image" src={image} alt={name} />
            <h2 className="category-card-title">{StringUpperCase(name)}</h2>
        </Link>
    )
}

export default CategoryCard
