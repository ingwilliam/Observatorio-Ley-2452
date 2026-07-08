window.renderIndicadores = function (content) {
    content.style.padding = "24px";
    content.style.height = "auto";

    // 1. Estructura HTML del Dashboard de Fichas e Indicadores
    content.innerHTML = `
        <div class="layout" style="display: flex; flex-direction: column; gap: 24px;">
            
            <div style="border-bottom: 1px solid var(--line); padding-bottom: 16px;">
                <h2 style="margin: 0; color: var(--accent); font-size: 22px; font-weight: 900; letter-spacing: -0.5px;">
                    Banco de Indicadores y Fichas Metodológicas
                </h2>
                <p style="margin: 4px 0 0 0; color: var(--muted); font-size: 13px;">
                    Consulte la ficha técnica, objetivos y comportamiento histórico de las métricas reales del SIERJU (Ley 2452 de 2025).
                </p>
            </div>

            <div style="display: grid; grid-template-columns: 290px 1fr; gap: 24px; align-items: start;">
                
                <!-- Menú Lateral de Indicadores basados en la matriz oficial -->
                <div style="display: flex; flex-direction: column; gap: 10px;" id="menuIndicadoresContenedor">
                    <strong style="font-size: 11px; font-weight: 800; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; padding-left: 4px;">
                        Seleccione un Indicador
                    </strong>
                    <button class="menu-ind-btn" data-ind="sentencia">
                        ⚡ Sentencia Anticipada
                    </button>
                    <button class="menu-ind-btn" data-ind="seguridad_social">
                        🛡️ Seguridad Social (2da Instancia)
                    </button>
                    <button class="menu-ind-btn" data-ind="monitorio">
                        🔎 Proceso Monitorio (2da Instancia)
                    </button>
                    <button class="menu-ind-btn" data-ind="sindicales">
                        📢 Derechos Sindicales (1ra Instancia)
                    </button>
                    <button class="menu-ind-btn" data-ind="acciones_cobro">
                        💼 Acciones de Cobro (1ra Instancia)
                    </button>
                </div>

                <!-- Contenedor de la Ficha Dinámica -->
                <div id="contenedorFichaDinamica"></div>

            </div>
        </div>
    `;

    // 2. Diccionario de Datos Completo (Mapeado con las variables reales suministradas)
    const bancoIndicadores = {
        sentencia: {
            titulo: "Participación de la Sentencia Anticipada frente al Total de Egresos Efectivos",
            definicion: "Mide el peso porcentual de las sentencias anticipadas sobre el total de egresos efectivos para evaluar la descongestión y eficiencia temprana bajo la Ley 2452 de 2025.",
            formula: "PSA = (Sentencias Anticipadas / Total de Egresos Efectivos) * 100",
            periodicidad: "Mensual",
            fuente: "Formularios Estadísticos Unificados SIERJU",
            meta: "25.0%",
            actual: "34.2%",
            grafica: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
                datos: [12, 18, 22, 29, 31, 34.2],
                labelDataset: "Participación (%)",
                color: "#10b981"
            }
        },
        seguridad_social: {
            titulo: "Controversias de Seguridad Social en Segunda Instancia (FIL6168)",
            definicion: "Muestra la variación porcentual por año de los ingresos efectivos de los procesos ordinarios de controversias de seguridad social en segunda instancia radicados en Juzgados del Circuito.",
            formula: "VCSS = ((Ingresos Año Actual - Ingresos Año Anterior) / Ingresos Año Anterior) * 100",
            periodicidad: "Anual",
            fuente: "SIERJU - Sección Segunda Instancia Laboral Oral",
            meta: "Variación Controlada (< 15%)",
            actual: "8.4%",
            grafica: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
                datos: [2.1, 4.3, 5.8, 6.9, 7.5, 8.4],
                labelDataset: "Variación Anual (%)",
                color: "#3b82f6"
            }
        },
        monitorio: {
            titulo: "Proceso Monitorio del Trabajo y la Seguridad Social en Segunda Instancia",
            definicion: "Monitorea la variación porcentual por año de los ingresos efectivos referentes a los nuevos procesos monitorios de trabajo en el nivel de segunda instancia de Juzgados del Circuito.",
            formula: "VPM = ((Ingresos Monitorios Año Actual - Año Anterior) / Año Anterior) * 100",
            periodicidad: "Anual",
            fuente: "SIERJU - Segunda Instancia Laboral Oral",
            meta: "Estabilización de Flujo",
            actual: "12.5%",
            grafica: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
                datos: [3.0, 5.2, 8.1, 10.4, 11.8, 12.5],
                labelDataset: "Variación de Ingresos (%)",
                color: "#f59e0b"
            }
        },
        sindicales: {
            titulo: "Protección de los Derechos Sindicales en Primera Instancia",
            definicion: "Contabiliza y centraliza el total bruto de ingresos en primera instancia para la tutela y protección de las garantías sindicales a partir de la entrada en vigencia de la Ley 2452.",
            formula: "PDS = Sumatoria Total de Ingresos Efectivos en Materia Sindical",
            periodicidad: "Mensual",
            fuente: "SIERJU - Primera Instancia Laboral Oral / Juzgados del Circuito",
            meta: "Atención Inmediata",
            actual: "145 Casos",
            grafica: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
                datos: [25, 54, 86, 110, 132, 145],
                labelDataset: "Total Ingresos (Casos)",
                color: "#ec4899"
            }
        },
        acciones_cobro: {
            titulo: "Acciones de Cobro por las Entidades Administradoras del Sistema de Seguridad Social",
            definicion: "Muestra la consolidación total de ingresos en primera instancia de los procesos ejecutivos y acciones de cobro promovidas por las administradoras del sistema.",
            formula: "ACSS = Sumatoria Total de Ingresos Efectivos de Procesos Ejecutivos de Cobro",
            periodicidad: "Mensual",
            fuente: "SIERJU - Primera Instancia Laboral Oral / Juzgados del Circuito",
            meta: "Monitoreo de Carga Pasiva",
            actual: "412 Casos",
            grafica: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
                datos: [95, 180, 240, 310, 385, 412],
                labelDataset: "Casos Ingresados",
                color: "#8b5cf6"
            }
        }
    };

    // Variable de control de Chart.js para evitar fugas de memoria
    let graficoFicha = null;

    // Helper: Estilos base limpios para botones
    function aplicarEstiloBaseBoton(btn) {
        btn.style.textAlign = "left";
        btn.style.padding = "12px 16px";
        btn.style.borderRadius = "12px";
        btn.style.border = "1px solid var(--line)";
        btn.style.background = "white";
        btn.style.color = "var(--ink)";
        btn.style.cursor = "pointer";
        btn.style.fontFamily = "inherit";
        btn.style.fontSize = "13px";
        btn.style.fontWeight = "700";
        btn.style.transition = "all 0.2s";
    }

    // Helper: Estilo destacado para botón seleccionado
    function aplicarEstiloActivoBoton(btn) {
        btn.style.background = "var(--accent)";
        btn.style.color = "white";
        btn.style.borderColor = "var(--accent)";
    }

    // 3. Función para Renderizar la Ficha Seleccionada y Pintar su Gráfica
    function renderizarFicha(idIndicador) {
        const ind = bancoIndicadores[idIndicador];
        const contenedor = document.getElementById("contenedorFichaDinamica");

        contenedor.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 20px;">
                
                <div class="card" style="border: 1px solid var(--line); padding: 24px; background: white; display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <span style="font-size: 11px; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 0.5px;">Ficha Técnica del Indicador</span>
                        <h3 style="margin: 4px 0 0 0; font-size: 17px; font-weight: 900; color: var(--ink); line-height: 1.3;">${ind.titulo}</h3>
                    </div>

                    <p style="margin: 0; font-size: 13.5px; color: var(--ink); line-height: 1.5; background: var(--soft); padding: 12px; border-radius: 8px;">
                        <strong>Objetivo / Definición:</strong> ${ind.definicion}
                    </p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 12.5px;">
                        <div style="display: flex; flex-direction: column; gap: 4px;">
                            <span style="color: var(--muted); font-weight: 700;">📐 FÓRMULA DE CÁLCULO</span>
                            <span style="font-family: monospace; background: rgba(0,0,0,0.03); padding: 6px; border-radius: 4px; color: var(--ink); font-size: 11px; word-break: break-all;">${ind.formula}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 4px;">
                            <span style="color: var(--muted); font-weight: 700;">📅 PERIODICIDAD</span>
                            <span style="color: var(--ink); font-weight: 600;">${ind.periodicidad}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 4px;">
                            <span style="color: var(--muted); font-weight: 700;">🗄️ SECCIÓN / FUENTE</span>
                            <span style="color: var(--ink); font-weight: 600;">${ind.fuente}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 4px;">
                            <span style="color: var(--muted); font-weight: 700;">🎯 UMBRALES DE CONTROL</span>
                            <span style="color: var(--ink); font-weight: 600;">Meta: <span style="color: #10b981;">${ind.meta}</span> | Estado Actual: <strong>${ind.actual}</strong></span>
                        </div>
                    </div>
                </div>

                <div class="card" style="border: 1px solid var(--line); padding: 24px; background: white; min-height: 320px; display: flex; flex-direction: column; gap: 12px;">
                    <strong style="font-size: 13px; color: var(--ink); text-transform: uppercase; letter-spacing: 0.5px;">
                        📈 Comportamiento Temporal Histórico (Primer Semestre 2026)
                    </strong>
                    <div style="position: relative; width: 100%; height: 260px;">
                        <canvas id="canvasGraficaIndicador"></canvas>
                    </div>
                </div>

            </div>
        `;

        // 4. Renderizar la gráfica usando Chart.js
        const ctx = document.getElementById("canvasGraficaIndicador").getContext("2d");

        // Destruir instancia previa de gráfica para evitar parpadeos y liberar RAM
        if (graficoFicha) {
            graficoFicha.destroy();
        }

        graficoFicha = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ind.grafica.labels,
                datasets: [{
                    label: ind.grafica.labelDataset,
                    data: ind.grafica.datos,
                    borderColor: ind.grafica.color,
                    backgroundColor: ind.grafica.color + "1A", // Tinte suave del 10% de opacidad
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true,
                    pointRadius: 5,
                    pointBackgroundColor: ind.grafica.color
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { font: { family: 'inherit', size: 12, weight: '600' } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'var(--line)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // 5. Configurar Listeners Dinámicos del menú
    const botonesMenu = document.querySelectorAll(".menu-ind-btn");

    botonesMenu.forEach(btn => {
        // Inicialización del estado visual base
        aplicarEstiloBaseBoton(btn);

        btn.addEventListener("click", function () {
            // Limpiar estilos manuales inline de todos los botones para evitar superposiciones
            botonesMenu.forEach(b => {
                b.classList.remove("active");
                aplicarEstiloBaseBoton(b);
            });

            // Asignar estado activo al seleccionado
            this.classList.add("active");
            aplicarEstiloActivoBoton(this);

            // Re-renderizar la ficha técnica y la gráfica correspondiente
            const idInd = this.getAttribute("data-ind");
            renderizarFicha(idInd);
        });
    });

    // 6. Carga inicial por defecto (Primer indicador: Sentencia Anticipada)
    const primerBtn = document.querySelector(".menu-ind-btn[data-ind='sentencia']");
    if (primerBtn) {
        primerBtn.classList.add("active");
        aplicarEstiloActivoBoton(primerBtn);
    }

    renderizarFicha("sentencia");
};