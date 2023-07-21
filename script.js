let products = [];

function addProduct() {
  const productName = document.getElementById('product-name').value;
  const productDescription = document.getElementById('product-description').value;

  if (productName.trim() !== '' && productDescription.trim() !== '') {
    products.push({ name: productName, description: productDescription });
    renderProductList();
    clearForm();
  }
}

function renderProductList() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach((product) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${product.name}</strong>: ${product.description}`;
    productList.appendChild(listItem);
  });
}

function sendOrder() {
  if (products.length === 0) {
    alert('Adicione produtos à lista antes de enviar o pedido.');
    return;
  }

  const phoneNumber = '+55 69 99605-6992';
  let message = 'Olá! Gostaria de fazer um pedido dos seguintes produtos:\n';

  products.forEach((product) => {
    message += `- ${product.name}: ${product.description}\n`;
  });

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappLink, '_blank');
}

function clearForm() {
  document.getElementById('product-name').value = '';
  document.getElementById('product-description').value = '';
}

