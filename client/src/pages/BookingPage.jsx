import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import AddressLink from "../AddressLink";
import BookGallery from "../BookGallery";
import BookingDates from "../BookingDates";


export default function BookingPage() {
  const {id} = useParams();
  const [booking,setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get('/bookings').then(response => {
        const foundBooking = response.data.find(({_id}) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return '';
  }

  return (
    <div className="flex-c my-24 bg-white rounded-3xl p-2">
      <h2 className="flex my-2 text-gold bg-black text-3xl justify-center p-2 rounded-full block">{booking.book.title}</h2>
      <h3 className="flex my-2 text-lime bg-black text-xl justify-center p-2 rounded-full block">Author - {booking.book.author}</h3>
      <AddressLink className="flex my-2 text-black justify-center text-2xl block">{booking.book.address}</AddressLink>
      <div className="bg-gray-200 p-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="flex-c text-2xl mb-4">Your booking information:</h2>
          <BookingDates booking={booking} />
        </div>
        <div className="flex-c bg-primary p-6 text-white rounded-2xl">
          <div>Total price</div>
          <div className="flex-c text-3xl justify-center"> ₹{booking.price}</div>
        </div>
      </div>
      <BookGallery book={booking.book} /> 
      <h1 className="flex my-2 text-gold font-bold bg-black text-3xl justify-center p-2 rounded-full block">Name - {booking.name}</h1>
      <h1 className="flex my-2 text-gold bg-black text-3xl justify-center p-2 rounded-full block">Mail - {booking.email}</h1>
    </div>
  );
}