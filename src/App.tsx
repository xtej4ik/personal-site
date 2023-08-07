import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/menu/menu";
import Footer from "./components/layout/footer/Footer";
import AboutMe from "./routes/about-me";
import Projects from "./routes/projects";
import Contact from "./routes/contact";

const routes = [
  {
    path: "/contact",
    displayName: "Contact Me",
    element: <Contact />,
  },
  {
    path: "/projects",
    displayName: "My Projects",
    element: <Projects />,
  },
  {
    path: "/",
    displayName: "About Me",
    element: <AboutMe />,
  },
];

function App() {
  return (
    <>
      <Menu routes={routes}>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>

        <Footer />
      </Menu>
    </>
  );
}

export default App;
