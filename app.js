//DOM Elements

const studentForm = document.getElementById("studentForm");
const studentContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
  const newStudent = {
    name,
    age,
    roll,
  };
  students.push(newStudent);

  localStorage.setItem("students", JSON.stringify(students));
  return newStudent;
};

const createStudentElement = ({ name, age, roll }) => {
  //create Elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  //Fill the content of the created elements
  studentName.innerText = "Student name: " + name;
  studentAge.innerText = "Student age: " + age;
  studentRoll.innerText = "Student roll number: " + roll;

  //Add created elements to the DOM
  studentDiv.append(studentName, studentAge, studentRoll);
  studentContainer.appendChild(studentDiv);

  studentContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );
  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
});
