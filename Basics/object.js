let sapiens = {
    name: 'Yuval',
    age: 42
}

sapiens.name = 'Alice';
sapiens ['name'] = 'Bob';
console.log(sapiens.name);
