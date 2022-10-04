import { Header } from './components/Header'
import { Home } from './pages/Home'
// import { Home } from './pages/Home'

function App() {
  return (
    <>
      <Header />

      <main className='w-full min-h-screen bg-slate-200'>
        <Home />
      </main>
    </>
  )
}

export default App
