class detalle_venta{
    constructor(id_venta, id_producto, cantidad, costo){
        this.id_venta=id_venta;
        this.id_producto=id_producto;
        this.cantidad=cantidad;
        this.costo=costo;
        this.monto_venta=cantidad*costo;
    }
}
module.exports=detalle_venta;