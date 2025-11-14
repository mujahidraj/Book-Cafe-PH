import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const wishlistedBook =()=>{
  const getWishListedBooks = localStorage.getItem("wishlist")

  if(getWishListedBooks){
    const getBooks = JSON.parse(getWishListedBooks)
    return getBooks
  }
  else {
    return []
  }
}

const addToWishListed =(id)=>{
  const storedWishedBooks = wishlistedBook();
  if(storedWishedBooks.includes(id)){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This book is already added to the list.",
      
    });
  }
  else {
    storedWishedBooks.push(id)
    const data = JSON.stringify(storedWishedBooks);
    localStorage.setItem("wishlist", data)

    // sweetAlert
        Swal.fire({
              title: "Congratulation!",
              text: "The Book is added to the wishlist.",
              icon: "success"
            });
  }
}

export {addToWishListed ,wishlistedBook} ;