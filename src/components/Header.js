export const Header = () => {
  return (
    <header className='h-14 w-full bg-slate-200 flex justify-center items-center shadow-md'>
      <div className='w-full flex justify-between items-center px-10 '>
        <p className='text-xl font-bold'>LOGO</p>
        <nav className='flex'>
          <ul className='flex w-full gap-8'>
            <li className='border-b-2 hover:border-b-2 transition duration-500 hover:border-slate-500'>
              Home
            </li>
            <li className='border-b-2 hover:border-b-2 transition duration-500 hover:border-slate-500'>
              About
            </li>
            <li className='border-b-2 hover:border-b-2 transition duration-500 hover:border-slate-500'>
              Support
            </li>
            <li className='border-b-2 hover:border-b-2 transition duration-500 hover:border-slate-500'>
              Platforms
            </li>
            <li className='border-b-2 hover:border-b-2 transition duration-500 hover:border-slate-500'>
              Pricing
            </li>
          </ul>
        </nav>
        <div className='flex gap-6'>
          <button
            className='border-2 cursor-pointer border-purple-700 btn-p transition 
            duration-400 rounded-md hover:bg-purple-500 hover:text-white'
          >
            Sing In
          </button>
          <button
            className='border-2 cursor-pointer border-purple-700 bg-purple-500 transition
            duration-400 text-white btn-p hover:bg-transparent hover:text-black rounded-md'
          >
            Sing Up
          </button>
        </div>
      </div>
    </header>
  )
}
