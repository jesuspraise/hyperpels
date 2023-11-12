
'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Home_001 from "./Home_001";
import Home_002 from "./Home_002";
import Home_003 from "./Home_003";
import Home_004 from './Home_004';
import Home_005 from './Home_005';
import Home_006 from './Home_006';
import Home_007 from './Home_007';
import Home_008 from './Home_008';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
  
    return (
        <div>
            <Home_001/>
            <Home_002/>
            <Home_003/>
            <Home_004/>
            <Home_005/>
            <Home_006/>
            <Home_007/>
            <Home_008/>
        </div>
    );
}

export default Home;