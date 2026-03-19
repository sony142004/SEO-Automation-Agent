// Performance Chart Initialization
const ctx = document.getElementById('rankingChart');
if(ctx) {
    new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Organic Traffic',
                data: [4200, 5100, 4800, 6200, 7800, 7100, 8500],
                borderColor: '#00d2ff',
                borderWidth: 3,
                backgroundColor: 'rgba(0, 210, 255, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#a0a0c0' } },
                x: { grid: { display: false }, ticks: { color: '#a0a0c0' } }
            }
        }
    });
}

// View Switching Logic
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Update Nav
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Update View
        const viewName = item.textContent.replace(/\s+/g, '-').toLowerCase().includes('dashboard') ? 'dashboard' : 'generator';
        views.forEach(view => {
            view.classList.remove('active');
            if(view.id === `${viewName}-view`) view.classList.add('active');
        });
    });
});

// Generator Logic
const generateBtn = document.getElementById('generateBtn');
const shimmer = document.querySelector('.shimmer-placeholder');
const placeholderText = document.querySelector('.placeholder-text');
const outputArea = document.getElementById('outputArea');

generateBtn.addEventListener('click', () => {
    const topic = document.getElementById('topicInput').value;
    if(!topic) return alert("Please enter a topic!");

    // Start Loading
    placeholderText.style.display = "none";
    outputArea.innerHTML = "";
    shimmer.classList.add('active');
    generateBtn.disabled = true;
    generateBtn.style.opacity = "0.7";

    // Simulate AI Generation
    setTimeout(() => {
        shimmer.classList.remove('active');
        generateBtn.disabled = false;
        generateBtn.style.opacity = "1";

        outputArea.innerHTML = `
            <h2 style="color:var(--text-white); margin-bottom:1rem;">Best Strategies for ${topic}</h2>
            <p>In today's digital landscape, the ${topic} has become a cornerstone of success for forward-thinking businesses. By leveraging AI-driven insights, organizations can unlock unprecedented growth and efficiency...</p>
            <br>
            <h3 style="color:var(--text-white); margin-bottom:0.5rem;">Key Takeaways:</h3>
            <ul>
                <li>Automate repetitive keyword audits for 24/7 monitoring.</li>
                <li>Use semantic clusters to group related search intents.</li>
                <li>Optimize GMB profiles with consistent NAP data.</li>
            </ul>
        `;
    }, 2500);
});

// Mock Activity Data
const activities = [
    { 
        title: "New Blog Generated", 
        detail: "1,200 words optimized for 'Future of AI' has been drafted.", 
        platform: "Website",
        time: "12m ago"
    },
    { 
        title: "Keyword Audit Complete", 
        detail: "Audit found 8 high-relevance terms for Small Business niche.", 
        platform: "Audit",
        time: "45m ago"
    },
    { 
        title: "LinkedIn Post Scheduled", 
        detail: "Professional insight on 'Automation ROI' ready for deployment.", 
        platform: "LinkedIn",
        time: "2h ago"
    },
    { 
        title: "GMB Update Published", 
        detail: "Localized 'Opening Hours' post pushed to Google My Business.", 
        platform: "GMB",
        time: "5h ago"
    }
];

const list = document.getElementById('activityList');
activities.forEach(item => {
    const div = document.createElement('div');
    div.className = 'activity-item';
    div.innerHTML = `
        <div class="activity-info">
            <span class="activity-time">${item.time}</span>
            <h4>${item.title}</h4>
            <p>${item.detail}</p>
        </div>
        <div class="activity-tag ${item.platform.toLowerCase()}">${item.platform}</div>
    `;
    list.appendChild(div);
});
