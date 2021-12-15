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

$(".input").on("input", function () {
  $(".product-card__container").html("");
  $(".product-price__container").html("");

  if ($(".input").val() === "") {
    $(".product-card__container").html("");
    $(".product-price__container").html("");
    MakeAllProductCard();
  } else if ($(".input").val() === "레" || $(".input").val() === "원") {
    $(".product-card__container").html("");
    $(".product-price__container").html("");
    MakeProductCard(2);
    inputProductData(0, 1);
    inputProductData(1, 3);
  } else if (
    $(".input").val() === "식" ||
    $(".input").val() === "기" ||
    $(".input").val() === "세" ||
    $(".input").val() === "척"
  ) {
    $(".product-card__container").html("");
    $(".product-price__container").html("");
    MakeProductCard(1);
    inputProductData(0, 0);
  } else if (
    $(".input").val() === "목" ||
    $(".input").val() === "침" ||
    $(".input").val() === "대" ||
    $(".input").val() === "프" ||
    $(".input").val() === "임"
  ) {
    $(".product-card__container").html("");
    $(".product-price__container").html("");
    MakeProductCard(1);
    inputProductData(0, 1);
  } else if (
    $(".input").val() === "천" ||
    $(".input").val() === "연" ||
    $(".input").val() === "디" ||
    $(".input").val() === "퓨" ||
    $(".input").val() === "저" ||
    $(".input").val() === "세" ||
    $(".input").val() === "트"
  ) {
    $(".product-card__container").html("");
    $(".product-price__container").html("");
    MakeProductCard(1);
    inputProductData(0, 2);
  } else if (
    $(".input").val() === "시" ||
    $(".input").val() === "한" ||
    $(".input").val() === "세" ||
    $(".input").val() === "큘" ||
    $(".input").val() === "이" ||
    $(".input").val() === "터"
  ) {
    $(".product-card__container").html("");
    $(".product-price__container").html("");
    MakeProductCard(1);
    inputProductData(0, 3);
  }
});
