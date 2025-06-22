document.addEventListener('DOMContentLoaded', () => {
  const jobListings = document.getElementById('job-listings');
  const jobs = [
    {
      title: "Frontend Developer",
      company: "ABC Corp",
      location: "Remote",
      description: "Work on modern frontend technologies and build responsive UIs.",
      link: "#"
    },
    {
      title: "Backend Engineer",
      company: "XYZ Inc",
      location: "Lahore, PK",
      description: "Build scalable backend services using Node.js and MongoDB.",
      link: "#"
    },
    {
      title: "Graphic Designer",
      company: "Creative Studio",
      location: "Karachi, PK",
      description: "Design digital marketing content and branding materials.",
      link: "#"
    }
  ];

  jobs.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>${job.company}</strong></p>
      <p>${job.location}</p>
      <p>${job.description}</p>
      <a href="${job.link}" class="apply-btn">Apply Now</a>
    `;
    jobListings.appendChild(card);
  });
});
