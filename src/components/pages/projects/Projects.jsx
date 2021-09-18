import './projects.css'
import BackEnd from './backEnd/BackEnd'
import Excel from './excel/ExcelExtraction'
import FrontEnd from './frontEnd/FrontEnd'
import UIDesign from './uiDesign/UIDesign'
import WebScraper from './webScraper/WebScraper'
import WordPress from './wordpress/Wordpress'

export default function Projects() {
    return (
        <div className="projects">
            <UIDesign />
            <FrontEnd />
            <BackEnd />
            <WordPress />
            <Excel />
            <WebScraper />
        </div>
    )
}
