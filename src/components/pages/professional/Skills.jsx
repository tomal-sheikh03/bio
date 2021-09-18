import './skills.css';
import Html from '../../../assets/images/skills/html5.png'
import Css from '../../../assets/images/skills/css.png'
import Js from '../../../assets/images/skills/javascript.png'
import Rct from '../../../assets/images/skills/react.png'
import Node from '../../../assets/images/skills/nodejs.png'
import Django from '../../../assets/images/skills/django.png'
import Excel from '../../../assets/images/skills/excel.png'
import Powerpoint from '../../../assets/images/skills/powerpoint.png'
import Photoshop from '../../../assets/images/skills/photoshop.png'
import Illustrator from '../../../assets/images/skills/illustrator.png'
import Windows from '../../../assets/images/skills/windows.png'
import Matlab from '../../../assets/images/skills/matlab.png'

const skills = [
    { title: 'HTML', image: Html },
    { title: 'CSS', image: Css },
    { title: 'JavaScript', image: Js },
    { title: 'React JS', image: Rct },
    { title: 'Node JS', image: Node },
    { title: 'Django', image: Django },
    { title: 'Microsoft Excel', image: Excel },
    { title: 'Microsoft Powerpoint', image: Powerpoint },
    { title: 'Adobe Photoshop', image: Photoshop },
    { title: 'Adobe Illustrator', image: Illustrator },
    { title: 'Windows OS', image: Windows },
    { title: 'MATLAB', image: Matlab }
]

export default function Skills() {
    return(
        skills.map((el, index) => {
            return (
                <div className='skillSection' key={`index: ${index}`}>
                    <img className="imgSection" src={el.image} key={index} alt='' />
                    <p className="textSection" key={el.title}>{el.title}</p>
                </div>
            )
        })
    )
}
