[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})

// ---------------

const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currenVal) => {
  return total * currentVal;
});

// ---------------

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});

const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, curreVal)
});

const minGrade = grades.reduce((min, currVal) => {
  return Math.min(min, currVal)
});

// ---------------

[10,20,30,40,50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000);