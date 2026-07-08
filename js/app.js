// Definimos la BD en el objeto global window para que todos los archivos tengan acceso
window.db = {
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
        definicion: 'Conteo absoluto acumulado de procesos ingresos sobre fueros y derechos sindicales.',
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

window.render = function (index = 0) {
    const container = document.getElementById('tabsContainer');
    const content = document.getElementById('mainContent');

    if (!container || !content) return;

    container.innerHTML = tabsData.map((t, i) => `
        <button class="tab-btn ${i === index ? 'active' : ''}" data-index="${i}">
            <svg viewBox="0 0 24 24"><path d="${icons[t.key]}"/></svg>
            ${t.name}
        </button>
    `).join('');

    container.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.dataset.index);
            window.render(idx);
        });
    });

    // Llamamos a las funciones globales que cargó cada archivo previo
    switch (tabsData[index].key) {
        case 'inicio':
            window.renderInicio(content);
            break;
        case 'cambios':
            window.renderCambios(content);
            break;
        case 'indicadores':
            window.renderIndicadores(content);
            break;
        case 'ruta':
            window.renderRuta(content);
            break;
        default:
            content.innerHTML = `<h1>${tabsData[index].name}</h1>`;
    }
};

// Arrancar la app de inmediato al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    window.render(0);
});