// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.querySelector('#userNameInput')
const getUserButton = document.querySelector('#getUserButton')
const userCity = document.querySelector('#userCity')

// ****Option 1****//
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users) => {
//     users.forEach((user) => {
//       getUserButton.addEventListener('click', () => {
//         if (userNameInput.value === user.name) {
//           userCity.innerText = `${user.address.city}`
//         }
//       })
//     })
//     console.log(users)
//   })

// ****Option 2****//
let usersData = []

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    usersData = users
  })
  .catch((error) => {
    console.error('Error fetching users:', error)
  })

getUserButton.addEventListener('click', () => {
  const userName = userNameInput.value
  const user = usersData.find((user) => user.name === userName)

  if (user) {
    userCity.innerText = user.address.city
  } else {
    userCity.innerText = 'User not found'
  }
})
