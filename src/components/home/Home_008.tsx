
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";

const Home_008 = ({className = ''}: typeHomeA) => {
  
    return (
        <div className={`${className} relative`}>
            <div className="absolute left-0 top-0 w-[44%] h-[480px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_007.png)'}}></div>
            <div className="relative bg-colPinkB px-20 pt-28 pb-20">
                <Image data-aos="fade-right" data-aos-duration="1500" className="absolute left-0 top-[-40px] w-[120px] h-[180px] m-auto object-fill" src="/images/sketches/sketch_013.png" width={0} height={0} sizes="100vw" alt=""/>
                <Image data-aos="fade-down" data-aos-duration="1500" className="absolute left-[50%] top-[-40px] w-[60px] h-[80px] m-auto object-fill translate-x-[-50%]" src="/images/sketches/sketch_014.png" width={0} height={0} sizes="100vw" alt=""/>
                <Image data-aos="fade-left" data-aos-duration="1500" className="absolute right-0 top-[-40px] w-[100px] h-[100px] m-auto object-fill" src="/images/sketches/sketch_015.png" width={0} height={0} sizes="100vw" alt=""/>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <div className="mb-6 text-center font-familyA font-semibold leading-tight tracking-wide text-5xl">
                        <span>Memberships levels</span>
                    </div>
                    <div className="mb-10 w-[60%] m-auto text-2xl text-center">
                        <span>{`Choose a plan that's right for you.`}</span>
                    </div>
                    <Image className="w-[350px] h-[60px] m-auto object-fill" src="/images/sketches/sketch_016.png" width={0} height={0} sizes="100vw" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Home_008;