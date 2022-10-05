import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { OurStyle } from './pages/OurStyle'
import { OurWork } from './pages/OurWork'
import { OurCommunity } from './pages/OurCommunity'

function App() {
  return (
    <>
      <Header />

      <main className='w-full min-h-screen bg-slate-200'>
        <Home />
        <About />
        <OurStyle />
        <OurCommunity />
        <OurWork />
      </main>

      <Footer />
    </>
  )
}

export default App
