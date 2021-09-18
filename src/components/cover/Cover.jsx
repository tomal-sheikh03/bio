import '../navbar/navbar.css';

const OverviewCover = function OverviewCover() {
    return (
            <div className="cover homeBanner" id='mainCover'>
                <h1 className="pageTitle">OVERVIEW</h1>
            </div>
    )
}

const EducationCover = function EducationCover() {
    return (
            <div className="cover educationBanner" id='mainCover'>
                <h1 className="pageTitle">EDUCATION</h1>
            </div>
    )
}

const SkillsCover = function SkillsCover() {
    return (
            <div className="cover skillBanner" id='mainCover'>
                <h1 className="pageTitle">SKILLS</h1>
            </div>
    )
}

const ProjectCover = function ProjectCover() {
    return (
            <div className="cover projectBanner" id='mainCover'>
                <h1 className="pageTitle">PROJECTS</h1>
            </div>
    )
}

const ContactCover = function ContactCover() {
    return (
            <div className="cover contactBanner" id='mainCover'>
                <h1 className="pageTitle">CONTACT</h1>
            </div>
    )
}

const Covers = {OverviewCover, EducationCover, SkillsCover, ProjectCover, ContactCover}

export default Covers