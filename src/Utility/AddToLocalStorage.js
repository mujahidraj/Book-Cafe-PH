import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getStoredBook =()=>{
  const storedBookSTR = localStorage.getItem("readlist");

  if(storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  }
  else{
    return []
  }
}

const addToLocalStorage = (id) => {
  const storeBookData = getStoredBook();

  if(storeBookData.includes(id)){
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "This book is already added to the list.",
  
});
  }
  else{
    storeBookData.push(id)
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("readlist", data)

    // sweetAlert
    Swal.fire({
          title: "Good job!",
          text: "Congratulation! you have finished the book.",
          icon: "success"
        });
  }
}

export {addToLocalStorage ,getStoredBook};