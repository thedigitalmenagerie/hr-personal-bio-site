const showTechnologies = (techArray) => {
  document.querySelector('#logoContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML += '<div id="techCardContainer"></div>';

  techArray.forEach((tech) => {
    document.querySelector('#techCardContainer').innerHTML += `<div class="card mb-3" id="techDetailsCard">
      <div class="card-body">
          <p class="card-text"><strong>${tech.technologiesName}</strong></p> 
          <img class="techImage" style="max-width: 600px;" src="${tech.technologiesImg}">
      </div>
    </div>
  </div>
</div>`;
  });
};

export default showTechnologies;
