import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { OurStyle } from './pages/OurStyle'
import { OurWork } from './pages/OurWork'

function App() {
  return (
    <>
      <Header />

      <main className='w-full min-h-screen bg-slate-200'>
        <Home />
        <About />
        <OurStyle />
        <OurWork />
      </main>

      <Footer />
    </>
  )
}

export default App
