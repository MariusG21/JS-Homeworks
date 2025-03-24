import { studentManager } from "./students.js";
import utils from "./utils/utils.js";

const addStudentForm = document.querySelector("#add-student-form");
addStudentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  studentManager.addNewStudent();
  renderStudentList();
});

//random color on load
document.querySelector(".color-input").value = utils.getRandomColor();

function renderStudentList() {
  let studentsListHTML = "";

  studentManager.students.forEach((student) => {
    studentsListHTML += `
    <tr>
      <td>
        <img
          src="${student.avatar}"
          alt="avatar"
          class="img-thumbnail me-2"
          style="border:2px solid ${student.color}"
        />
        ${student.name}
      </td>
      <td class="text-end">
        <button class="btn btn-outline-secondary btn-sm delete-student" data-student-id="${student.id}">
          delete
        </button>
      </td>
    </tr>
  `;
  });

  document.querySelector(".students-list").innerHTML = studentsListHTML;

  //remove student from list
  document.querySelectorAll(".delete-student").forEach((btn) => {
    btn.addEventListener("click", () => {
      const { studentId } = btn.dataset;
      studentManager.removeStudent(studentId);
      renderStudentList();
    });
  });
}
renderStudentList();

//pick a random student
document.querySelector("#pick-student-btn").addEventListener("click", () => {
  const pickedStudentContainer = document.getElementById("picked-student-div");
  const pickedStudentImg = document.getElementById("picked-student-img");

  studentManager.renderRandomStudent(pickedStudentContainer, pickedStudentImg);
});

//remove all students from list
document.getElementById("clear-all-students").addEventListener("click", () => {
  studentManager.clearStudentsList();
  renderStudentList();
});
