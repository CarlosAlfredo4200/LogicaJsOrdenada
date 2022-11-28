const _private = new WeakMap();

class Book {

    constructor(title, author, price) {

        const properties = {
            _title: title,
            _author: author,
            _price: price
        }
        _private.set(this, { properties })

    }

    // Getter obtener/ Setter modificar


    get title() {
        return _private.get(this).properties['_title']
    }
    set title(newTitle) {
        return _private.get(this).properties['_title'] = newTitle;
    }


    get author() {
        return _private.get(this).properties['_author']
    }
    set author(newAuthor) {
        return _private.get(this).properties['_author'] = newAuthor;
    }


    get price() {
        return _private.get(this).properties['_price']
    }
    set price(newPrice) {
        return _private.get(this).properties['_price'] = newPrice;
    }

    getAllData() {
        console.log(`Título : ${this.title}, Autor:${this.author}, Precio: ${this.price}`);
    }



}


class Comic extends Book {
    constructor(name, author, price, illustrators) {
        super(name, author, price)

        this.illustrators = illustrators;


    }

    addILlustrator(newIllustrator = []) {
        this.illustrators.push(newIllustrator)
    }
    getAllData() {
        super.getAllData();
        console.log(`Ilustradores : ${this.illustrators}`);
    }


}


class ShoppingCart {
    constructor( ) {
        this.products = [];
    }

    addProduct(amount, price) {
        this.products.push(...Array(amount).fill(price));
    }

    showProduct() {
        console.log(this.products);
    }

    calcTotal() {
        return this.products.map(price => price).reduce((acc, price) => acc + price, 0);
    }

    showTotal() {
        console.log(`Total a pagar : ${this.calcTotal()}`);
    }
    
}

//--------------------------------------------------------------------------//
// Instanciar
const book = new Book("1984", "George Orwell", 350);

//book.title = "Nuevo titulo"

const book1 = new Book("Biblia", "Espiritu Santo", 1000);

const comic = new Comic("Batman: La broma asesina", "Alan Moore", 150, ["Brian Bolland"]);

const cart = new ShoppingCart();

//book._price = 0; Modificar propiedades
console.log(`Título del libro :${book.title}`);
console.log(`Título del comic 1 :${comic.title}`);
console.log(`Autor del comic :${comic.author}`);
comic.addILlustrator("Jhon Higgins")
console.log(`Ilustradores del comic :${comic.illustrators}`);

cart.addProduct(2, comic.price);
cart.addProduct(3, book.price);
cart.showProduct();
cart.showTotal();

book.getAllData();
comic.getAllData();




