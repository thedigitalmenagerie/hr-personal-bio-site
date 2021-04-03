import logoOnlyFullColor from '../../assets/logoOnlyFullColor.png';

const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigationContainer"></div>
  <div id="mainContainer">
  <div id="formContainer"></div>
  <div id="contentContainer"></div>
  <div id="logoContainer"><img src="${logoOnlyFullColor}"></div>
  </div>
  <div id="footerContainer"></div>`;
};

export default domBuilder;
