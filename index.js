import express from 'express'
import cors from 'cors'

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello  World!')
})

const users = [
    {id: 0, name: 'sourov', email: 'sourov@example.com',},
    {id: 1, name: 'tarek', email: 'trk@example.com',},
    {id: 2, name: 'jubayer', email: 'jubayer@example.com',},
    {id: 3, name: 'hasib', email: 'hasib@example.com',}
]

app.get('/users', (req, res) => {

    const search = req.query.search
    console.log(search)
    if (search) {
        const searchResults = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResults)
    } else {
        console.log(users)
        res.send(users)
    }


})

app.get('/users/:id', (req, res) => {

    const id = req.params.id
    const user = users[id]
    //console.log(user)
    if (typeof user === 'undefined') {
        res.send('user not found')
    } else res.send(user)

    /* console.log(typeof users[id])
     users.map(user => user.id =! id ? res.send('user not found') : res.send('user already'))*/
})

app.get('/fruits', (req, res) => {

    res.send(['mango', 'apple', 'banana', 'lisu'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {

    res.send('Big Mango')
})

app.post('/users', (req, res) => {

    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('hitting the server', req.body)
    res.json(newUser)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})