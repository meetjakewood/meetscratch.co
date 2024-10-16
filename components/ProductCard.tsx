import React from 'react'
import { IconType } from 'react-icons'
import { RiMindMap } from 'react-icons/ri'

interface ProductCardProps {
  title: string
  description: string
  Icon?: IconType
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, Icon = RiMindMap }) => {
  return (
    <div className="flex flex-col items-start rounded-lg border-2 border-dashed border-gray-200 p-6 dark:border-gray-700">
      <div className="mb-2 flex items-center">
        {Icon && <Icon className="mr-3 text-xl text-primary-500 dark:text-white" />}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

export default ProductCard
