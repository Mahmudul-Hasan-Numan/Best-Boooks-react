import React from 'react';
import './Book.css';

const Book = (props) => {
    console.log(props);
    const { img, name, writer, price, publishers, page } = props.book;
    return (
        <div className='book-design'>
            <div>
                <div className='image-position'>
                    <img src={img} alt="" />
                </div>
                <div className='books-details'>
                    <h2>Name: {name}</h2>
                    <h4>By: {writer}</h4>
                    <h5>Price: {price}</h5>
                    <p>Publisher: {publishers}</p>
                    <p>Page: {page}</p>
                    <button className='books-button' onClick={() => props.handleReadBook(props.book)} >Count Read Book</button>
                </div>
            </div>
        </div>
    );
};

export default Book;