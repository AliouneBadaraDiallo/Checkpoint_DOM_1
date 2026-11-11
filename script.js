const totalEl = document.querySelector(".total");
const list = document.querySelector(".list-products");

list.addEventListener("click", (e) => {
  const icon = e.target.closest("i");
  if (!icon) return;

  const card = icon.closest(".card");
  const quantityEl = card.querySelector(".quantity");

  if (icon.classList.contains("fa-plus-circle")) {
    // 1. Ajuster la quantité des articles
    quantityEl.textContent = Number(quantityEl.textContent) + 1;
  } else if (icon.classList.contains("fa-minus-circle")) {
    const current = Number(quantityEl.textContent);
    if (current > 0) quantityEl.textContent = current - 1;
  } else if (icon.classList.contains("fa-trash-alt")) {
    
    // 2. Supprimer les articles du panier
    card.parentElement.remove();
  } else if (icon.classList.contains("fa-heart")) {
    
    // 3. Aimer des articles
    icon.classList.toggle("liked");
  }

  // 4. Mettre à jour le prix total après chaque action
  updateTotal();
});
function updateTotal() {
  let sum = 0;
  list.querySelectorAll(".card").forEach((card) => {
    const price = parseFloat(card.querySelector(".unit-price").textContent);
    const qty = parseInt(card.querySelector(".quantity").textContent);
    sum += price * qty;
  });
  totalEl.textContent = `${sum} $`;
}