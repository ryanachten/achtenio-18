import React from 'react';
import projects from '../store';

class ProjectView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: projects[0].id,
      title: projects[0].info.title,
      subtitle: projects[0].info.subtitle,
    }
  }

  changeProject( newId ){
    const {title, subtitle} = projects[newId].info;
    this.setState(()=>{
        id: newId,
        title,
        subtitle
    });
  }

  render = () => (
    <div>
      <p>{this.state.id}</p>
      <h1>{this.state.title}</h1>
      <h2>{this.state.subtitle}</h2>
    </div>
  );
}
export default ProjectView;
