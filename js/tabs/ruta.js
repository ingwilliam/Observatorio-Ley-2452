window.renderRuta = function (content) {
    content.style.padding = "0";
    content.style.height = "700px";
    content.innerHTML = `<iframe src="https://www.arcgis.com/apps/dashboards/ef4f858655a445bab6920e853e377c37" style="width: 100%; height: 100%; border: 0; display: block;" allowfullscreen></iframe>`;
};