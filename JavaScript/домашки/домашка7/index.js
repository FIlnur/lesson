class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(ownerName) {
    this.ownerName = ownerName;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    const total = this.products.reduce((sum, item) => sum + item.price, 0);
    console.log(`Общая стоимость корзины ${this.ownerName}: ${total}`);
    return total;
  }
}


// Создаём три товара
const apple = new Product("Яблоко", 50);
const bread = new Product("Хлеб", 40);
const milk = new Product("Молоко", 80);

// Создаём корзину на имя "Иван"
const myCart = new ShoppingCart("Иван");

// Добавляем товары в корзину
myCart.addProduct(apple);
myCart.addProduct(bread);
myCart.addProduct(milk);

// Вызываем метод getTotalPrice
myCart.getTotalPrice();
