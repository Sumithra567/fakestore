fetch("https://fakestoreapi.com/products").then(response => response.json()).then(products => {
    // Loop through each product
    products.forEach(product => {
      console.log("ID:", product.id);
      console.log("Title:", product.title);
      console.log("Price:", product.price);
      console.log("Category:", product.category);
      console.log("Description:", product.description);
      console.log("Image URL:", product.image);
      
      
      // Optionally, display in the page:
      const div = document.createElement("div");
      div.style.border = "1px solid #ccc";
      div.style.margin = "10px";
      div.style.padding = "10px";
      div.innerHTML = `
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <img src="${product.image}" width="100" />
      `;
      document.body.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
