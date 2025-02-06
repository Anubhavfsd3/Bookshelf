import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import BookGallery from "../BookGallery";
import AddressLink from "../AddressLink";

export default function BookPage() {
    const {id} = useParams(); 
    const [book, setBook] = useState(null);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/Bookks/${id}`).then(response => {
            setBook(response.data); 
        });
    }, [id]);

    if (!book) return '';

    return (
        <div className="mt-32 bg-gray-100 px-8 rounded-3xl py-8 text-white bg-capitalize">
            <h1 className="text-6xl bg-black text-center rounded-full p-4">{book.title}</h1>
            <h3 className="flex-c text-3xl truncate bg-iv rounded-full font-bold text-center text-Rosewood">Author - {book.author}</h3>
             
            <AddressLink className="justify-center text-2xl">{book.address}</AddressLink>
            <BookGallery book={book} />
     
            <div className="text-2xl p-2 mt-8 mb-8 grid gap-2 grid gap-8 bg-black text-primary gap-2 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div className="text-black">
                    <div className="my-4 text-white text-center">
                     <h2 className="font-semibold text-3xl bg-iv rounded-3xl text-primary">Description</h2>
                     {book.description}
                     <h2 className="font-semibold text-2xl  bg-iv rounded-3xl  mt-10 text-primary text-center">ISBN-10</h2>
                     {book.isbn}
                     <h2 className="font-semibold text-2xl  bg-iv rounded-3xl  mt-12 text-primary text-center">Total Pages</h2>
                     {book.numberOfPages}
                    </div>
                </div>
                <div className="bg-mr">
                  <BookingWidget book={book} />
                </div>
            </div> 
            <div className="bg-black text-primary text-center px-8 py-8 border-t">
                <div>
                 <h2 className="font-semibold  text-2xl">Extra info</h2>
                </div>
                <div className="mb-4 mt-2 text-white text-lg text-gray-700 leading-5">{book.extraInfo}</div>
             </div>   
        </div>
    );
}