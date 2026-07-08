/**
 * ==========================================================================
 * BASE DE DATOS DE LA APLICACIÓN (ESTADO GLOBAL - LEY 2452 DE 2025)
 * Nota para Junior: Hemos mapeado las variables reales del SIERJU. 
 * Cada llave del objeto representa el valor ('value') del elemento <select>.
 * Si se selecciona un indicador, toda la interfaz muta de forma automática.
 * ==========================================================================
 */
const db = {
    seguridad_social_2da: {
        id: 'FIL6168',
        titulo: 'Controversias de Seguridad Social en Segunda Instancia',
        ficha: 'Muestra la variación porcentual por año de los ingresos efectivos de los procesos de controversias de seguridad social en segunda instancia a partir de la entrada en vigencia de la Ley 2452 de 2025.',
        definicion: 'Variación porcentual anual de ingresos efectivos para el tipo de proceso especificado.',
        formula: 'VP_CSS = ((IE_AnioActual - IE_AnioAnterior) / IE_AnioAnterior) * 100',
        descripcionFormula: 'IE: Ingresos Efectivos registrados en el formulario FIL6168.',
        interpretacion: 'Permite evaluar el flujo y comportamiento de la segunda instancia laboral bajo el nuevo marco normativo de la Ley 2452.',
        variables: 'Numerador: (Ingresos Año Actual - Ingresos Año Anterior) / Denominador: Ingresos Año Anterior',
        fuentes: 'SIERJU - Sección / Formulario: Segunda Instancia Laboral - oral Ley 2452 de 2025 / Juzgados del circuito',
        kpis: { Actual: '+12.4%', Meta: 'Estabilización', Base: '0%', Variación: 'Anual' },
        metadatos: { 'Nivel': 'Circuito', 'Unidades': 'Porcentaje (%)', 'Categoría': 'Segunda Instancia', 'Responsable': 'UDAE' }
    },
    contratos_trabajo_2da: {
        id: 'FIL6169',
        titulo: 'Controversias Contratos de Trabajo en Segunda Instancia',
        ficha: 'Muestra la variación porcentual por año de los ingresos efectivos de los procesos de controversias contratos de trabajo en segunda instancia a partir de la entrada en vigencia de la Ley 2452 de 2025.',
        definicion: 'Variación porcentual anual de ingresos efectivos para procesos derivados de contratos laborales en segunda instancia.',
        formula: 'VP_CCT = ((IE_AnioActual - IE_AnioAnterior) / IE_AnioAnterior) * 100',
        descripcionFormula: 'IE: Ingresos Efectivos registrados en el formulario FIL6169.',
        interpretacion: 'Monitorea el impacto de la oralidad en las apelaciones de procesos de contratación laboral ordinaria.',
        variables: 'Numerador: (Ingresos Año Actual - Ingresos Año Anterior) / Denominador: Ingresos Año Anterior',
        fuentes: 'SIERJU - Sección / Formulario: Segunda Instancia Laboral - oral Ley 2452 de 2025 / Juzgados del circuito',
        kpis: { Actual: '+5.1%', Meta: 'Control de Ingresos', Base: '0%', Variación: 'Anual' },
        metadatos: { 'Nivel': 'Circuito', 'Unidades': 'Porcentaje (%)', 'Categoría': 'Segunda Instancia', 'Responsable': 'UDAE' }
    },
    honorarios_2da: {
        id: 'FIL6170',
        titulo: 'Reconocimiento de Honorarios en Segunda Instancia',
        ficha: 'Muestra la variación porcentual por año de los ingresos efectivos de los procesos de reconocimiento de honorarios en segunda instancia a partir de la entrada en vigencia de la Ley 2452 de 2025.',
        definicion: 'Variación porcentual anual de ingresos efectivos de apelaciones sobre reconocimiento de honorarios.',
        formula: 'VP_RH = ((IE_AnioActual - IE_AnioAnterior) / IE_AnioAnterior) * 100',
        descripcionFormula: 'IE: Ingresos Efectivos registrados en el formulario FIL6170.',
        interpretacion: 'Mide la carga procesal específica de reclamaciones de honorarios profesionales que llegan a circuito.',
        variables: 'Numerador: (Ingresos Año Actual - Ingresos Año Anterior) / Denominador: Ingresos Año Anterior',
        fuentes: 'SIERJU - Sección / Formulario: Segunda Instancia Laboral - oral Ley 2452 de 2025 / Juzgados del circuito',
        kpis: { Actual: '-2.3%', Meta: 'Reducción Litigios', Base: '0%', Variación: 'Anual' },
        metadatos: { 'Nivel': 'Circuito', 'Unidades': 'Porcentaje (%)', 'Categoría': 'Segunda Instancia', 'Responsable': 'UDAE' }
    },
    monitorio_2da: {
        id: 'MONITORIO_2DA',
        titulo: 'Proceso Monitorio del Trabajo y la Seguridad Social en Segunda Instancia',
        ficha: 'Muestra la variación porcentual por año de los ingresos efectivos de los procesos monitorios del trabajo y la seguridad social en segunda instancia a partir de la entrada en vigencia de la Ley 2452 de 2025.',
        definicion: 'Variación porcentual anual de los ingresos en circuito del nuevo proceso monitorio laboral.',
        formula: 'VP_PM = ((IE_AnioActual - IE_AnioAnterior) / IE_AnioAnterior) * 100',
        descripcionFormula: 'IE: Ingresos Efectivos de procesos monitorios laborales en segunda instancia.',
        interpretacion: 'Evalúa la adopción e impacto de la estructura del proceso monitorio introducido por la reforma.',
        variables: 'Numerador: (Ingresos Año Actual - Ingresos Año Anterior) / Denominador: Ingresos Año Anterior',
        fuentes: 'SIERJU - Sección / Formulario: Segunda Instancia Laboral - oral Ley 2452 de 2025 / Juzgados del circuito',
        kpis: { Actual: '+18.7%', Meta: 'Monitoreo de Adopción', Base: '0%', Variación: 'Anual' },
        metadatos: { 'Nivel': 'Circuito', 'Unidades': 'Porcentaje (%)', 'Categoría': 'Segunda Instancia', 'Responsable': 'UDAE' }
    },
    cobro_coactivo_1ra: {
        id: 'COBRO_1RA',
        titulo: 'Acciones de Cobro por Entidades Administradoras en Primera Instancia',
        ficha: 'Muestra el total de ingresos en primera instancia a partir de la entrada en vigencia de la Ley 2452 de 2025.',
        definicion: 'Conteo absoluto acumulado de ingresos procesales por concepto de cobro de seguridad social.',
        formula: 'TI_AC = Sumatoria(Ingresos Efectivos)',
        descripcionFormula: 'Suma de todos los ingresos en el formulario de Ejecutivos.',
        interpretacion: 'Permite dimensionar el volumen de demandas ejecutivas interpuestas por administradoras de fondos y EPS.',
        variables: 'Conteo simple de registros de entrada',
        fuentes: 'SIERJU - Sección / Formulario: Primera Instancia Laboral - Oral / Juzgados del circuito',
        kpis: { Actual: '1,420', Meta: 'N/A', Base: '0', Variación: 'Absoluta' },
        metadatos: { 'Nivel': 'Circuito / Municipal', 'Unidades': 'Procesos', 'Categoría': 'Primera Instancia', 'Responsable': 'UDAE' }
    },
    derechos_sindicales_1ra: {
        id: 'SINDICAL_1RA',
        titulo: 'Protección de los Derechos Sindicales en Primera Instancia',
        ficha: 'Muestra el total de ingresos en primera instancia a partir de la entrada en vigencia de la Ley 2452 de 2025.',
        definicion: 'Conteo absoluto acumulado de procesos ingresados sobre fueros y derechos sindicales.',
        formula: 'TI_DS = Sumatoria(Ingresos Efectivos)',
        descripcionFormula: 'Suma de ingresos de procesos de protección sindical.',
        interpretacion: 'Garantiza el control estadístico prioritario sobre acciones de protección a la asociación sindical.',
        variables: 'Conteo simple de registros de entrada',
        fuentes: 'SIERJU - Sección / Formulario: Primera Instancia Laboral - Oral / Juzgados del circuito',
        kpis: { Actual: '312', Meta: 'Atención Oportuna', Base: '0', Variación: 'Absoluta' },
        metadatos: { 'Nivel': 'Circuito', 'Unidades': 'Procesos', 'Categoría': 'Primera Instancia', 'Responsable': 'UDAE' }
    },
    sentencia_anticipada: {
        id: 'SENT_ANTICIPADA',
        titulo: 'Participación de la Sentencia Anticipada Frente al Total de Egresos Efectivos',
        ficha: 'Participación de la sentencia anticipada frente al total de egresos efectivos.',
        definicion: 'Proporción de procesos culminados mediante la figura de sentencia anticipada sobre el universo de egresos.',
        formula: 'PSA = (SA / TE) * 100',
        descripcionFormula: 'SA: Egresos por Sentencia Anticipada. TE: Total Egresos Efectivos en el periodo.',
        interpretacion: 'Indicador estratégico de eficiencia: un aumento en este porcentaje demuestra la aceleración de la descongestión judicial.',
        variables: 'Numerador: Sentencias Anticipadas / Denominador: Total Egresos Efectivos',
        fuentes: 'SIERJU - Módulos de Egreso Competentes',
        kpis: { Actual: '14.2%', Meta: '15.0%', Base: '2.1%', Variación: '+12.1 pp' },
        metadatos: { 'Nivel': 'Nacional / Despacho', 'Unidades': 'Porcentaje (%)', 'Categoría': 'Eficiencia - Descongestión', 'Responsable': 'UDAE' }
    }
};

