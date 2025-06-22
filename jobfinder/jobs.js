
fetch('https://remotive.io/api/remote-jobs')
  .then(res => res.json())
  .then(data => {
    const jobs = data.jobs.slice(0, 10);
    const container = document.getElementById("job-list");
    jobs.forEach(job => {
      const div = document.createElement("div");
      div.className = "job-card";
      div.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>${job.company_name}</strong></p>
        <p>${job.candidate_required_location}</p>
        <p>${job.category}</p>
        <a href="${job.url}" target="_blank">Apply Now</a>
      `;
      container.appendChild(div);
    });
  });
