import React from 'react';

const CvPage = () => {

  return (
    <div className="cv__container">

      <h1 className="cv__title">Curriculum Vitae</h1>
      <h2>RYAN ACHTEN | D.O.B 1992 | NEW ZEALAND</h2>

      <hr className="cv__divider"/>

      <div className="cv__section">
        <h1>Interaction</h1>
        <div className="cv__item">
          <h2>JavaScript</h2>
          <ul>
            <li>Babel</li>
            <li>ES5 & ES6</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Redux	</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div className="cv__item">
          <h2>Creative Code</h2>
          <ul>
            <li>Canvas API</li>
            <li>p5.js</li>
            <li>Three.js</li>
            <li>Web Audio API</li>
          </ul>
        </div>
        <div className="cv__item">
          <h2>PHP</h2>
          <ul>
            <li>SilverStripe</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div className="cv__item">
          <h2>Styles</h2>
          <ul>
            <li>CSS3</li>
            <li>Sass</li>
            <li>SCSS</li>
          </ul>
        </div>
        <div className="cv__item">
          <h2>Deployment</h2>
          <ul>
            <li>Git</li>
            <li>Heroku</li>
            <li>NPM</li>
            <li>Firebase</li>
            <li>Yarn</li>
          </ul>
        </div>
        <div className="cv__item">
          <h2>Misc</h2>
          <ul>
            <li>Arduino</li>
            <li>Pure Data</li>
            <li>Unity3D</li>
          </ul>
        </div>
        <div className="cv__item">
          <h2>Learning</h2>
          <ul>
            <li>GLSL</li>
            <li>Jest</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>

      <div className="cv__section">
        <h1>Design</h1>
        <div className="cv__item">
          <h2>Graphic</h2>
          <ul>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Photoshop</li>
            <li>Sketch</li>
          </ul>
        </div>
        <div className="cv__item">
          <h2>3D</h2>
          <ul>
            <li>Agisoft PhotoScan</li>
            <li>Cinema 4D</li>
            <li>MeshLab</li>
            <li>Substance Designer</li>
            <li>ZBrush</li>
          </ul>
        </div>
        <div className="cv__item">
          <h2>Motion</h2>
          <ul>
            <li>After Effects</li>
            <li>Premiere</li>
          </ul>
        </div>
      </div>

      <hr className="cv__divider"/>

      <div className="cv__section work">
        <h1>Work</h1>
        <div className="cv__item">
          <ul>
            <li><strong>Design Research Assistant</strong>
                <br/>Victoria University of Wellington ~ 2017-2018</li>
            <li><strong>Mobile Media, Audio Visual Space, Internet Design, Design Professional Practice Tutor</strong>
                <br/>Victoria University of Wellington ~ 2017</li>
            <li><strong>Innovation Analyst</strong>
                <br/>Mahuki Innovation Hub, Te Papa ~ 2016</li>
            <li><strong>Software Developer & Commercialisation Assistant</strong>
                <br/>VicLink ~ 2016</li>
            <li><strong>Design Research Assistant</strong>
                <br/>Victoria University of Wellington ~ 2014-2016</li>
            <li><strong>Physical Computing & Digital Video Creation Tutor</strong>
                <br/>Victoria University of Wellington ~ 2015</li>
            <li><strong>Design Services</strong>
                <br/>Otago Museum ~ 2011-2013</li>
          </ul>
        </div>
      </div>

      <div className="cv__section education">
        <h1>Education</h1>
        <div className="cv__item">
          <ul>
            <li><strong>Master of Design Innovation</strong>
              <ul>
                <li>Specialising in Media Design (Data.mine stream)</li>
                <li>Graduated with Merit, 2017</li>
                <li>Victoria University of Wellington (2014-2016)</li>
              </ul>
            </li>
            <li><strong>Bachelor of Communication Design</strong>
              <ul>
                <li>Graduated with Distinction, 2014</li>
                <li>Otago Polytechnic (2011-13)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="cv__section awards">
        <h1>Awards</h1>
        <div className="cv__item">
          <ul>
            <li><strong>Formway Design Award</strong>
              <ul>
                <li>for Best Project in Master of Design Innovation</li>
                <li>Victoria University of Wellington (2016)</li>
              </ul>
            </li>
            <li><strong>VicLink Award</strong>
              <ul>
                <li>for the project with the most commercial potential</li>
                <li>Victoria University of Wellington (2016)</li>
              </ul>
            </li>
            <li><strong>Master of Design Innovation Completion Scholarship</strong>
              <ul>
                <li>Funded by Ministry of Business, Innovation and Employment</li>
                <li>Victoria University of Wellington (2015)</li>
              </ul>
            </li>
            <li><strong>VUW Summer Scholarship</strong>
              <ul>
                <li>National Library of New Zealand collaboration</li>
                <li>Victoria University of Wellington (2014)</li>
              </ul>
            </li>
            <li><strong>Creative Excellence Award for Top Overall Student</strong>
              <ul>
                <li>Otago Polytechnic (2013)</li>
              </ul>
            </li>
            <li><strong>Design Achievement Award</strong>
              <ul>
                <li>Otago Polytechnic (2011)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default CvPage;
