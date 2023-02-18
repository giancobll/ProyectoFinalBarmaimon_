let carrito = [];

window.addEventListener('DOMContentLoaded', () =>
{
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    traerProductos();
})

//MOD
const prodTienda = document.getElementById('prodTienda');
const carritoCompras = document.getElementById('imgCarrito');
const modalCarrito = document.getElementById('modalCarrito');
const numProductos = document.getElementById('numProductos');

async function traerProductos()
{
    try 
    {
        const product = await fetch('./productos.json')
        const resp = await product.json()   
        imprimirProductos(resp)       
    } 
    catch (error) 
    {
        console.log(error);        
    }   
}

/* traerProductos(); */

function imprimirProductos(prods)
{
    prods.forEach((producto) => {
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
}

function dataLocalCarrito()
{
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


const promesa = new Promise((resolve,reject) =>
{
    setTimeout(() =>
    {
        if(carrito.length > 0)
        {
            resolve(alertaOk());
        }
        else
        {
            reject(alertaX());
        }
    },900000)
})

function alertaOk()
{
    Toastify({
        text: "Culminar el proceso de compra!",
        duration: 180000,
        close: true,              
        stopOnFocus: false,            
        }).showToast();
}

function alertaX()
{
    Toastify({
        text: "Agregar productos al carrito!",
        duration: 180000,
        close: true,               
        stopOnFocus: false,            
        }).showToast();
}








