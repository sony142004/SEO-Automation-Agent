// Chart Initialization
const ctx = document.getElementById('rankingChart').getContext('2d');
new Chart(ctx, {
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

// Mock Activity Data
const activities = [
    { title: "GMB Post Published", detail: "Optimized for 'Local IT Services'", platform: "Google Maps" },
    { title: "LinkedIn Insight Generated", detail: "Topic: AI Automation Benefits", platform: "LinkedIn" },
    { title: "Website Content Update", detail: "Added semantic keywords to /blog/ai", platform: "Website" },
    { title: "Keyword Audit Complete", detail: "Identified 5 new high-intent keywords", platform: "Serper.dev" }
];

const list = document.getElementById('activityList');
activities.forEach(item => {
    const div = document.createElement('div');
    div.className = 'activity-item';
    div.innerHTML = `
        <div class="activity-info">
            <h4>${item.title}</h4>
            <p>${item.detail}</p>
        </div>
        <div class="activity-tag">${item.platform}</div>
    `;
    list.appendChild(div);
});
