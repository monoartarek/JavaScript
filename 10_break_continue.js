for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // exits the loop when i is 5
  }
  console.log(i);
}

/*output:
1
2
3
4
*/


for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // skips 5
  }
  console.log(i);
}
/*
1
2
3
4
skips
6
7
8
9
10
*/