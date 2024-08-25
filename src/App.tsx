import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home Page/Home";
import NotFound from "./pages/NotFound/NotFound";
import { LayoutProvider } from "./Layout";
import SplashPage from "./pages/Splash Page/SplashPage";
import ProfilePage from "./pages/Profile Page/ProfilePage";
import TimeTable from "./pages/Time Table Page/TimeTable";
import Results from "./pages/Results Page/Results";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <SplashPage />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/timeTable",
        element: <TimeTable />,
    },
    {
        path: "/results",
        element: <Results />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
function App() {
    return (
        <LayoutProvider>
            <RouterProvider router={routes} />
        </LayoutProvider>
    );
}

export default App;
