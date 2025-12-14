fetch("products.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("products");

    data.products.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <div class="category">${p.category}</div>
        <div class="price">$${p.price.toFixed(2)}</div>
        <div class="rating">⭐ ${p.rating} (${p.reviewCount})</div>
        <p>${p.description}</p>
        <div class="stock">Stock: ${p.stock}</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error cargando el JSON:", err);
  });
