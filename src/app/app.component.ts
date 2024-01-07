import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  async startListening() {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (!tab.id) return;
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: startRecognition,
    });
  }
}

function startRecognition() {
  const tempWindow: any = window;

  const recognition = new tempWindow.webkitSpeechRecognition();
  recognition.lang = 'es-ES';

  recognition.onresult = function (event: any) {
    const transcript = event.results[0][0].transcript;
    chrome.runtime.sendMessage({ command: transcript });
  };

  recognition.onerror = function (event: any) {
    console.error('Error en la captura de voz:', event.error);
  };

  recognition.start();
}
