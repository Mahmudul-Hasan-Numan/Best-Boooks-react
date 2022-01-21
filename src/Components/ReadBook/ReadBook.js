import React from 'react';

const ReadBook = (props) => {
    console.log(props);
    const { readBooks } = props;
    let name = [];
    let totalPrice = 0;
    for (const price of readBooks) {
        name = name + price.name
        totalPrice = totalPrice + price.price;
    }
    return (
        <div>
            <h4>total read books: {readBooks.length}</h4>
            <h6>Book price: ${totalPrice}</h6>
            <h5>Name: {name}</h5>
        </div>
    );
};

export default ReadBook;