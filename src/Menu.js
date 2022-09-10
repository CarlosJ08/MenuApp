import React, { useState } from 'react'
import { Button, CardGroup, Row } from 'react-bootstrap';
import { Cards } from './componentes/cards/Cards';
import './Menu.css';
export const Menu = () => {
    const [Productos, setProductos] = useState([{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    }, {
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    }, {
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    }, {
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    },{
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    }]);
    const obj = {
        Titulo: "Titulo",
        Descripcion: "Descripcion",
        Precio: "20.00",
        Imagen: "Img"
    }

    console.log(Productos);


    return (
        <div className='Menu'>
            <Row xs={1} md={2} className="g-4">
                {Productos.map(item => <Cards {...item}></Cards>)}
            </Row>
        </div>

    )
}
