import Dashboard from '../pages/Dashboard/Dashboard'
import TablePage from '../pages/TablePage/TablePage'
import FormPage from '../pages/FormPage/FormPage'
import UIPage from '../pages/UIPage/UIPage'
import PluginPage from '../pages/PluginPage/PluginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import NotFound from '../pages/NotFound/NotFound'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

export const routes = [
  {
    path: '/',
    page: Dashboard,
    isShow: true
  },
  {
    path: '/table',
    page: TablePage,
    isShow: true
  },
  {
    path: '/form',
    page: FormPage,
    isShow: true
  },
  {
    path: '/ui',
    page: UIPage,
    isShow: true
  },
  {
    path: '/plugin',
    page: PluginPage,
    isShow: true
  },

  {
    path: '/profile',
    page: ProfilePage,
    isShow: true
  },

  {
    path: '/notfound',
    page: NotFound,
    isShow: false
  },
  {
    path: '/login',
    page: Login,
    isShow: false
  },
  {
    path: '/register',
    page: Register,
    isShow: false
  },
  {
    path: '*',
    page: NotFound,
    isShow: false
  }
]
