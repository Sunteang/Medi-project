const baseUrl = "http://localhost:3000/popular_products";

fetch(baseUrl)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data.product);
    document.getElementById("product-box").innerHTML = data
      .map((item) => {
        return `
        <div class="pro-item" >
        <div class="pro-image">
          <img src="${item.image}" alt="sarasoft" />
          <p>${item.dis_percent}</p>
        </div>
        <div class="pro-description">
          <div class="item-price">
            <p>${item.type}</p>
            <h3>${item.title}</h3>
            <h4>${item.price_discount}<span class="discount-price">${item.price}</span></h4>
            <span><i class="fa-sharp fa-solid fa-star"></i></span>
            <span><i class="fa-sharp fa-solid fa-star"></i></span>
            <span><i class="fa-sharp fa-solid fa-star"></i></span>
            <span><i class="fa-sharp fa-solid fa-star"></i></span>
            <span class="no-color"
              ><i class="fa-sharp fa-regular fa-star"></i
            ></span>
          </div>
          <span class="shopping-bag icon icon-four" card_id="${item.id}"
            ><i class="fa-regular fa-bag-shopping"></i
          ></span>
        </div>
      </div>
            `;
      })
      .join("");

    // Add click event listeners to the newly created elements
    const cartCountElement = document.querySelector(".count-number");
    let numberCount = 0;

    const shoppingBag = document.querySelectorAll(".shopping-bag");
    shoppingBag.forEach((button) => {
      button.addEventListener("click", function (e) {
        const checkCount = e.currentTarget.getAttribute("card_id");

        numberCount++;
        cartCountElement.textContent = numberCount;
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
