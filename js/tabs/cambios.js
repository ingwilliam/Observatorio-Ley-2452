window.renderCambios = function (content) {
    content.style.padding = "24px";
    content.style.height = "auto";

    // 1. Data estructurada de la matriz (limpia y optimizada)
    const datosMatriz = [
        { nivel: "Corte Suprema", cambio: "Recurso de casación contra sentencias emitidas en procesos sobre acoso laboral y procesos especiales de fuero.", art: "Art. 16, Lit. A, Num. 1", monitoreo: "Volumen de recursos extraordinarios de casación que ingresan bajo la Ley 2452 y su impacto en la carga de la Corte." },
        { nivel: "Corte Suprema", cambio: "Incorporación de la casación por selección oficiosa para fines de unificación jurisprudencial, protección de derechos constitucionales y control de legalidad.", art: "Arts. 239 y 240", monitoreo: "Frecuencia de uso de la selección oficiosa, tipo de asuntos seleccionados y efecto en la función de unificación de la Corte." },
        { nivel: "Corte Suprema", cambio: "Recurso de queja, incluso frente a decisiones que nieguen apelación en procesos de calificación de ilegalidad de suspensión, huelga o paro colectivo.", art: "Art. 16, Lit. A, Num. 4", monitoreo: "Carga derivada de recursos de queja y su relación con conflictos colectivos laborales." },
        { nivel: "Corte Suprema", cambio: "Recurso de apelación contra sentencias de primera instancia que deciden la calificación de ilegalidad de suspensión, huelga o paro colectivo y consulta.", art: "Art. 16, Lit. A, Num. 7", monitoreo: "Monitorear el incremento de asuntos asociados a conflictos colectivos y grado jurisdiccional de consulta." },
        { nivel: "Corte Suprema", cambio: "Conocimiento de negocios contenciosos de agentes diplomáticos.", art: "Art. 16, Lit. A, Num. 8 / Art. 235 CP", monitoreo: "Monitorear la cantidad de procesos por esta nueva tipología de baja frecuencia." },
        { nivel: "Corte Suprema", cambio: "Conflictos de competencia entre despachos judiciales.", art: "Art. 16, Lit. A, Num. 5", monitoreo: "Identificación de eventuales problemas de asignación competencial durante la implementación de la reforma." },
        { nivel: "Corte Suprema", cambio: "Peticiones de cambio de radicación de un proceso o actuación de un distrito judicial a otro.", art: "Art. 16, Lit. A, Num. 10", monitoreo: "Seguimiento a solicitudes de cambio de radicación y posibles tensiones territoriales." },

        { nivel: "Tribunales Superiores", cambio: "Conocimiento de procesos sobre calificación de ilegalidad de la suspensión de la huelga y paro colectivo.", art: "Art. 16, Lit. B, Num. 7", monitoreo: "Evolución de procesos colectivos laborales y su impacto en la carga operativa de los tribunales." },
        { nivel: "Tribunales Superiores", cambio: "Incorporación de la sentencia anticipada como figura de decisión temprana.", art: "Art. 260", monitoreo: "Uso de la sentencia anticipada como herramienta de descongestión y reducción de etapas procesales innecesarias." },
        { nivel: "Tribunales Superiores", cambio: "Fortalecimiento de la segunda instancia laboral bajo el nuevo flujo procesal.", art: "Art. 16, Lit. B", monitoreo: "Análisis del incremento de asuntos en segunda instancia y la capacidad de respuesta de los tribunales." },
        { nivel: "Tribunales Superiores", cambio: "Recursos extraordinarios de revisión y anulación.", art: "Art. 16, Lit. B, Nums. 2 y 6", monitoreo: "Medición de la carga generada por recursos especiales y mecanismos de control judicial." },
        { nivel: "Tribunales Superiores", cambio: "Selección oficiosa de sentencias para fines de unificación y control de legalidad.", art: "Art. 239", monitoreo: "Participación de los tribunales en la remisión o tránsito de asuntos hacia la Corte Suprema." },
        { nivel: "Tribunales Superiores", cambio: "Cambio de denominación técnica posterior: de 'entrega de inmuebles' a 'entrega de bienes'.", art: "Art. 219", monitoreo: "Validación de la coherencia entre las actuaciones posteriores y la terminología del nuevo código." },

        { nivel: "Juzgados de Circuito", cambio: "Competencia en primera instancia para procesos de mayor cuantía cuyo monto exceda de 40 SMLMV.", art: "Art. 13", monitoreo: "Monitorear el volumen de procesos de esta cuantía frente a las demás tipologías del circuito." },
        { nivel: "Juzgados de Circuito", cambio: "Procedimiento en caso de contumacia, incluyendo archivo, desarchivo o reactivación.", art: "Art. 72", monitoreo: "Identificación de procesos archivados por contumacia, reactivaciones y su efecto en la depuración del inventario." },
        { nivel: "Juzgados de Circuito", cambio: "Remisión al tribunal de arbitramento cuando exista acuerdo mutuo entre las partes en litigio.", art: "Art. 310", monitoreo: "Monitorear el uso de esta figura como método alternativo de terminación del proceso judicial." },
        { nivel: "Juzgados de Circuito", cambio: "Incorporación de la sentencia anticipada en el nivel de circuito.", art: "Art. 260", monitoreo: "Frecuencia de decisiones anticipadas y su impacto directo en los índices de descongestión." },
        { nivel: "Juzgados de Circuito", cambio: "Proceso monitorio del trabajo y la seguridad social.", art: "Art. 286", monitoreo: "Seguimiento específico al proceso monitorio como mecanismo de acceso ágil y simplificado." },
        { nivel: "Juzgados de Circuito", cambio: "Protección especializada de derechos sindicales.", art: "Art. 314", monitoreo: "Identificación de demandas asociadas estrictamente a garantías de fuero y derechos sindicales." },
        { nivel: "Juzgados de Circuito", cambio: "Controversias que involucren Estados extranjeros u organismos internacionales.", art: "Art. 16, Lit. C", monitoreo: "Seguimiento a litigios internacionales especializados de baja frecuencia y alta relevancia jurídica." },
        { nivel: "Juzgados de Circuito", cambio: "Segunda instancia de asuntos conocidos originalmente por los juzgados municipales.", art: "Art. 16, Lit. C", monitoreo: "Impacto del nuevo flujo de doble instancia en la carga laboral transferida al nivel circuito." },

        { nivel: "Juzgados Municipales", cambio: "Consolidación de procesos iniciados, decididos y pendientes antes de la vigencia (02 de abril de 2026).", art: "Estructura de Competencias", monitoreo: "Línea base del inventario acumulado antes de la entrada en vigor total de la Ley 2452." },
        { nivel: "Juzgados Municipales", cambio: "Proceso monitorio para reclamos rápidos de baja cuantía en trabajo y seguridad social.", art: "Art. 286", monitoreo: "Uso del proceso monitorio como vía rápida de acceso a la justicia laboral de base." },
        { nivel: "Juzgados Municipales", cambio: "Procedimiento de contumacia con opción de archivo automático y reactivación reglada.", art: "Art. 72", monitoreo: "Control de depuración de inventarios municipales por inactividad procesal." },
        { nivel: "Juzgados Municipales", cambio: "Decisiones relacionadas con mandamiento de pago en procesos ejecutivos.", art: "Arts. 265 y 292", monitoreo: "Evaluación del nivel de admisibilidad, inadmisión o rechazo inicial en ejecuciones laborales." },
        { nivel: "Juzgados Municipales", cambio: "Apelaciones y quejas bajo el nuevo esquema estructural de doble instancia.", art: "Art. 16, Lit. C, Nums. 1 y 5", monitoreo: "Monitoreo del traslado real de la carga impugnada hacia el nivel circuito." }
    ];

    // 2. Render de la maqueta estructural con INTRODUCCIÓN DIDÁCTICA
    content.innerHTML = `
        <div class="layout" style="gap: 24px;">
            
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line); padding-bottom: 16px;">
                <div>
                    <h2 style="margin: 0; color: var(--accent); font-size: 22px; font-weight: 900; letter-spacing: -0.5px;">
                        Modificaciones Ley 2452 de 2025
                    </h2>
                    <p style="margin: 4px 0 0 0; color: var(--muted); font-size: 13px;">
                        Mapeo analítico de cambios normativos y sus variables de control estadístico.
                    </p>
                </div>
                <div style="position: relative; width: 320px;">
                    <input type="text" id="matrizSearch" placeholder="🔍 Buscar por artículo o palabra clave..." 
                           style="width: 100%; border: 1px solid var(--line); border-radius: 12px; padding: 10px 14px; font-family: inherit; font-size: 13px; font-weight: 600; outline: none; box-sizing: border-box;">
                </div>
            </div>

            <div style="background: var(--soft); border: 1px solid var(--line); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 20px;">💡</span>
                    <h3 style="margin: 0; font-size: 15px; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 0.5px;">
                        Guía Rápida: Entendiendo la Reforma Laboral Procesal
                    </h3>
                </div>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: var(--ink);">
                    La <strong>Ley 2452 de 2025</strong> adoptó el nuevo <strong>Código Procesal del Trabajo y de la Seguridad Social</strong>, el cual entró en vigencia plena el pasado <strong>2 de abril de 2026</strong>. Esta reforma no cambia los derechos de los trabajadores (como las cesantías o contratos), sino la <strong>forma y la velocidad</strong> en la que los jueces resuelven las demandas laborales en el país. 
                </p>
                
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 4px;">
                    <div style="background: white; padding: 12px; border-radius: 12px; border-top: 3px solid var(--primary);">
                        <strong style="font-size: 12px; color: var(--accent); display: block; margin-bottom: 4px;">📈 Cuantías (Art. 13)</strong>
                        <span style="font-size: 11.5px; color: var(--muted); line-height: 1.3; display: block;">Modifica el valor del dinero demandado que define si el caso va a un juzgado Municipal o de Circuito.</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 12px; border-top: 3px solid var(--primary);">
                        <strong style="font-size: 12px; color: var(--accent); display: block; margin-bottom: 4px;">⏱️ Sentencia Anticipada (Art. 260)</strong>
                        <span style="font-size: 11.5px; color: var(--muted); line-height: 1.3; display: block;">Permite al juez dictar un fallo temprano sin necesidad de hacer todas las audiencias si las pruebas ya son claras.</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 12px; border-top: 3px solid var(--primary);">
                        <strong style="font-size: 12px; color: var(--accent); display: block; margin-bottom: 4px;">⚡ Proceso Monitorio (Art. 286)</strong>
                        <span style="font-size: 11.5px; color: var(--muted); line-height: 1.3; display: block;">Una vía rápida y simplificada para cobrar deudas laborales de pequeña cuantía de forma ágil.</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 12px; border-top: 3px solid var(--primary);">
                        <strong style="font-size: 12px; color: var(--accent); display: block; margin-bottom: 4px;">📁 Contumacia (Art. 72)</strong>
                        <span style="font-size: 11.5px; color: var(--muted); line-height: 1.3; display: block;">Regula el castigo y archivo de procesos cuando una de las partes abandona el caso o no asiste.</span>
                    </div>
                </div>
                <span style="font-size: 11.5px; color: var(--muted); font-style: italic; margin-top: 4px;">
                    📌 <strong>Instrucciones:</strong> Utiliza los botones de abajo para filtrar las modificaciones específicas por despacho judicial o usa el buscador de la derecha para escribir un artículo concreto.
                </span>
            </div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;" id="filterTabsContainer">
                <button class="btn-ui btn-primary" data-target="Todos" style="border-radius: 12px; padding: 10px 18px; font-size: 12px;">Ver Todo</button>
                <button class="btn-ui" data-target="Corte Suprema" style="border-radius: 12px; padding: 10px 18px; font-size: 12px;">Corte Suprema</button>
                <button class="btn-ui" data-target="Tribunales Superiores" style="border-radius: 12px; padding: 10px 18px; font-size: 12px;">Tribunales Superiores</button>
                <button class="btn-ui" data-target="Juzgados de Circuito" style="border-radius: 12px; padding: 10px 18px; font-size: 12px;">Juzgados de Circuito</button>
                <button class="btn-ui" data-target="Juzgados Municipales" style="border-radius: 12px; padding: 10px 18px; font-size: 12px;">Juzgados Municipales</button>
            </div>

            <div id="cardsGridContainer" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 10px;">
                </div>

        </div>
    `;

    // Elementos del DOM localizados
    const container = document.getElementById("cardsGridContainer");
    const searchInput = document.getElementById("matrizSearch");
    const filterButtons = document.querySelectorAll("#filterTabsContainer .btn-ui");

    let filtroActual = "Todos";
    let busquedaActual = "";

    // 3. Función core de renderizado y lógica de pintado
    function filtrarYRenderizar() {
        container.innerHTML = "";

        const filtrados = datosMatriz.filter(item => {
            const cumpleFiltro = (filtroActual === "Todos" || item.nivel === filtroActual);
            const cumpleBusqueda = item.cambio.toLowerCase().includes(busquedaActual) ||
                item.monitoreo.toLowerCase().includes(busquedaActual) ||
                item.art.toLowerCase().includes(busquedaActual);
            return cumpleFiltro && cumpleBusqueda;
        });

        if (filtrados.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--muted); font-size: 14px; font-weight: 600;">
                    No se encontraron registros que coincidan con los criterios seleccionados.
                </div>
            `;
            return;
        }

        filtrados.forEach(item => {
            let colorBadge = "var(--accent)";
            let fondoBadge = "rgba(0, 65, 130, 0.08)";
            if (item.nivel.includes("Juzgados")) {
                colorBadge = "var(--profile-dark)";
                fondoBadge = "var(--profile-2)";
            }

            const cardHtml = `
                <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; gap: 16px; border: 1px solid var(--line); transition: transform 0.2s, box-shadow 0.2s;">
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                            <span style="background: ${fondoBadge}; color: ${colorBadge}; font-size: 10.5px; font-weight: 800; padding: 4px 10px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.3px;">
                                ${item.nivel}
                            </span>
                            <span class="filter-tag" style="margin: 0; background: var(--soft); font-size: 11px; font-weight: 700; color: var(--ink);">
                                📄 ${item.art}
                            </span>
                        </div>
                        
                        <div style="margin-top: 12px;">
                            <h4 style="margin: 0 0 6px 0; color: var(--accent); font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">
                                Modificación Específica
                            </h4>
                            <p style="margin: 0; font-size: 13.5px; line-height: 1.5; color: var(--ink); font-weight: 600;">
                                ${item.cambio}
                            </p>
                        </div>
                    </div>

                    <div style="background: var(--soft); padding: 14px 16px; border-radius: 16px; border-top: 2px solid var(--primary);">
                        <h4 style="margin: 0 0 4px 0; color: var(--primary); font-size: 11px; font-weight: 800; text-transform: uppercase;">
                            Foco de Control Estadístico
                        </h4>
                        <p style="margin: 0; font-size: 12.5px; line-height: 1.4; color: var(--muted); font-weight: 500;">
                            ${item.monitoreo}
                        </p>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML("beforeend", cardHtml);
        });
    }

    // 4. Listeners para interacciones (Buscador + Pestañas)
    searchInput.addEventListener("input", function (e) {
        busquedaActual = e.target.value.toLowerCase();
        filtrarYRenderizar();
    });

    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            filterButtons.forEach(b => b.classList.remove("btn-primary"));
            this.classList.add("btn-primary");
            filtroActual = this.getAttribute("data-target");
            filtrarYRenderizar();
        });
    });

    filtrarYRenderizar();
};