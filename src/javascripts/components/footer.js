import linkedin from '../../assets/linkedin.png';
import githubImage from '../../assets/githubImage.png';
import emailIcon from '../../assets/emailIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';
import twitterIcon from '../../assets/twitterIcon.png';
import instagramIcon from '../../assets/instagramIcon.png';

const footer = () => {
  document.querySelector('#footerContainer').innerHTML = `<nav class="navbar navbar-expand-lg fixed-bottom">
  <div class="container-fluid">
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link active" id="linkedinImage" aria-current="page" href="https://www.linkedin.com/in/honeyraeswan/"><img src="${linkedin}"</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="githubImage" href="https://github.com/thedigitalmenagerie"><img src="${githubImage}"></a>
    </li>
    <li class="nav-item">
      <button href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm" id="iconImage" ><img src="${emailIcon}"></button>
    </li>
  </ul>
</div>
    <a class="navbar-brand" id="mottoPhrase" href="#"><i><--</i>nothing gets futured without it's own spitshine<i>--></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" id="facebookIcon" aria-current="page" href="#"><img src="${facebookIcon}"</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="twitterIcon" href="https://twitter.com/dgtlmenagerie"><img src="${twitterIcon}"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="instagramIcon" href="#"><img src="${instagramIcon}"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
};

export default footer;
