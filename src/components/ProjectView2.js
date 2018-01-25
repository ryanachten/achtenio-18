import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../store';

let projectTransition;

class ProjectView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      id: '',
      title: '',
      subtitle: ''
    }
  }

  componentDidMount() {
    projectTransition = setInterval( () => this.changeProject(), 3000);
  }

  componentWillUnmount() {
    clearTimeout(projectTransition);
  }

  changeProject(){
    // console.log(projects.length);
    if (this.state.currentIndex+1 >= projects.length) {
      this.setState(() => ({
        currentIndex: 0
      }));
    }
    else{
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex+1
      }));
    }
    const curProject = projects[this.state.currentIndex];
    this.setState(()=>({
      id: curProject.id,
      title: curProject.title,
      subtitle: curProject.subtitle
    }));
  }


  render = () => {

    return(
      <div>
        <p>{this.state.id}</p>
        <Link to={`/work/${id}`}>
          <h1>{this.state.title}</h1>
        </Link>
        <h2>{this.state.subtitle}</h2>
      </div>
    );
  };
}
export default ProjectView;
