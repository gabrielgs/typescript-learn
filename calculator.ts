const operations = ['multiply', 'add', 'divide'];

const calculator = (a: number, b: number, op: 'multiply' | 'add' | 'divide') => {
  if (!operations.includes(op)) {
    console.log ('This operation is not defined');
  }

  if (op === 'multiply') return a * b;
  if (op === 'add') return a + b;

  if (op === 'divide') {
    if (b === 0) return 'can\t divide by 0! sorry';
    return a / b;
  }
}

calculator(1, 3, 'add');