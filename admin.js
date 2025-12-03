
document.addEventListener('DOMContentLoaded', () => {
  // Sample data (replace with actual API calls)
  const stats = {
    totalClients: 75,
    activeProjects: 148,
    revenue: 3200000,
    pendingApprovals: 5
  };

  const recentClients = [
    { name: 'John Doe', project: 'Website Redesign', status: 'Active', imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Jane Smith', project: 'SEO Campaign', status: 'Review', imageUrl: 'https://randomuser.me/api/portraits/women/46.jpg' },
    { name: 'Mike Johnson', project: 'Mobile App Dev', status: 'Live', imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg' }
  ];

  // Update stats
  document.getElementById('total-clients').textContent = stats.totalClients;
  document.getElementById('active-projects').textContent = stats.activeProjects;
  document.getElementById('revenue').textContent = 'KSh ' + (stats.revenue / 1000000).toFixed(1) + 'M';
  document.getElementById('pending-approvals').textContent = stats.pendingApprovals;

  // Update recent clients
  const recentClientsContainer = document.getElementById('recent-clients-container');
  recentClientsContainer.innerHTML = ''; // Clear existing static content

  recentClients.forEach(client => {
    const clientElement = `
      <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
        <div class="flex items-center space-x-4">
          <img src="${client.imageUrl}" class="w-12 h-12 rounded-full" alt="">
          <div>
            <p class="font-semibold">${client.name}</p>
            <p class="text-sm text-gray-500">${client.project}</p>
          </div>
        </div>
        <span class="px-3 py-1 ${client.status === 'Active' || client.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} rounded-full text-xs">${client.status}</span>
      </div>
    `;
    recentClientsContainer.innerHTML += clientElement;
  });

  // Chart.js initialization
  const ctx = document.getElementById('revenueChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Revenue (KSh)',
        data: [180000, 220000, 280000, 310000, 380000, 420000, 480000, 520000, 580000, 720000, 890000, 3200000],
        borderColor: '#dc2626',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
});
