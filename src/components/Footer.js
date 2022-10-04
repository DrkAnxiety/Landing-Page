import { FaBath } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer
      className='font-mono flex w-full min-h-80 md:flex-row flex-col justify-evenly items-center p-8 
    bg-slate-200 border-t-2 border-slate-300'
    >
      <section className='flex w-1/3 flex-col gap-5 border-r-2 border-slate-300 p-4 h-full justify-center items-center'>
        <div className='flex gap-6'>
          <FaBath className='text-4xl animate-bounce' />
          <h1 className='font-bold text-4xl'>MADE</h1>
        </div>
        <p className='text-lg w-full'>
          Made providers a fully managed service that combines high-quality
          design, materials, and construction into a single, stress-free home
          renovation experience
        </p>
      </section>
      <section className='flex flex-col gap-5 border-r-2 border-slate-300 p-4 h-full justify-center'>
        <h3 className='text-2xl font-bold'>Product</h3>
        <ul className='flex flex-col gap-5'>
          <li className='hover:text-red-700 text-lg'>Packages</li>
          <li className='hover:text-red-700 text-lg'>How it Works</li>
          <li className='hover:text-red-700 text-lg'>Estimator</li>
        </ul>
      </section>
      <section className='flex flex-col gap-5 border-r-2 border-slate-300 p-4 h-full justify-center'>
        <h3 className='text-2xl font-bold'>Company</h3>
        <ul className='flex flex-col gap-5'>
          <li className='hover:text-red-700 text-lg'>Terms of Use</li>
          <li className='hover:text-red-700 text-lg'>Privacy Policy</li>
          <li className='hover:text-red-700 text-lg'>Careers</li>
        </ul>
      </section>
      <section className='flex flex-col gap-5 border-r-2 border-slate-300 p-4 h-full justify-center'>
        <h3 className='text-2xl font-bold'>Contact</h3>
        <ul className='flex flex-col gap-5'>
          <li className='hover:text-red-700 text-lg'>Hello@maderenovations.com</li>
          <li className='hover:text-red-700 text-lg'>{`(800) 304-3040`}</li>
          <li className='hover:text-red-700 text-lg'>2345 W Main Street San Francisco, CA</li>
        </ul>
      </section>
    </footer>
  )
}
