export const OurWork = () => {
  return (
    <article className='font-mono flex h-screen w-full justify-center items-center'>
      <section className='h-3/4 w-3/4 bg-work flex justify-center flex-col items-center gap-4'>
        <h1 className='w-1/2 text-6xl text-center '>
          Your Dream Bathroom Awaits
        </h1>
        <p className='w-1/3 text-white text-center text-xl'>
          Your perfect bathroom delivered stress-free, from design to build
        </p>
        <button
          className='w-72 p-4 bg-slate-100 border-2 border-slate-100 font-bold uppercase 
          hover:bg-transparent hover:text-white transition duration-300'
        >
          Get An Instan Estimate
        </button>
      </section>
    </article>
  )
}
