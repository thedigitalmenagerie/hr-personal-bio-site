import profileImage from '../../assets/profileImage.png';

const shortBio = () => {
  document.querySelector('#logoContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML = `<div class="card mb-3" id="bioCard" style="max-width: 810px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${profileImage}">
    </div>
    <hr>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text"><strong>Hey, y'all!</strong> I'm a full-stack web developer working in Boston, MA. I've recently relocated from Nasvhille, TN. I'm looking forward to laying down professional and personal roots here in New England. Prior to web development, my background included an education in liberal arts and professional experience in logistics management. As someone committed to life-long learning, I decided to pursue software engineering as a means to continue my commitment to personal creativity as well as my dedication to client-based solutions.</p>
      </div>
    </div>
  </div>
</div>`;
};

export default shortBio;
