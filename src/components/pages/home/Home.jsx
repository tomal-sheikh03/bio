import './home.css'
import DP from '../../../assets/images/DP.jpg';
import ProjectOverview from '../../projects/ProjectOverview';
import { HashLink as Link } from 'react-router-hash-link';

export default function Home() {
    return (
        <div className="home">
            <div className="summary">
                <div className="overview">
                    <div className="overviewTexts">
                        <p>Full Name:</p>
                        <p>Md. Wahidul Islam</p>
                    </div>
                    <div className="educationContainer">
                        <div className="overviewTexts">
                            <p>Education:</p>
                            <p>Jashore University of Science & Technology (JUST)</p>
                        </div>
                        <div className="overviewTexts">
                            <p>Degree:</p>
                            <p>Bachelor of Science (BSc)</p>
                        </div>
                        <div className="overviewTexts">
                            <p>Subject:</p>
                            <p>Electrical & Electronic Engineering (EEE)</p>
                        </div>
                        <div className="overviewTexts">
                            <p>Duration:</p>
                            <p>2014 to 2018 (4 Years)</p>
                        </div>
                        <Link to='./education'>
                            <p className="detailedView">See more</p>
                        </Link>
                    </div>
                    <div className="experienceContainer">
                        <div className="overviewTexts">
                            <p>Employment History:</p>
                            <div className="experience">
                                <div className="expRow">
                                    <p>Adiva Graphics</p>
                                    <p>Data Artist (Executive)</p>
                                    <p className='subDuration'>February, 2019 - March, 2020</p>
                                </div>
                                <div className="expRow">
                                    <p>Jashore City Cable (Pvt.) Limited</p>
                                    <p>Web Developer</p>
                                    <p className='subDuration'>June, 2020 - Present</p>
                                </div>
                            </div>
                        </div>
                        <Link to='./skills#experience'>
                            <p className="detailedView">See more</p>
                        </Link>
                    </div>
                    <div className="skillsContainer">
                        <div className="overviewTexts">
                            <p>Software Skills:</p>
                            <p>MS Office, Microsoft OS, Adobe Photoshop, Adobe Illustrator, MATLAB, HTML, CSS, JavaScript, React JS, Node JS, Django</p>
                        </div>
                        <div className="overviewTexts">
                            <p>Hardware Skills:</p>
                            <p>Desktop Assembly, 3-Phase Motor Connection, Switchgears</p>
                        </div>
                        <Link to='./skills#skills'>
                            <p className="detailedView">See more</p>
                        </Link>
                    </div>
                </div>
                <div className="dpSide">
                    <img className='dpSideImg' src={DP} alt="" />
                    <div className="social">
                        <i className="socialIcon fab fa-facebook-square" onClick={() => window.open('https://www.facebook.com/tomal.sheikh', '_blank')}></i>
                        <i className="socialIcon fab fa-linkedin" onClick={() => window.open('https://www.linkedin.com/in/md-wahidul-islam-131103/', '_blank')}></i>
                        <i className="socialIcon fab fa-github-square" onClick={() => window.open('https://github.com/tomal-sheikh03', '_blank')}></i>
                        <i className="socialIcon fab fa-instagram-square" onClick={() => window.open('https://www.instagram.com/tom.reaper/', '_blank')}></i>
                    </div>
                </div>
            </div>
            <ProjectOverview />
        </div>
    )
}
