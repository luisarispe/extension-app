chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id! },
        func: function (command) {
          // Acciones basadas en el comando recibido
          console.log('Comando recibido:', command);
          // Ejemplo: Simular un clic en un botón de la página con el comando recibido
          if (command === 'hacer clic') {
            // const button = document.getElementById('boton');
            // if (button) {
            //   button.click();
            // }
            document!.querySelector('a')!.click();
          }
          // ...
        },
        args: [request.command],
      });
    });
  }
});
