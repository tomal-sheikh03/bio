import './education.css'
import SchoolLogo from '../../../assets/images/school.png'
import CollegeLogo from '../../../assets/images/college.png'
import UniversityLogo from '../../../assets/images/JUST.png'

const education = [
    {
        title: 'Bachelor of Science (BSc)',
        institution: 'Jashore University of Science & Technology (JUST)',
        major: 'Electrical & Electronic Engineering (EEE)',
        duration: '2014 to 2018',
        passingYear: '2018',
        result: '2.81',
        image: UniversityLogo,
        location: 'Jashore'
    },
    {
        title: 'Higher Secondary School Certificate (HSC)',
        institution: 'Govt. Shaheed Bulbul College',
        major: 'Science',
        duration: '2011 to 2012',
        passingYear: '2013',
        result: '4.90',
        image: CollegeLogo,
        location: 'Pabna',
    },
    {
        title: 'Secondary School Certificate (SSC)',
        institution: 'Pabna Zilla School',
        major: 'Science',
        duration: '2009 to 2010',
        passingYear: '2011',
        result: '5.00',
        image: SchoolLogo,
        location: 'Pabna',
    }
]

export default function Test() {
    return(
        education.map((el, index) => {
            return(
                <div className="educationPlaceholder" key={index}>
                    <div className="educationDetails" key={index+10}>
                        <h3 className="degreeTitle" key={index}>{el.title}</h3>
                        <p className="bigDetails" key={index+11}>Institution: {el.institution}</p>
                        <p className="bigDetails" key={index+12}>Major: {el.major}</p>
                        <div className="smallDetails" key={index+13}>
                            <p className="smallContents" key={index+14}>Duration: {el.duration}</p>
                            <p className="smallContents" key={index+15}>Passing Year: {el.passingYear}</p>
                            <p className="smallContents" key={index+16}>Result: {el.result}</p>
                            <p className="smallContents" key={index+17}>Location: {el.location}</p>
                        </div>
                    </div>
                    <img src={el.image} className="institutionLogo" alt="" key={index} />
                </div>
            )
        })
    )
    
}
