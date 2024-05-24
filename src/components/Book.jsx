import { useState, useEffect } from 'react';

export default function Book ({ book, handleClick, favouriteBooks}) {
    // const [liked, setLiked] = useState(false)

    const likedBook = favouriteBooks.find(currentBook => currentBook.book.ISBN === book.ISBN)

    return (

        <div className="grid grid-rows-3 grid-flow-col gap-4 h-75 bg-slate-50 rounded-lg">
            <div className="row-span-3 col-span-1 min-w-50 ">
                <img className="m-auto h-full w-full rounded-lg"  src={book.cover}  alt="asd"/>
            </div>
            <div className="pt-4 w-full">
                <h1 className="col-span-2 p-4 font-bold text-lg sm:w-30 min-w-35 max-w-40 md lg:h-30 sm:h-20 w-full ...">{book.title}</h1>
            </div>
            <div className="row-span-2 p-4 col-span-2 0 flex flex-col justify-between">
                <div>
                    <span className="font-bold"> Author:</span>
                    <p className=" ...">{book.author.name}</p>
                    <span className="font-bold mt-6 inline-block"> Genre:</span>
                    <p className=" ...">{book.genre}</p>
                </div>

                <div className="flex justify-end">
                    <div className="cursor-pointer" onClick={event => handleClick(book.ISBN)}>
                        {likedBook ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg> : <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>}
                    </div>


                </div>

            </div>
        </div>



    )
}