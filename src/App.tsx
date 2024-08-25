import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home Page/Home";
import NotFound from "./pages/NotFound/NotFound";
import { LayoutProvider } from "./Layout";

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
    return (
        <LayoutProvider>
            <RouterProvider router={routes} />
        </LayoutProvider>
    );
}

export default App;
