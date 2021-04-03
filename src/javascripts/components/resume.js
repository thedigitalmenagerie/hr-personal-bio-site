import profileImage from '../../assets/profileImage.png';

const showResume = (array) => {
  document.querySelector('#logoContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#contentContainer').innerHTML += `<div class="card mb-3" id="resumeDetailsCard" style="max-width: 810px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${profileImage}">
    </div>
    <hr>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text"><strong>Role:</strong>${item.role}</p>
        <p class="card-text"><strong>Company:</strong>${item.company}</p>
        <p class="card-text"><strong>Dates:</strong>${item.dates}</p>
        <p class="card-text"><strong>Length:</strong></p>
        <p class="card-text"><strong>Location:</strong>${item.location}</p>
      </div>
    </div>
  </div>
</div>`;
  });
};

export default showResume;
