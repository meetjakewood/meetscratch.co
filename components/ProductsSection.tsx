import React from 'react'
import ProductCard from './ProductCard'
import { GiMiner } from 'react-icons/gi'

const ProductsSection: React.FC = () => {
  return (
    <div>
      <div className="space-y-5 pb-4 pt-6 md:pb-4 md:pt-12">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Products
        </h1>
      </div>
      <div className="container py-3 md:py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProductCard
            title="First Product"
            description="We'll report back when our first product is ready"
            Icon={GiMiner}
          />
          {/* Add more ProductCard components here as needed */}
        </div>
      </div>
    </div>
  )
}

export default ProductsSection
