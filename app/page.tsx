import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import Main from './Main'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import ProjectsSection from '@/components/ProjectsSection'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const latestPost = posts[0]

  const author = allAuthors.find((p) => p.slug === 'default')
  const aboutContent = author.body.code

  return (
    <>
      <MDXLayoutRenderer code={aboutContent} components={components} />
      <ProjectsSection />
      <Main posts={[latestPost]} />
    </>
  )
}
