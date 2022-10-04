import bathroom from '../images/bathroom-one.jpeg'

export const Home = () => {
  return (
    <article className='font-mono w-full flex flex-col md:flex-row justify-evenly items-center min-h-screen'>
      <section className='h-full'>
        <section className='flex flex-col gap-8 justify-center items-center w-full p-4 h-full'>
          <h1 className=' text-4xl md:text-6xl font-bold self-start'>
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
            className='w-96 md:w-full border-2 rounded border-slate-900 bg-slate-900
          text-white py-5 hover:bg-transparent hover:text-black transition duration-300'
          >
            GET AN INSTANT ESTIMATE
          </button>
          <p className=' text-sm md:text-lg'>Starting at - $15,000* in the SF Bay Area</p>
        </section>
      </section>
      <section className='w-full md:w-1/2 p-4 flex justify-center items-center h-full'>
        <img src={bathroom} alt='/' className='w-1/2 md:w-1/2 sh-box' />
      </section>
    </article>
  )
}
