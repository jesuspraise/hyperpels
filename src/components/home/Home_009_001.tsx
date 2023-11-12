
'use client';

import Image from "next/image";
import { useState } from "react";

interface typeLocal {
    textA: string;
    textB: string;
}

const Home_009_001 = ({textA, textB}: typeLocal) => {

    const [states, setStates] = useState({
        show: false
    });
  
    return (
        <div className="border-b-[1.5px] border-black pb-8 mb-8 cursor-pointer" onClick={() => setStates({...states, show: !states.show})}>
            <div className="flex items-center justify-between">
                <span className="line-clamp-1 font-bold text-lg">{textA}</span>
                <Image className={`${states.show ? 'rotate-[180deg]' : ''} w-[16px] h-[16px] object-fill transitionA`} src="/images/vectors/vector_007.png" width={0} height={0} sizes="100vw" alt=""/>
            </div>
            {
                states.show &&
                <span className="block mt-4">{textB}</span>
            }
        </div>
    );
}

export default Home_009_001;