/*

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>username</th>
            <th>password</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>1</td>
            <td>root</td>
            <td>toor123</td>
        </tr>
    </tbody>
</table>


*/

// in js you need to use createElement() and appendChild()


const ParentElement = document.querySelector('.container');

// 1.Table Parent Element
const table = document.createElement('table');

// Child-Parent Elements of Table
const thead = document.createElement('thead');
const tbody = document.createElement('tbody')

// BEGIN THEAD
// Child of Thead
const TrOfThead = document.createElement('tr');

// Child of tr in thead
const ThOfTrInThead1 = document.createElement('th')
// insert text into th
// ThOfTrInThead1.innerText= "#"
ThOfTrInThead1.appendChild(document.createTextNode('#'))

const ThOfTrInThead2 = document.createElement('th')
ThOfTrInThead2.appendChild(document.createTextNode('username'))

const ThOfTrInThead3 = document.createElement('th')
ThOfTrInThead3.appendChild(document.createTextNode('password'))

// Append TH elements into Tr OF thead
TrOfThead.appendChild(ThOfTrInThead1)
TrOfThead.appendChild(ThOfTrInThead2)
TrOfThead.appendChild(ThOfTrInThead3)

// Append Tr of thead into thead element
thead.appendChild(TrOfThead)

// END OF THEAD

// TBODY 
const Tr_Of_Tbody = document.createElement('tr');

const Td_Of_Tr_inTbody1 = document.createElement('td')
Td_Of_Tr_inTbody1.appendChild(document.createTextNode('1'))

const Td_Of_Tr_inTbody2 = document.createElement('td')
Td_Of_Tr_inTbody2.appendChild(document.createTextNode('root'))

const Td_Of_Tr_inTbody3 = document.createElement('td')
Td_Of_Tr_inTbody3.appendChild(document.createTextNode('toor123'))

Tr_Of_Tbody.appendChild(Td_Of_Tr_inTbody1)
Tr_Of_Tbody.appendChild(Td_Of_Tr_inTbody2)
Tr_Of_Tbody.appendChild(Td_Of_Tr_inTbody3)

// TR appended into tbody
tbody.appendChild(Tr_Of_Tbody)

// Append thead into table
table.appendChild(thead)
table.appendChild(tbody)

ParentElement.appendChild(table)