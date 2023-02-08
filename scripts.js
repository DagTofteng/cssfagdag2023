require(["esri/views/SceneView", "esri/widgets/LayerList", "esri/WebScene"], (
  SceneView,
  LayerList,
  WebScene
) => {
  const scene = new WebScene({
    portalItem: {
      id: "adfad6ee6c6043238ea64e121bb6429a",
    },
  });

  //   const view = new SceneView({
  //     container: "mapView",
  //     map: scene,
  //   });

  //   view.when(() => {
  //     const layerList = new LayerList({
  //       view: view,
  //       container: "layerListLeft",
  //     });
  //   });
});

function toggleLayerList() {
  document.getElementById("leftContainer").classList.toggle("isVisible");
}

function toggleDarkMode() {
  document.documentElement.style.setProperty("--primaryColor", "red");
}
