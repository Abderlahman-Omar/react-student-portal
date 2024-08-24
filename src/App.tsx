import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home Page/Home";
import NotFound from "./components/NotFound/NotFound";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            { index: true, element: <Home /> },
            { path: "home", element: <Home /> },
        ],
    },
    { path: "*", element: <NotFound /> },
]);
function App() {
    return <RouterProvider router={routes} />;
}

export default App;
