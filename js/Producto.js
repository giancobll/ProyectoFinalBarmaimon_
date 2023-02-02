class Producto {
    id;
    nombre;
    precio;
    imagen;
    cantidad;
    
    constructor(id, nombre, precio, imagen, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
}

let productos = []

productos.push(new Producto('1','Pechera Simple',18,'./img/img productos pag/1pechera.png',1))
productos.push(new Producto('2','Pechera Azul',25,'./img/img productos pag/2pechera.png',1))
productos.push(new Producto('3','Pechera de Cuero',30,'./img/img productos pag/3pechera.png',1))
productos.push(new Producto('4','Correa Simple',13,'./img/img productos pag/4correa.png',1))
productos.push(new Producto('5','Correa Doble',16,'./img/img productos pag/5correa.png',1))
productos.push(new Producto('6','Correa Larga',18,'./img/img productos pag/6correa.jpg',1))
productos.push(new Producto('7','Bravecto 2-4.5kg',115,'./img/img productos pag/7pastilla.jpg',1))
productos.push(new Producto('8','Bravecto 4.5-10kg',135,'./img/img productos pag/8pastilla.jpg',1))
productos.push(new Producto('9','Bravecto 20-40kg',185,'./img/img productos pag/9pastilla.jpg',1))
productos.push(new Producto('10','Plato Doble',12,'./img/img productos pag/10plato.jpg',1))
productos.push(new Producto('11','Plato Antiestres',18,'./img/img productos pag/11plato.jpg',1))
productos.push(new Producto('12','Plato de Acero',25,'./img/img productos pag/12plato.jpg',1))
productos.push(new Producto('13','Cama Dona',35,'./img/img productos pag/13cama.jpg',1))
productos.push(new Producto('14','Cama XL',55,'./img/img productos pag/14cama.png',1))
productos.push(new Producto('15','Cool Mat',65,'./img/img productos pag/15cama.png',1))


console.log(productos);

