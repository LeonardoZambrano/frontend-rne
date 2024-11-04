// Componente MainContent

function Form({ openModal }) {
    return (
        <div>
            <form
                id="form"
                name="form"
                method="post"
                action="/tramites/comun/guia.xhtml;jsessionid=mE2uE37ETDxNw9Qx3PPSHdGqt8zRyb4FFif8Esvv.vm-app8-tramites?jfwid=mE2uE37ETDxNw9Qx3PPSHdGqt8zRyb4FFif8Esvv:0"
                encType="application/x-www-form-urlencoded"
            >
                <input type="hidden" name="form" value="form" />
                <div id="form:messages" className="ui-messages ui-widget" aria-live="polite"></div>
                <Card />
                <TermsTable openModal={openModal} />
                <SubmitButton />
            </form>
        </div>
    );
}

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

function TermsTable({ openModal }) {
    return (
        <div className="text-center">
            <table style={{ border: "0px", background: "none", margin: "0 auto" }}>
                <tbody>
                    <tr>
                        <td>
                            <hr />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="form:msgTerminos" className="ui-messages ui-widget" aria-live="polite"></div>
                            <div id="form:checkTerminos" className="ui-chkbox ui-widget">
                                <input
                                    type="checkbox"
                                    id="form:checkTerminos_input"
                                    name="form:checkTerminos_input"
                                    autoComplete="off"
                                    aria-checked="false"
                                />
                                <span className="ui-chkbox-label">Acepto que he leído los Términos y condiciones *</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" onClick={openModal}>
                                Ver términos y condiciones
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="form:msgHabeas" className="ui-messages ui-widget" aria-live="polite"></div>
                            <div id="form:checkHabeas" className="ui-chkbox ui-widget">
                                <input
                                    type="checkbox"
                                    id="form:checkHabeas_input"
                                    name="form:checkHabeas_input"
                                    autoComplete="off"
                                    aria-checked="false"
                                />
                                <span className="ui-chkbox-label">Autorizo el tratamiento de datos personales</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" onClick={openModal}>
                                Ver política tratamiento de datos personales
                            </a>
                            <hr />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function SubmitButton() {
    return (
        <div className="text-center">
            <button
                id="form:idBtnAceptar"
                name="form:idBtnAceptar"
                className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-disabled"
                style={{ width: "auto" }}
                type="submit"
                disabled
            >
                Ingresar
            </button>
        </div>
    );
}

function ModalRNE({ showModal, closeModal }) {
    if (!showModal) return null;

    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ display: "block" }}>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header header-bg-blue">
                        <h2 className="modal-title">¡Importante!</h2>
                        <button type="button" className="close" onClick={closeModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img
                                        alt="registro de números excluidos"
                                        src="https://tramitescrcom.gov.co/img/pieza_RNE.jpg"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn activo-menu-lateral" onClick={closeModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MainContent({ showModal, openModal, closeModal }) {
    return (
        <div className="container">
            <Form openModal={openModal} />
            <ModalRNE showModal={showModal} closeModal={closeModal} />
        </div>

    );
}

export default MainContent;