function submitStatus() {
    const inputBar = document.getElementById("input-bar");
    const selectedOption = document.getElementById("status-dropdown").value;
    const status = inputBar.value;

    
    console.log("Status:", status);
    console.log("Selected Option:", selectedOption);
    document.addEventListener("DOMContentLoaded", function () {
        const markAttendanceButton = document.getElementById("mark-attendance-btn");
        const attendanceStatus = document.getElementById("attendance-status");
    
        markAttendanceButton.addEventListener("click", function () {
            const checkboxes = document.querySelectorAll(".attendance-checkbox");
            let allPresent = true;
    
            checkboxes.forEach(function (checkbox) {
                if (!checkbox.checked) {
                    allPresent = false;
                }
            });
    
            if (allPresent) {
                attendanceStatus.textContent = "Attendance marked for all students.";
            } else {
                attendanceStatus.textContent = "Some students are absent.";
            }
        });
    });
    
}

