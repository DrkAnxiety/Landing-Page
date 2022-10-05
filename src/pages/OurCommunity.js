export const OurCommunity = () => {
  return (
    <article className='font-mono min-h-screen w-full flex flex-col p-12 gap-12'>
      <section className='w-full p-4  self-start'>
        <h1 className='text-6xl font-bold w-1/2'>
          Professionals Made is Working with
        </h1>
      </section>
      <section
        className='w-full h-full min-h-1/2 flex justify-between items-center flex-col 
        md:flex-row border-b-2 border-slate-300 pb-24'
      >
        <div className='w-80 h-96 bg-wone sh-box flex justify-between items-end p-2'>
          <h3 className='font-bold text-lg  text-slate-500'>SJW Architects</h3>
          <h3 className='font-bold text-lg text-slate-500'>SF Bay Area</h3>
        </div>
        <div className='w-80 h-96 bg-wtwo sh-box flex justify-between items-end p-2'>
          <h3 className='font-bold text-lg text-slate-500'>Jones Construction</h3>
          <h3 className='font-bold text-lg text-slate-500'>SF Bay Area</h3>
        </div>
        <div className='w-80 h-96 bg-wthree sh-box flex justify-between items-end p-2'>
          <h3 className='font-bold text-lg text-slate-500'>Walls {'&'} More</h3>
          <h3 className='font-bold text-lg text-slate-500'>SF Bay Area</h3>
        </div>
      </section>
    </article>
  )
}
