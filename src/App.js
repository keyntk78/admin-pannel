import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes/index.js'
import { Fragment } from 'react'
import Default from './components/Default/Default.jsx'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShow ? Default : Fragment
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
