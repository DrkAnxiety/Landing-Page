export const About = () => {
  // Crear funcion para cambio de seccion y desplegar la informacion dependiendo la seleccion
  return (
    <article className='w-full font-mono min-h-screen md:p-12 flex flex-col  items-center md:flex-row'>
      <section className='flex h-auto w-full flex-col md:gap-12 md:border-l-2 md:border-slate-300 md:w-1/2'>
        <h3 className='self-start text-2xl pl-12'> - The Made Difference</h3>
        <ul className='w-full p-12 flex flex-col gap-5'>
          <li className='text-4xl md:text-6xl font-bold'>30% Cheaper</li>
          <li className='text-4xl md:text-6xl font-bold'>2x Faster Build</li>
          <li className='text-4xl md:text-6xl font-bold'>24/7 Concierge</li>
          <li className='text-4xl md:text-6xl font-bold'>5 Years Warranty</li>
        </ul>
      </section>
      <section className='flex flex-col gap-5 h-auto justify-center items-center md:border-x-2 md:border-slate-300 w-1/2'>
        <p className='w-96 font-bold text-4xl'>
          Made is 30% cheaper in comparison with other bathroom renovators
        </p>
        <p className='w-96 text-xl'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
      </section>
    </article>
  )
}
