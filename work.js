const users = [
    {id: 1, name: 'John', email: 'john@example.com',},
    {id: 2, name: 'John2', email: 'john@example.com',},
    {id: 3, name: 'John3', email: 'john@example.com',},
    {id: 4, name: 'John4', email: 'john@example.com',}
]

/*
for (let user in users) {
    console.log(Object.values(user))
}
*/

users.map(user => user.id === 1 ? console.log(user) : console.log('done'))