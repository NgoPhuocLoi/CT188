// BT1
const headerInput = document.querySelector(".header-input");
const headerSearchBtn = document.querySelector(".header-search-btn1");
const headerForm = document.querySelector(".header-form");

headerForm.onsubmit = (e) => {
  e.preventDefault();
};

const handleSubmit = () => {
  if (headerInput.value.trim()) {
    headerForm.submit();
  }
};

headerInput.addEventListener("keypress", (e) => {
  if (e.charCode === 13) handleSubmit();
});
headerSearchBtn.addEventListener("click", handleSubmit);

const handleShow = () => {
  const url = new URL(window.location);
  const word = url.searchParams.get("words");
  document.querySelector(".search-word").innerText = word;
};

// BT2

const forms = document.querySelectorAll(".form");
forms.forEach((form) => {
  form.addEventListener("submit", () => {
    alert("Đã gửi dữ liệu");
  });
});

// BT 3

var itemList = {
  sp001: {
    name: "Sữa Chua Vị Kiwi",
    price: 21000,
    photo: "images/sanpham/kiwi.jpg",
  },
  sp002: {
    name: "Sữa Chua Vị Xoài",
    price: 22000,
    photo: "images/sanpham/mango.jpg",
  },
  sp003: {
    name: "Sữa Chua Vị Dưa lưới",
    price: 23000,
    photo: "images/sanpham/cantaloupe.jpg",
  },
  sp004: {
    name: "Sữa Chua Vị Mâm Xôi",
    price: 24000,
    photo: "images/sanpham/blackberry.jpg",
  },
  sp005: {
    name: "Sữa Chua Vị Dâu Tây",
    price: 25000,
    photo: "images/sanpham/strawberry.jpg",
  },
  sp006: {
    name: "Sữa Chua Vị Việt Quất",
    price: 26000,
    photo: "images/sanpham/blueberry.jpg",
  },
  sp007: {
    name: "Sữa Chua Vị Bưởi",
    price: 27000,
    photo: "images/sanpham/grapes.jpg",
  },
  sp008: {
    name: "Sữa Chua Vị Táo Xanh",
    price: 28000,
    photo: "images/sanpham/green-apple.jpg",
  },
  sp009: {
    name: "Sữa Chua Vị Dứa",
    price: 29000,
    photo: "images/sanpham/pineapple.jpg",
  },
};

const addToCartBtns = document.querySelectorAll(".js-addToCartBtn");

function addCart(code, amount) {
  if (typeof localStorage[code] === "undefined")
    localStorage.setItem(code, amount);
  else {
    if (Number(localStorage[code]) + +amount > 100) {
      localStorage[code] = 100;
      alert("Qua 100 sp");
    } else {
      localStorage.setItem(code, Number(localStorage[code]) + Number(amount));
    }
  }
}

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const amount = e.currentTarget.parentElement.firstElementChild.value;
    addCart(e.currentTarget.getAttribute("code"), amount);
  });
});
