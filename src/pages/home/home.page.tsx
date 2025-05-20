import Banner from "../../components/banner/banner"
import Categories from "../../components/categories/categories"
import NavBar from "../../components/navbar/navbar"
import ProductCard from "../../components/products/product.card"

const HomePage = ()=>{
    return(
     <>
     <NavBar title="Shopping"></NavBar>
     <Banner></Banner>
     <Categories></Categories>
     <ProductCard></ProductCard>
     </>
    )
}

export default HomePage