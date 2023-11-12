
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const Home_002 = ({className = ''}: typeHomeA) => {

    const [states, setStates] = useState<any>({
        affils: []
    });

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
            ]
        });
    }, []);

    const sliderVariants: any = {
        initial: {
            x: 0
        },
        animate: {
            x: '-100%',
            transition: {
                ease: 'linear',
                repeat: Infinity,
                duration: 20
            }
        }
    };
    const motionDiv = <motion.div
                            className="flex justify-around items-center shrink-0 w-full"
                            initial="initial"
                            animate="animate"
                            variants={sliderVariants}
                        >
                            {
                                states.affils.map((affil: any, a: number) => {
                                    return (
                                        <div key={a} className="mx-3 transitionA hover:shadow-[0_30px_40px_#a88f83] hover:scale-[1.1]">
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
                        </motion.div>;
  
    return (
        <div className={`${className} relative whitespace-nowrap hide_scrollbar bg-black py-8 flex items-center overflow-hidden`}>
            {motionDiv}
            {motionDiv}
        </div>
    );
}

export default Home_002;