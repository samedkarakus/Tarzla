import React, { useState, useMemo } from 'react'
import Header from '../../components/header'
import SearchingArea from './components/searchingArea'
import ProductsDetails from '../Main Page/components/productsGrid'
import Footer from '../Footer/footer'
import allProducts from '../../data/all-product-data'

const parsePrice = (price) => {
  if (!price) return Infinity
  return Number(
    price
      .replace('TL', '')
      .replace('.', '')
      .replace(',', '.')
      .trim()
  )
}

const Products = () => {
  const [filters, setFilters] = useState({})
  const [sortType, setSortType] = useState('recommended')

  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    // 🔹 Marka
    if (filters.brand) {
      result = result.filter(p => p.brand === filters.brand)
    }

    // 🔹 Fiyat aralığı
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      result = result.filter(p => {
        const price = parsePrice(p.price)
        return price >= min && price <= max
      })
    }

    // 🔹 Sıralama
    switch (sortType) {
      case 'price-asc':
        result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
        break
      case 'price-desc':
        result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
        break
      default:
        break
    }

    return result
  }, [filters, sortType])

  return (
    <div>
      <Header />
      <SearchingArea
        onFilterChange={setFilters}
        onSortChange={setSortType}
      />
      <ProductsDetails products={filteredProducts} />
      <Footer />
    </div>
  )
}

export default Products