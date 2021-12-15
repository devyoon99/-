MakeAllProductCard();

function MakeAllProductCard() {
  let a = "";
  $.ajax({
    url: "store.json",
    type: "GET",
  }).done(function (e) {
    a = e.products;
    MakeProductCard(a.length);
    for (let i = 0; i < a.length; i++) {
      inputProductData(i, i);
    }
  });
}

function MakeProductCard(NumberOfCard) {
  let productCard = "";
  let productPrice = "";
  for (let i = 0; i < NumberOfCard; i++) {
    productCard += `<div class="product-card">
    <div class="img-box">
      <img src="p1.JPG" class="img${i}"/>
    </div>
    <div class="product-text">
      <p class="product-name product-name${i}"></p>
      <p class="product-seller product-seller${i}"></p>
    </div>
  </div>`;

    productPrice += `<div class="product-price">
    <span class="product-price__number product-price__number${i}"></span>
      </div>`;
  }

  $(".product-card__container").append(productCard);
  $(".product-price__container").append(productPrice);
}

function inputProductData(NumberOfCard, data) {
  $.ajax({
    url: "store.json",
    type: "GET",
  }).done(function (e) {
    $(".img" + NumberOfCard).attr("src", e.products[data].photo);
    $(".product-name" + NumberOfCard).text(e.products[data].product_name);
    $(".product-seller" + NumberOfCard).text(e.products[data].brand_name);
    $(".product-price__number" + NumberOfCard).text(e.products[data].price);
  });
}
