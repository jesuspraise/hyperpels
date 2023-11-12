
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";
import ButtonA from "../widgets/button/ButtonA";
import { useEffect, useRef, useState } from "react";

import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Home_001 = ({id = '', name = '', className = '', onView = () => {}}: typeHomeA) => {

    const localRef = useRef(null);
    const isInView = useInView(localRef);

    const [states, setStates] = useState<any>({
        projects: []
    });

    useEffect(() => {
        setStates({
            ...states,
            projects: [
                {name: 'project_001.png'},
                {name: 'project_002.png'},
                {name: 'project_003.png'},
                {name: 'project_004.png'}
            ]
        });
    }, []);
    useEffect(() => {
        if(isInView){
            onView({
                name: name
            })
        }
    }, [isInView])

    const gearRef: any = useRef();
    const {scrollYProgress: gearProgress} = useScroll({
        target: gearRef
    });
    const rotateVal:any = useTransform(gearProgress, [0,1], ['15deg', '-15deg']);

    const projectsRef: any = useRef();
    const {scrollYProgress} = useScroll({
        target: projectsRef
    });
    const transX:any = useTransform(scrollYProgress, [0,1], ['-30%', '0%']);
  
    return (
        <div ref={localRef} id={id} className={`relative ${className} bg-colPinkA overflow-hidden`}>
            <div className="absolute left-0 top-0 w-[44%] h-[360px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_001.png)'}}></div>
            <div className="relative pt-6 pb-14">
                <div className="mb-10">
                    <div>
                        <div className="mb-20 m-auto w-[140px] h-[56px]">
                            <Image className="w-full h-full object-cover" src="/icons/icon_001.png" width={0} height={0} sizes="100vw" alt="hyper"/>
                        </div>
                    </div>
                    <div className="relative overflow-hidden">
                        <div data-aos="fade-right" data-aos-duration="1500" className="absolute left-[calc(-357.62px/2)] top-0 w-[357.62px] h-[294px]">
                            <Image className="w-full h-full object-cover" src="/images/sketches/sketch_000.png" width={0} height={0} sizes="100vw" alt="hyper"/>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" className="absolute right-[calc(-233.561px/4)] top-0 w-[233.561px] h-[450px]">
                            <Image className="w-full h-full object-cover" src="/images/sketches/sketch_001.png" width={0} height={0} sizes="100vw" alt="hyper"/>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <div className="mb-6 text-[4.6rem] leading-tight font-semibold text-center w-[50%] m-auto font-familyA tracking-wide">
                                <span>Unlimited Design for a Flat Fee</span>
                            </div>
                            <div className="mb-12 text-2xl text-center font-medium">
                                <span>Get access to unlimited design requests and revisions.</span>
                            </div>
                            <div className="mb-6 m-auto w-[fit-content]">
                                <ButtonA>
                                    See plans
                                </ButtonA>
                            </div>
                            <div className="flex items-center justify-center text-small">
                                <span>Design you</span>
                                <Image className="mx-1 w-[18px] h-[16px] object-cover" src="/images/others/other_001.png" width={0} height={0} sizes="100vw" alt="hyper"/>
                                <span>or your money back</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="relative pt-20">
                    <div className="absolute left-0 top-0 w-[44%] h-[360px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_002.png)'}}></div>
                    <motion.div
                        ref={projectsRef}
                        className="relative whitespace-nowrap hide_scrollbar transitionB"
                        style={{x: transX}}
                    >
                        {
                            states.projects.map((project: any, a: number) => {
                                return (
                                    <div key={a} className="mx-3 w-[400px] h-[400px] inline-block transitionA hover:shadow-[0_30px_40px_#a88f83] hover:scale-[1.1]">
                                        <Image
                                            className="w-full h-full object-cover"
                                            src={`/images/projects/${project.name}`}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            alt=""
                                        />
                                    </div>
                                )
                            })
                        }
                    </motion.div>
                    <motion.div
                        className="absolute left-[96px] top-[19px] w-[130px] h-[120px]"
                        ref={gearRef}
                        style={{rotate: rotateVal}}
                    >
                        <Image className="w-full h-full object-cover rotate-[-30deg]" src="/images/sketches/sketch_002.png" width={0} height={0} sizes="100vw" alt=""/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Home_001;