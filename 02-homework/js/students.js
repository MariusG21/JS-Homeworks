import utils from "./utils/utils.js";

class StudentManager {
  students = JSON.parse(localStorage.getItem("students")) || [];

  static Student = class {
    constructor(name, color, avatar, id) {
      this.name = name;
      this.color = color;
      this.avatar = avatar;
      this.id = id;
    }
  };

  addNewStudent() {
    let studentName = document.querySelector(".student-input").value.trim();
    if (studentName.length < 2) {
      alert("Invalid student name...");
      return;
    }
    const colorInput = document.querySelector(".color-input");
    const color = colorInput.value;
    const avatar = `https://api.dicebear.com/9.x/bottts/svg?seed=${studentName}`;
    const studentId = utils.getRandomId();
    colorInput.value = utils.getRandomColor();

    this.students.push(
      new StudentManager.Student(studentName, color, avatar, studentId)
    );
    this.#saveStudents();

    //clear input after submit
    document.querySelector(".student-input").value = "";
  }

  removeStudent(studentId) {
    this.students = this.students.filter((student) => student.id !== studentId);
    this.#saveStudents();
  }

  #saveStudents() {
    localStorage.setItem("students", JSON.stringify(this.students));
  }

  clearStudentsList() {
    this.students = [];
    this.#saveStudents();
  }

  renderRandomStudent(pickedStudentContainer, pickedStudentImg) {
    const randomStudent = utils.getRandomStudent(this.students);

    if (!randomStudent) {
      pickedStudentContainer.textContent = "Add some students to pick from...";
      pickedStudentImg.src =
        "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg";
      pickedStudentImg.style.border = "";
    }
    pickedStudentContainer.textContent = randomStudent.name;
    pickedStudentImg.src = randomStudent.avatar;
    pickedStudentImg.style.border = `4px solid ${randomStudent.color}`;
  }
}

export const studentManager = new StudentManager();
