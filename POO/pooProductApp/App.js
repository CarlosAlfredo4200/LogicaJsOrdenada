class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const product_list = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card_info">
      <div class="card_body">
          <strong>Product</strong>: ${product.name}
          <strong>Price</strong>: ${product.price}
          <strong>Year</strong>: ${product.year}
          <a href="#" name="delete">Delete</a>
      </div>
  </div>  

      `;
    product_list.appendChild(element);
    
  }

  resertForm(){
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
   if(element.name =="delete"){
      element.parentElement.parentElement.parentElement.remove();
   }
  }
    
  showMessage() {}
}

//DOM events

document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    const namePro = document.getElementById("name").value;
    const pricePro = document.getElementById("price").value;
    const yearPro = document.getElementById("year").value;

    const product = new Product(namePro, pricePro, yearPro);
    const ui = new UI();
    ui.addProduct(product);

    ui.resertForm();
    e.preventDefault();
  });


document.getElementById("product-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteProduct(e.target);

})