import React from "react";
import Card from "./Card";
import TermsCheck from "./TermsCheck";

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

function Form({ openModal }) {
    return (
        <div>
            <input type="hidden" name="form" value="form" />
            <Card />
            <TermsCheck openModal={openModal} />
            <SubmitButton />
        </div>
    );
}

export default Form;