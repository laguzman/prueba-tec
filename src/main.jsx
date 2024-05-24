import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import Books from "./routes/Books";
import ErrorPage from "./error-page.jsx";
import MyList from "./routes/MyList.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Books />,
            },
            {
                path: "mylist/",
                element: <MyList />,
            },
        ],
    },
]);

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>

);