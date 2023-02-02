let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//MOD
const prodTienda = document.getElementById('prodTienda');
const carritoCompras = document.getElementById('imgCarrito');
const modalCarrito = document.getElementById('modalCarrito');
const numProductos = document.getElementById('numProductos');

productos.forEach((producto) => {
    let contenido = document.createElement('div');
    contenido.className = 'card';
    contenido.innerHTML =
        `
    <img src="${producto.imagen}">
    <h3>${producto.nombre}</h3>
    <p class="p-precio">S/. ${producto.precio}</p>
    `;

    prodTienda.appendChild(contenido);

    const btnComprar = document.createElement('button')
    btnComprar.className = 'btn btn-secondary'
    btnComprar.innerText = 'Comprar';
    contenido.appendChild(btnComprar);

    btnComprar.addEventListener('click', () => {
        const prodRepetido = carrito.some((productRepetido) => productRepetido.id === producto.id)

        if(prodRepetido)
        {
            carrito.map((prod) => 
            {
                if(prod.id === producto.id)
                {
                    prod.cantidad++;
                }
            });            
        }
        else
        {
            carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: producto.cantidad
        })
        }        
        console.log(carrito);
        contProdCarrito();
        dataLocalCarrito();
    })
});

function dataLocalCarrito()
{
    localStorage.setItem('carrito', JSON.stringify(carrito));
}









