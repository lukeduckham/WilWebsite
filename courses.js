
let selectedCourses = [];

function selectCourse(courseName, price) {
    const courseIndex = selectedCourses.findIndex(course => course.name === courseName);
    if (courseIndex > -1) {
        selectedCourses.splice(courseIndex, 1);
    } else {
        selectedCourses.push({ name: courseName, price: price }); 
    }
    console.log("Selected courses:", selectedCourses);
}

function goToCheckout() {
    const courses = selectedCourses.map(course => course.name).join(',');
    const prices = selectedCourses.map(course => course.price).join(',');
    window.location.href = `checkout.html?courses=${courses}&prices=${prices}`;
}
