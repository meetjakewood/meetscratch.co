import ValuesSection from '../components/ValuesSection'
import ProductsSection from '../components/ProductsSection'

export default async function Page() {
  return (
    <>
      <div className="prose max-w-none pb-8 pt-8 dark:prose-invert">
        <p className="sm:text-1xl text-lg text-gray-900 dark:text-gray-100">
          Welcome to Scratch, where innovation meets simplicity. Founded by Jake and Jordie, we're
          revolutionizing how people interact with technology through intuitive, user-friendly
          solutions. At Scratch, we believe the best ideas start from a blank slate – join us in
          transforming your digital experience.
        </p>
      </div>
      <ValuesSection />
      <ProductsSection />
    </>
  )
}
