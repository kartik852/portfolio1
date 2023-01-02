import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Computer Science Student | Tech Lover | Learning new skills and building cool projects.'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Student</h3>
                    <p className='about-details'>
                        I am currently doing B TECH. CSE in Shree Mata Vaishnodevi University and I am currently Learning web development and building cool projects.Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/kartik852'
                        >
                            my git hub!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Explorer</h3>
                    <p className='about-details'>
                        I love to explore new things in real world as well as in field of technology.I learn new skills, technologies and try to implement it to ease out things in real world.
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Team Person</h3>
                    <p className='about-details'>
                        I love to contribute as much i can if i am doing any project with a team along with supporting my group members.
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src="https://media3.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47n9ugwikcw0kkp176ppj2gyk5i4l9idmetvdrucvx&rid=giphy.gif&ct=g"
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;