function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error('Bad Response');
  }
}

// wrapper for querySelector...returns matching element
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

export function renderListWithTemplate(template, parent, list, callback) {
  list.forEach((item) => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, item);
    parent.appendChild(templateWithData);
  });
}

export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, data);
  }
  parent.appendChild(clone);
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

// load the header and footer
export async function loadHeaderFooter() {
  const header = await loadTemplate('../partials/header.html');
  const footer = await loadTemplate('../partials/footer.html');
  const headerElement = document.getElementById('main-header');
  const footerElement = document.getElementById('main-footer');
  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);
}

export function formatExpirationDate(string) {
  return string.replace(
      /[^0-9]/g, '' // To allow only numbers
  ).replace(
      /^([2-9])$/g, '0$1' // To handle 3 > 03
  ).replace(
      /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
  ).replace(
      /^0{1,}/g, '0' // To handle 00 > 0
  ).replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
  );
}