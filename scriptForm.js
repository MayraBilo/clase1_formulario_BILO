const estadoSelected = document.getElementById("estado");

estadoSelected.addEventListener("change", function () {
  let estadoSeleccionado = estadoSelected.value;
  document.getElementById("estadoSeleccionado").textContent =
    estadoSeleccionado;
});
