const findBestEmployee = function (employees) {
    const bestUser = { name: '', score: 0 };
    const keys = Object.keys(employees);
    for (const key of keys) {
        if (employees[key] > bestUser.score) {
            bestUser.name = key;
            bestUser.score = employees[key];
        }
    }
    return bestUser.name
};



console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); 

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);