window.renderInicio = function (content) {
    content.style.padding = "24px"; // Alineado con el padding de indicadores para consistencia
    content.style.height = "auto";

    content.innerHTML = `
        <div class="layout" style="gap: 30px;">
            
            <div class="card banner-card" style="padding: 20px 30px; position: relative; overflow: hidden;">
                <div style="position: relative; z-index: 2; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
                    <div>
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; line-height: 1.2;">
                            Observatorio de la Ley 2452 de 2025
                        </h1>
                        <span style="color: rgba(255,255,255,0.85); font-size: 13px; font-weight: 500;">
                            Seguimiento al nuevo Código Procesal del Trabajo y de la Seguridad Social
                        </span>
                    </div>
                    <div class="console-card" style="margin: 0; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2);">
                        <i class="dot"></i> Portal Oficial de Monitoreo
                    </div>
                </div>
            </div>

            <div class="card" style="padding: 24px 30px; background: var(--soft); border-left: 5px solid var(--accent); box-shadow: var(--shadow);">
                <h3 style="margin: 0 0 10px 0; color: var(--accent); font-size: 18px; font-weight: 800; letter-spacing: -0.5px;">
                     ¿Qué es y qué pretende este Observatorio?
                </h3>
                <p style="margin: 0; font-size: 14px; color: var(--ink); line-height: 1.6; text-align: justify;">
                    El Observatorio de la Ley 2452 de 2025 constituye una herramienta estratégica para el seguimiento, análisis y evaluación de la implementación del nuevo <strong>Código Procesal del Trabajo y de la Seguridad Social</strong>. Desarrollado por la <strong>Unidad de Desarrollo y Análisis Estadístico (UDAE)</strong>, su objetivo es convertir los cambios normativos en información medible y verificable, matrices comparativas e indicadores de desempeño. De esta manera, permite evidenciar el impacto de la reforma en la eficiencia, acceso y calidad de la justicia laboral, transformando los datos en información útil para evaluar la carga laboral, medir efectos en descongestión y apoyar de manera directa las decisiones institucionales del <strong>Consejo Superior de la Judicatura</strong>.
                </p>
            </div>

            <div class="card" style="padding: 30px;">
                <h3 style="margin: 0 0 8px 0; color: var(--accent); font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">
                    Ejes Centrales de la Evaluación
                </h3>
                <p style="margin: 0 0 24px 0; color: var(--muted); font-size: 14px;">
                    El seguimiento del observatorio se articula en torno a tres dimensiones estratégicas fundamentales para el éxito de la reforma:
                </p>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                    <div class="card" style="border-left: 5px solid var(--primary); background: var(--soft); margin: 0; box-shadow: none;">
                        <h4 style="margin: 0 0 8px 0; color: var(--primary); font-size: 12px; font-weight: 800; text-transform: uppercase;">Eficiencia Judicial</h4>
                        <p style="margin: 0; font-size: 14px; color: var(--ink); line-height: 1.5;">Medición de los efectos de la reforma en la descongestión y la agilidad de los procesos laborales.</p>
                    </div>
                    <div class="card" style="border-left: 5px solid var(--accent); background: var(--soft); margin: 0; box-shadow: none;">
                        <h4 style="margin: 0 0 8px 0; color: var(--accent); font-size: 12px; font-weight: 800; text-transform: uppercase;">Acceso a la Justicia</h4>
                        <p style="margin: 0; font-size: 14px; color: var(--ink); line-height: 1.5;">Evaluación de las garantías de protección ciudadana en materia de seguridad social y derechos sindicales.</p>
                    </div>
                    <div class="card" style="border-left: 5px solid var(--muted); background: var(--soft); margin: 0; box-shadow: none;">
                        <h4 style="margin: 0 0 8px 0; color: var(--muted); font-size: 12px; font-weight: 800; text-transform: uppercase;">Decisiones Estratégicas</h4>
                        <p style="margin: 0; font-size: 14px; color: var(--ink); line-height: 1.5;">Soporte analítico basado en datos reales para la toma de decisiones del Consejo Superior de la Judicatura.</p>
                    </div>
                </div>
            </div>

            <div class="card" style="padding: 30px;">
                <h3 style="margin: 0 0 8px 0; color: var(--accent); font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">
                    Seguimiento por Nivel Judicial
                </h3>
                <p style="margin: 0 0 24px 0; color: var(--muted); font-size: 14px;">
                    Diferenciación del impacto de la reforma e identificación de la gestión de la especialidad laboral a través de los despachos competentes:
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
                                <strong style="font-size: 14px; color: var(--ink);">Salas Laborales, Únicas y Mixtas</strong>
                                <span style="display: block; font-size: 11px; color: var(--muted);">Tribunales Superiores de Distrito Judicial (Laboral, Única, Civil-Familia-Laboral)</span>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: var(--soft); padding: 16px 20px; border-radius: 16px; border: 1px solid var(--line); display: flex; align-items: center; gap: 14px;">
                            <span style="background: var(--primary); color: white; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 12px;">JC</span>
                            <div>
                                <strong style="font-size: 14px; color: var(--ink);">Juzgados de Circuito Especializados y Mixtos</strong>
                                <span style="display: block; font-size: 11px; color: var(--muted);">Juzgados Laborales y Promiscuos del Circuito / Civiles del Circuito (Laboral y Familia)</span>
                            </div>
                        </div>
                        <div style="background: var(--soft); padding: 16px 20px; border-radius: 16px; border: 1px solid var(--line); display: flex; align-items: center; gap: 14px;">
                            <span style="background: var(--primary); color: white; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 12px;">JM</span>
                            <div>
                                <strong style="font-size: 14px; color: var(--ink);">Juzgados Municipales y Civiles con Competencia</strong>
                                <span style="display: block; font-size: 11px; color: var(--muted);">Juzgados Laborales Municipales y Despachos Civiles con competencia por cuantía/materia</span>
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
                    El análisis estadístico prioriza de manera estricta la recolección de datos en las siguientes figuras e innovaciones del nuevo código:
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
                        <span class="filter-tag" style="margin-top:0; background: var(--profile-2); color: var(--profile-dark);">Seguridad Social</span>
                        <h5 style="margin: 10px 0 0 0; font-size: 14px; font-weight: 800;">Nuevos Asuntos y Sindicatos</h5>
                    </div>
                    <div style="background: #fff; padding: 16px; border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <span class="filter-tag" style="margin-top:0; background: var(--profile-2); color: var(--profile-dark);">Mecanismos</span>
                        <h5 style="margin: 10px 0 0 0; font-size: 14px; font-weight: 800;">Conciliación y Arbitramento</h5>
                    </div>
                    <div style="background: #fff; padding: 16px; border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <span class="filter-tag" style="margin-top:0; background: var(--profile-2); color: var(--profile-dark);">Colectivos</span>
                        <h5 style="margin: 10px 0 0 0; font-size: 14px; font-weight: 800;">Procesos Colectivos Laborales</h5>
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 10px;">
                <button onclick="window.render(3)" style="background: var(--accent); color: white; border: none; border-radius: 16px; padding: 14px 28px; font-weight: 800; font-size: 14px; cursor: pointer; box-shadow: var(--shadow); transition: transform 0.2s;">
                    Ir al Dashboard de Indicadores →
                </button>
            </div>

        </div>
    `;
};