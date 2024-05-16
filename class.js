// class Rectangle et class Square 
class Rectangle {

            constructor(width, height ) {
                this.width = width
                this.height = height
            }

            get perimeter () {
                return this.width * 2 + this.height * 2
            }

            get isValid () {
                return this.width > 0 && this.height > 0
            }

            isBiggerThan (shape) {
                return this.perimeter > shape.perimeter
            }
}

class Square extends Rectangle {

            constructor(width){
                super(width, width)
            }
}

// class Book et class Library 

 class Book {

            #page = 1

            constructor(title, pages) {
                 this.title = title
                 this.pages = pages
                 
            }

            get page () {
                return this.#page
            }

            nextPage () {
                if (this.#page < this.pages) {
                    this.#page++
                }
            }

            close () {
                this.#page = 1
            }


}

class Library {

            #books = []

            addBook () {
                this.#books.push(book)
            }

            addBooks (books) {
                for (let book of books) {
                    this.addBook(book)
                }
            }

            findBooksByLetter (letter) {
                return this.#books.filter((book) => book.title[0].toLowerCase() === letter.toLowerCase()
                )
            }
}
