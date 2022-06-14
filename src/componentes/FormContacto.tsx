import React from "react"
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getContactoXId, saveContacto } from "./ApiFunciones";
import Contacto from "./Contacto";
import { Navigation } from "./Navigation";

export const FormContacto = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [contacto, setContacto] = useState<Contacto>(new Contacto());


    const getContacto = async () => {
        console.log(id);

        if (Number(id) != 0) {
            let contactoSelect: Contacto | undefined = await getContactoXId(Number(id));
            console.log("getContactoXId", contactoSelect);
            if (contactoSelect != undefined) {
                setContacto(contactoSelect);
            }

        } else {
            let contactoSelect: Contacto = new Contacto();
            setContacto(contactoSelect);
            console.log(contactoSelect);
        }

    }

    useEffect(() => {
        getContacto();
    }, []);

    const save = async () => {
        console.log(contacto.nombre);
        await saveContacto(contacto);
        navigate('/tabla');
        window.location.reload();
    }

    return (
        <>
            <Navigation />
            <div className="center">
                <Form className="form-control">

                    <Form.Group className="mb-3" controlId="formApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese el apellido" defaultValue={contacto?.apellido} onChange={e => contacto.apellido = String(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese el nombre" defaultValue={contacto?.nombre} onChange={e => contacto.nombre = String(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTelefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese el teléfono" defaultValue={contacto?.telefono} onChange={e => contacto.telefono = Number(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese el email" defaultValue={contacto?.email} onChange={e => contacto.email = String(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formImagen">
                        <Form.Label>Url Imagen</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese  url de imagen" defaultValue={contacto?.fotourl} onChange={e => contacto.fotourl = String(e.target.value)} />
                    </Form.Group>

                    <br />
                    <br /><br />

                    <Button onClick={save} variant="primary" type="button">
                        Guardar
                    </Button>
                </Form>
            </div>
        </>
    );

}