// List of String Methods

/*

1. charAt()
2. charCodeAt()
3. concat()
4. endsWith()
5. fromCharCode()
6. includes()
7. indexOf()
8. lastIndexOf()
9. localeCompare()
10. match()
11. repeat()
12. replace()
13. search()
14. slice()
15. split()
16. startsWith()
17. substr()
18. substring()
19. toLocaleLowerCase()
20. toLocaleUpperCase()
21. toLowerCase()
22. toString()
23. toUpperCase()
24. trim()
25. valueOf()

*/

var FullText = "Veniam et nulla veniam excepteur aute duis in microsoft consequat quis 04485 fugiat eu  microsoft pariatur  microsoft est enim Veniam."

// 1. charAt(position<number>) extract char from a string

var result = FullText.charAt(0)
result = FullText.charAt(6)
result = FullText.charAt(10)

// 2. charCodeAt(position<number>)

result = FullText.charCodeAt(16)
result = FullText.charCodeAt(5)

// 3. concat() 

var txt = 'Hello'
result = txt.concat(' World').concat(' new word').concat(' another world')

// 4. endsWith(<string>) 

result = FullText.endsWith('enim.') //returns only true or fals

// 5. startsWith(<string>)   

result = FullText.startsWith('Hello')
result = FullText.startsWith('Veniam')

// 6. fromCharCode(utf16<number>)

result = String.fromCharCode(86)
result = String.fromCharCode(101)
result = String.fromCharCode(86)
result = String.fromCharCode(86)

// 7. includes(SearchWords<string>) 

result = FullText.includes('nulla') //true
result = FullText.includes('microsoft') //true

// 8. indexOf(word or a char<srting>) first match !

result = FullText.indexOf('Veniam')
result = FullText.indexOf('intec')

// 8bis. lastIndexOf(word or a char<srting>) last match !

result = FullText.indexOf('Veniam')
result = FullText.indexOf('intec')

// 9. substr(startPosition<number>,endPosition<number>) 

result = FullText.substr(0,10)
result = FullText.substring(0,10)

// 10. toLowerCase() // A > a

result = FullText.toLowerCase()

// 11. toUpperCase() // A > a

result = FullText.toUpperCase()

// 12. match()

result = FullText.match('microsoft')
result = FullText.match('INTEC')
result = FullText.match(/[a-zA-Z0-9]+/g) //regex method  --> https://regex101.com/
result = FullText.match(/microsoft/g)

// 13. repeat() 

result = FullText.repeat(3).repeat(5)
result = '#'.repeat(20)

// 14. replace() 

result = result.replace('#','$')
result = result.replace(/a-z/g, 'car')

// 15. replaceAll() 
result = result.replaceAll('#','$')
result = "wwwwwwwwwmicrosoftwwwwwwwwwwwwww".replace(/[a-z]/g,"lol")

var user_email="jimmy@microsoft.com johnny@gmail.com admin@yandex.com"
var myEmailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
result = [...user_email.matchAll(myEmailRegex)]

const FindAllEmails = (stringData) => {
    return stringData.match(myEmailRegex)
}

var myStringData = "abc@intec.com admin@gmail.com"

result = FindAllEmails(user_email)


var FindEmails = "bilal@microsoft.com mohammed@gmail.com bilal@gmail.com ara@abc.be prince@brussel.be"

result = FindEmails.match(/[a-zA-Z]+@(gmail.com)/g) // only gmail.com emails

console.log(result)

// 16. split('') 

result = 'bilal,ahmad,mohamed,nina,zana,prince,axel'
result = 'a1-b2-c3-d4'
result = result.split('|')

// 17. trim() 

result = '          hello       '
result =  result.trim()

// 18. search() 

result = 'Microsoft Products'.search(/Products/g) // Position of the world i search for
result = 'Microsoft Products Products'.search('Products') //position index


// 19. toString() 

result = ['a','b','c','d','e','f'].toString()

console.log(result);
