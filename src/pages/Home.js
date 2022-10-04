import bathroom from '../images/bathroom-one.jpeg'
import { FiArrowRight } from 'react-icons/fi'

export const Home = () => {
  return (
    <article className=' flex justify-center items-center h-screen'>
      <section className='h-full'>
        <section className='flex flex-col gap-8 justify-center items-center w-full p-4 h-full'>
          <h1 className='text-6xl font-bold self-start'>
            Bathroom
            <br />
            renovations,
            <br />
            made easy.
          </h1>
          <p className='text-2xl w-96'>
            Your perfect bathroom delivered stress-free, from design to build.
          </p>
          <button
            className='w-full border-2 rounded border-slate-900 bg-slate-900
          text-white py-5 hover:bg-transparent hover:text-black transition duration-300'
          >
            GET AN INSTANT ESTIMATE
          </button>
          <p className='text-lg'>Starting at - $15,000* in the SF Bay Area</p>
        </section>
      </section>
      <section className='w-1/2 p-4 flex justify-center items-center h-full relative'>
        <img src={bathroom} alt='/' className='w-8/12 sh-box rounded-3xl' />
        <div className='absolute flex justify-center items-center w-72 h-72 top-96 left-12 rounded-full border-2 border-slate-600'>
          <FiArrowRight className='text-4xl text-slate-400'/>
        </div>
      </section>
    </article>
  )
}
