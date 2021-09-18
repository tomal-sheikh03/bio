import Skills from './Skills';
import Experience from './Experience';
import Hardware from './Hardware';
import './professional.css'

export default function Professional() {
    return (
        <div className="professional">
            <p className="sectionTitle" id='experience'>Professional Background</p>
            <div className="experienceContainer">
                <Experience />
            </div>
            <p className="sectionTitle" id='skills'>Software Skills</p>
            <div className="skillContainer">
                <Skills />
            </div>
            <p className="sectionTitle">Hardware Skills</p>
            <div className="hardwareContainer">
                <Hardware />
            </div>
        </div>
    )
}