
'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Home_000 from './Home_000';
import Home_001 from "./Home_001";
import Home_002 from "./Home_002";
import Home_003 from "./Home_003";
import Home_004 from './Home_004';
import Home_005 from './Home_005';
import Home_006 from './Home_006';
import Home_007 from './Home_007';
import Home_008 from './Home_008';
import Home_009 from './Home_009';
import Home_010 from './Home_010';

const Home = () => {
    const [states, setStates] = useState({
        objInView: {name: ''}
    });
    useEffect(() => {
        AOS.init();
    }, []);
  
    return (
        <div className="relative">
            <Home_000 objInView={states.objInView}/>
            <Home_001 id="_001" name="" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
            <Home_002 id="_002" name="" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
            <Home_003 id="_003" name="" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
            <Home_004 id="_004" name="" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
            <Home_005 id="_005" name="Benefits" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
            <Home_006 id="_006" name="Recent works" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
            <Home_007 id="_007" name="Services" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
            <Home_008 id="_008" name="Pricing" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
            <Home_009 id="_009" name="FAQs" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
            <Home_010 id="_010" name="" onView={(objInView: any) => {setStates({...states, objInView: objInView})}} />
        </div>
    );
}

export default Home;