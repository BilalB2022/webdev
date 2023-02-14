function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year
    this.summary = function(){
        console.log(`The author of "${this.title}" is ${this.author} in ${this.year}`);
        return {title:this.title, author:this.author,year:this.year}
    }
}

const Book1 = new Book('Harry Potter','JK Rowling','2004')
const Book2 = new Book('GVR','Charlie','2010')
const Book3 = new Book('De Heksen','Charlie','2003')
Book1.summary()

let pickedBooks = []

pickedBooks.push(Book1.summary(),Book2.summary(),Book3.summary())

console.log(pickedBooks);