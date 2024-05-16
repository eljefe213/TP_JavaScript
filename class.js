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
