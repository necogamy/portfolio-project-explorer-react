import React, { Fragment, Component } from 'react';
import './app.css';
import githubIco from '../../assets/github.svg';
import linkedinIco from '../../assets/linkedin.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'Featured'
    }
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>Nicolás López (nicogamy) Project Explorer</h1>
          <section style={{textAlign: 'center'}}>
            <a href='https://github.com/necogamy' target='_blank' rel='noreferrer' ><img src={githubIco} alt='github' /></a>
            <a href='https://www.linkedin.com/in/nicogamy' target='_blank' rel='noreferrer' ><img src={linkedinIco} alt='linkedin' /></a>
          </section>
        </header>
        <main>
          <section style={{textAlign: 'center'}}>
            <h3>Sort by</h3>
            <section>
              <button className='featured'>Featured</button>
              <button>All</button>
            </section>
            <section>
              <button>React</button>
              <button>Redux</button>
              <button>JavaScript</button>
              <button>CSS</button>
            </section>
            <section>
              <button>HTML</button>
              <button>PostgreSQL</button>
              <button>Node</button>
              <button>Express</button>
              <button>Bootstrap</button>
              <button>jQuery</button>
              <button>Sass</button>
            </section>
          </section>
  
          <section>
  
          </section>
        </main>
        <aside style={{textAlign: 'center'}}>
          <p>Total projects: $1</p>
          <a href='https://nicogamy-portfolio-react-web-app.netlify.app/' target='_blank' rel='noreferrer'>nicogamy.me</a>
          <a href='http://carnes.cc/projects/' target='_blank' rel='noreferrer' style={{display: 'block'}}>Inspired by</a>
          <p>Powered by <a href='https://create-react-app.dev/' rel='noreferrer' target='_blank'>React</a></p>
        </aside>
      </Fragment>
    );
  }
}

export default App;
