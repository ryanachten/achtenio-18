import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
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
      textures: Object.keys(projects).map(
        (key) => ({project: key, path: projects[key].textureImg})
      )
    }
  }

  componentDidMount() {
    projectTransition = setInterval( () => this.changeProject(), 5000);
  }

  componentWillUnmount() {
    clearTimeout(projectTransition);
  }

  changeProject(){
    $('.homeview--projectInfo').fadeOut(1000, () => {
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
      }));
      $('.homeview--projectInfo').fadeIn(1000);
    });

  }

  render = () => {

    return(
      <div>
        <ThreeProject meshScale={10} textures={this.state.textures} currentProject={this.state.id}/>
        <div className="homeview--projectInfo">
          <p>{this.state.currentIndex}</p>
          <Link to={`/work/${this.state.id}`}>
            <h1>{this.state.title}</h1>
          </Link>
          <h2>{this.state.subtitle}</h2>
        </div>
      </div>
    );
  };
}
export default HomeView;
