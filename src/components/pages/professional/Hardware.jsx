import './hardware.css'
import desktop from '../../../assets/images/skills/pexels-athena-2582935.jpg'
import ACMotor from '../../../assets/images/skills/3-phase-motor.jpg'
import Switchgear from '../../../assets/images/skills/switchgear.jpg'

const skills = [
    { title: 'Desktop Assembly', image: desktop },
    { title: '3-Phase Motor', image: ACMotor },
    { title: 'Switchgears', image: Switchgear }
]

export default function Hardware() {
    return (
        skills.map((el, index) => {
            return(
                <div className="hardware" key={index}>
                    <div className="image" style={{ backgroundImage: `url(${el.image})`}} key={index++}></div>
                    <p className="hardwareTitle" key={el.title}>{el.title}</p>
                </div>
            )
        })
        
    )
}
