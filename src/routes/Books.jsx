import BookList from "../components/BookList.jsx";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchUsers} from "../features/fetch/fetchUsers.js";

export default function Books() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.items);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    console.log(books.default)
    return (
        <div>
            {books.default && <BookList className="pt-8 bg-slate-200" books={books.default.library} /> }
        </div>

    );
}