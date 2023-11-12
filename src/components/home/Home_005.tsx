
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";
import ButtonA from "../widgets/button/ButtonA";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Home_005 = ({id = '', name = '', className = '', onView = () => {}}: typeHomeA) => {

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
        <div ref={localRef} id={id} className={`${className} relative pt-12`}>
            <div className="absolute left-0 top-0 w-[44%] h-[450px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_005.png)'}}></div>
            <div className="relative px-20 pt-20">
                <Image data-aos="fade-right" data-aos-duration="1500" className="absolute left-0 top-[-120px] w-[140px] h-[200px] m-auto object-contain" src="/images/sketches/sketch_008.png" width={0} height={0} sizes="100vw" alt=""/>
                <Image data-aos="fade-down" data-aos-duration="1500" className="absolute left-[50%] top-[-60px] w-[6px] h-[100px] m-auto object-contain translate-x-[-50%]" src="/images/sketches/sketch_009.png" width={0} height={0} sizes="100vw" alt=""/>
                <Image className="absolute left-[50%] top-[50px] w-[70px] h-[70px] m-auto object-contain translate-x-[-50%]" src="/images/sketches/sketch_010.png" width={0} height={0} sizes="100vw" alt=""/>
                <div data-aos="fade-up" data-aos-duration="1500" className="py-12">
                    <div className="mb-20 text-center">
                        <div className="my-6 font-familyA font-semibold leading-tight tracking-wide text-5xl">
                            <span>Membership benefits</span>
                        </div>
                        <div className="mb-6 w-[60%] m-auto text-2xl">
                            <span>{`Once you experience our design perks, you'll never look elsewhere. That's a promise.`}</span>
                        </div>
                        <div className="mb-6 m-auto w-[fit-content]">
                            <ButtonA className="!px-12">
                                See plans
                            </ButtonA>
                        </div>
                    </div>
                    <div className="mb-12 text-sm flex flex-wrap justify-around text-center">
                        <div className="mb-12 w-[33%]">
                            <Image className="mb-4 w-[80px] h-[80px] m-auto object-contain" src="/images/vectors/vector_001.png" width={0} height={0} sizes="100vw" alt=""/>
                            <span className="block mb-6 font-bold font-familyA tracking-wide text-lg">Design board</span>
                            <span className="block w-[60%] m-auto">{`Add as many design requests to your board as you'd like.`}</span>
                        </div>
                        <div className="mb-12 w-[33%]">
                            <Image className="mb-4 w-[80px] h-[80px] m-auto object-contain" src="/images/vectors/vector_002.png" width={0} height={0} sizes="100vw" alt=""/>
                            <span className="block mb-6 font-bold font-familyA tracking-wide text-lg">Rocket fast delivery</span>
                            <span className="block w-[60%] m-auto">{`Get your design one at a time in hours or just a few days on average.`}</span>
                        </div>
                        <div className="mb-12 w-[33%]">
                            <Image className="mb-4 w-[80px] h-[80px] m-auto object-contain" src="/images/vectors/vector_003.png" width={0} height={0} sizes="100vw" alt=""/>
                            <span className="block mb-6 font-bold font-familyA tracking-wide text-lg">Fixed monthly rate</span>
                            <span className="block w-[60%] m-auto">{`No hidden charges! Pay the same fixed price each month.`}</span>
                        </div>
                        <div className="mb-12 w-[33%]">
                            <Image className="mb-4 w-[80px] h-[80px] m-auto object-contain" src="/images/vectors/vector_004.png" width={0} height={0} sizes="100vw" alt=""/>
                            <span className="block mb-6 font-bold font-familyA tracking-wide text-lg">Top-notch quality</span>
                            <span className="block w-[60%] m-auto">{`Insane design quality at your fingertips all for a fraction of it’s worth.`}</span>
                        </div>
                        <div className="mb-12 w-[33%]">
                            <Image className="mb-4 w-[80px] h-[80px] m-auto object-contain" src="/images/vectors/vector_005.png" width={0} height={0} sizes="100vw" alt=""/>
                            <span className="block mb-6 font-bold font-familyA tracking-wide text-lg">Flexible and scalable</span>
                            <span className="block w-[60%] m-auto">{`Adapting to your changing needs. You can upgrade or downgrade your plan.`}</span>
                        </div>
                        <div className="mb-12 w-[33%]">
                            <Image className="mb-4 w-[80px] h-[80px] m-auto object-contain" src="/images/vectors/vector_006.png" width={0} height={0} sizes="100vw" alt=""/>
                            <span className="block mb-6 font-bold font-familyA tracking-wide text-lg">Unique and all yours</span>
                            <span className="block w-[60%] m-auto">{`Each of your designs is made especially for you and is 100% yours.`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_005;