const users = [
    { name: "Ludmila", age: 30, email: "Luida@example.com" },
    { name: "Marina", age: 25, email: "marina@example.com" },
    { name: "Mikki", age: 35, email: "mk@example.com" },
];

export default users;

import Handlebars from 'handlebars/runtime';
import template from '../hbs/template.hbs';
import users from './index.js';

document.addEventListener('DOMContentLoaded', () => {
    const html = template(users);
    document.getElementById('year').innerHTML = html;
});

function filterUsers(ageThreshold) {
    return users.filter(user => user.age >= ageThreshold);
}

document.getElementById('year-btn').addEventListener('click', () => {
    const filteredUsers = filterUsers(15);
    const html = template(filteredUsers);
    document.getElementById('year').innerHTML = html;
});