const icons = {
    inicio: 'M3 11.5 12 4l9 7.5M5 10.5V21h14V10.5M9 21v-6h6v6',
    ruta: 'M4 20c5-10 11-10 16 0M8 16h8M12 12v8M12 4l4 4-4 4-4-4 4-4',
    cambios: 'M4 5h16M4 12h16M4 19h16M8 3v18M16 3v18',
    indicadores: 'M4 19V5M8 19v-7M12 19V8M16 19v-4M20 19V3'
};

const tabsData = [
    { name: 'Inicio', key: 'inicio' },
    { name: 'Cambios Normativos', key: 'cambios' },
    { name: 'Indicadores', key: 'indicadores' },
    { name: 'Mapa Judicial', key: 'ruta' }
];

let chart = null;

function render(index = 0) {
    const container = document.getElementById('tabsContainer');
    const content = document.getElementById('mainContent');

    container.innerHTML = tabsData.map((t, i) => `
        <button class="tab-btn ${i === index ? 'active' : ''}" onclick="render(${i})">
            <svg viewBox="0 0 24 24"><path d="${icons[t.key]}"/></svg>
            ${t.name}
        </button>
    `).join('');

    if (tabsData[index].key === 'ruta') {
        content.style.padding = "0";
        content.style.height = "700px";
        content.innerHTML = `<iframe src="https://www.arcgis.com/apps/dashboards/ef4f858655a445bab6920e853e377c37" style="width: 100%; height: 100%; border: 0; display: block;" allowfullscreen></iframe>`;
    }
    else if (tabsData[index].key === 'indicadores') {
        content.style.padding = "24px";
        content.style.height = "auto";

        // Inyección dinámica de la estructura base con las opciones del select actualizadas
        content.innerHTML = `
            <div class="layout" id="mainDashboard">
                <div class="card banner-card">
                    <h3>Observatorio de Implementación Ley 2452 de 2025</h3>
                    <p>Herramienta de análisis estadístico para el monitoreo de indicadores del SIERJU.</p>
                    <div class="console-card"><i class="dot"></i>Consola de indicadores UDAE</div>
                </div>

                <div class="card">
                    <div class="filter-bar">
                        <div class="control-group">
                            <label>Indicador SIERJU</label>
                            <select id="indSelect" onchange="actualizar()">
                                <option value="seguridad_social_2da">FIL6168 · C. Seguridad Social (2da Instancia)</option>
                                <option value="contratos_trabajo_2da">FIL6169 · C. Contratos de Trabajo (2da Instancia)</option>
                                <option value="honorarios_2da">FIL6170 · Reconocimiento de Honorarios (2da Instancia)</option>
                                <option value="monitorio_2da">MONITORIO · Proceso Monitorio (2da Instancia)</option>
                                <option value="cobro_coactivo_1ra">COBRO · Acciones de Cobro (1ra Instancia)</option>
                                <option value="derechos_sindicales_1ra">SINDICAL · Protección Sindical (1ra Instancia)</option>
                                <option value="sentencia_anticipada">EFICIENCIA · Participación Sentencia Anticipada</option>
                            </select>
                        </div>
                        <div class="control-group"><label>Periodo</label><select id="perSelect"><option>Año Corriente (2026)</option></select></div>
                        <div class="control-group"><label>Territorio</label><select id="terSelect"><option>Nacional</option></select></div>
                        <div class="control-group"><label>Jurisdicción</label><select id="proSelect"><option>Juzgados del Circuito</option></select></div>
                        <button onclick="actualizar()" style="background:var(--primary); color:white; border:none; border-radius:16px; padding:12px 20px; font-weight:900; cursor:pointer;">Filtrar</button>
                    </div>
                    <div class="active-filters" id="tagContainer"></div>
                </div>

                <div class="card">
                    <div class="chart-header">
                        <div>
                            <h2 id="titulo" style="margin: 0; color: var(--accent);">Indicador</h2>
                            <div id="ficha-container" style="margin-top: 10px; font-size: 13px; color: var(--muted); line-height:1.4;">Ficha técnica: <span id="ficha-texto"></span></div>
                        </div>
                        <div class="action-btns">
                            <button class="btn-ui" onclick="descargarFicha()">Descargar Ficha</button>
                            <button class="btn-ui btn-primary" id="btnFullscreen" onclick="toggleFullscreen()">Pantalla completa</button>
                        </div>
                    </div>
                    <div style="height: 300px; position: relative;"><canvas id="grafica"></canvas></div>
                    <div class="kpi-grid" id="kpiContainer"></div>
                </div>
            </div>
        `;

        setTimeout(actualizar, 50);
    }
    else {
        content.style.padding = "48px";
        content.style.height = "auto";
        content.innerHTML = `<h1>${tabsData[index].name}</h1>`;
    }
}

