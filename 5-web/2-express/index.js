const express = require('express');
const users = [
    { id: 3482, name: 'john', age: 34 },
    { id: 5171, name: 'bob', age: 20 },
    { id: 7329, name: 'mark', age: 21 },
    { id: 3291, name: 'joe', age: 31 }
]

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express')
});

app.get('/users', (req, res) => {
    res.send(getUsers())
});

app.get('/user', (req, res) => {
    res.send(getUser(parseInt(req.query.id)))
});

app.listen(4242, () => {
    console.log('Express Server is running...');
});

function getUsers() {
    return users;
}

function getUser(id) {
    return users.find(user => user.id === id);
}