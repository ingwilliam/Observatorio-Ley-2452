window.renderInicio = function (content) {
    content.style.padding = "24px"; // Alineado con el padding de indicadores para consistencia
    content.style.height = "auto";

    content.innerHTML = `
        <div class="layout" style="gap: 30px;">
            
            <div class="card banner-card" style="padding: 40px; position: relative; overflow: hidden;">
                <div style="position: relative; z-index: 2; max-width: 800px;">
                    <div class="console-card" style="margin-top: 0; margin-bottom: 16px; background: rgba(255,255,255,0.2);">
                        <i class="dot"></i> Portal Oficial de Monitoreo
                    </div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 900; letter-spacing: -1px; line-height: 1.2;">
                        Observatorio de la Ley 2452 de 2025
                    </h1>
                    <p style="margin: 12px 0 0 0; color: #ffffff; opacity: 0.95; font-size: 16px; line-height: 1.6; font-weight: 500;">
                        Herramienta estratégica para el seguimiento, análisis y evaluación de la implementación del nuevo 
                        <strong>Código Procesal del Trabajo y de la Seguridad Social</strong>. Convertimos los cambios normativos 
                        en información medible, matrices comparativas e indicadores de desempeño.
                    </p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                <div class="card" style="border-left: 5px solid var(--primary);">
                    <h4 style="margin: 0 0 8px 0; color: var(--primary); font-size: 12px; font-weight: 800; text-transform: uppercase;">Eficiencia Judicial</h4>
                    <p style="margin: 0; font-size: 14px; color: var(--ink); line-height: 1.5;">Medición de los efectos de la reforma en la descongestión y la agilidad de los procesos laborales.</p>
                </div>
                <div class="card" style="border-left: 5px solid var(--accent);">
                    <h4 style="margin: 0 0 8px 0; color: var(--accent); font-size: 12px; font-weight: 800; text-transform: uppercase;">Acceso a la Justicia</h4>
                    <p style="margin: 0; font-size: 14px; color: var(--ink); line-height: 1.5;">Evaluación de las garantías de protección ciudadana en materia de seguridad social y derechos sindicales.</p>
                </div>
                <div class="card" style="border-left: 5px solid var(--muted);">
                    <h4 style="margin: 0 0 8px 0; color: var(--muted); font-size: 12px; font-weight: 800; text-transform: uppercase;">Decisiones Estratégicas</h4>
                    <p style="margin: 0; font-size: 14px; color: var(--ink); line-height: 1.5;">Soporte analítico basado en datos reales para la toma de decisiones del Consejo Superior de la Judicatura.</p>
                </div>
            </div>

            <div class="card" style="padding: 30px;">
                <h3 style="margin: 0 0 8px 0; color: var(--accent); font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">
                    Seguimiento por Nivel Judicial
                </h3>
                <p style="margin: 0 0 24px 0; color: var(--muted); font-size: 14px;">
                    Diferenciación del impacto de la reforma a través de las distintas instancias y despachos competentes del territorio nacional:
                </p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: var(--soft); padding: 16px 20px; border-radius: 16px; border: 1px solid var(--line); display: flex; align-items: center; gap: 14px;">
                            <span style="background: var(--accent); color: white; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 12px;">CSJ</span>
                            <div>
                                <strong style="font-size: 14px; color: var(--ink);">Sala de Casación Laboral</strong>
                                <span style="display: block; font-size: 11px; color: var(--muted);">Corte Suprema de Justicia</span>
                            </div>
                        </div>
                        <div style="background: var(--soft); padding: 16px 20px; border-radius: 16px; border: 1px solid var(--line); display: flex; align-items: center; gap: 14px;">
                            <span style="background: var(--accent); color: white; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 12px;">TS</span>
                            <div>
                                <strong style="font-size: 14px; color: var(--ink);">Salas Laborales y Únicas</strong>
                                <span style="display: block; font-size: 11px; color: var(--muted);">Tribunales Superiores de Distrito Judicial</span>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: var(--soft); padding: 16px 20px; border-radius: 16px; border: 1px solid var(--line); display: flex; align-items: center; gap: 14px;">
                            <span style="background: var(--primary); color: white; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 12px;">JC</span>
                            <div>
                                <strong style="font-size: 14px; color: var(--ink);">Juzgados Laborales y Promiscuos del Circuito</strong>
                                <span style="display: block; font-size: 11px; color: var(--muted);">Conocimiento especializado y mixto de circuito</span>
                            </div>
                        </div>
                        <div style="background: var(--soft); padding: 16px 20px; border-radius: 16px; border: 1px solid var(--line); display: flex; align-items: center; gap: 14px;">
                            <span style="background: var(--primary); color: white; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 12px;">JM</span>
                            <div>
                                <strong style="font-size: 14px; color: var(--ink);">Juzgados Municipales y Civiles con Competencia</strong>
                                <span style="display: block; font-size: 11px; color: var(--muted);">Despachos con conocimiento en asuntos laborales por cuantía/materia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style="padding: 30px;">
                <h3 style="margin: 0 0 6px 0; color: var(--accent); font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">
                    Aspectos Clave bajo Monitoreo Estadístico
                </h3>
                <p style="margin: 0 0 24px 0; color: var(--muted); font-size: 14px;">
                    El análisis analítico del observatorio prioriza la recolección de datos en las siguientes figuras e innovaciones del nuevo código:
                </p>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;" id="focosGrid">
                    <div style="background: #fff; padding: 16px; border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <span class="filter-tag" style="margin-top:0; background: var(--profile-2); color: var(--profile-dark);">Casación</span>
                        <h5 style="margin: 10px 0 0 0; font-size: 14px; font-weight: 800;">Selección Oficiosa</h5>
                    </div>
                    <div style="background: #fff; padding: 16px; border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <span class="filter-tag" style="margin-top:0; background: var(--profile-2); color: var(--profile-dark);">Instancias</span>
                        <h5 style="margin: 10px 0 0 0; font-size: 14px; font-weight: 800;">Fortalecimiento 2da Instancia</h5>
                    </div>
                    <div style="background: #fff; padding: 16px; border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <span class="filter-tag" style="margin-top:0; background: var(--profile-2); color: var(--profile-dark);">Eficiencia</span>
                        <h5 style="margin: 10px 0 0 0; font-size: 14px; font-weight: 800;">Sentencia Anticipada</h5>
                    </div>
                    <div style="background: #fff; padding: 16px; border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <span class="filter-tag" style="margin-top:0; background: var(--profile-2); color: var(--profile-dark);">Especiales</span>
                        <h5 style="margin: 10px 0 0 0; font-size: 14px; font-weight: 800;">Proceso Monitorio Laboral</h5>
                    </div>
                    <div style="background: #fff; padding: 16px; border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <span class="filter-tag" style="margin-top:0; background: var(--profile-2); color: var(--profile-dark);">Gestión</span>
                        <h5 style="margin: 10px 0 0 0; font-size: 14px; font-weight: 800;">Contumacia y Competencias</h5>
                    </div>
                    <div style="background: #fff; padding: 16px; border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <span class="filter-tag" style="margin-top:0; background: var(--profile-2); color: var(--profile-dark);">Derechos</span>
                        <h5 style="margin: 10px 0 0 0; font-size: 14px; font-weight: 800;">Seguridad Social y Sindicales</h5>
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 10px;">
                <button onclick="window.render(2)" style="background: var(--accent); color: white; border: none; border-radius: 16px; padding: 14px 28px; font-weight: 800; font-size: 14px; cursor: pointer; box-shadow: var(--shadow); transition: transform 0.2s;">
                    Ir al Dashboard de Indicadores →
                </button>
            </div>

        </div>
    `;
};