import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Profile from './pages/Profile'
import Product from './pages/Product'
import Home from './pages/Home'
import { useHistory, Redirect, useLocation } from 'react-router-dom'
import ProductAdmin from './pages/ProductAdmin'
import Cart from './pages/Cart'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 100)
  },
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/#">
            Marketplace Pasar Terkini
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link " to="/">
                Home
              </Link>
              <Link className="nav-item nav-link " to="/products">
                Produk
              </Link>
              <Link className="nav-item nav-link " to="/profile">
                Profile Kami
              </Link>
            </div>
          </div>
          <Link className="nav-item nav-link " to="/keranjang">
            Keranjang
          </Link>
          <Link className="nav-item nav-link " to="/productadmin">
            Login admin
          </Link>
        </nav>

        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/auth">
              <LoginPage />
            </Route>
            <Route path="/keranjang">
              <Cart />
            </Route>
            <PrivateRoute path="/productadmin">
              <ProductAdmin />
            </PrivateRoute>
            <Route path="/products">
              <Product />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

const AuthButton = () => {
  let history = useHistory()

  return fakeAuth.isAuthenticated ? (
    <p>
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          <div>
            <AuthButton />
            {children}
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  )
}

const LoginPage = () => {
  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } }
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from)
    })
  }

  return (
    <div>
      <p>Maaf silahkan login terlebih dahulu untuk melanjutkan</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}
