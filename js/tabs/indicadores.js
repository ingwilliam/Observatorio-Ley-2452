let chart = null;

window.renderIndicadores = function (content) {
    content.style.padding = "24px";
    content.style.height = "auto";

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
                        <select id="indSelect">
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
                    <button id="btnFiltrar" style="background:var(--primary); color:white; border:none; border-radius:16px; padding:12px 20px; font-weight:900; cursor:pointer;">Filtrar</button>
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
                        <button class="btn-ui" id="btnDescargar">Descargar Ficha</button>
                        <button class="btn-ui btn-primary" id="btnFullscreen">Pantalla completa</button>
                    </div>
                </div>
                <div style="height: 300px; position: relative;"><canvas id="grafica"></canvas></div>
                <div class="kpi-grid" id="kpiContainer"></div>
            </div>
        </div>
    `;

    document.getElementById('indSelect').addEventListener('change', actualizarIndicador);
    document.getElementById('btnFiltrar').addEventListener('click', actualizarIndicador);
    document.getElementById('btnDescargar').addEventListener('click', descargarFicha);
    document.getElementById('btnFullscreen').addEventListener('click', toggleFullscreen);

    setTimeout(actualizarIndicador, 50);
};

function actualizarIndicador() {
    const selectEl = document.getElementById('indSelect');
    if (!selectEl) return;

    // Consumimos db desde window.db
    const d = window.db[selectEl.value];

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
            <span class="btn-remove-tag" data-select="${t.id}">×</span>
        </div>
    `).join('');

    document.querySelectorAll('.btn-remove-tag').forEach(btn => {
        btn.addEventListener('click', (e) => removerFiltro(e.target.dataset.select));
    });

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
    const d = window.db[document.getElementById('indSelect').value];
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
            setTimeout(actualizarIndicador, 150);
        }).catch(err => console.error(err));
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
        setTimeout(actualizarIndicador, 150);
    }
});