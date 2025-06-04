import { createBrowserRouter, RouterProvider } from "react-router"
import Register from "./pages/Register"
import Home from "./pages/Home"
import ViewCollege from "./pages/ViewCollege"
import ViewEvent from "./pages/ViewEvent"
import NotFound from "./pages/NotFound"
import CreateEvent from "./pages/CreateEvent"
import Login from "./pages/Login"

const eventHiveRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/view-event', element: <ViewEvent /> },
  { path: '/view-college', element: <ViewCollege /> },
  { path: '/create-event', element: <CreateEvent /> },
  { path: '*', element: <NotFound /> },
  {}
]);

function App() {
  return (
    <>
      <RouterProvider router={eventHiveRouter}/>
    </>
  );
}

export default App
