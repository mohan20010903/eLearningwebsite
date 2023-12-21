document.addEventListener('DOMContentLoaded', function () {
    // Load enrolled courses from local storage
    let enrolledCourses = loadEnrolledCourses();

    // Set initial button states based on enrollment
    setInitialButtonStates(enrolledCourses);
});

function setInitialButtonStates(enrolledCourses) {
    for (let course of enrolledCourses) {
        let button = document.querySelector(`.enroll-button[id="${course}"]`);
        if (button) {
            button.innerHTML = "Unenroll now";
        }
    }
}

function enrollCourse(course) {
    // Retrieve enrolled courses and enrollment state from local storage
    let enrolledCourses = loadEnrolledCourses();
    let isEnrolled = enrolledCourses.includes(course);

    // Check if the course is already enrolled
    if (isEnrolled) {
        // If already enrolled, unenroll
        enrolledCourses = enrolledCourses.filter(enrolledCourse => enrolledCourse !== course);
    } else {
        // If not enrolled, enroll
        enrolledCourses.push(course);
    }

    // Save the updated list of enrolled courses and enrollment state to local storage
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));

    // Update button text based on enrollment state
    updateButtonState(course, isEnrolled);
}

function updateButtonState(course, isEnrolled) {
    let button = document.querySelector(`.enroll-button[id="${course}"]`);
    if (button) {
        button.innerHTML = isEnrolled ? "Enroll now" : "Unenroll now";
    }
}

function loadEnrolledCourses() {
    // Retrieve enrolled courses from local storage
    let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    return enrolledCourses;
}

