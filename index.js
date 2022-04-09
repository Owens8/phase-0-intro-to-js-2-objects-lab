const employee = {
name: "sam",
streetadress: "123",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = { ...employee };
    newEmployee[key] = value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
let newEmployeev2 = { ...employee }
delete newEmployeev2[key]
return newEmployeev2

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key] 
    return employee
}


