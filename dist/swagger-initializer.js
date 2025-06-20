window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {url: "api/specs/gb-bff/GB-BFF.yaml", name: "GB BFF"},
      {url: "api/specs/gb-svc/GB-SVC.yaml", name: "GB Service"},
      {url: "api/specs/gb-notification-svc/GB-NOTIFICATION-SVC.yaml", name: "GB Notification Service"},
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
