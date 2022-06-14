import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { deleteContactoXId, getContactosJSON } from "./ApiFunciones";
import Contacto from "./Contacto";
import { Navigation } from "./Navigation";


export const TablaAgenda = () => {
    const [contactos, setContactos] = useState<Contacto[]>([]);

    const getContactos = async () => {
        let datos: Contacto[] = await getContactosJSON();
        setContactos(datos);
    }

    useEffect(() => {
        getContactos();
    }, []);

    const deleteContacto = async (id: number) => {
        await deleteContactoXId(id);
        window.location.reload();
    }
    return (


    //     <>
    //     <Navigation></Navigation>
    //     <Container fluid>
    //       <br/>
    //       <Button href={'/formulario/0'} variant="outline-primary">Nuevo</Button>
    //       < Row>
    //           <Col md={0}>
    //           <b>ID</b>
    //           </Col>
    //           <Col md={2}>
    //           <b>Foto</b>
    //           </Col>
    //           <Col md={0}>
    //           <b>Apellido</b>
    //           </Col>
    //           <Col md={0}>
    //           <b>Nombre</b>
    //           </Col>
    //           <Col md={0}>
    //           <b>Telefono</b>
    //           </Col>
    //           <Col md={0}>
    //           <b>Email</b>
    //           </Col>
    //           <Col md={0}>
    //           <b>Modificar</b>
    //           </Col>
    //           <Col md={0}>
    //           <b>Eliminar</b>
    //           </Col>
    //       </Row>
    //     {contactos.map((contacto:Contacto) => 
    //       <Row key={contacto.id}>
    //           <Col md={0}>
    //           {contacto.id}
    //           </Col>
    //           <Col md={2}>
    //           <img src={contacto.fotourl} height="50px"></img>
    //           {/* {contacto.fotourl} */}
    //           </Col>
    //           <Col md={0}>
    //           {contacto.apellido}
    //           </Col>
    //           <Col md={0}>
    //           {contacto.nombre}
    //           </Col>                
    //           <Col md={0}>
    //           {contacto.telefono}
    //           </Col>
    //           <Col md={0}>
    //           {contacto.email}
    //           </Col>                
    //           <Col md={0}>
    //           <Button variant="outline-warning" href={'/formulario/' + contacto.id}>Modificar</Button>
    //           </Col>
    //           <Col md={0}>
    //           <Button variant="outline-danger" onClick={(e) => deleteContacto(contacto.id)}>Eliminar</Button>
    //           </Col>
    //       </Row>
    //          )}
    //     </Container>
    //   </>

        <>
            <h1> Agenda de Contactos </h1>

            <Button href={'/formulario/0'} variant="primary"> Nuevo </Button>

            <div className="grid-container-agenda">
                <table>
                    <thead>
                        <tr>
                            <th className="grid-item-agenda">Foto</th>
                            <th className="grid-item-agenda">Apellido</th>
                            <th className="grid-item-agenda">Nombre</th>
                            <th className="grid-item-agenda">Telefono</th>
                            <th className="grid-item-agenda">Email</th>
                            <th className="grid-item-agenda"></th>
                            <th className="grid-item-agenda"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactos !== null ? (
                            contactos.map((contacto: Contacto) => {
                                return (
                                    <tr key={contacto.id}>
                                        <td className="grid-item"><img src={contacto.fotourl} /></td>
                                        <td className="grid-item">{contacto.apellido}</td>
                                        <td className="grid-item">{contacto.nombre}</td>
                                        <td className="grid-item">{contacto.telefono}</td>
                                        <td className="grid-item">{contacto.email}</td>
                                        <td className="grid-item"> <Button variant="warning" href={'/formulario/' + contacto.id}> Modificar </Button> </td>
                                        <td className="grid-item"> <Button variant="danger" onClick={(e) => deleteContacto(contacto.id)}> Eliminar </Button></td>
                                    </tr>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </tbody>
                </table>
            </div>

        </>
    );
};