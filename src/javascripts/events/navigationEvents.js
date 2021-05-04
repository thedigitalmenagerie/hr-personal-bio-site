import showMainPage from '../components/introPage';
import shortBio from '../components/shortBio';
import formModal from '../components/forms/formModal';
import showResume from '../components/resume';
import getResumeCards from '../helpers/data/resumeData';
import getProjectCards from '../helpers/data/projectsData';
import showProjects from '../components/projects';
import getTechCards from '../helpers/data/technologiesData';
import showTechnologies from '../components/technologies';

const navigationEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('showLogoOnlyButton')) {
      showMainPage();
    }
    if (e.target.id.includes('iconImage')) {
      formModal();
    }
    if (e.target.id.includes('showShortBioPageButton')) {
      shortBio();
    }
    if (e.target.id.includes('showResumeCardsButton')) {
      getResumeCards().then((resumeArray) => {
        if (resumeArray.length) {
          showResume(resumeArray);
        }
      });
    }
    if (e.target.id.includes('showProjectsButton')) {
      getProjectCards().then((projectsArray) => {
        if (projectsArray.length) {
          showProjects(projectsArray);
        }
      });
    }

    if (e.target.id.includes('showTechButton')) {
      getTechCards().then((techArray) => {
        if (techArray.length) {
          showTechnologies(techArray);
        }
      });
    }
  });
};

export default navigationEvents();
