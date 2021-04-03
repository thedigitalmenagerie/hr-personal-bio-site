import showMainPage from '../components/introPage';
import shortBio from '../components/shortBio';
import formModal from '../components/forms/formModal';
import showResume from '../components/resume';
import getResumeCards from '../helpers/data/resumeData';

const navigationEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('showLogoOnlyButton')) {
      showMainPage();
    }
    if (e.target.id.includes('iconImage')) {
      console.warn('clicked');
      formModal();
    }
    if (e.target.id.includes('showShortBioPageButton')) {
      shortBio();
    }
  });

  document.querySelector('#showResumeCardsButton').addEventListener('click', () => {
    getResumeCards(uid).then((resumeArray) => {
      if (resumeArray.length) {
        showResume();
      }
    });
  });
};

export default navigationEvents();
