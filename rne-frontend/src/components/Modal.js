// Componente Modal
function Modal({ showModal, closeModal }) {
    if (!showModal) return null;

    return (
        <div className="modal fade show d-block" tabindex="-1" role="dialog">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header header-bg-blue">
                        <h2 className="modal-title">Términos y condiciones</h2>
                        <button type="button" className="close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h4>1. Del Servicio</h4>
                        <p>
                            El Registro de Números Excluidos - RNE - es un servicio que
                            administra la CRC en el que se pueden inscribir los consumidores...
                        </p>
                        <h4>2. De Las Responsabilidades de la CRC</h4>
                        <p>La Comisión de Regulación de Comunicaciones es la encargada...</p>
                        {/* Agrega el contenido completo aquí */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
