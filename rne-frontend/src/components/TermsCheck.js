import React from "react";
import TermsRow from "./TermsRow"; // Importa el subcomponente

function TermsCheck({ openModal }) {


    const termsCondModal = () => {
        openModal({ title: "Excelente 1", body: <h2>EXcelente 1</h2> })
    }
    const policeSensModal = () => {
        openModal({ title: "Excelente 2", body: <h2>EXcelente 2</h2> })
    }


    return (
        <div className="text-center">
            <table style={{ border: "0px", background: "none", margin: "0 auto" }}>
                <tbody>
                    <tr>
                        <td>
                            <hr />
                        </td>
                    </tr>

                    {/* Fila de Términos y Condiciones */}
                    <TermsRow id="form:checkTerminos_input" text="Acepto que he leido" isCheckbox={true} />

                    {/* Enlace para ver términos y condiciones */}
                    <TermsRow text="Ver términos y condiciones" onClick={termsCondModal} isCheckbox={false} />

                    {/* Fila de Autorización de Tratamiento de Datos */}
                    <TermsRow
                        id="form:checkHabeas_input"
                        text="Autorizo el tratamiento de datos personales"
                        isCheckbox={true}
                    />

                    {/* Enlace para ver política de tratamiento de datos */}
                    <TermsRow text="Ver política tratamiento de datos personales" onClick={policeSensModal} isCheckbox={false} />

                    <tr>
                        <td>
                            <hr />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TermsCheck;
