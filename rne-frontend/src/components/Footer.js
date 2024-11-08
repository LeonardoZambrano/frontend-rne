import React from "react";

// Componente Footer
function Footer() {
    return (
        <footer>
            <footer class="hf_footer">
                <div class="container">
                    <div class="footer-info">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <h2>Comisión de Regulación de Comunicaciones</h2>
                                <ul class="list-unstyled">

                                    <li class="title">Sede principal</li>
                                    <li class="info">Dirección: Cl 59 a bis # 5 - 53, Ed Link
                                        Siete Sesenta P9 Bogotá, Colombia.</li>
                                    <li class="info">Código Postal: 11011</li>
                                    <li class="info">Horario de Atención: 8:30 a.m. a 5:30 p.m.
                                        en jornada continua</li>
                                </ul>

                                <ul class="list-unstyled">
                                    <li class="title">Contacto</li>
                                    <li class="info">Línea atención al ciudadano: (+57) 601 319
                                        8300</li>
                                    <li class="info">Línea gratuita nacional: 01-8000-919278</li>
                                    <li class="info">Fax: (+57) 601 319 8301</li>
                                </ul>

                                <ul class="list-unstyled">
                                    <li class="title">Correo Institucional</li>
                                    <li class="info"><a class="body1" href="mailto:atencioncliente@crcom.gov.co"
                                        target="_blank" data-toggle="tooltip"
                                        title="Enviar correo a atencioncliente@crcom.gov.co">atencioncliente@crcom.gov.co</a>
                                    </li>
                                </ul>

                                <ul class="list-unstyled">
                                    <li class="title">Correo de notificaciones judiciales</li>
                                    <li class="info"><a href="mailto:notificacionesjudiciales@crcom.gov.co"
                                        title="Enviar correo a notificacionesjudiciales@crcom.gov.co">notificacionesjudiciales@crcom.gov.co</a>
                                    </li>
                                </ul>

                                <ul class="list-unstyled">
                                    <li class="title">Línea anticorrupción</li>
                                    <li class="info"><a href="mailto:transparencia@crcom.gov.co"
                                        title="Enviar correo a transparencia@crcom.gov.co">transparencia@crcom.gov.co</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <div class="d-flex justify-content-center">
                                    <a href="https://www.crcom.gov.co/es"
                                        title="Página web de la Comisión de Regulación de Comunicaciones, República de Colombia"
                                        target="_blank"><img
                                            src="/tramites/javax.faces.resource/logoCRCTransparente.png.xhtml;jsessionid=mE2uE37ETDxNw9Qx3PPSHdGqt8zRyb4FFif8Esvv.vm-app8-tramites?ln=images"
                                            alt="Logo Comisión de Regulación de Comunicaciones, República de Colombia"
                                            title="Logo CRC" width="192px" class="img-fluid logo-crc" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="barra-inferior">
                    <div class="container p-4">
                        <div class="d-flex">
                            <div class="d-flex align-items-center">
                                <a href="https://www.colombia.co" target="_blank" rel="noreferrer noopener"><img
                                    src="/tramites/javax.faces.resource/logo_co_footer.png.xhtml;jsessionid=mE2uE37ETDxNw9Qx3PPSHdGqt8zRyb4FFif8Esvv.vm-app8-tramites?ln=images"
                                    alt="Logo Colombia" title="CO Colombia" class="border-end" />
                                </a>
                                <div class="linea-Blanca"></div>
                                <a href="https://www.gov.co" target="_blank" rel="noreferrer noopener"><img
                                    src="/tramites/javax.faces.resource/logo_footer.png.xhtml;jsessionid=mE2uE37ETDxNw9Qx3PPSHdGqt8zRyb4FFif8Esvv.vm-app8-tramites?ln=images"
                                    alt="Logo gov.co" title="gov.co" width="128px" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </footer>
    );
}

export default Footer;