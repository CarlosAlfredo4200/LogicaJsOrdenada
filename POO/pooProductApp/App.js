 class Product{
    
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
 }


 class UI {
    addProduct(product){
      const product_list=  document.getElementById("product-list");
      const element = document.createElement('div');
      element.innerHTML = `
      <div class="card_info">
      <div class="card_body">
          <strong>Product</strong>:${product.name}
          <strong>Price</strong>:${product.price}
          <strong>Year</strong>:${product.year}
      </div>
  </div>  

      `;
      product_list.appendChild(element);
    
    }

    deleteProduct(){
        
    }

    showMessage(){

    }
 }

 //DOM events

 document.getElementById("product-form").addEventListener("submit", function(e) {
   const namePro = document.getElementById("name").value;
   const pricePro = document.getElementById("price").value;
   const yearPro = document.getElementById("year").value;
   
   const product = new Product(namePro, pricePro, yearPro);
   const ui = new UI();
   ui.addProduct(product);
   e.preventDefault();
 })