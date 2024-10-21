document.addEventListener('DOMContentLoaded', () => {
    const sizeDropdown = document.getElementById('product-size');
    const purchaseBtn = document.getElementById('purchase-btn');
    const priceDisplay = document.getElementById('product-price');
    
    const sizePriceMap = {
        small: 20,
        medium: 25,
        large: 30 // Assuming large is out of stock, price won’t matter
    };

    // Event listener for size selection
    sizeDropdown.addEventListener('change', (event) => {
        const selectedSize = event.target.value;
        if (selectedSize === 'large') {
            purchaseBtn.disabled = true;
            alert('Large size is out of stock!');
        } else {
            const updatedPrice = sizePriceMap[selectedSize];
            priceDisplay.textContent = `$${updatedPrice}.00`;
            purchaseBtn.disabled = false;
        }
    });

    // Checkout event listener
    purchaseBtn.addEventListener('click', () => {
        const selectedSize = sizeDropdown.value;
        if (selectedSize !== 'large') {
            alert('Purchase successful!');
        }
    })});