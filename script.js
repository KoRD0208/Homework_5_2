const url = "https://jsonplaceholder.typicode.com/users";

function getJSON(url) {
   return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);

      // xhr.responseType = 'json'

      xhr.onreadystatechange = () => {
         if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
         }
      };
      xhr.send();
   })
}

// function handleResponse() {
//    if (xhr.readyState === 4 && xhr.status === 200) {
//       return JSON.parse(xhr.response);
//    }
// }

function generateListItems(users) {
   return users
      .map((u) => `<li class="list-group-item">${u.name}</li>`)
      .join("");
}

function generateUnorderedList(listItems) {
   return `<ul class="list-group">${listItems}</ul>`;
}

function addUsersToPage(users) {
   document.getElementById("users").innerHTML = users
}
// Щоб виклик функцій був наступним 👇

getJSON("https://jsonplaceholder.typicode.com/users")
.then(generateListItems)
.then(generateUnorderedList)
.then(addUsersToPage);