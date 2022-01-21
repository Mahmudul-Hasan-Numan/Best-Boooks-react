import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import ReadBook from '../ReadBook/ReadBook';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        fetch('./books.JSON')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);


    const handleReadBook = book => {
        const newReadBook = [...readBooks, book];
        setReadBooks(newReadBook)
    }
    return (
        <div className='display-books'>
            <div className="books-container">
                <h1>Total Books: {books.length} </h1>
                <div className='book-display'>
                    {
                        books.map(book => <Book
                            key={book.price}
                            book={book}
                            handleReadBook={handleReadBook}
                        ></Book>)
                    }
                </div>
            </div>
            <div className="read-books-count">
                <ReadBook readBooks={readBooks}></ReadBook>
            </div>
        </div>
    );
};

export default Books;