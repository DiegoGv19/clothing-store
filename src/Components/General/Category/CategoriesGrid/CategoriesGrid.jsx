import CategoryCard from "../CategoryCard/CategoryCard"

import useRequestApi from "../../../../Hooks/useRequestApi"

import "./CategoriesGrid.css"

const Categories = () => {
    const categories = useRequestApi(`products/categories`)
    const categoriesImage = ['https://www.lacuracao.pe/media/catalog/product/c/f/cfi-2015a_1.jpg', 'https://enroutejewelry.com/cdn/shop/files/daisy_molecule_1.jpg', 'https://briatong.com/cdn/shop/files/categorias_SS_2023_0005_Wood_copia_750x960_crop_center.jpg', 'https://www.luvaro.com/cdn/shop/files/3517511.jpg']

    return (
        <div className="categories-grid">
            {
                (categories) && (
                    categories.map((category, index) => (
                        <CategoryCard key={index} name={category} image={categoriesImage[index]}/>
                    ))
                )
            }
        </div>
    )
}

export default Categories
