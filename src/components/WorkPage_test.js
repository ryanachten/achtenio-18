import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../store';
import ThreeProject from './ThreeProject';

class WorkPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      curId: 'hiko',
      currentProject: projects['hiko'],
      meshScale: window.innerWidth/600 > 2 ? window.innerWidth/600 : 2,
      textures: Object.keys(projects).map(
        (key) => ({project: key, path: projects[key].textureImg})
      )
    };
  }

  componentDidMount(){
    window.addEventListener("resize", this.updateScale);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateScale);
  }

  updateScale = () => {
    let test = window.innerWidth/600 > 2 ? window.innerWidth/600 : 2;
    test = test.toFixed(2);
    this.setState( () => ({
      meshScale: test
    }));
    console.log(test);
  }

  changeProject = (e) => {
    const newProject = e.target.id;
    this.setState( () => ({
        ableToTransition: false,
        curId: newProject,
        currentProject: projects[newProject]
    }));
  }

  render = () => {
    return (
      <div>
        <ThreeProject meshScale={this.state.meshScale} textures={this.state.textures} currentProject={this.state.curId} transition={false} />
        <div className="work__infoContainer">

          <div className="work__projectInfo">
            <Link to={`/work/${this.state.curId}`}>
              <h1>{this.state.currentProject.title}</h1>
              <p>{this.state.currentProject.subtitle}</p>
            </Link>
          </div>

          <ul className="work__projectList">
            { Object.keys(projects).map( ( key ) => (
              <li key={key}>
                <h2 onMouseEnter={this.changeProject} key={key} id={key}>
                  {projects[key].title}
                </h2>
              </li>
            )) }
          </ul>

        </div>
      </div>
    )
  }
};

export default WorkPage;
