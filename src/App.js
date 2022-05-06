import './App.css';
import img from './images/image-daniel.jpg';
import img1 from './images/image-jeanette.jpg';
import img2 from './images/image-jonathan.jpg';
import img3 from './images/image-kira.jpg';
import img4 from './images/image-patrick.jpg';
function App() {
  return (
    <div className="grid-container">
    <section1 className='section person-1'>
      <div className='img-heading-section'>
        <img src={img} alt="image" className='outline-img'/>
        <div className='first-person-info-text'>
         <h3 className='name'>Daniel Clifford</h3>
         <p className='desc'>Verified Graduate</p>
        </div>
      </div>
      <h1 className='section-h1'>I received a job offer mid-course, and the subjects I learned
       were current, if not more so,in the company I joined. I
       honestly feel I got every penny’s worth.</h1>
      <p className='section-p2'> “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
      transition and have heard some people who had an amazing experience here. I signed up
      for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
      The next 12 weeks was the best - and most grueling - time of my life. Since completing
      the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
      </section1>
    <section2 className='section person-2'><div className='img-heading-section'>
        <img src={img1} alt="image" className='outline-img'/>
        <div className='first-person-info-text'>
         <h3 className='name'>Jonathan Walters</h3>
         <p className='desc'>Verified Graduate</p>
        </div>
      </div>
      <h1 className='section-h1'> The team was very supportive and kept me motivated</h1>
      <p className='section-p2'>  “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
        for a big company. This was one of the best investments I’ve made in myself. ”</p></section2>
    <section3 className='section person-3'><div className='img-heading-section'>
        <img src={img2} alt="image" className='outline-img'/>
        <div className='first-person-info-text'>
         <h3 className='name'>Jeanette Harmon</h3>
         <p className='desc'>Verified Graduate</p>
        </div>
      </div>
      <h1 className='section-h1'>An overall wonderful and rewarding experience</h1>
      <p className='section-p2'>  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
        while doing something I love. ”</p></section3>
    <section4 className='section person-4'><div className='img-heading-section'>
        <img src={img3} alt="image" className='outline-img'/>
        <div className='first-person-info-text'>
         <h3 className='name'>Patrick Abrams</h3>
         <p className='desc'>Verified Graduate</p>
        </div>
      </div>
      <h1 className='section-h1'> Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
        learning from their experiences was easy.</h1>
      <p className='section-p2'>  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
        gave me the confidence necessary to be able to go out in the world and present myself as a capable 
        junior developer. The standard is above the rest. You will get the personal attention you need from 
        an incredible community of smart and amazing people. ”</p></section4>
    <section5 className='section person-5'><div className='img-heading-section'>
        <img src={img4} alt="image" className='outline-img'/>
        <div className='first-person-info-text'>
         <h3 className='name'>Kira Whittle</h3>
         <p className='desc'>Verified Graduate</p>
        </div>
      </div>
      <h1 className='section-h1'>Such a life-changing experience. Highly recommended!</h1>
      <p className='section-p2'>  “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
        100% recommend! ”</p></section5>
  </div>
  );
}

export default App;

 {/*<div className="grid-container">
    <section1 className='first-person-info'>
      <div className='img-heading-section'>
        <img src={img} alt="image" className='outline-img'/>
        <div className='first-person-info-text'>
         <h3 className='name'>Daniel Clifford</h3>
         <p className='desc'>Verified Graduate</p>
        </div>
      </div>
      <h1 className='first-section-h1'>I received a job offer mid-course, and the subjects I learned
       were current, if not more so,in the company I joined. I
       honestly feel I got every penny’s worth.</h1>
      <p className='second-section-p2'> “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
      transition and have heard some people who had an amazing experience here. I signed up
      for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
      The next 12 weeks was the best - and most grueling - time of my life. Since completing
      the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
      </section1>
    <section2 className='second-person'></section2>
    <section3 className='third-person'></section3>
    <section4 className='fourth-person'></section4>
    <section5 className='fifth-person'></section5>
  </div>*/}