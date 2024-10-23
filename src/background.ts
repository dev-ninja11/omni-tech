import { Message } from "./messaging";

chrome.runtime.onMessage.addListener(
  ({ message, payload }: { message: Message; payload: any }) => {
    switch (message) {
      case Message.LOADED:
        console.log("Content script loaded", payload);
        break;
      case Message.STORE_ELEMENTS:
        const { url, elements } = payload;
        chrome.storage?.local.get([url], (result) => {
          const existingData = result[url] || [];
          const updatedData = [...existingData, ...elements];
          chrome.storage?.local.set({ [url]: updatedData }, () => {
            console.log(`Data stored for ${url}`);
          });
        });
        break;
    }
  }
);
