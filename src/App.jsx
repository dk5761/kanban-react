
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import './App.css'
import LandingPage from './page/landingpage/LandingPage.jsx'
import Home from './page/home/Home.jsx'
import Board from './page/board/Board.jsx'
import BoardLayout from './layouts/boardLayout/boardLayout.jsx'




function App() {

  const auth = true

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={auth ? <Home /> : <LandingPage />} />
        <Route path='boards' element={<BoardLayout />} >
          <Route path=':id' element={<Board />} />
        </Route>

      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
