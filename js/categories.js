const cateUrl = "http://localhost:3000/popular_categories";

fetch(cateUrl)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data.product);
    document.getElementById("cate-box").innerHTML = data
      .map((item) => {
        return `
        <div class="pop-cate-item" id="${item.id}">
          <div class="cate-image">
            <img
              src="${item.imgSrc}"
              alt="item"
            />
          </div>
          <h3>${item.title}</h3>
        </div>
            `;
      })
      .join("");

    // Add click event listeners to the newly created elements
    // const cartCountElement = document.querySelector(".count-number");
    // let numberCount = 0;

    // const shoppingBag = document.querySelectorAll(".shopping-bag");
    // shoppingBag.forEach((button) => {
    //   button.addEventListener("click", () => {
    //     numberCount++;
    //     cartCountElement.textContent = numberCount;
    //   });
    // });
  })
  .catch((error) => {
    console.log(error);
  });
