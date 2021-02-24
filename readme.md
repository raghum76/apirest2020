Web API Rest
Consultar Productos, Ventas y detalles de la factura de venta.
El sistema consta de 3 tablas
Producto (ID autonimerico, nombre, cantidad, costo)
Venta (ID autonumerico, fecha, RFC, total)
Detalle_Venta (id_prducto, id_venta, cantidad, importe)
Para efectos de este proyecto no se considero importante guardar los datos del cliente.

Al descargar el proyecto ejecutar
>npm install

Ejecutar con 
>node app/server.js

Las rutas serán
urlbase:1339/api/
   productos
   ventas
   
   
