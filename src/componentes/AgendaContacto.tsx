import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Contacto from "./Contacto";
import { deleteContactoXId, getContactosJSON, getContactosXIndice } from "./ApiFunciones";
import { Navigation } from "./Navigation";
import '../App.css';
import { useParams } from "react-router-dom";

export const AgendaContacto = () => {

  const { indice } = useParams();

  const [contactos, setContactos] = useState<Contacto[]>([]);

  const getContactos = async () => {
    if (indice && indice != "") {
      let datos: Contacto[] = await getContactosXIndice(indice);
      setContactos(datos);
    }
    else {
      let datos: Contacto[] = await getContactosXIndice("a");
      setContactos(datos);
    }
  }

  useEffect(() => {
    getContactos();
  }, []);


  return (
    <>
      <Navigation></Navigation>

      <h1>Agenda de Contactos</h1>

      <div className="grid-container-agenda">
        <div className="grid-item-agenda">Foto</div>
        <div className="grid-item-agenda">Apellido</div>
        <div className="grid-item-agenda">Nombre</div>
        <div className="grid-item-agenda">Telefono</div>
        <div className="grid-item-agenda">Email</div>

        {contactos.map((contacto: Contacto) =>
          <><div className="grid-item"><img src={contacto.fotourl}></img></div>
            <div className="grid-item">{contacto.apellido}</div>
            <div className="grid-item">{contacto.nombre}</div>
            <div className="grid-item">{contacto.telefono}</div>
            <div className="grid-item">{contacto.email}</div></>
        )}
      </div>

      <h3>Búsqueda por Indice</h3>
      <div className="grid-container">
        <div className="grid-item"><a href="http://localhost:3000/agenda/a">A</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/b">B</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/c">C</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/d">D</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/e">E</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/f">F</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/g">G</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/h">H</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/i">I</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/j">J</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/k">K</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/l">L</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/m">M</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/n">N</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/ñ">Ñ</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/o">O</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/p">P</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/q">Q</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/r">R</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/s">S</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/t">T</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/u">U</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/v">V</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/w">W</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/x">X</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/y">Y</a></div>
        <div className="grid-item"><a href="http://localhost:3000/agenda/z">Z</a></div>
      </div>
    </>
  )


}