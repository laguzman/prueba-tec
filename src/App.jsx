import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './features/fetch/fetchUsers';
import BookList from "./components/BookList.jsx";
import Sidebar from "./components/Sidebar.jsx";
import {redirect} from "react-router-dom";

const selectTodoIds = (state) => state
function App() {

    const dispatch = useDispatch();

    const books = useSelector(state => state.items);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    return (
        <div className="justify-content-start">
            <Sidebar />
            {books.default && <BookList className="pt-8 bg-slate-200" books={books.default} /> }
        </div>

    );
}

export default App;

