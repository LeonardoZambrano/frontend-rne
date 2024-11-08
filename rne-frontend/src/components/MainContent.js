import React, { useState, useEffect } from "react";
import Form from "./Form";
import Modal from "./Modal";

function MainContent() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content); // Configura el contenido del modal
        setIsModalOpen(true); // Abre el modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Cierra el modal
        setModalContent(null); // Limpia el contenido del modal
    };

    useEffect(() => {
        // Mostrar el modal solo la primera vez que se carga la vista{}
        const timer = setTimeout(() => {
            openModal({
                title: "Excelente 3",
                body: <div className="container-fluid">
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
            });
        }, 500);
        // Limpia el timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            <Form openModal={openModal} />
            <Modal showModal={isModalOpen} closeModal={closeModal} content={modalContent} />
        </div>

    );
}

export default MainContent;