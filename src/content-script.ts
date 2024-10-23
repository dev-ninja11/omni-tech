import { Message } from "./messaging";

const urlParams = new URLSearchParams(window.location.search);
const reverse = urlParams.get("reverse") === "true";

const highlightElement = (element: HTMLElement, color: string) => {
  element.style.outline = `2px solid ${color}`;
};

const processPage = () => {
  const elements: { tag: string; href?: string | null }[] = [];
  const links = document.querySelectorAll<HTMLAnchorElement>("a");
  const buttons = document.querySelectorAll<HTMLButtonElement>("button");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    elements.push({ tag: "a", href });
    highlightElement(link, reverse ? "blue" : "orange");
  });

  buttons.forEach((button) => {
    elements.push({ tag: "button" });
    highlightElement(button, reverse ? "orange" : "blue");
  });

  chrome.runtime.sendMessage({
    message: Message.STORE_ELEMENTS,
    payload: {
      url: window.location.href,
      elements,
    },
  });
};

(() => {
  chrome.runtime.sendMessage({
    message: Message.LOADED,
    payload: { version: 1.0 },
  });

  processPage();
})();
