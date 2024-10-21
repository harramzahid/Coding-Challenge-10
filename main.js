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

//Taslk 4 Create a Checkout Event
// Creating the checkout event listener
purchaseBtn.addEventListener('click', () => {
    const selectedOption = sizeDropdown.options[sizeDropdown.selectedIndex];
    const inStock = selectedOption.getAttribute('data-stock') === 'true';
    
    if (inStock) {
        alert('Your purchase is confirmed');
    } else {
        alert('We are sorry, this product is unavailable.');
    }
});

//Task 5 Implement Event Delegation for Dynamic Product List
const addProductForm = document.getElementById('add-product-form');
    addProductForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newProductName = document.getElementById('new-product-name').value;
        const newProductPrice = document.getElementById('new-product-price').value;
        const newProductSize = document.getElementById('new-product-size');
        const selectedOption = newProductSize.options[newProductSize.selectedIndex];
        const inStock = selectedOption.getAttribute('data-stock') === 'true';

        const newOption = document.createElement('option');
        newOption.text = `${newProductName} - $${newProductPrice}`;
        newOption.setAttribute('data-price', newProductPrice);
        newOption.setAttribute('data-stock', inStock);

        sizeDropdown.add(newOption);

        alert('New product included!');
    });
    //

