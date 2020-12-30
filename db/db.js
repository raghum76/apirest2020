class db{
    constructor(){
        this.datos={clientes:[],proveedores:[]};
    }
    agregarCliente (dato){
        this.datos.clientes.push(dato);
    }
    listarClientes(){
        return this.datos.clientes;
    }
}
module.exports=new db();