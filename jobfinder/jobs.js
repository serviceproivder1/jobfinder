// jobs.js — Job Listings (Dummy Data Example)

const jobData = [
  {
    title: "Web Developer",
    company: "TechSoft Solutions",
    location: "Lahore, Pakistan",
    salary: "PKR 100,000/month",
    type: "Full-Time"
  },
  {
    title: "Graphic Designer",
    company: "Creative Studios",
    location: "Karachi, Pakistan",
    salary: "PKR 80,000/month",
    type: "Remote"
  },
  {
    title: "Data Entry Clerk",
    company: "QuickData Pvt Ltd",
    location: "Islamabad, Pakistan",
    salary: "PKR 50,000/month",
    type: "Part-Time"
  }
];

// This function will dynamically load jobs if you integrate it later
function displayJobs() {
  const jobList = document.getElementById("job-list");
  jobData.forEach(job => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("job-item");
    jobItem.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <p><strong>Type:</strong> ${job.type}</p>
    `;
    jobList.appendChild(jobItem);
  });
}

// Optionally call this on page load:
// window.onload = displayJobs;
