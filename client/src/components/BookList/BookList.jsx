import { useGlobalContext } from "../../Context";
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import SearchForm from "../SearchForm/SearchForm";



//https://covers.openlibrary.org/b/id/240727-S.jpg


const BookList = () => {
    const {books, loading, resultTitle} = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            // removing /works/ to get only id
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        }
    });

  if(loading) return <Loading />;

    return (
        
        <section className='booklist ml-20'>
           
            <div className='container'>
                <div className='section-title text-white bg-black text-center mb-5'>
                  <h2 className="p-2 font-bold bg-iv text-black underline">{resultTitle}</h2>
                </div>
                <div className='booklist-content grid'>
                    {
                        booksWithCovers.slice(0, 30).map((item, index) => {
                        return (
                            <Book key = {index} {...item} />
                        )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BookList