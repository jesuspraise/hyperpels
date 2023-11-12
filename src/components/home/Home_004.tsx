
'use client';

import { typeHomeA } from "@/types";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Home_004 = ({id = '', name = '', className = '', onView = () => {}}: typeHomeA) => {

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
        <div ref={localRef} id={id} className={`${className} relative pt-12 bg-colBlueA px-20 pb-28`}>
            <div className="absolute left-0 top-0 w-[44%] h-[260px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_004.png)'}}></div>
            <Image data-aos="fade-right" data-aos-duration="1500" className="absolute left-0 top-[-20px] w-[88px] h-[180px] m-auto object-cover" src="/images/sketches/sketch_005.png" width={0} height={0} sizes="100vw" alt=""/>
            <Image data-aos="fade-left" data-aos-duration="1500" className="absolute right-0 top-[-80px] w-[108px] h-[240px] m-auto object-cover" src="/images/sketches/sketch_006.png" width={0} height={0} sizes="100vw" alt=""/>
            <Image data-aos="fade-down" data-aos-duration="1500" className="absolute left-[50%] top-[-60px] w-[10px] h-[90px] m-auto object-cover translate-x-[-50%]" src="/images/sketches/sketch_007.png" width={0} height={0} sizes="100vw" alt=""/>
            <div className="relative">
                <div data-aos="fade-up" data-aos-duration="1500" className="py-12">
                    <div className="mb-20 text-center">
                        <div className="my-6 m-auto max-w-[45%] font-familyA font-semibold leading-tight tracking-wide text-5xl">
                            <span>{`It's "where have you been" better`}</span>
                        </div>
                        <div className="w-[60%] m-auto text-2xl">
                            <span>Hyper Pels replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast that it will blow your mind.</span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="bg-white w-[calc(50%-40px)] mr-[40px] px-8 py-12 flex flex-col justify-center">
                            <div>
                                <Image className="w-[35px] h-[30px] object-cover" src="/images/others/other_002.png" width={0} height={0} sizes="100vw" alt=""/>
                                <div className="my-6 font-familyA font-semibold leading-tight tracking-wide text-3xl">
                                    <span>Design is everything, and these guys have nailed it.</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Image className="w-[40px] h-[40px] object-cover mr-2" src="/images/avatars/avatar_001.png" width={0} height={0} sizes="100vw" alt=""/>
                                <div className="flex items-center">
                                    <span>Adrian Boysel,</span>
                                    <Image className="mx-1 w-[20px] h-[20px] object-cover" src="/images/others/other_004.png" width={0} height={0} sizes="100vw" alt=""/>
                                    <span className="font-bold">Instagraphics</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[calc(50%-40px)] ml-[40px]">
                            <div className="mb-6">
                                <span className="block mb-4 font-familyA font-bold text-lg tracking-wide">Totally async</span>
                                <span className="block">{`Not a fan of meetings? We aren't either; we believe in cutting to the chase and focusing on results.`}</span>
                            </div>
                            <div className="mb-6">
                                <span className="block mb-4 font-familyA font-bold text-lg tracking-wide">Manage with Coda</span>
                                <span className="block">Manage your design board using Coda. View active, queued and completed tasks with ease.</span>
                            </div>
                            <div className="">
                                <span className="block mb-4 font-familyA font-bold text-lg tracking-wide">Invite team members</span>
                                <span className="block">Invite your entire team, so anyone can submit requests and track their progress.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_004;