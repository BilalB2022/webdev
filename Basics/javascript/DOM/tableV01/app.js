const ParentElement = document.querySelector('.container');

// element generator
const g = tagName => document.createElement(tagName);
// textNode generator
const t = content => document.createTextNode(content);

// table,thead,tbody
const table = g('table');
const thead = g('thead');
const tbody = g('tbody');

// thead
const thead_tr = g('tr');

// th
const th1 = g('th');
th1.appendChild(t('#')) // text inserted

const th2 = g('th');
th2.appendChild(t('username')) // text inserted

const th3 = g('th');
th3.appendChild(t('password')) // text inserted

// Append 3 th into tr 
// thead_tr.appendChild(th1)
// thead_tr.appendChild(th2)
// thead_tr.appendChild(th3)
const th_Elements = [th1,th2,th3]
th_Elements.forEach(th=>thead_tr.appendChild(th))

thead.appendChild(thead_tr) // append tr into thead

table.appendChild(thead);

// tbody
const tbody_tr = g('tr');

// td 
const td1 = g('td');
td1.appendChild(t('1')) // t('1') > textNode
const td2 = g('td');
td2.appendChild(t('root'))
const td3 = g('td');
td3.appendChild(t('toor123'))

const tdElements = [td1,td2,td3]
tdElements.forEach(td=>tbody_tr.appendChild(td))

// append tr into tbody
tbody.appendChild(tbody_tr)

// tbody need to be append into table
table.appendChild(tbody)

// append table in to container
ParentElement.appendChild(table)