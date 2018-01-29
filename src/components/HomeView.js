import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../store';
import ThreeProject from './ThreeProject';

let projectTransition;

class HomeView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      ids: Object.keys(projects),
      id: 'vertice',
      title: projects['vertice'].title,
      subtitle: projects['vertice'].subtitle,
      texture: projects['vertice'].textureImg
    }
  }

  componentDidMount() {
    projectTransition = setInterval( () => this.changeProject(), 3000);
  }

  componentWillUnmount() {
    clearTimeout(projectTransition);
  }

  changeProject(){
    if (this.state.currentIndex+1 >= this.state.ids.length) {
      this.setState(() => ({
        currentIndex: 0
      }));
    }
    else{
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex+1
      }));
    }
    const curId = this.state.ids[this.state.currentIndex]
    const curProject = projects[curId];
    this.setState(()=>({
      id: curId,
      title: curProject.title,
      subtitle: curProject.subtitle,
      texture: curProject.textureImg
    }));
  }

  render = () => {

    return(
      <div>
        <ThreeProject texture={this.state.texture} currentProject={this.state.id}/>
        <p>{this.state.currentIndex}</p>
        <Link to={`/work/${this.state.id}`}>
          <h1>{this.state.title}</h1>
        </Link>
        <h2>{this.state.subtitle}</h2>
      </div>
    );
  };
}
export default HomeView;
