
    // Variables del carrito
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');

    // Función para actualizar el carrito
    function updateCart() {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="text-center">El carrito está vacío.</p>';
            return;
        }

        const itemList = cart.map(item => `<p>${item.name} - $${item.price}</p>`).join('');
        cartItems.innerHTML = itemList;
    }

    // Agregar eventos a los botones
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.dataset.name;
            const price = e.target.dataset.price;
            cart.push({ name, price });
            updateCart();
        });
    });

    // Vaciar el carrito
    clearCartButton.addEventListener('click', () => {
        cart.length = 0;
        updateCart();
    });

    // Inicializar el carrito vacío
    updateCart();
