import './experience.css'
import AG from '../../../assets/images/companies/adiva.png'
import JCCL from '../../../assets/images/companies/jccl_logo.png'

const experience = [
    {
        designation: 'Web Developer',
        companyName: 'Jashore City Cable (Pvt) Limited',
        location: 'Jess Tower, MK Road, Jashore',
        startDate: 'June, 2020',
        endDate: 'present',
        image: JCCL,
        responsibilities: 'Website maintainence, Website creation, Streaming service creation, Updating Streaming contents'
    },
    {
        designation: 'Data Artist (Executive)',
        companyName: 'Adiva Graphics',
        location: 'Baridhara DOHS, Dhaka',
        startDate: 'February, 2019',
        endDate: 'March, 2020',
        image: AG,
        responsibilities: 'Data manipulation, Large Data Handling, Market Analysis, Presentation, Fast and error-free delivery'
    }
]

export default function Experience() {
    return (
        experience.map((el, index) => {
            return(
                <div className="experienceSection" key={index}>
                    <div className="expDesc" key={index + 10}>
                        <h4 className="header" key={el.designation}>{el.designation}</h4>
                        <p className="subHeader" key={el.companyName}>Organization: {el.companyName}</p>
                        <p className="subHeader" key={el.location}>Location: {el.location}</p>
                        <p className="subHeader" key={el.startDate}>From {el.startDate} to {el.endDate}</p>
                        <p className="subHeader" key={el.responsibilities}>Responsibilities: {el.responsibilities}</p>
                    </div>
                    <img src={el.image} className="imgLogo" alt="" key={index+20} />
                </div>
        )})
        
    )
}
