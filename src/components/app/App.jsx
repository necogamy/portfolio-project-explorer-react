import React, { Fragment, Component } from 'react';
import './app.css';
import githubIco from '../../assets/github.svg';
import linkedinIco from '../../assets/linkedin.svg';

import projects from '../../utils/projects.json';
import { Button } from '../button/Button';
import { Project } from '../project/Project';

const primaryFilters = ['Featured', 'All'];
const firstFilters = ['React', 'Redux', 'JavaScript', 'CSS', 'HTML', 'QA Testing'];
const secondFilters = ['SQL', 'Node', 'Express', 'Bootstrap', 'jQuery', 'Sass', 'Web Design'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'Featured'
    }
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(mode) {
    this.setState({
      filter: mode
    })
  }

  render() {
    const filteredProjects = projects.map(project => <Project key={project.id} project={project} />).filter(project => {
      if (this.state.filter === 'All') return true;
      return project.props.project.tags.includes(this.state.filter)
    });

    return (
      <Fragment>
        <header>
          <h1 style={{textAlign: 'center'}}>Nicogamy Project Explorer</h1>
          <section style={{textAlign: 'center'}}>
            <a href='https://github.com/necogamy' target='_blank' rel='noreferrer' ><img src={githubIco} alt='github' /></a>
            <a href='https://www.linkedin.com/in/nicogamy' target='_blank' rel='noreferrer' ><img src={linkedinIco} alt='linkedin' /></a>
          </section>
        </header>
        <main>
          <section style={{textAlign: 'center'}}>
            <h3>Sort by</h3>
            <section>
              {
                primaryFilters.map(filter => <Button key={filter} active={this.state.filter} filter={filter} onClick={this.changeFilter} />)
              }
            </section>
            <section>
              {
                firstFilters.map(filter => <Button key={filter} active={this.state.filter} filter={filter} onClick={this.changeFilter} />)
              }
            </section>
            <section>
              {
                secondFilters.map(filter => <Button key={filter} active={this.state.filter} filter={filter} onClick={this.changeFilter} />)
              }
            </section>
          </section>
  
          <section>
              {
                filteredProjects
              }
          </section>
        </main>
        <aside style={{textAlign: 'center'}}>
          <section style={{marginBottom: 15}}>
            <p>Total projects: <span style={{fontWeight: 'bold'}}>{projects.length}</span> | Total filtered projects: <span style={{fontWeight: 'bold'}}>{filteredProjects.length}</span></p>
          </section>
          <a style={{textDecoration: 'none', fontWeight: 'bolder'}} href='https://nicogamy-portfolio-react-web-app.netlify.app/' target='_blank' rel='noreferrer'>nicogamy.me</a>
          <p style={{marginTop: 15}}>Inspired by <a href='http://carnes.cc/projects/' target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>Beau</a></p>
          <p><em>Powered by <a style={{textDecoration: 'none'}} href='https://create-react-app.dev/' rel='noreferrer' target='_blank'>React</a></em></p>
        </aside>
      </Fragment>
    );
  }
}

export default App;
