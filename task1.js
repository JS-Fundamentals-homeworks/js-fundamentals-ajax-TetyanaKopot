// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

const userList = document.querySelector('.usersList')

// ****Option 1****
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    users.map((user) => {
      userList.innerHTML += `<li>${user.name}</li>`
    })
  })

// ****Option 2****
// async function usersFetch() {
//   const url = 'https://jsonplaceholder.typicode.com/users'
//   const response = await fetch(url)
//   const users = await response.json()
//   users.map((user) => {
//     userList.innerHTML += `<li>${user.name}</li>`
//   })
// }

// usersFetch()
