// Date
const today = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options).replace(',', '');
const [weekday, month, day, year] = formattedDate.split(' ');
document.getElementById('weekday').textContent = `${weekday},`;
document.getElementById('date').textContent = `${month} ${day} ${year}`;

// Task Count Elements
const taskAssignedElement = document.querySelector(".text-gray-800"); // Task Assigned count
const completedTaskElement = document.querySelector(".font-bold.text-2xl"); // Completed count

// Initial Task Counts
let taskAssignedCount = 6; // Start from 6
let completedCount = 0; // Start from 0

// Set initial UI values
taskAssignedElement.innerText = taskAssignedCount;
completedTaskElement.innerText = completedCount;

// Color Change (Theme Switch)
document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.querySelector(".w-12.bg-gray-300.p-2.rounded-4xl");
    const body = document.body;

    const colors = [
        "#fef9c3", "#fef3c7", "#fde68a", "#fcd34d",
        "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6",
        "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4",
        "#fecaca", "#fca5a5", "#f87171", "#ef4444",
        "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7",
        "#fed7aa", "#fdba74", "#fb923c", "#f97316",
        "#bbf7d0", "#86efac", "#4ade80", "#22c55e",
        "#a78bfa", "#7c3aed", "#6d28d9", "#581c87",
        "#c4b5fd", "#8b5cf6", "#7c3aed", "#5b21b6",
        "#1e1e1e", "#2d2d2d", "#4b5563", "#6b7280",
        "#111827", "#374151", "#1f2937", "#0f172a"
    ];

    themeButton.addEventListener("click", function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.backgroundColor = randomColor;
    });
});

// Task Completion & Alert
document.addEventListener("DOMContentLoaded", function () {
    const taskButtons = document.querySelectorAll(".bg-blue-600");
    let totalTasks = taskButtons.length;
    let completedTasks = 0;

    taskButtons.forEach((button) => {
        if (button.innerText.trim() !== "Clear History") {
            button.addEventListener("click", function () {
                completedTasks++;

                // Update Task Counts
                if (taskAssignedCount > 0) {
                    taskAssignedCount--;
                }
                if (completedCount < totalTasks) {
                    completedCount++;
                }

                // Update UI
                taskAssignedElement.innerText = taskAssignedCount;
                completedTaskElement.innerText = completedCount;

                // Show alert correctly
                if (completedCount === totalTasks) {
                    setTimeout(() => {
                        alert("Congratulations, you have completed all the tasks before the deadline!");
                    }, 100);
                } else {
                    setTimeout(() => {
                        alert("Board updated successfully!");
                    }, 100);
                }

                button.disabled = true;
                button.classList.add("bg-gray-400", "cursor-not-allowed");
                button.classList.remove("bg-blue-600", "hover:bg-blue-700", "hover:scale-105");
                button.innerText = "Completed";
            }, { once: true }); // Ensures event fires only once per button
        }
    });
});

// Activity Log (Logging Completed Tasks)
document.addEventListener("DOMContentLoaded", function () {
    const taskButtons = document.querySelectorAll(".bg-blue-600"); // Selecting all task "Completed" buttons
    const activityLog = document.getElementById("dtd"); // Activity Log container under the dotted border
    const clearHistoryButton = document.getElementById("clear-button"); // Clear History button
    let totalTasks = taskButtons.length;
    let completedTasks = 0;

    taskButtons.forEach((button) => {
        button.addEventListener("click", function () {
            completedTasks++;

            // Get the task name from the card
            const taskName = button.closest(".bg-gray-300").querySelector("h2").innerText;

            // Get current time
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

            // Create a new log entry
            const logEntry = document.createElement("p");
            logEntry.classList.add("bg-white", "p-2", "rounded-lg", "shadow-sm", "mt-2", "w-full", "text-gray-700", "text-sm");
            logEntry.innerText = `You have completed the task "${taskName}" at ${timeString}`;

            // Append log entry to Activity Log (under the dotted border)
            activityLog.appendChild(logEntry);

            // Disable the button after clicking
            button.disabled = true;
            button.classList.add("bg-gray-400", "cursor-not-allowed");
            button.classList.remove("bg-blue-600", "hover:bg-blue-700", "hover:scale-105");
            button.innerText = "Completed";
        }, { once: true }); // Ensures event fires only once per button
    });

    // Clear History Button Functionality
    if (clearHistoryButton) {
        clearHistoryButton.addEventListener("click", function () {
            activityLog.innerHTML = ""; // Clear all log entries
            alert("History cleared successfully!");
        });
    }
});
