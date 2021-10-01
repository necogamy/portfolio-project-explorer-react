import React, { Component } from 'react';
import './styles.css';
import { Button } from '../button/Button';

export class Project extends Component {
    render() {
        return (
            <article class="project">
                <section>
                    <img src={this.props.project.image} alt={this.props.project.name} />
                </section>
                <section>
                    <section>
                        <h3>{this.props.project.name}</h3>
                        <p>{this.props.project.description}</p>
                    </section>
                    <section>
                        {
                            this.props.project.demo ? 
                            [<a href={this.props.project.demo} rel='noreferrer' target='_blank' >Demo</a>,
                            <span> | </span>]
                            : ''
                        }

                        <a href={this.props.project.github} rel='noreferrer' target='_blank' >Github</a>
                    </section>
                    <hr />
                    <section>
                        {
                            this.props.project.tags.map(tag => <Button key={tag} filter={tag} />)
                        }
                    </section>
                </section>
            </article>
        );
    }
}