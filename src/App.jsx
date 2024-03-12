import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Privacy from './Pages/Privacy Policy/Privacy'
import Termsandconditions from './Pages/Terms/Termsandconditions'
import Location from './Pages/Location/Location'

function App() {

  return (
   <>
      <Router>
         <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home/> }
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<About/> }
                        ></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<Contact/>}
                        ></Route>
                        <Route
                            exact
                            path="/privacy"
                            element={<Privacy/>}
                        ></Route>
                        <Route
                            exact
                            path="/Termsandconditions"
                            element={ <Termsandconditions/>}
                        ></Route>
                        <Route
                            exact
                            path="/location"
                            element={ <Location/>}
                        ></Route>
                    </Routes>
                    </Router>


    </>
  )
}

export default App
