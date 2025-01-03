import { useEffect, useState } from 'react';
import vacouleLogo from '../assets/VacuoleLogo.png';
import './Landing.css'
export default function Landing() {

    const [title, setTitle] = useState("");
    const [tagLine, setTagLine] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setTitle("Vacuole");
        setTagLine("From Problems to Possibilities");
        setDescription("A platform to share, discover and learn about cognitive, thought, logic, creativity, and more.");

    }, []);

    return (
        <div className='landing-container'>
            <img className="landing-logo" src={vacouleLogo}/>
            <h1 className='landing-title'>{title}</h1>
            <p className='landing-tagLine'>{tagLine}</p>
            <p className='landing-description'>{description}</p>
        </div>
    )
}
