
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ButtonA from "../widgets/button/ButtonA";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Home_010 = ({id = '', name = '', className = '', onView = () => {}}: typeHomeA) => {

    const [states, setStates] = useState<any>({
        affils: [],
        things_a: [],
        things_b: []
    });

    const localRef = useRef(null);
    const isInView = useInView(localRef);

    useEffect(() => {
        if(isInView){
            onView({
                name: name
            })
        }
    }, [isInView])
    useEffect(() => {
        setStates({
            ...states,
            affils: [
                {name: 'affil_001.png'},
                {name: 'affil_002.png'},
                {name: 'affil_003.png'},
                {name: 'affil_004.png'},
                {name: 'affil_005.png'},
                {name: 'affil_006.png'},
                {name: 'affil_007.png'}
            ],
            things_a: [
                {text: 'Local projects', link: '#'},
                {text: 'Pricing', link: '#'},
                {text: 'Contact', link: '#'}
            ],
            things_b: [
                {text: 'Client login', link: '#'},
                {text: 'Get started', link: '#'},
                {text: 'Terms & conditions', link: '#'},
                {text: 'Privacy policy', link: '#'}
            ]
        });
    }, []);
  
    return (
        <div ref={localRef} id={id} className={`${className} relative`}>
            <div className="absolute left-0 top-0 w-[44%] h-[480px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_007.png)'}}></div>
            <div className="relative bg-black px-20 pt-28 pb-20 text-white">
                <Image data-aos="fade-right" data-aos-duration="1500" className="absolute left-0 bottom-0 w-[120px] h-[170px] m-auto object-fill" src="/images/sketches/sketch_022.png" width={0} height={0} sizes="100vw" alt=""/>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <div className="mb-16 m-auto w-[65%]">
                        <div className="mb-10 text-center font-familyA font-semibold leading-tight tracking-wide text-5xl">
                            <span className="block">You deserve Hyper Pels.</span>
                            <span className="block">{`It's the best choice for you.`}</span>
                        </div>
                        <div className="mb-16 text-2xl text-center">
                            <span>Experience Hyper Pels in action, and discover how you and your team can revolutionize your design sourcing, once and for all.</span>
                        </div>
                        <div className="">
                            <ButtonA className="!w-full !py-14 border-[1px] border-white rounded-[25px] !text-2xl hover:bg-white hover:text-black">
                                Get started
                            </ButtonA>
                        </div>
                    </div>
                    <div className="mb-32 flex justify-around items-center shrink-0 w-full">
                        {
                            states.affils.map((affil: any, a: number) => {
                                return (
                                    <div key={a} className="mx-3">
                                        <Image
                                            className="w-full h-full object-cover"
                                            src={`/images/affils/${affil.name}`}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            alt="hyper"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center h-[fit-content]">
                            <Link href="">
                                <Image className="w-[120px] h-[48px] object-fill" src="/icons/icon_002.png" width={0} height={0} sizes="100vw" alt=""/>
                            </Link>
                            <div className="ml-10 flex items-center font-familyC">
                                <Image className="w-[50px] h-[40px] m-auto object-fill mr-2" src="/images/sketches/sketch_023.png" width={0} height={0} sizes="100vw" alt=""/>
                                <div className="text-small">
                                    <span className="block">Hyper Pels is proudly made</span>
                                    <span className="block">and headquartered in Lagos.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm tracking-wide">
                            <div>
                                {
                                    states.things_a.map((thing: any, a: number) => <Link key={a} href={thing.link} className="mb-4 block transitionA hover:text-colOrangeA">{thing.text}</Link>)
                                }
                            </div>
                            <div className="ml-16">
                                {
                                    states.things_b.map((thing: any, a: number) => <Link key={a} href={thing.link} className="mb-4 block transitionA hover:text-colOrangeA">{thing.text}</Link>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_010;