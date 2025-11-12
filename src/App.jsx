import Nav from './Sections/Nav.jsx'
import Hero from './Sections/Hero.jsx'
import PopularProducts from './Sections/PopularProducts.jsx'
import SuperQuality from './Sections/SuperQuality'
import Services from './Sections/Services'
import SpecialOffer from './Sections/SpecialOffer'
import CustomerReview from './Sections/CustomerReview'
import Subscribe from './Sections/Subscribe'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
       <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReview/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App