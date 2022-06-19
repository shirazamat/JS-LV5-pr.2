/* 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */
'use strict'

let arr = [
    {
      title: "product1",
      descreption: "",
      price: 100,
      count: 1
    },
    {
      title: "product2",
      descreption: "",
      price: 200,
      count: 2
    },
    {
      title: "product3",
      descreption: "",
      price: 300,
      count: 3
    }
  ];
  
  function basket(product) {
    // Созданиие главного div
    let basket_div = document.querySelector("#basket");
    let bask_prime = document.createElement("div");
    bask_prime.style.cssText =
      "width: 200px; min-height: 200px; background-color: gray; border-width: 7px; border-radius: 10px; border-color: rgb(211, 182, 87);";
    basket_div.appendChild(bask_prime);
    // Строка корзина пуста
    if (product <= 0) {
      let span_empty = document.createElement("span");
      span_empty.style.cssText =
        "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
      span_empty.textContent = "Корзина пуста";
      bask_prime.appendChild(span_empty);
    }
    // Если в корзине есть товары
    else {
      let sum = 0;
      let quantity = 0;
      for (let item of product) {
        sum += item.price * item.count;
        quantity += item.count;
      }
      // Строка "В корзине:"
      let span_basket = document.createElement("span");
      span_basket.style.cssText =
        "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
      span_basket.textContent = "В корзине:";
      bask_prime.appendChild(span_basket);
      // span for product
      let span_product = document.createElement("span");
      span_product.style.cssText =
        "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px 5px; align-items: center; font-size: 17px;";
      span_product.textContent = quantity + " " + "товаров";
      bask_prime.appendChild(span_product);
      // span for sum
      let span_sum = document.createElement("span");
      span_sum.style.cssText =
        "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px 5px; align-items: center; font-size: 17px;";
      span_sum.textContent = "на сумму" + " " + sum + " " + "рублей";
      bask_prime.appendChild(span_sum);
    }
  }
  
  basket(arr);