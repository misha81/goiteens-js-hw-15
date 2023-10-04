function getAllPropValues(arr, prop) {
  const values = [];
  
  for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      values.push(obj[prop]);
    }
  }
  
  return values;
}
  
const products = [
  { name: 'mango', salary: 1000 },
  { name: 'poly', salary: 500 },
  { name: 'ajax', salary: 2000 },
  { name: 'kiww', salary: 1500 }
];

console.log(getAllPropValues(products, 'salary'));