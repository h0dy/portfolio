import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { Contact, Error, Projects, Stats } from "./pages";
import Landing from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // make this page as the default for "/" route
        element: <Landing />,
      }, 
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