function actualizar() {
    const selectEl = document.getElementById('indSelect');
    if (!selectEl) return;

    const d = db[selectEl.value];

    document.getElementById('titulo').innerText = d.titulo;
    document.getElementById('ficha-texto').innerText = d.ficha;

    document.getElementById('kpiContainer').innerHTML = Object.entries(d.kpis).map(([k, v]) => `
        <div class="kpi-box">
            <h4>${k}</h4>
            <p>${v}</p>
        </div>
    `).join('');

    const active = [
        { id: 'perSelect', val: document.getElementById('perSelect').value },
        { id: 'terSelect', val: document.getElementById('terSelect').value },
        { id: 'proSelect', val: document.getElementById('proSelect').value }
    ];

    document.getElementById('tagContainer').innerHTML = active.map(t => `
        <div class="filter-tag" id="tag-${t.id}">
            ${t.val}
            <span class="btn-remove-tag" onclick="removerFiltro('${t.id}')">×</span>
        </div>
    `).join('');

    if (chart) chart.destroy();

    const ctx = document.getElementById('grafica');
    if (ctx) {
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [{
                    label: d.id,
                    data: selectEl.value.includes('1ra') ? [120, 240, 480, 710, 1100, 1420] : [2, 5, 8, 11, 13, 14.2],
                    borderColor: '#359946',
                    backgroundColor: 'rgba(53, 153, 70, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}

function removerFiltro(selectId) {
    const tag = document.getElementById(`tag-${selectId}`);
    if (tag) tag.remove();
}

function descargarFicha() {
    const d = db[document.getElementById('indSelect').value];

    const content = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: 'Segoe UI', sans-serif; padding: 40px; background: #f4f7f9; color: #333; line-height:1.5; }
            .card { background: white; padding: 40px; border-radius: 15px; border-top: 5px solid #004182; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
            h1 { color: #004182; margin-top: 0; }
            h3 { color: #359946; font-size: 14px; text-transform: uppercase; margin-bottom: 5px; }
            p { margin-bottom: 20px; font-size: 14px; }
            .meta { background: #f9f9f9; padding: 20px; border-radius: 10px; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Ficha Técnica: ${d.id}</h1>
            <div class="grid">
                <div>
                    <h3>Nombre del indicador</h3><p>${d.titulo}</p>
                    <h3>Definición y Objetivo</h3><p>${d.definicion}</p>
                    <h3>Fórmula matemática</h3><p><strong>${d.formula}</strong></p>
                    <h3>Descripción de componentes</h3><p>${d.descripcionFormula}</p>
                    <h3>Interpretación</h3><p>${d.interpretacion}</p>
                    <h3>Variables involucradas</h3><p>${d.variables}</p>
                    <h3>Sección / Formulario Fuente</h3><p>${d.fuentes}</p>
                </div>
                <div class="meta">
                    ${Object.entries(d.metadatos).map(([k, v]) => `<h3>${k}</h3><p>${v}</p>`).join('')}
                </div>
            </div>
        </div>
    </body>
    </html>`;

    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `Ficha_${d.id}.html`;
    a.click();
}

function toggleFullscreen() {
    const elem = document.getElementById('mainDashboard');
    const btn = document.getElementById('btnFullscreen');
    if (!elem) return;

    if (!document.fullscreenElement) {
        elem.requestFullscreen().then(() => {
            elem.classList.add('fullscreen-mode');
            if (btn) btn.innerText = "Salir de pantalla completa";
            setTimeout(actualizar, 150);
        }).catch(err => {
            console.error(`Error al activar pantalla completa: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

document.addEventListener('fullscreenchange', () => {
    const elem = document.getElementById('mainDashboard');
    const btn = document.getElementById('btnFullscreen');

    if (elem && !document.fullscreenElement) {
        elem.classList.remove('fullscreen-mode');
        if (btn) btn.innerText = "Pantalla completa";
        setTimeout(actualizar, 150);
    }
});

render(0);