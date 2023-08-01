import Footer from "./components/layout/footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./routes/about-me";
import Projects from "./routes/projects";
import { Menu } from "./components/menu/menu";

const routes = [{
  path: "/",
  displayName: "About Me",
  element: <AboutMe />,
},
{
  path: "/projects",
  displayName: "My Projects",
  element: <Projects />,
}];

function App() {



  return (
    <>
      <Menu routes={routes} >
        <Routes>
          {routes.map(route => {
            return (<Route key={route.path} path={route.path} element={route.element} />);
          })}
        </Routes>
        <Footer />
      </Menu>
    </>
  );
}



export default App;
