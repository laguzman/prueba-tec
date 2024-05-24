import Book from "./Book.jsx";
import {useEffect, useState} from "react";

export default function BookList ({ books }) {
    const items = JSON.parse(localStorage.getItem('favourite'));

    const [favouriteBooks, setFavouriteBooks] = useState(items || []);
    const [filter, setFilter] = useState("")

    const handleFilterChange = (genreFilter) => {
        setFilter(genreFilter)
    }

    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(favouriteBooks));
    }, [favouriteBooks]);

    const handleClick = (bookId) => {

        setFavouriteBooks(prevState => {
            const favouriteBook = books.find(book => book.book.ISBN === bookId)
            if (favouriteBooks?.find(book => bookId === book.book.ISBN)){
                return prevState.filter(book => book.book.ISBN !== bookId)
            }
            return [...prevState, favouriteBook]
        })

    }

    const bookRendered = books.map(book => {

        return <Book book={book.book} handleClick={handleClick} favouriteBooks={favouriteBooks} filter={filter}/>

    })

    const bookFilteredRendered = books.filter(book => {
        return book.book.genre === filter
    }).map(book => {
        return <Book book={book.book} handleClick={handleClick} favouriteBooks={favouriteBooks} filter={filter}/>

    })
    return (
        <div>
            <div className="pt-10 px-8 bg-slate-200 flex gap-4">
                <button
                    onClick={event => handleFilterChange("Fantasía")}
                    className={
                        `van-type simple 
                       `
                    }
                >Fantasía</button>
                <button
                    onClick={event => handleFilterChange("Zombies")}
                    className={
                        `van-type luxury`
                    }
                >Zombies</button>
                <button
                    onClick={event => handleFilterChange("Ciencia ficción")}
                    className={
                        `van-type rugged
                       `
                    }
                >Ciencia ficción</button>

                <button
                    onClick={event => handleFilterChange("Terror")}
                    className={
                        `van-type rugged 
                       `
                    }
                >Terror</button>

                {filter ? (
                    <div  className="inline-block my-auto cursor-pointer" >
                        <svg onClick={event => handleFilterChange("")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    ) : null}

            </div>
            <div className="grid grid-cols-1 gap-8 py-10 px-8 bg-slate-200 xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 ">
                {filter? bookFilteredRendered:bookRendered}
            </div>
        </div>
    )
}