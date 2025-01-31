import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import Torneria from "../Torneria";
import Notfound from "../Notfound"
import NavBar from "../../Components/Navbar";

const AppRoutes = () => {
      let routes = useRoutes ([
        {path: '/', element: <Home/>},
        {path: '/contacto', element: <Contact/>},
        {path: '/torneria', element: <Torneria/>},
        {path:'*', element: <Notfound />},
      ])

    return routes
 
}

const App = () => {
  return (
    <BrowserRouter>
    <AppRoutes/>
    <NavBar/>
    </BrowserRouter>
  )
}

export default App;
