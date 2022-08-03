const productos = [
    {
        id: 1,
        name: "Remera",
        price: 750
    },
    {
        id: 2,
        name: "Campera",
        price: 2500
    }
]

const id = prompt("Eliga un producto: 1 para Remera ($750) o 2 para Campera ($2500)")

const cantidad = prompt("Eliga la cantidad que desea comprar")

const carrito = []

const calcularCarrito = (id, cant) => {
    const prod = productos.find(prod=>prod.id==id)
    carrito.push({prod,cant})
    console.log(carrito[0]);
    return alert("Eligio el producto: " + carrito[0].prod.name + " y la cantidad: " + carrito[0].cant+", el total es: "+carrito[0].prod.price*carrito[0].cant)
}

calcularCarrito(id, cantidad)

