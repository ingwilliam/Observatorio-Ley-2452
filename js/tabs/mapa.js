window.renderMapa = function (content) {
    content.style.padding = "24px";
    content.style.height = "auto";

    // 1. Estructura HTML base del Dashboard con INTRODUCCIÓN DIDÁCTICA
    content.innerHTML = `
        <div class="layout" style="gap: 24px;">
            
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line); padding-bottom: 16px;">
                <div>
                    <h2 style="margin: 0; color: var(--accent); font-size: 22px; font-weight: 900; letter-spacing: -0.5px;">
                        Georreferenciación de la Carga Procesal
                    </h2>
                    <p style="margin: 4px 0 0 0; color: var(--muted); font-size: 13px;">
                        Monitoreo en tiempo real sobre el territorio nacional. Haga clic sobre los nodos del mapa para consultar la analítica distrital.
                    </p>
                </div>
            </div>

            <div style="background: var(--soft); border: 1px solid var(--line); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 20px;">💡</span>
                    <h3 style="margin: 0; font-size: 15px; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 0.5px;">
                        Guía Rápida: ¿Cómo leer la carga de la Reforma en el Territorio?
                    </h3>
                </div>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: var(--ink);">
                    La implementación de la <strong>Ley 2452 de 2025</strong> genera un reto geográfico: los procesos antiguos (Decreto 2158) siguen activos mientras ingresan las nuevas demandas. Este mapa interactivo te permite evaluar el <strong>Índice de Adopción Normativa</strong> por Distrito Judicial. No todas las regiones avanzan a la misma velocidad debido a su volumen histórico de litigios y la disponibilidad de despachos especializados.
                </p>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 4px;">
                    <div style="background: white; padding: 12px; border-radius: 12px; border-top: 3px solid #10b981;">
                        <strong style="font-size: 12px; color: #10b981; display: block; margin-bottom: 4px;">🟢 Alta Adopción (>60%)</strong>
                        <span style="font-size: 11.5px; color: var(--muted); line-height: 1.3; display: block;">Distritos donde las nuevas demandas de la Ley 2452 ya superan ampliamente los procesos del régimen anterior.</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 12px; border-top: 3px solid #3b82f6;">
                        <strong style="font-size: 12px; color: #3b82f6; display: block; margin-bottom: 4px;">🔵 Transición Media (40% - 60%)</strong>
                        <span style="font-size: 11.5px; color: var(--muted); line-height: 1.3; display: block;">Zonas con un equilibrio dinámico; se tramita una cantidad similar de procesos nuevos y acumulados antiguos.</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 12px; border-top: 3px solid #f59e0b;">
                        <strong style="font-size: 12px; color: #f59e0b; display: block; margin-bottom: 4px;">🟡 Atención Especial (<40%)</strong>
                        <span style="font-size: 11.5px; color: var(--muted); line-height: 1.3; display: block;">Distritos con un alto inventario del régimen anterior que requiere mayor atención.</span>
                    </div>
                </div>
                <span style="font-size: 11.5px; color: var(--muted); font-style: italic; margin-top: 4px;">
                    📌 <strong>Instrucciones:</strong> El tamaño de cada círculo representa el volumen total de demandas en el territorio. Haz clic sobre cualquier nodo del mapa para ver los datos detallados en el panel de la derecha.
                </span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 360px; gap: 24px; align-items: start;">
                
                <div class="card" style="border: 1px solid var(--line); padding: 0; overflow: hidden; min-height: 500px; display: flex; flex-direction: column;">
                    <div id="leafletMapContainer" style="width: 100%; height: 500px; background: #f8fafc;"></div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div class="card" id="geoLeafletDetails" style="border: 1px solid var(--line); padding: 24px; background: var(--soft); min-height: 340px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                        <span style="font-size: 32px; margin-bottom: 12px;">🗺️</span>
                        <h4 style="margin: 0 0 6px 0; color: var(--ink); font-weight: 800;">Exploración Territorial</h4>
                        <p style="margin: 0; color: var(--muted); font-size: 13px; line-height: 1.4;">
                            Seleccione un indicador circular en el mapa de Colombia para cargar las métricas de radicación, volumen total de demandas y estado de transición de la Ley 2452.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    `;

    // 2. Data con Coordenadas Geográficas Reales de Colombia (Latitud, Longitud)
    const distritosColombia = [
        { label: "Bogotá", lat: 4.6097, lng: -74.0817, demandasNuevaLey: 1420, demandasRegimenAnterior: 850, despachos: 45, color: "#10b981" },
        { label: "Antioquia (Medellín)", lat: 6.2518, lng: -75.5636, demandasNuevaLey: 980, demandasRegimenAnterior: 620, despachos: 28, color: "#3b82f6" },
        { label: "Valle del Cauca (Cali)", lat: 3.4372, lng: -76.5225, demandasNuevaLey: 810, demandasRegimenAnterior: 490, despachos: 22, color: "#3b82f6" },
        { label: "Atlántico (Barranquilla)", lat: 10.9639, lng: -74.7964, demandasNuevaLey: 840, demandasRegimenAnterior: 310, despachos: 15, color: "#10b981" },
        { label: "Santander (Bucaramanga)", lat: 7.1254, lng: -73.1198, demandasNuevaLey: 420, demandasRegimenAnterior: 580, despachos: 12, color: "#f59e0b" },
        { label: "Nariño (Pasto)", lat: 1.2136, lng: -77.2811, demandasNuevaLey: 210, demandasRegimenAnterior: 495, despachos: 8, color: "#f59e0b" }
    ];

    // 3. Inyección Dinámica de Dependencias de Leaflet (CSS y JS)
    function cargarLeaflet(callback) {
        if (window.L) {
            callback();
            return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = callback;
        document.head.appendChild(script);
    }

    // 4. Inicialización del Mapa
    cargarLeaflet(() => {
        const mapaColombia = L.map('leafletMapContainer').setView([4.5709, -74.2973], 5.5);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(mapaColombia);

        distritosColombia.forEach(distrito => {
            const totalCarga = distrito.demandasNuevaLey + distrito.demandasRegimenAnterior;
            const radioCalculado = Math.max(10, Math.min(totalCarga / 80, 28));

            const marcador = L.circleMarker([distrito.lat, distrito.lng], {
                radius: radioCalculado,
                fillColor: distrito.color,
                color: '#ffffff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.85
            }).addTo(mapaColombia);

            marcador.bindTooltip(`<strong>Distrito Judicial: ${distrito.label}</strong>`, {
                direction: 'top',
                offset: [0, -5]
            });

            marcador.on('click', () => {
                actualizarPanelDetalle(distrito);
            });
        });

        // 5. Función interna para actualizar el panel de detalles
        function actualizarPanelDetalle(d) {
            const panel = document.getElementById("geoLeafletDetails");
            const total = d.demandasNuevaLey + d.demandasRegimenAnterior;
            const porcentaje = Math.round((d.demandasNuevaLey / total) * 100);

            panel.style.alignItems = "stretch";
            panel.style.textAlign = "left";

            panel.innerHTML = `
                <div>
                    <h4 style="margin: 0; font-size: 16px; font-weight: 900; color: var(--primary);">Distrito de ${d.label}</h4>
                    <span style="font-size: 11px; color: var(--muted); font-weight: 700; text-transform: uppercase;">Métricas Territoriales</span>
                </div>
                
                <hr style="border: 0; border-top: 1px solid var(--line); margin: 12px 0;">

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
                    <div style="background: white; padding: 10px; border-radius: 10px; border: 1px solid var(--line);">
                        <span style="font-size: 10px; color: var(--muted); display: block; font-weight: 700;">DESPACHOS ACTIVOS</span>
                        <strong style="font-size: 16px; color: var(--ink); font-weight: 800;">${d.despachos}</strong>
                    </div>
                    <div style="background: white; padding: 10px; border-radius: 10px; border: 1px solid var(--line);">
                        <span style="font-size: 10px; color: var(--muted); display: block; font-weight: 700;">TOTAL RADICADOS</span>
                        <strong style="font-size: 16px; color: var(--ink); font-weight: 800;">${total}</strong>
                    </div>
                </div>

                <div style="background: white; padding: 12px; border-radius: 12px; border: 1px solid var(--line); margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--muted); font-weight: 700; margin-bottom: 4px;">
                        <span>ADOPCIÓN LEY 2452</span>
                        <span style="color: var(--accent); font-weight: 800;">${porcentaje}%</span>
                    </div>
                    <strong style="font-size: 13px; color: var(--accent); display: block; margin-bottom: 6px;">${d.demandasNuevaLey} Procesos nuevos</strong>
                    <div style="background: var(--soft); height: 6px; border-radius: 3px; overflow: hidden;">
                        <div style="background: ${d.color}; width: ${porcentaje}%;"></div>
                    </div>
                </div>

                <div style="background: white; padding: 12px; border-radius: 12px; border: 1px solid var(--line); border-left: 4px solid #64748b;">
                    <span style="font-size: 10px; color: var(--muted); display: block; font-weight: 700;">RÉGIMEN ANTERIOR (DEC. 2158)</span>
                    <strong style="font-size: 13px; color: var(--ink); font-weight: 700;">${d.demandasRegimenAnterior} <span style="font-size: 11px; font-weight: 500; color: var(--muted);">remanentes</span></strong>
                </div>
            `;
        }
    });
};