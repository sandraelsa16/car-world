//store record

function storeRecord() {
  carDetails = {
    brand: brand.value,
    price: price.value,
    key: id.value,
  };
  if (
    carDetails.brand == "" ||
    carDetails.price == "" ||
    carDetails.key == ""
  ) {
    
    message.innerHTML = `<h6 class="text-danger text-center">Please fill out missing fields!!</h6>`
  } else if (
    carDetails.key in localStorage
  ) {
    message.innerHTML = `<h6 class="text-warning text-center">Details already exists!!</h6>`
  } else {
    localStorage.setItem(carDetails.key, JSON.stringify(carDetails));
    message.innerHTML = `<h6 class="text-success text-center">Details added!!</h6>`
  }
}

//Retrieve Record

function retRecord(){
    let key = num.value
    if(key in localStorage){
        let details = JSON.parse(localStorage.getItem(key))
    result.innerHTML = `<h4 class="text-primary">Car Details:</h4><p>Id:${details.key}<br>Brand:${details.brand}<br>Price:${details.price}</p>`
    // result.innerHTML = `<p>${JSON.stringify(details)}</p>`
    }else{
         result.innerHTML = `<h6 class="text-danger text-center">Id not present!!</h6>`
    }
    
}

//delete record

function remRecord(){
    let key = del.value;
    if(key in localStorage){
        localStorage.removeItem(key)
   delrecord.innerHTML = `<h6 class="text-success text-center">Details Deleted!!</h6>`
    }else{
       delrecord.innerHTML = `<h6 class="text-warning text-center">Id not present!!</h6>`
    }  
}

//delete All

function clearAll(){
    localStorage.clear()
    alert("Deleted all details")
}

