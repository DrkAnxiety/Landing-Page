import { FaBath } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className='font-mono h-20 w-full flex justify-evenly items-center bg-slate-200'>
      <section className='flex justify-center items-center gap-3'>
        <FaBath className='text-4xl animate-bounce' />
        <h1 className='font-bold text-4xl'>MADE</h1>
      </section>
      <section className='w-1/2'>
        <nav className='hidden lg:flex justify-center w-full items-center'>
          <ul className=' flex justify-evenly items-center w-full'>
            <li className='border-b-2 border-transparent hover:border-slate-600 transition duration-400 text-xl'>
              Our Difference
            </li>
            <li className='border-b-2 border-transparent hover:border-slate-600 transition duration-400 text-xl'>
              Our Style
            </li>
            <li className='border-b-2 border-transparent hover:border-slate-600 transition duration-400 text-xl'>
              About US
            </li>
            <li className='border-b-2 border-transparent hover:border-slate-600 transition duration-400 text-xl'>
              How it Works
            </li>
          </ul>
        </nav>
      </section>
      <section className='gap-4 hidden lg:flex'>
        <p className='font-bold text-slate-700 text-xl'>Live Chat</p>
        <p className='font-bold text-slate-700 text-xl'>{`(888) 840-0280`}</p>
      </section>
    </header>
  )
}
