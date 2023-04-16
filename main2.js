class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name= name,
        this.email= email,
        this.username= username,
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses,
        this.learningPaths = learningPaths,
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanitokun@gmail.com",
    twitter: "juan",
});

const miguelito = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelitokun@gmail.com",
    instagram: "miguelito_feliz",
});