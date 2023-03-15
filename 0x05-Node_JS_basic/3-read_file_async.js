const fs = require('fs');

function customRead(data) {
  const content = data.trim();
  const contentLines = content.split('\n');
  contentLines.splice(0, 1);
  const fieldMap = {};
  for (const item of contentLines) {
    if (item) {
      const splittedItem = item.split(',');
      const field = splittedItem[3];
      const fn = splittedItem[0];
      if (fieldMap[field]) {
        fieldMap[field].push(fn);
      } else {
        fieldMap[field] = [];
        fieldMap[field].push(fn);
      }
    }
  }
  console.log(`Number of students: ${contentLines.length}`);
  for (const key in fieldMap) {
    if (key) {
      const ar = fieldMap[key];
      console.log(`Number of students in ${key}: ${ar.length}. List: ${ar.join(', ')}`);
    }
  }
}

function countStudents(fileName) {
  return new Promise((resolve) => fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      throw Error('Cannot load the database');
    }
    customRead(data);
    resolve(true);
  }));
}

module.exports = countStudents;
