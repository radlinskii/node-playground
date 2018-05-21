const PIE = 3.14;

let variable = 10;

for (let i = 0; i < variable; i++) {
  variable -= i;
  console.log(variable);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  });
}
