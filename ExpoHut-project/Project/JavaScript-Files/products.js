// Image Upload:
const loadFile = function (event) {
  const image = document.getElementById("output-file");
  image.src = URL.createObjectURL(event.target.files[0]);
};

//Get DOM Element of PostButton:
const postButton = document.getElementById("posting-btn");

//Add EventListener with Post Button:
postButton.addEventListener("click", () => {
  const pdName = document.getElementById("product-name").value;
  const pdDescription = document.getElementById("product-description").value;
  const pdPrice = document.getElementById("product-price").value;
  const sellerCon = document.getElementById("seller-contact").value;
  const pdStock = document.getElementById("stock").value;

  //Joydip
  if(pdName === ''){
    alert("Product Name is Required");
  }
  if(pdDescription === ''){
    alert("Enter Description");
  }
  else if(pdDescription.length<6){
    alert("Description should be at-lest in 6 letter")
  }
  if(sellerCon === ''){
    alert("Enter Number");
  }
  else if(sellerCon.length != 11){
    alert("invalid number");
  }
  else if(sellerCon.charAt(0) !=0){
    alert("invalid number");
  }
  else if(sellerCon.charAt(1) !=1){
    alert("invalid number");
  }
  // else if(sellerCon.charAt(2) !=3 && sellerCon.charAt(2) != 5 && sellerCon.charAt(2) != 6 && mobileValue.charAt(2) != 7
  // && sellerCon.charAt(2) != 8 && sellerCon.charAt(2) != 9){
  //   alert("invalid number");
  // }




  //For local storage
  const dataObj ={
    pdName: pdName,
    pdDescription:pdDescription,
    pdPrice:pdPrice,
    sellerCon:sellerCon,
    pdStock:pdStock
  }
  console.log(dataObj)
  //

  localStorage.setItem('dataObj', JSON.stringify(dataObj))

  const pdContainer = document.getElementById("pd-container");
  const singleProduct = document.createElement("div");
  singleProduct.className = "single-product";

  singleProduct.innerHTML = `
  <img src="" id="output-file" alt="">
  <h3>product name: <span>${pdName}</span></h3>
  <p>description: ${pdDescription}</P>
  <h4>price: <span><span id="price">${pdPrice}</span> Taka</span></h4>
  <p>seller-contact: <span>${sellerCon}</span></p>
  <p>stock: <span>${pdStock}</span> products left</p>
  <button class="cartBtn">add to store</button>
  `;
  pdContainer.appendChild(singleProduct);
});
