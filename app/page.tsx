import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import ProjectsSection from '../components/ProjectsSection'
import ValuesSection from '../components/ValuesSection'

export default async function Page() {
  return (
    <>
      <div className="prose max-w-none pb-8 pt-8 dark:prose-invert">
        <p className="text-1xl text-gray-900 dark:text-gray-100">
          Welcome to Scratch, where innovation meets simplicity. Founded by Jake and Jordie, we're
          revolutionizing how people interact with technology through intuitive, user-friendly
          solutions. At Scratch, we believe the best ideas start from a blank slate – join us in
          transforming your digital experience.
        </p>
      </div>
      <ValuesSection />
      <ProjectsSection />
    </>
  )
}
