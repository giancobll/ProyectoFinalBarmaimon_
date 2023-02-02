function llenarCarrito()
{
    modalCarrito.innerHTML = '';
    modalCarrito.style.display = 'flex';

    const modalHeader = document.createElement('div')
    modalHeader.className = 'modal-header'
    modalHeader.innerHTML =
        `
    <h1 class="h1-modal">Carrito</h1>    
    `;
    modalCarrito.appendChild(modalHeader);

    const btnModal = document.createElement('h1');
    btnModal.innerText = 'Cerrar';
    btnModal.className = 'btn-modal btn btn-danger'
    btnModal.addEventListener('click', () => {
        modalCarrito.style.display = 'none';
    })

    modalHeader.appendChild(btnModal);

    carrito.forEach((producto) => {
        let carritoMain = document.createElement('div');
        carritoMain.className = 'carrito-main';
        carritoMain.innerHTML =
            `
        <img src="${producto.imagen}">
        <h3>${producto.nombre}</h3>
        <p>S/. ${producto.precio}</p>            
        <p>Cantidad:   ${producto.cantidad}</p>
        <span class="span-restar">➖</span>  
        <span class="span-sumar">➕</span>        
        <p>Total: S/. ${producto.cantidad * producto.precio}</p>
        <span class="borrar-producto">❌</span> 
        `;    

        modalCarrito.appendChild(carritoMain);

        let restarProd = carritoMain.querySelector('.span-restar');
        restarProd.addEventListener("click", () => 
        {
            if(producto.cantidad !== 1)
            {
                producto.cantidad--                
            }
            dataLocalCarrito();
            llenarCarrito();            
        });

        let sumarProd = carritoMain.querySelector('.span-sumar');
        sumarProd.addEventListener('click', () => 
        {
            producto.cantidad++
            dataLocalCarrito();
            llenarCarrito();  
        });

        let borrarProd = carritoMain.querySelector('.borrar-producto');
        borrarProd.addEventListener('click', () =>
        {
            eliminarProdCarrito(producto.id);
        })        
    });

    const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0);
       
    const totalCarrito = document.createElement('div');
    totalCarrito.className = 'total-carrito';
    totalCarrito.innerHTML = `Total a pagar: S/. ${total} soles`;
    modalCarrito.appendChild(totalCarrito);

    const btnFinalCompra = document.createElement('button');
    btnFinalCompra.innerText = 'Finalizar Compra';
    btnFinalCompra.className = 'btn-final-compra btn btn-success';
    totalCarrito.appendChild(btnFinalCompra);
    btnFinalCompra.addEventListener('click', () =>
    {
        if(carrito.length === 0)
        {
            Swal.fire(
                {
                    title: "¡No tienes productos en tu carrito!",
                    text: "Agregar productos para continuar con la compra",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                })   
                modalCarrito.innerHTML = '';                           
        }        
        else
        {
            Swal.fire
            ({
                title: "¡Compra Exitosa!",
                text: `Tu compra fue de S/. ${total} soles. Muchas gracias, regresa pronto.`,                                
                icon: "success",
                confirmButtonText: "Aceptar",                
            })
            localStorage.clear();           
        }
        carrito.length = []
        contProdCarrito();        
        llenarCarrito();
        modalCarrito.innerHTML = '';       
        
    })
}

carritoCompras.addEventListener('click', llenarCarrito);

function eliminarProdCarrito(id)
{
    const buscarProd = carrito.find((prod) => prod.id === id);

    carrito = carrito.filter((carritoId) => 
    {
        return carritoId != buscarProd;
    });
    contProdCarrito();
    dataLocalCarrito();
    llenarCarrito();
}

function contProdCarrito()
{
    numProductos.style.display = 'block';

    const tamCarrito = carrito.length;

    localStorage.setItem('tamCarrito', JSON.stringify(tamCarrito));

    numProductos.innerText = JSON.parse(localStorage.getItem('tamCarrito'));
}

contProdCarrito();

