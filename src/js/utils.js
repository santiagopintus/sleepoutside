//A short version of querySelector
export function qs(selector) {
  return document.querySelector(selector);
}
// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// Convert to text
function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error('Bad Response');
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(template, parent, products, callback) {
  products.forEach(item => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, item);
    parent.appendChild(templateWithData);
  })
}
export function renderWithTemplate(template, parent, data = '', callback = false) {
  const clone = template.content.cloneNode(true);
  const templateWithData = callback ? callback(clone, data) : clone;
  parent.appendChild(templateWithData);
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter() {
  //Gets the header and footer template
  const headerTemplate = await loadTemplate('../partials/header.html');
  const footerTemplate = await loadTemplate('../partials/footer.html');
  
  //Gets the header and footer elements
  const $header = document.getElementById('mainHeader');
  const $footer = document.getElementById('mainFooter');
  //Renders the header and footer
  renderWithTemplate(headerTemplate, $header);
  renderWithTemplate(footerTemplate, $footer);
}
    