const navBar = () => {
  document.querySelector('#navigationContainer').innerHTML = `<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <div class="collapse navbar-collapse" id="navbarText">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <button class="btn" type="submit" id="showResumeCardsButton" href="#"><i>|</i>resume<i>|</i></button>
    </li>
    <li class="nav-item">
      <button class="btn" type="submit" id="showShortBioPageButton" href="#"><i>|</i>biography<i>|</i></button>
    </li>
  </ul>
</div>
    <button class="btn" type="submit" id="showLogoOnlyButton" href="#"><i><----</i>HONEY-RAE SWAN<i>----></i></button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link" id="showProjectsButton" href="#"><i>|</i>projects<i>|</i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="showTechButton" href="#"><i>|</i>technologies<i>|</i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
};

export default navBar;
