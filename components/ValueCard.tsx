import React from 'react'
import { IconType } from 'react-icons'

interface ValueCardProps {
  title: string
  description: string
  Icon: IconType
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="flex flex-col items-start rounded-lg border-2 border-gray-200 p-4 dark:border-gray-700">
      <div className="mb-2 flex items-center">
        {Icon && <Icon className="mr-3 text-xl text-primary-500 dark:text-white" />}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

export default ValueCard
