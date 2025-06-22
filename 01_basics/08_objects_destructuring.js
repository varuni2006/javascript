const course ={
    courseName: "javascript",
    courseInstructor: "abc",
    courseId: 123
}

console.log(course.courseInstructor);

//if you dont want to write such a big thing then 
//Object destructuring

const {courseInstructor} = course
console.log(courseInstructor);

//if courseInstructor stills feels big then you can assign it other name as well 

//name can also be shortened ex doing it for courseName

const {courseName : name} = course
console.log(name);


