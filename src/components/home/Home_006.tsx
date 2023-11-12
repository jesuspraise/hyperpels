
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";
import ButtonA from "../widgets/button/ButtonA";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Home_006 = ({id = '', name = '', className = '', onView = () => {}}: typeHomeA) => {

    const localRef = useRef(null);
    const isInView = useInView(localRef);

    useEffect(() => {
        if(isInView){
            onView({
                name: name
            })
        }
    }, [isInView])
  
    return (
        <div ref={localRef} id={id} className={`${className} relative pt-[80px]`}>
            <div className="absolute left-0 top-0 w-[44%] h-[80px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_006.png)'}}></div>
            <div className="relative bg-colBlueA px-20 pt-10">
                <Image data-aos="fade-down" data-aos-duration="1500" className="absolute left-[50%] top-[-60px] w-[10px] h-[150px] m-auto object-contain translate-x-[-50%]" src="/images/sketches/sketch_007.png" width={0} height={0} sizes="100vw" alt=""/>
                <Image data-aos="fade-left" data-aos-duration="1500" className="absolute right-0 top-[-120px] w-[300px] h-[180px] m-auto object-contain" src="/images/sketches/sketch_011.png" width={0} height={0} sizes="100vw" alt=""/>
                <div data-aos="fade-up" data-aos-duration="1500" className="py-12">
                    <div className="mb-20 text-center">
                        <div className="my-10 font-familyA font-semibold leading-tight tracking-wide text-5xl">
                            <span>Recent work</span>
                        </div>
                        <div className="mb-10 w-[60%] m-auto text-2xl">
                            <span>Award winning designs, and nothing less.</span>
                        </div>
                        <div className="mb-6 m-auto w-[fit-content]">
                            <ButtonA>
                                View recent works
                            </ButtonA>
                        </div>
                    </div>
                    <div className="mb-12 flex flex-wrap">
                        <Image data-aos="fade-right" data-aos-duration="1500" className="mb-[40px] mr-[40px] w-[calc(50%-40px)] h-[500px] object-cover" src="/images/recent_works/work_001.png" width={0} height={0} sizes="100vw" alt=""/>
                        <Image data-aos="fade-left" data-aos-duration="1500" className="mb-[40px] mr-[40px] w-[calc(50%-40px)] h-[500px] object-cover" src="/images/recent_works/work_002.png" width={0} height={0} sizes="100vw" alt=""/>
                        <Image data-aos="fade-right" data-aos-duration="1500" className="mb-[40px] mr-[40px] w-[calc(50%-40px)] h-[500px] object-cover" src="/images/recent_works/work_003.png" width={0} height={0} sizes="100vw" alt=""/>
                        <Image data-aos="fade-left" data-aos-duration="1500" className="mb-[40px] mr-[40px] w-[calc(50%-40px)] h-[500px] object-cover" src="/images/recent_works/work_004.png" width={0} height={0} sizes="100vw" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_006;