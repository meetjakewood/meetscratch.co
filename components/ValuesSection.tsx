import React from 'react'
import ValueCard from './ValueCard'
import {
  RiLightbulbFlashLine,
  RiTeamLine,
  RiAwardLine,
  RiUserHeartLine,
  RiShieldCheckLine,
} from 'react-icons/ri'
import { IconType } from 'react-icons'

const ValuesSection: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with groundbreaking solutions.',
      Icon: RiLightbulbFlashLine,
    },
    {
      title: 'Collaboration',
      description: 'Fostering strong partnerships and teamwork.',
      Icon: RiTeamLine,
    },
    {
      title: 'Excellence',
      description: 'Setting new standards in our industry.',
      Icon: RiAwardLine,
    },
    {
      title: 'User-Centric',
      description: 'Putting users at the heart of every decision.',
      Icon: RiUserHeartLine,
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and honesty.',
      Icon: RiShieldCheckLine,
    },
  ]

  return (
    <div>
      <div className="space-y-2 pb-4 pt-12 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Values
        </h1>
      </div>
      <div className="container py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              Icon={value.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValuesSection
