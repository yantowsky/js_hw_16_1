class Student {
    constructor(firstName, lastName, yearBirthDay, scores) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBirthDay = yearBirthDay;
        this.scores = scores;
        this.age = this.getAge();
        this.averageScore = this.getAverageScore();
        this.topScore = 90;
        this.arrayPresence = new Array(25);
        this.indexPresence = 0;
        this.topFactorPresence = 0.9;
        this.result = {
            SUPER: 'Молодець!',
            GOOD: 'Добре, але можна краще',
            BAD: 'Редиска!'
        }
    }

    getAge() {
        let today = new Date();
        const age = today.getFullYear() - this.yearBirthDay;
        return age;
    }

    getAverageScore() {
        let sumScores = 0;
        this.scores.forEach(element => {
            sumScores += element;
        });
        const countScores = this.scores.length;
        const averageScore = sumScores / countScores;
        return averageScore;
    }

    get averagePresence() {
        let countPresence = this.arrayPresence.slice(0, this.indexPresence).filter(x => x).length;
        return countPresence / this.indexPresence;
    }

    absent() {
        this.arrayPresence.length > this.indexPresence &&
            (this.arrayPresence[this.indexPresence] = false,
                this.indexPresence++);
    }

    present() {
        this.arrayPresence.length > this.indexPresence &&
            (this.arrayPresence[this.indexPresence] = true,
                this.indexPresence++);
    }

    info() {
        console.log(`FullName: ${this.firstName} ${this.lastName}, Age: ${this.age}`);
        console.log(`Average Score: ${this.averageScore}, Factor Presence: ${this.averagePresence}`);
    }


    summer() {
        if (this.averageScore > this.topScore && this.averagePresence > this.topFactorPresence) {
            console.log(this.result.SUPER);
        } else if (this.averageScore > this.topScore || this.averagePresence > this.topFactorPresence) {
            console.log(this.result.GOOD);
        } else {
            console.log(this.result.BAD);
        }
    }
}

const studentEugene = new Student('Eugene', 'Yantowsky', 1979, [100, 99, 99, 97, 70]);

studentEugene.present();
studentEugene.present();
studentEugene.present();
studentEugene.present();
studentEugene.present();

studentEugene.info();

studentEugene.summer();

console.log('=======================================================');

const studentElon = new Student('Elon', 'Musk', 1971, [99, 89, 70, 80, 60, 55, 95, 100, 99]);

studentElon.absent();
studentElon.absent();
studentElon.absent();
studentElon.absent();
studentElon.absent();
studentElon.absent();
studentElon.absent();
studentElon.absent();
studentElon.absent();

studentElon.info();

studentElon.summer();