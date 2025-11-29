// Helper: parse comma separated numbers
const parseNums = (str) => str.split(',').map(s => Number(s.trim())).filter(n => !Number.isNaN(n));

// 1) Sum step-by-step using forEach
document.getElementById('run-sum').addEventListener('click', () => {
  const input = document.getElementById('sum-input').value;
  const nums = parseNums(input);
  let sum = 0;
  const out = [];
  nums.forEach(n => {
    sum += n;
    out.push(`Added ${n} → Current sum: ${sum}`);
  });
  document.getElementById('sum-out').textContent = out.join('\n');
});

// 2) Filter pass students (>=40)
document.getElementById('run-pass').addEventListener('click', () => {
  const input = document.getElementById('pass-input').value;
  const marks = parseNums(input);
  const passed = marks.filter(m => m >= 40);
  document.getElementById('pass-out').textContent = `Input marks: [${marks.join(', ')}]\nPassed (>=40): [${passed.join(', ')}]`;
});

// 3) Products total using reduce
document.getElementById('run-products').addEventListener('click', () => {
  const input = document.getElementById('prod-input').value;
  const prices = parseNums(input);
  const total = prices.reduce((s, p) => s + p, 0);
  document.getElementById('prod-out').textContent = `Prices: [${prices.join(', ')}]\nTotal Price = ${total}`;
});

// 4) forEach doubling demo (primitive copy)
document.getElementById('run-double').addEventListener('click', () => {
  const input = document.getElementById('double-input').value;
  const arr = parseNums(input);
  const doubledPrinted = [];
  arr.forEach(newNum => {
    const doubled = newNum + newNum;
    doubledPrinted.push(`${newNum} doubled -> ${doubled}`);
  });
  document.getElementById('double-out').textContent = `Original: [${arr.join(', ')}]\n\nPrinted doubled values:\n${doubledPrinted.join('\n')}`;
});

// 5) Object inspector: keys, values, key:value + count
const parseObj = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
};

document.getElementById('show-keys').addEventListener('click', () => {
  const obj = parseObj(document.getElementById('obj-input').value);
  if (!obj) return document.getElementById('obj-out').textContent = 'Invalid JSON';
  document.getElementById('obj-out').textContent = `Keys (${Object.keys(obj).length}):\n${Object.keys(obj).join('\n')}`;
});

document.getElementById('show-vals').addEventListener('click', () => {
  const obj = parseObj(document.getElementById('obj-input').value);
  if (!obj) return document.getElementById('obj-out').textContent = 'Invalid JSON';
  document.getElementById('obj-out').textContent = `Values:\n${Object.values(obj).join('\n')}`;
});

document.getElementById('show-kv').addEventListener('click', () => {
  const obj = parseObj(document.getElementById('obj-input').value);
  if (!obj) return document.getElementById('obj-out').textContent = 'Invalid JSON';
  let lines = [];
  for (let k in obj) if (obj.hasOwnProperty(k)) lines.push(`${k} : ${obj[k]}`);
  lines.push(`\nProperty count: ${Object.keys(obj).length}`);
  document.getElementById('obj-out').textContent = lines.join('\n');
});

// 6) Store intermediate sums as steps array
document.getElementById('run-steps').addEventListener('click', () => {
  const input = document.getElementById('steps-input').value;
  const nums = parseNums(input);
  let sum = 0;
  const steps = [];
  nums.forEach(n => {
    sum += n;
    steps.push(sum);
  });
  document.getElementById('steps-out').textContent = `Input: [${nums.join(', ')}]\nSteps (cumulative sums): [${steps.join(', ')}]`;
});
