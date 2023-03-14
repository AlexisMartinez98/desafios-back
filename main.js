class productManager {
    constructor (){
        this.products = [];
    }

    static id = 0;

    addProduct (title, description, price, image, code, stock) {

        for (let i = 0; i<this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`el CODE: "${code}" ya existe`);
                break;
            }
        }

        const newProduct = {
            title,
            description,
            price,
            image,
            code,
            stock,
        }

        if(!Object.values(newProduct).includes(undefined)) {
            productManager.id++;
        this.products.push({
            ...newProduct,
            id: productManager.id
        });
        }else {
            console.log('Todos los campos son obligatorios');
        }

    }
    getProduct () {
        return this.products;
    }

    existe (id){
        return this.products.find(product => product.id === id);
    }

    getProductById (id){

        !this.existe(id) ? console.log('Not Found') : console.log(this.existe(id));

        // if (!this.existe(id)) {
        //     console.log('Not Found');
        // }else {
        //     console.log(this.existe(id));
        // }
    }
}


const productos = new productManager();
// vacio
console.log(productos.getProduct());
// agrego
productos.addProduct('Producto 1', 'Descripcion 1', 100, 'imagen1.jpg', 'codigo1', 10);
productos.addProduct('Producto 2', 'Descripcion 2', 200, 'imagen2.jpg', 'codigo2', 20);

// muestro productos
console.log(productos.getProduct());
// busco productos
productos.getProductById(2);
// code no se puede repetir
productos.addProduct('Producto 2', 'Descripcion 2', 200, 'imagen2.jpg', 'codigo2', 20);
// campos obligatarios
productos.addProduct('Producto 2', 'Descripcion 2', 200, 'codigo2');


