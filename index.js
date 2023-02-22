class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.marks = [];
        this.visited = [];
        this.MAX_VISITED = 25;
        this.MIN_VISIT = 0.9;
        this.MIN_RATTING = 90;
        this.currentVisited = 0;
    }

    age() {
        return new Date().getFullYear() - this.year;
    }

    averageMark() {
        const sumMark = this.marks.reduce((result, mark) =>  result + mark, 0);
        return this.currentVisited ? sumMark / this.currentVisited : 0;

    }
    checkPresent(){
        if (this.currentVisited === this.MAX_VISITED)
            throw new RangeError(`${this.firstName} ${this.lastName} уже закончил сессию.`);
    }
    present(mark) {
        this.checkPresent();
        this.marks[this.currentVisited] = mark;
        this.visited[this.currentVisited] = true;
        this.currentVisited++;
        return this;
    }
    absent() {
        this.checkPresent();
        this.visited[this.currentVisited] = false;
        this.currentVisited++;
        return this;
    }
    averageVisited(){
        return this.visited.filter(visited => visited).length / this.visited.length
    }
    summary(){
        let message;
        if(this.averageMark() >= this.MIN_RATTING && this.averageVisited() >= this.MIN_VISIT){
            message = "Молодець!";
        }else if(this.averageMark() >= this.MIN_RATTING || this.averageVisited() >= this.MIN_VISIT){
            message = "Добре, але можна краще ";
        } else {
            message = "Редиска!";
        }

        console.log(message);
    }
}

let student = new Student("Василий", "Сохоневич", 1996);
student.present(80).present(80).present(80)
student.present(80)
student.absent()
student.present(80)
student.present(70)
student.present(70)
student.absent()
student.present(100)
student.present(100)
student.present(100)
student.present(70)
student.present(100)
student.present(100)
student.absent()
student.absent()
student.absent()
student.absent()
student.absent()
student.absent()
student.absent()
student.present(100)
student.present(100)
student.present(100)
console.log(student.averageMark());
console.log(student.age());
console.log(student.averageVisited());
console.log(student.summary());
