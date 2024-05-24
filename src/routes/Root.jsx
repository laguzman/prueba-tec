import {Outlet, Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
export default function Root() {

    const currentRoute = useLocation()

    const [route, setRoute] = useState(currentRoute.pathname)
    const [search, setSearch] = useState("")


    console.log(currentRoute.pathname)
    const handleClick = (route) => {

        setRoute(route)
    }
    const handleSearch = (value) => {
        console.log(value)
    }

    return (
        <div className="flex flex-col justify-center w-screen ">
            <nav className="">
                <div className="max-w-screen-xl flex flex-c flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GuzmanPedia</span>
                    </a>
                    <div className="items-center justify-between flex order-1 flex-col" id="navbar-search">

                        <ul className="flex align-middle font-mediumrounded-lg  md:space-x-8  flex-row mt-0 bg-white border-gray-700">
                            <li>
                                <Link to="" onClick={event => handleClick("/")} className={`block py-2 px-3 text-gray-900 rounded  hover:text-blue-700 ${route === "/"? "text-blue-700":""}`} aria-current="page">Libros</Link>
                            </li>
                            <li>
                                <Link to="mylist" onClick={event => handleClick("/mylist")} className={`block py-2 px-3 text-gray-900 rounded hover:text-blue-700 ${route === "/mylist"? "text-blue-700":""}`}>Mi Lista</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>

        </div>


    )
}