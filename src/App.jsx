import { useState } from 'react'
import './App.css'
import MainPage from './pages/Main Page/mainpage'
import ProductsPage from './pages/Products/products'
import ProductDetails from './pages/Product Details/productDetails'

function App() {
  const [currentPage, setCurrentPage] = useState("main")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage("products")
  }

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    setCurrentPage("productDetail")
  }

  return (
    <>
      {currentPage === "main" && (
        <MainPage onSearch={handleSearch} />
      )}

      {currentPage === "products" && (
        <ProductsPage
          onSelectProduct={handleProductSelect}
          searchQuery={searchQuery}
        />
      )}

      {currentPage === "productDetail" && selectedProduct && (
        <ProductDetails product={selectedProduct} />
      )}
    </>
  )
}

export default App