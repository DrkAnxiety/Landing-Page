import bathroom from '../images/bathroom-two.jpeg'

export const OurStyle = () => {
  return (
    <article className='font-mono min-h-screen w-full flex flex-col p-12 gap-12 '>
      <section className='w-full flex justify-center items-center h-auto'>
        <h2 className='text-6xl font-bold border-r-2 border-slate-300'>
          From dream to reality, we've made it simple
        </h2>
        <p className='p-4 text-lg'>
          Our propietary build process removes the stress so you can focus on
          what really matters
        </p>
      </section>
      <section
        className='flex flex-col h-screen md:flex-row md:border-b-2 
      md:border-slate-300 justify-evenly w-full items-center'
      >
        <div className='w-72 h-3/4 bg-card flex flex-col p-4 justify-center gap-20'>
          <h2 className='text-white font-bold text-xl'>
            01
          </h2>
          <h3 className='text-white font-bold text-xl'>
            Select Your Style
          </h3>
          <p className='text-white font-bold text-xl'>
            Collections are hand picked by Architects. You can choose material,
            finishes, and trim to make it personally yours
          </p>
        </div>
        <div className='w-80 h-3/4 flex flex-col justify-center gap-20 border-r-2 border-slate-300 p-4'>
          <h2 className='font-bold text-xl'>02</h2>
          <h3 className='font-bold text-xl'>Select Your Style</h3>
          <p className='font-bold text-xl'>
            Collections are hand picked by Architects. You can choose material,
            finishes, and trim to make it personally yours
          </p>
        </div>
        <div className='w-80 h-3/4 flex flex-col justify-center gap-20 border-r-2 border-slate-300 p-4'>
          <h2 className='font-bold text-xl'>03</h2>
          <h3 className='font-bold text-xl'>Select Your Style</h3>
          <p className='font-bold text-xl'>
            Collections are hand picked by Architects. You can choose material,
            finishes, and trim to make it personally yours
          </p>
        </div>
      </section>
    </article>
  )
}
