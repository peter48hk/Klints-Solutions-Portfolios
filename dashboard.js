
document.addEventListener('DOMContentLoaded', () => {
  // --- SAMPLE DATA (Replace with API calls) ---
  const user = {
    name: 'Jane Doe',
    membership: 'Gold Member',
    profileImage: 'https://randomuser.me/api/portraits/women/34.jpg'
  };

  const stats = {
    totalProjects: 28,
    revenueThisMonth: 525000,
    activeCampaigns: 21,
    supportTickets: 2
  };

  const recentProjects = [
    { name: 'Corporate Landing Page', status: 'Live', progress: 100, statusColor: 'green' },
    { name: 'Social Media Graphics', status: 'Active', progress: 85, statusColor: 'blue' },
    { name: 'E-commerce SEO', status: 'In Review', progress: 50, statusColor: 'yellow' },
    { name: 'Brand Video Production', status: 'Paused', progress: 25, statusColor: 'red' }
  ];

  const activityFeed = [
    { icon: 'fa-file-invoice-dollar', color: 'green', text: 'New invoice #INV-0045 generated.', time: '45 minutes ago' },
    { icon: 'fa-rocket', color: 'blue', text: 'Your project 'Corporate Landing Page' went live.', time: '3 hours ago' },
    { icon: 'fa-user-plus', color: 'purple', text: 'New team member, Alex, was added to your project.', time: 'Yesterday' },
    { icon: 'fa-comment-dots', color: 'orange', text: 'A new comment was added to the 'Social Media Graphics' task.', time: '2 days ago' }
  ];

  // --- DOM MANIPULATION ---

  // Update Welcome Message & Profile
  document.getElementById('welcome-name').textContent = `Welcome back, ${user.name}!`;
  document.getElementById('user-name').textContent = user.name;
  document.getElementById('user-membership').textContent = user.membership;
  document.getElementById('profile-image').src = user.profileImage;

  // Update Stat Cards
  document.getElementById('total-projects').textContent = stats.totalProjects;
  document.getElementById('revenue-month').textContent = `KSh ${(stats.revenueThisMonth / 1000).toFixed(0)}K`;
  document.getElementById('active-campaigns').textContent = stats.activeCampaigns;
  document.getElementById('support-tickets').textContent = stats.supportTickets;

  // Populate Recent Projects Table
  const projectsTableBody = document.getElementById('projects-tbody');
  projectsTableBody.innerHTML = ''; // Clear static data
  recentProjects.forEach(p => {
    const row = `
      <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
        <td class="py-4">${p.name}</td>
        <td><span class="px-3 py-1 bg-${p.statusColor}-100 text-${p.statusColor}-800 rounded-full text-xs">${p.status}</span></td>
        <td><div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5"><div class="bg-${p.statusColor}-500 h-2.5 rounded-full" style="width: ${p.progress}%"></div></div></td>
      </tr>
    `;
    projectsTableBody.innerHTML += row;
  });

  // Populate Activity Feed
  const activityFeedContainer = document.getElementById('activity-feed');
  activityFeedContainer.innerHTML = ''; // Clear static data
  activityFeed.forEach(a => {
    const item = `
      <div class="flex items-start space-x-3">
        <div class="w-10 h-10 bg-${a.color}-100 rounded-full flex items-center justify-center"><i class="fas ${a.icon} text-${a.color}-600"></i></div>
        <div>
          <p class="text-gray-800 dark:text-gray-200">${a.text}</p>
          <p class="text-gray-500 text-xs mt-1">${a.time}</p>
        </div>
      </div>
    `;
    activityFeedContainer.innerHTML += item;
  });

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    // Optional: Save preference to localStorage
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
});
