import './projectOverview.css'
import ReactImg from '../../assets/images/pexels-antonio-batinić-4164418.jpg'
import UIImg from '../../assets/images/pexels-kaboompics-com-5933.jpg'
import NodeImg from '../../assets/images/pexels-kaboompics-com-5933.jpg'
import DjangoImg from '../../assets/images/pexels-anete-lusina-4792733.jpg'
import AmazonImg from '../../assets/images/pexels-negative-space-34577.jpg'
import ExcelImg from '../../assets/images/pexels-lukas-590022.jpg'
import WordpressImg from '../../assets/images/pexels-pixabay-159304.jpg'

export default function ProjectOverview() {
    return (
        <div className="projectOverview">
            <h1 className='projectOverviewTitle'>Project Highlights</h1>
            <div className="projectShowcase">
                <div className="indProjectContainer">
                    <img src={UIImg} type="image/png" alt="" />
                    <h4>UI Design</h4>
                </div>
                <div className="indProjectContainer">
                    <img src={ReactImg} type="image/png" alt="" />
                    <h4>Front-End Development</h4>
                </div>
                <div className="indProjectContainer">
                    <img src={NodeImg} type="image/png" alt="" />
                    <h4>Back-End Development (Node JS)</h4>
                </div>
                <div className="indProjectContainer">
                    <img src={DjangoImg} type="image/png" alt="" />
                    <h4>Back-End Development (Django)</h4>
                </div>
                <div className="indProjectContainer">
                    <img src={AmazonImg} type="image/png" alt="" />
                    <h4>Python Based Web Scraper (Amazon)</h4>
                </div>
                <div className="indProjectContainer">
                    <img src={ExcelImg} type="image/png" alt="" />
                    <h4>MS Excel Data Extraction Tool</h4>
                </div>
                <div className="indProjectContainer">
                    <img src={WordpressImg} type="image/png" alt="" />
                    <h4>WordPress Based Website</h4>
                </div>
            </div>
        </div>
    )
}
