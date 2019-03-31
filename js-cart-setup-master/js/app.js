// Show Cart Card
(
  function() {
    // DOM grabs
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");

    //Event listeners
    cartInfo.addEventListener("click", function () {
      cart.classList.toggle("show-cart");
    });
  }
)();
// Add Items to the cart
(
  function () {
    // DOM grabs
    const cartBtn = document.querySelectorAll('.store-item-icon');
    //Event listener for each since its multiple buttons
    cartBtn.forEach(function (btn) {
      btn.addEventListener("click", function() {

        //console.log(event.target);
        if (event.target.parentElement.classList.contains("store-item-icon")) {
          let fullPath = event.target.parentElement.previousElementSibling.src;
          //manipulate the Image string
          let pos = fullPath.indexOf("img") + 3;
          let partPath = fullPath.slice(pos)
          //Create Object
          const item ={};
          //adding Image Path
          item.img = `img-cart${partPath}`
          //Adding name
          let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
          item.name = name;
          //adding Price
          let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
          let finalPrice = price.slice(1).trim();
          item.price = finalPrice

          //console.log(item);

          // Creating the Cart Item
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item", "d-flex", "justify-content-between", "text-capitalize", "my-3");
          cartItem.innerHTML = `
          <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>`
            ;
            //select cart$
            const cart = document.getElementById('cart');
            const total = document.querySelector('.cart-total-container');
            cart.insertBefore(cartItem, total);
            alert("item added to the cart");
            showtotals();
        }
      });
    });
    //show showtotal;
    function showtotals() {
      const total =[];
      const items = document.querySelectorAll(".cart-item-price");
      //loop through item and parse to number data type from string
      items.forEach(function (item) {
        total.push(parseFloat(item.textContent));
      });
      const totalMoney = total.reduce(function (total, item, ) {
        total += item;
        return total;
      },0);
      //round the decimal place
      const finalMoney =totalMoney.toFixed(2);

      // interface changes
      document.getElementById('cart-total').textContent = finalMoney;
      document.getElementById('item-count').textContent = total.length;
      document.querySelector('.item-total').textContent = finalMoney;

    }
  }
)();
