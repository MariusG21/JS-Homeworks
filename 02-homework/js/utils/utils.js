const utils = {
  getRandomColor() {
    return `#${Math.floor(Math.random() * Math.pow(256, 3))
      .toString(16)
      .padStart(6, "0")}`;
  },
  getRandomId() {
    return crypto.randomUUID();
  },
  getRandomStudent(students) {
    const randomIndex = Math.floor(Math.random() * students.length);
    return students[randomIndex];
  },
};

export default utils;
