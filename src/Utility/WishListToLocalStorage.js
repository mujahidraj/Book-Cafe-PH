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
    alert("This books is already in the Wishlist.")
  }
  else {
    storedWishedBooks.push(id)
    const data = JSON.stringify(storedWishedBooks);
    localStorage.setItem("wishlist", data)
  }
}

export {addToWishListed} ;