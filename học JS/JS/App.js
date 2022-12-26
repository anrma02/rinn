var courseAPI = " http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);
  handleCreate();
}
start();
function getCourses(callback) {
  fetch(courseAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

// hiện thị ra màn hình

function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `
    <li class ="course-item-${course.id}">
        <h2>${course.name}</h2>
        <p>${course.description}</p>
        <button class='hh' onclick = " handleDelete(${course.id})">Xóa </button>
    </li>
    `;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

// Tạo
function createCourses(data, callback) {
  var option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseAPI, option)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}
function handleCreate() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;

    var formdata = {
      name: name,
      description: description,
    };
    createCourses(formdata);
    getCourses(renderCourses);
  };
}

// Xóa

function handleDelete(id) {
  var option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseAPI + "/" + id, option).then(function () {
    var courseItem = document.querySelector(".course-item-" + id);
    if (courseItem) {
      courseItem.remove();
    }
  });
}
