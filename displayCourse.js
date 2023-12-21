document.addEventListener('DOMContentLoaded', function() {
    // Load enrolled courses from local storage
    var enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || []

    // Display each enrolled course
    enrolledCourses.forEach(course => {
        var sourceContainer = localStorage.getItem(course);

        let container = document.createElement("div");

        let targetContainer = document.querySelector("#copiedContent");

        container.innerHTML = sourceContainer;

        targetContainer.appendChild(container);
    });
});
