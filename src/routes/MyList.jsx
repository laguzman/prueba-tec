import BookList from "../components/BookList.jsx";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchUsers} from "../features/fetch/fetchUsers.js";

export default function MyList() {
    const items = JSON.parse(localStorage.getItem('favourite'));

    const [favouriteBooks, setFavouriteBooks] = useState(items || []);

    console.log(items)

    return (
        <div>
            {favouriteBooks.length > 0 ? <BookList className="pt-8 bg-slate-200" books={favouriteBooks} /> : <BookList className="pt-8 bg-slate-200" books={favouriteBooks} /> }
        </div>

    );
}