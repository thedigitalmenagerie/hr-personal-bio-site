const showProjects = (projectsArray) => {
  document.querySelector('#logoContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML += '<div id="projectCardContainer"></div>';

  projectsArray.forEach((project) => {
    document.querySelector('#projectCardContainer').innerHTML += `<div class="card mb-3" id="projectDetailsCard" style="max-width: 810px;">
      <div class="card-body" style="max-width: 350px">
        <img class="projectImage" style="max-width: 300px;" src="${project.projectImg}">
        <p class="card-text"><strong>Location:<br></strong>${project.projectName}</p>
        <p class="card-text text-wrap"><strong>Author(s):<br></strong>${project.projectAuthors}</p>
        <p class="card-text"><strong>Tech Used:<br></strong>${project.projectTech}</p>
      </div>
    </div>
  </div>
</div>`;
  });
};

export default showProjects;
