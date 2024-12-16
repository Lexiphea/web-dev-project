// Payment method selection
document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
        document.querySelectorAll('.payment-method').forEach(m => {
            m.classList.remove('active');
        });
        method.classList.add('active');

        // Toggle visibility of payment fields
        const paymentFields = document.querySelectorAll('.payment-fields');
        const cardFields = document.querySelectorAll('.card-fields');
        const bankFields = document.querySelectorAll('.bank-fields');
        const ewalletFields = document.querySelectorAll('.ewallet-fields');

       if (method.textContent === 'Bank Transfer') {
            cardFields.forEach(field => field.classList.add('hidden'));
           ewalletFields.forEach(field => field.classList.add('hidden'));
            bankFields.forEach(field => field.classList.remove('hidden'));
        } else if (method.textContent === 'E-Wallet'){
           cardFields.forEach(field => field.classList.add('hidden'));
           bankFields.forEach(field => field.classList.add('hidden'));
           ewalletFields.forEach(field => field.classList.remove('hidden'));
       } else {
           cardFields.forEach(field => field.classList.remove('hidden'));
           bankFields.forEach(field => field.classList.add('hidden'));
          ewalletFields.forEach(field => field.classList.add('hidden'));
       }
    });
});

// Success alert on checkout
document.querySelector('.checkout-button').addEventListener('click', () => {
    alert('Success!');
});

const expiryInput = document.getElementById('expiry-input');

expiryInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Limit to 4 characters
    value = value.substring(0, 4);
    
    // Format with slash
     if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2);
    } else if (value.length === 2){
        value = value.substring(0, 2) + "/";
    }


    e.target.value = value;
});