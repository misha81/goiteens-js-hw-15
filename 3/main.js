function findBestEmployee(employees) {
    let bestEmployee = '';
    let tasks = 0;
  
    for (const employee in employees) {
      if (employees.hasOwnProperty(employee)) {
        const tasksCompleted = employees[employee];
  
        if (tasksCompleted > tasks) {
          tasks = tasksCompleted;
          bestEmployee = employee;
        }
      }
    }
  
    return bestEmployee;
}
  
const employees = {
    poly: 10,
    mango: 20,
    kiwi: 30,
    ajax: 10
};
const {poly, mango, kiwi, ajax} = employees
  
console.log(findBestEmployee({poly, mango, kiwi, ajax}));