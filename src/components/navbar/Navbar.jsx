import React from 'react';
import './navbar.css'
import DP from '../../assets/images/DP.jpg'

const navLinks = [
    {title: 'OVERVIEW', link: '/'},
    {title: 'EDUCATION', link: '/education'},
    {title: 'SKILLS', link: '/skills'},
    {title: 'PROJECTS', link: '/projects'},
    {title: 'CONTACT', link: '/contact'}
];

export default function Navbar() {
    return (
        <>
            
            <div className="navbar"onLoad={coverText}>
                <div className="topLeft">
                    <img className="dp" src={DP} alt="" />
                </div>
                <div className="topRight">
                    <ul className="topList">
                    {navLinks.map((el, index) => {
                        return(
                            <li className="topListItem link" /*onClick={dynamicCover}*/ value={el.cover} key={index}>
                                <a href={el.link}>
                                    {el.title}
                                </a>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>

            <div className="cover">
                <p className="coverText">OVERVIEW</p>
            </div>
        </>
    )

    function coverText (){
        var path= window.location.pathname;
        var pathArray = path.split('/');
        var loc=pathArray[1].toUpperCase();
        var coverSection = document.querySelector('.cover');
        var coverContent = document.createElement('p');
        coverContent.classList.add('coverText');
        
        if(loc){
            if(coverSection.lastElementChild){
                coverSection.removeChild(coverSection.lastElementChild);
            }
            let coverText = document.createTextNode(loc);

            coverSection.appendChild(coverContent);
            coverContent.appendChild(coverText);
            coverSection.setAttribute('id', loc);
        } else {
            coverSection.id = 'OVERVIEW';
        }
    }

    
}






