import { useEffect, useState, } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image.jsx";
import Headers from "../components/Headers/Headers.jsx";
import PopularBooks from "../components/PopularBooks/PopularBooks.jsx";
import TitleTypeOne from "../components/PopularBooks/TitleTypeOne.jsx";
import Quote from "../components/Quote/Quote.jsx";
import LatestArticle from "../components/LatestArticle/LatestArticle.jsx";
//import NYTAPI from "../components/NYTAPI/NYTAPI.jsx";



export default function IndexPage() {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        axios.get('/Bookks').then(response => {
            setBooks(response.data);
        });
    }, []);

    return (
        <div className=" flex-c mt-8 grid p-2 items-center justify-between justify-center gap-y-8"> 
            <Headers />
            <PopularBooks />
            <div className="flex-c text-center text-5xl p-2 rounded-3xl bg-white items-center br-6 w-full justify-between text-black mt-9 font-bold">
                <h4 className="p-2">Bookshelf@2K24</h4>
                <h2 className="font-bold p-1">READ BOOKS ONLINE</h2>
                <h4 className="font-bold p-2">Publish your book here<TitleTypeOne /></h4>
                <br />
                <div className="flex text-2xl grid bg-rosewood p-3 font-bold p-1 gap-x-9 gap-y-9 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {books.length > 0 && books.map(book => (
                        <Link to={'/Bookks/'+book._id}>
                            <div className="flex-c bg-gray-500 mb-2 rounded-2xl">
                                {book.photos?.[0] && (
                                    <Image className="flex-c rounded-2xl object-cover aspect-square" src={book.photos?.[0]} alt=""/>
                                )}
                            </div>
                            <h3 className="flex-c text-2xl truncate font-bold text-white-500">{book.title}</h3>
                            <h3 className="flex-c text-2xl truncate font-bold text-white-500">Author - {book.author}</h3>
                            <div className="flex-c mt-1">
                                <span className="font-bold">₹{book.price}</span> per day
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <br />
            <Quote />
            <br />
            <LatestArticle />
        </div>
    );
}