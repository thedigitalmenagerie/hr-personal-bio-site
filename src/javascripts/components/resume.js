const showResume = (resumeArray) => {
  document.querySelector('#logoContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML = '<div id="resumeCardContainer"></div>';

  resumeArray.forEach((item) => {
    document.querySelector('#resumeCardContainer').innerHTML += `<div class="card mb-3" id="resumeDetailsCard" style="max-width: 810px;">
      <div class="card-body">
        <p class="card-text"><strong>Role:</strong>${item.role}</p>
        <p class="card-text"><strong>Company:</strong>${item.company}</p>
        <p class="card-text"><strong>Dates:</strong>${item.dates}</p>
        <p class="card-text"><strong>Location:</strong>${item.location}</p>
      </div>
    </div>
  </div>
</div>`;
  });
};

export default showResume;
