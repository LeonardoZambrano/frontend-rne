import React from "react";

// Componente Modal
export const Modal = ({ showModal, closeModal, content }) => {
    if (!showModal) return null;

    return (
        <div className="modal fade show d-block" tabindex="-1" role="dialog">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header header-bg-blue">
                        <h2 className="modal-title">{content.title}</h2>
                    </div>
                    <div className="modal-body">
                        {content.body}
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
