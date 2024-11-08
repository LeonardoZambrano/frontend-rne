import React from "react";

function Card() {
    return (
        <div id="contenidos" className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">Registro de Números Excluidos (RNE) de la página de Trámites CRC</h2>
                        </div>
                        <div className="card-body">
                            <p>
                                La Resolución CRC 5050 de 2016 establece que los usuarios pueden inscribir gratuitamente el número
                                de su línea celular en el RNE para evitar la recepción de mensajes cortos de texto (SMS) con fines
                                publicitarios o comerciales...
                            </p>
                            <ul>
                                <li>La inscripción en el RNE no implica que el usuario no recibirá mensajes relacionados...</li>
                                <li>La inscripción en el RNE no implica la no prestación de servicios de mensajes comerciales...</li>
                                <li>En cualquier momento puede solicitar a su operador la exclusión, rectificación, confidencialidad...</li>
                                <li>En cualquier momento, puede solicitar de forma gratuita que su número telefónico sea eliminado...</li>
                            </ul>
                            <p>
                                En este contexto, si desea registrarse en el RNE <strong>deberá crear un usuario y contraseña</strong>.
                            </p>
                            <p>
                                Si desea conocer el paso a paso de cómo realizar el registro en la plataforma, ingrese al siguiente
                                enlace: <br />
                                <a href="https://www.youtube.com/watch?v=96RwePOat8o" target="_blank" rel="noreferrer">
                                    video paso a paso
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;