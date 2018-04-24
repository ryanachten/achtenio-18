import React from 'react';
import projects from '../store';
import uuid from 'uuid';
import LoadingScreen from '../components/LoadingScreen';
import ThreeProject from './ThreeProject';
import ProjectInfo from './ProjectInfo';

class ProjectPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      project: projects[this.props.match.params.id],
    }
  }

  render = () => {
    return(
      <div className="projectpage__container">
        <LoadingScreen />
        <div className="ProjectPage">
          <ThreeProject meshScale={10} textures={[{project: this.state.id, path:this.state.project.textureImg}]} currentProject={this.state.id} transition={false} />
          <ProjectInfo project={this.state.project}/>
        </div>
      </div>
    );
  };
}

export default ProjectPage;
