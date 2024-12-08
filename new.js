let wishlistItems = [];
  
  function addToWishlist(product) {
    wishlistItems.push(product);
    updateWishlist();
  }
  
  function updateWishlist() {
    const wishlistElement = document.getElementById('wishlistItems');
    wishlistElement.innerHTML = '';
    
    for (let i = 0; i < wishlistItems.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = wishlistItems[i];
      wishlistElement.appendChild(listItem);
    }
  }
  