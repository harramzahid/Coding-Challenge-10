//Task 2 Add Event Listeners for Product Selection
document.addEventListener('DOMContentLoaded', () => {
    const sizeDropdown = document.getElementById('product-size');
    const priceDisplay = document.getElementById('product-price');
    const purchaseBtn = document.getElementById('purchase-btn');

    // Event listener for size selection
    sizeDropdown.addEventListener('change', (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const price = selectedOption.getAttribute('data-price');
        
        // Now we update the product price
        priceDisplay.textContent = `$${price}.00`;

        //Now we are enabling and disabing the buttons 
        const inStock = selectedOption.getAttribute('data-stock') === 'true';
        purchaseBtn.disabled = !inStock;
    });
});

// Task 3 is already performed by the code in Task 2 in the last part where we show the stock activity

