// Sample data to store class details
let classes = [];

// Function to add a new class
function addClass() {
    const classTimings = document.getElementById('class-timings').value;
    const schedule = document.getElementById('schedule').value;
    const teacherName = document.getElementById('teacher-name').value;
    const sectionName = document.getElementById('section-name').value;
    const courseName = document.getElementById('course-name').value;
    const batchNumber = document.getElementById('batch-number').value;

    const newClass = {
        classTimings,
        schedule,
        teacherName,
        sectionName,
        courseName,
        batchNumber,
    };

    classes.push(newClass);

    // Clear input fields
    document.getElementById('class-timings').value = '';
    document.getElementById('schedule').value = '';
    document.getElementById('teacher-name').value = '';
    document.getElementById('section-name').value = '';
    document.getElementById('course-name').value = '';
    document.getElementById('batch-number').value = '';

    // Update the class list table
    displayClasses();
}

// Function to display class details in the table
function displayClasses() {
    const classTableBody = document.getElementById('class-table-body');
    classTableBody.innerHTML = '';

    for (const classDetail of classes) {
        const row = classTableBody.insertRow();
        row.innerHTML = `
            <td>${classDetail.classTimings}</td>
            <td>${classDetail.schedule}</td>
            <td>${classDetail.teacherName}</td>
            <td>${classDetail.sectionName}</td>
            <td>${classDetail.courseName}</td>
            <td>${classDetail.batchNumber}</td>
        `;
    }
    function markAttendance() {
        const rollNumberInput = document.getElementById("rollNumberInput");
        const attendanceStatus = document.getElementById("attendanceStatus");
    
        // Replace this with your logic to get the class start time
        const classStartTime = new Date(); // Example: Replace with actual class start time
    
        const currentTime = new Date();
        const timeDifference = (currentTime - classStartTime) / (1000 * 60);
    
        if (timeDifference > 10) {
            attendanceStatus.value = "late";
            attendanceStatus.disabled = true;
        } else {
            attendanceStatus.value = "ontime";
            attendanceStatus.disabled = true;
        }
    }
    
    function changeStatus() {
        const adminPassword = prompt("Enter Admin Password:");
    
        // Replace "adminPassword123" with your actual admin password
        if (adminPassword === "adminPassword123") {
            const attendanceStatus = document.getElementById("attendanceStatus");
            attendanceStatus.disabled = false;
        } else {
            alert("Incorrect Admin Password");
        }
    }
    
}