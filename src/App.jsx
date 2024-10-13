import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { UserContextProvider } from "./context/userContext";
import Test from "./pages/Test";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path:"/test",
            element:<Test/>
        }
    ]);

    return (
        <>
            <UserContextProvider>
                <RouterProvider router={router} />
            </UserContextProvider>
        </>
    );
}

export default App;
