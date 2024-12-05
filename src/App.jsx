import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import MoreAboutFilm from './pages/MoreAboutFilm/MoreAboutFilm'
import Awards from './pages/Awards/Awards'
import Films from './pages/Films/Films'
import Series from './pages/Series/Series'
import Cartoons from './pages/Cartoons/Cartoons'
import Actors from './pages/Actors/Actors'
import Search from './pages/Search/Search'


// локальный отклик, когда закончились запросы к апишке кинопоиска
export const isUseMock = true

function App() {

  return (
    <div className='app'>
      <Header />
      <Navbar />
      <Sidebar/>
      <main className='container'>
        <Routes>
          <Route 
            path='/'
            element={ <Home /> }
          />
          <Route 
            path='/search'
            element={ <Search />}
          />
          <Route 
            path='/film/:id'
            element={ <MoreAboutFilm /> }
          />
          <Route 
            path='/films'
            element={ <Films /> }
          />
          <Route 
            path='/series'
            element={ <Series /> }
          />
          <Route 
            path='/cartoons'
            element={ <Cartoons /> }
          />
          <Route 
            path='/awards'
            element={ <Awards /> }
          />
          <Route 
            path='/actors'
            element={ <Actors /> }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
