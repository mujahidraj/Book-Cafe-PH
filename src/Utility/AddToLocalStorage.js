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
    alert ("This book is already exist in the list.")
  }
  else{
    storeBookData.push(id)
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("readlist", data)
  }
}

export {addToLocalStorage};