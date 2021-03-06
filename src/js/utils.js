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

export async function loadHeaderFooter(home = false) {
  //Gets the header and footer template
  let headerTemplate = '';
  let footerTemplate = '';

  if (home) {
    headerTemplate = await loadTemplate('partials/header.html');
    footerTemplate = await loadTemplate('partials/footer.html');
  } else {
    headerTemplate = await loadTemplate('../partials/header.html');
    footerTemplate = await loadTemplate('../partials/footer.html');
  }
  
  //Gets the header and footer elements
  const $header = document.getElementById('mainHeader');
  const $footer = document.getElementById('mainFooter');
  //Renders the header and footer
  renderWithTemplate(headerTemplate, $header);
  renderWithTemplate(footerTemplate, $footer);
}
//Capitalize a string
export function capitalize(string) { 
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//Formats the expiration date
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