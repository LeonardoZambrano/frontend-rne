import React from "react";

function TermsRow({ id, text, onClick, isCheckbox }) {
    return (
        <tr>
            <td>
                {isCheckbox ? (
                    <div className="ui-chkbox ui-widget">
                        <input
                            type="checkbox"
                            id={id}
                            name={id}
                            autoComplete="off"
                            aria-checked="false"
                        />
                        <span className="ui-chkbox-label">{text}</span>
                    </div>
                ) : (
                    <a href="#" onClick={onClick}>
                        {text}
                    </a>
                )}
            </td>
        </tr>
    );
}

export default TermsRow;