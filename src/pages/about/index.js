import React from 'react'
import * as PS from '../../components/Post/styled'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'
import Experience from '../../components/Experience'
import SocialLinks from '../../components/SocialLinks'
import {graphql, useStaticQuery} from 'gatsby';
import FormatDate from '../../utils/FormatDate';

const About = () => {
    const formatDate = new FormatDate();

    const { allExperienceJson } = useStaticQuery(
        graphql`
            query MyQuery {
                allExperienceJson(sort: {fields: start_date, order: DESC}) {
                    edges {
                        node {
                            id
                            company
                            description
                            end_date
                            is_current
                            location {
                                city
                                state
                            }
                            occupation
                            start_date
                        }
                    }
                }
            }
        `
    );

    return (
        <Layout>
            <SEO 
                title="Sobre mim" 
                description="Filmmaker, designer e músico. Saiba mais um pouco sobre mim, minhas experiências, habilidades e informações de contato. 🧙🏻‍♂️"
            />

            <main>
                <PS.PostHeader>
                    <h1>sobre mim</h1>
                </PS.PostHeader>
                <PS.MainContent>
                    <div>
                        <p>Meu nome é Guilherme Ramos, nasci em Sorocaba/SP e sou desenvolvedor front-end há quase dois anos</p>
                    </div>

                    <div>
                        <h2>Experiência</h2>
                        
                        {allExperienceJson.edges.map((item, index) => {
                            const experience = item.node;

                            const formattedStartDate = formatDate.formatDate(experience.start_date);
                            const formattedEndDate = formatDate.formatDate(experience.end_date);

                            const timeOfService = formatDate.differenceInWords(experience.start_date, experience.end_date, experience.is_current);

                            const location = `${experience.location.city}, ${experience.location.state}`

                            return (
                                <Experience 
                                    startDate={formattedStartDate}
                                    endDate={formattedEndDate}
                                    isCurrent={experience.is_current}
                                    company={experience.company}
                                    occupation={experience.occupation}
                                    location={location}
                                    timeOfService={timeOfService}
                                    description={experience.description}
                                    key={index}
                                />
                            )
                        })}
                    </div>

                    <div>
                        <h2>Conhecimentos</h2>
                        <p>As ferramentas que mais utilizo são as seguintes:</p>
                        <ul>
                            <li>Premiere Pro</li>
                            <li>Final Cut Pro</li>
                            <li>After Effects</li>
                            <li>Lightroom Classic</li>
                            <li>Photoshop</li>
                            <li>Corel Draw</li>
                            <li>Illustrator</li>
                            <li>Reaper</li>
                            <li>Audition</li>
                            <li>Pacote Office</li>
                            <li>O que eu ainda não sei, aprendo rápido <span role="img" aria-label="Emoji de sorrindo">🙂</span></li>
                        </ul>
                    </div>

                    <div className="aboutContato">
                        <h2>Onde me encontrar</h2>
                        <SocialLinks iconSize="42px" iconColor="#fff" />
                        <a className="aboutContatoMail" href="mailto:contato@elionquintiliano.com">contato@elionquintiliano.com</a>
                    </div>
                </PS.MainContent>
            </main>
            
        </Layout>
    )
}

export default About