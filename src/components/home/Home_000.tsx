
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface typeLocal {
    className?: string;
    objInView?: {name: string};
}
const Home_000 = ({className = '', objInView = {name: ''}}: typeLocal) => {

    const [states, setStates] = useState<any>({
        navs: [],
        variants: {
            hidden: {opacity: 0, bottom: '-100px'},
            visible: {
                opacity: 1,
                bottom: '30px',
                transition: {
                    delay: 1,
                    type: 'spring',
                    bounce: 0.35
                }
            }
        }
    });

    useEffect(() => {
        setStates({
            ...states,
            navs: [
                {text: 'Benefits', link: '#_005'},
                {text: 'Recent works', link: '#_006'},
                {text: 'Services', link: '#_007'},
                {text: 'Pricing', link: '#_008'},
                {text: 'FAQs', link: '#_009'},
                {text: 'Login', link: '#'}
            ]
        });
    }, []);
  
    return (
        <motion.div
            className="fixed z-[1] left-[50%] bottom-[30px] translate-x-[-50%] border-[1px] border-white w-[fit-content] m-auto p-[4px] rounded-[100vw] bg-black flex items-center text-white fill-white"
            initial="hidden"
            animate="visible"
            variants={states.variants}
        >
            <Link href="#_001">
                <Image className="w-[24px] h-[24px] box-content px-5 py-4 object-contain" src="/images/vectors/vector_008.png" width={0} height={0} sizes="100vw" alt=""/>
            </Link>
            {
                states.navs.map((nav: any, a: number) => 
                    <Link
                        key={a}
                        className={`
                            block font-familyA tracking-wide text-sm rounded-[40px] px-5 py-4 transitionA
                            ${nav.text === 'Login' ?
                                'bg-white/[.16] hover:bg-white/[.26]' :
                                nav.text === objInView.name ?
                                'bg-white text-black' :
                                'hover:bg-white hover:text-black'
                            }
                        `}
                        href={nav.link}>{nav.text}
                    </Link>)
            }
        </motion.div>
    );
}

export default Home_000;