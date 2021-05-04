import profileImage from '../../assets/profileImage.png';

const shortBio = () => {
  document.querySelector('#logoContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML = '';
  document.querySelector('#contentContainer').innerHTML = `<div class="card mb-3" id="bioCard" style="max-width: 810px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img id="profileImage" src="${profileImage}">
    </div>
    <hr>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">With a background in the service and logistics industries and an education in liberal arts, I decided to make a change for the betterment of myself and my community. My decision to pursue software development came during a time that provided additional space for reflection. COVID-19 put me at home-- with a lot of extra time. As a life-long learner, I wanted to be deliberate about what I did next.
        
        Software development appealed to me for many of the same reasons my initial choice in education did. It is flexible in where you decide to focus, there are vast possibilities in roles and in companies, and it is a career in which you get to keep learning everyday, on the job. With some additional research, I discovered I could also utilize the skills and harness the values I'd picked up along my journey.
        
        And, I'm doing it. Hands down, one of the best decisions I've ever made and some of the most challenging and rewarding work I've ever done.
        
        I am very much looking forward to continuing this journey and to building and fixin' tech in inclusive communities with "all y'all." </p>
      </div>
    </div>
  </div>
</div>`;
};

export default shortBio;
