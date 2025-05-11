// Task 2.1
var DEFAULT_DISCOUNT = 0.25; // Discount 25%

function getProductPrice(product) {
  // If invalid product return 0
  if (!product || !product.price) return 0;
  // Assume discount 25% for all product with quantity greater than 5
  const price =
    product.quantity && product.quantity >= 5
      ? product.price * (1 - DEFAULT_DISCOUNT)
      : product.price;
  return price;
}

function getTotalProductPrice(products) {
  const totalPrice = products.reduce(
    (acc, product) => acc + getProductPrice(product),
    0
  );
  return totalPrice;
}

const products = [
  { name: "product 1", price: 1000, quantity: 3 }, // => price: 1000
  { name: "product 2", price: 1000, quantity: 6 }, // => price: 750
  { name: "product 3", price: 1000 }, // => price: 1000
  { name: "product 4", price: 0, quantity: 3 }, // => price: 0
  { name: "product 5", price: 0, quantity: 6 }, // => price: 0
  { name: "product 6", quantity: 3 }, // => price: 0
  { name: "product 7", price: null, quantity: 3 }, // => price: 0
  null,
];

console.log(getTotalProductPrice(products)); // => price: 2750

// Task 2.2
function initCaroaselItemClick() {
  // get all carousel items
  const carouselItemsImage = document.querySelectorAll(
    ".carousel__item .item__image img"
  );
  const modal = document.getElementById("zoom-modal");
  const btnClose = modal.querySelector("#modal-btn-close");

  if (!carouselItemsImage || carouselItemsImage.length === 0 || !modal) return;

  function openModal(evt) {
    // get image element in item
    const productImg = evt.target;
    const modalImg = modal.querySelector("#image");

    if (!productImg) return;

    const productImgSrc = productImg.getAttribute("src");
    modalImg.setAttribute("src", productImgSrc);

    // change display to flex for show modal
    modal.style.display = "flex";
    //set timeout for wait animation
    setTimeout(() => {
      modal.classList.add("modal--open");
    }, 300);
    // Prevent body scroll
    document.body.classList.add("modal-open");
    // Focus modal when open
    modal.focus();
  }

  function closeModal() {
    //set timeout for wait animation
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
    modal.classList.remove("modal--open");
    document.body.classList.remove("modal-open");
  }

  carouselItemsImage.forEach((elm) => {
    elm.onclick = openModal;
  });

  if (btnClose) {
    btnClose.onclick = closeModal;
  }
}

initCaroaselItemClick();
