import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Cards.css';
export const Cards = ({ Titulo, Imagen, Precio, Descripcion }) => {
    return (
        <>

            <Card className='Card' style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg" />
                <Card.Body>
                    <Card.Title>{Titulo}</Card.Title>
                    <Card.Text>
                        {Descripcion}
                    </Card.Text>
                    <Card.Text>
                        <b>  {Precio} </b>
                       
                    </Card.Text>
                    <Button variant="success">Agregar al carrito</Button>
                </Card.Body>
            </Card>

        </>
    )
}
