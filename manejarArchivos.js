let fs = require("fs");
let path = require("path")
let archivo = 'archivos.txt';


class HandlerDocuments{
    constructor(productos){
        this.listProducto=productos;  
    }

    save(producto){   
        appendFiles(producto);
    }

    getById(id){
        fs.readFile(archivo, (err, data) => {
            if (err) throw err;
            let prods = JSON.parse(data);
            let productos = JSON.stringify(prods).split(',');
            console.log(productos);
            let producto = productos.find(prod => prod.id == id);
           
        });
    }  
    getAll(){
        try{
            await fs.promises.readFile(archivo, (err, data) => {
                let prods = JSON.parse(data);
                console.log(prods);
            
            });
        }catch(error){
            console.log(error);
        }
    } 
    deleteById(id){      
    }
    deleteAll(){
        fs.unlink(path.join(__dirname, archivo), (err) => {
            if (err) throw err;
            console.log('Se eliminaron todos los productos');
        });

    }
   
    
}
  