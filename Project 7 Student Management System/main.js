var Student = /** @class */ (function () {
    function Student(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudent = function (id, name, grade) {
        var student = new Student(id, name, grade);
        this.students.push(student);
    };
    StudentManagementSystem.prototype.getStudentById = function (id) {
        return this.students.find(function (student) { return student.id === id; });
    };
    StudentManagementSystem.prototype.getAllStudents = function () {
        return this.students;
    };
    return StudentManagementSystem;
}());
// Example usage
var studentSystem = new StudentManagementSystem();
studentSystem.addStudent(1, 'Alice', 'A');
studentSystem.addStudent(2, 'Bob', 'B');
studentSystem.addStudent(3, 'Charlie', 'C');
console.log(studentSystem.getAllStudents());
var studentById = studentSystem.getStudentById(2);
if (studentById) {
    console.log("Student found: ".concat(studentById.name, ", Grade: ").concat(studentById.grade));
}
else {
    console.log('Student not found');
}
