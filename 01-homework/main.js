const students = [];

function getUserInfo() {
  const name = prompt("Input your name:");
  const age = Number(prompt("Input your age:"));
  const attendance = confirm("Are you present? 😊");
  if (!(name && age)) {
    return;
  }
  students.push({
    name,
    age,
    attendance,
  });
  // return {
  //   name,
  //   age,
  //   attendance,
  // };
}

do {
  getUserInfo();
} while (confirm("One more student?"));

function showAttendancePercentage() {
  if (!students.length) {
    console.log("No students recorded yet...");
    return;
  }

  const presentStudents = students.filter(
    (student) => student.attendance
  ).length;
  const percentage = ((presentStudents / students.length) * 100).toFixed(2);

  alert(`The attendance percentage is ${percentage}%`);
}

// Fisher-Yates Shuffle algorithm
function shuffleStudents(students) {
  for (let i = students.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [students[i], students[randomIndex]] = [students[randomIndex], students[i]];
  }
  return students;
}

function createTeams(teamNumbers = 2) {
  const presentStudents = students.filter((student) => student.attendance);
  if (!presentStudents.length) {
    console.log(`You can't form any team...there are no present students 🥲`);
    return;
  }
  if (teamNumbers > presentStudents.length) {
    teamNumbers = presentStudents.length;
    console.log(
      `Not enough students for the teams you wanted... So instead, we're hosting a free-for-all tournament! No respawn. No mercy.`
    );
  }

  // const teams = Array.from({ length: teamNumbers }, () => []);
  const teams = [];
  for (let i = 0; i < teamNumbers; i++) {
    teams.push([]);
  }

  const shuffledStudents = shuffleStudents(presentStudents);
  shuffledStudents.forEach((student, i) => {
    teams[i % teamNumbers].push(student.name);
  });

  teams.forEach((team, i) => {
    console.log(`\nTeam ${i + 1}:`);
    team.forEach((student) => {
      console.log(student);
    });
  });
}
