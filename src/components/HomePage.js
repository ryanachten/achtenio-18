import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import projects from '../store';
import ThreeProject from './ThreeProject';
import LoadingScreen from '../components/LoadingScreen';

const defaultProject = 'lucid';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      ids: Object.keys(projects),
      id: defaultProject,
      title: projects[defaultProject].title,
      subtitle: projects[defaultProject].subtitle,
      date: projects[defaultProject].date,
      textures: Object.keys(projects).map(
        (key) => ({project: key, path: projects[key].textureImg})
      )
    }
  }

  componentDidMount() {
    this.projectTransition = setInterval( () => this.changeProject(), 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.projectTransition);
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
        date: curProject.date
      }));
      $('.homeview--projectInfo').fadeIn(1000);
    });

  }

  render = () => {

    return(
      <div>
        <LoadingScreen />
        <Link to={`/work/${this.state.id}`}>
          <ThreeProject
            meshScale={10}
            textures={this.state.textures}
            currentProject={this.state.id}
            transition={true}
          />
        </Link>
        <section className="homeview--projectInfo">
          <p className="homeview--projectIndex">
            {(this.state.currentIndex +1) + '/' + this.state.ids.length}
          </p>
          <div>
            <Link to={`/work/${this.state.id}`}>
              <h1 className="homeview--projectTitle">
                {this.state.title}
              </h1>
            </Link>
            <h2 className="homeview--projectSubtitle">
              {this.state.subtitle}
            </h2>
          </div>
          <p className="homeview--projectDate">
            {this.state.date}
          </p>
        </section>
      </div>
    );
  };
}

export default HomePage;
