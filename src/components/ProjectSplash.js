import React from 'react';
import ThreeProject from './ThreeProject';

class ProjectSplash extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      textures: [{project: props.id, path: props.texturePath}]
    }
  }

  render = () => (
    <div>
      <ThreeProject meshScale={10} textures={this.state.textures} currentProject={this.state.id} transition={false} />
    </div>
  );
}

export default ProjectSplash;
