import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './Components/Layout/Layout'
import MainPage from './Components/MainPage/MainPage'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
     <Toaster />
     <Routes>
       <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage />}/>
       </Route>
     </Routes>
    </>
  )
}

export default App
