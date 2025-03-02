// Date
const today = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options).replace(',', '');
const [weekday, month, day, year] = formattedDate.split(' ');
document.getElementById('weekday').textContent = `${weekday},`;
document.getElementById('date').textContent = `${month} ${day} ${year}`;


//Color change (challenge part)
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

// alert box
document.addEventListener("DOMContentLoaded", function () {
    const taskButtons = document.querySelectorAll(".bg-blue-600");
    let completedTasks = 0;
    const totalTasks = taskButtons.length;

    taskButtons.forEach((button) => {
        if (button.innerText.trim() !== "Clear History") {
            button.addEventListener("click", function () {
                completedTasks++;


                if (completedTasks === totalTasks - 1) {
                    alert("Congratulations, you have completed all the tasks before the deadline!");
                } else {
                    alert("Board updated successfully!");
                }

                button.disabled = true;
                button.classList.add("bg-gray-400", "cursor-not-allowed");
                button.classList.remove("bg-blue-600", "hover:bg-blue-700", "hover:scale-105");
                button.innerText = "Completed";
            });
        }
    });
});

//clear button alert
document.addEventListener("DOMContentLoaded", function () {
    const clearHistoryButton = document.getElementById("clear-button");

    if (clearHistoryButton) {
        clearHistoryButton.addEventListener("click", function () {
            alert("History cleared successfully!");
        });
    }
});





