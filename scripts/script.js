function toggleSourceView() {
    const sources = document.getElementById("sourcesDiv")
    let sourcesToggleButton = document.getElementById("sourcesButton")
    if (sources.style.display === "block") {
        sources.style.display = "none"
        sourcesToggleButton.innerHTML = "Show Sources"
    }
    else {
        sources.style.display = "block"
        sourcesToggleButton.innerHTML = "Hide Sources"
    }

}