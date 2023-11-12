
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";

const Home_007 = ({className = ''}: typeHomeA) => {

    const things = [
        'Websites', 'Slide decks', 'Trade show banners', 'Mobile apps', 'Stage Backdrops', 'Email graphics',
        'Logos & branding', 'Infographics', 'Resumes', 'Design systems', 'Brochures', 'Business cards',
        'SAAS', 'Signage', 'Packaging', 'Social media graphics', 'Brand guides', 'Blog graphics',
        'Publications', 'Event graphics', 'Digital ads', 'Pitch decks', 'Billboards', 'Brochures'
    ];
  
    return (
        <div className={`${className} relative`}>
            <div className="absolute left-0 top-0 w-[44%] h-[480px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_006.png)'}}></div>
            <div className="relative px-20 pt-28 pb-20">
                <Image data-aos="fade-down" data-aos-duration="1500" className="absolute left-[50%] top-[-90px] w-[10px] h-[150px] m-auto object-contain translate-x-[-50%]" src="/images/sketches/sketch_009.png" width={0} height={0} sizes="100vw" alt=""/>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <div className="mb-32 text-center font-familyA font-semibold leading-tight tracking-wide text-5xl">
                        <span>Apps, websites, logos & more.</span>
                    </div>
                    <div className="relative flex flex-wrap justify-between p-12 pt-12 border-[6px] border-colPinkB font-bold text-md">
                        <Image data-aos="fade-right" data-aos-duration="1500" className="absolute left-[-50px] top-[-50px] w-[100px] h-[100px] object-cover" src="/images/sketches/sketch_012.png" width={0} height={0} sizes="100vw" alt=""/>
                        {
                            things.map((thing: any, a: number) => {
                                return (
                                    <div key={a} className="w-[calc(33%-30px)] pb-4 mb-6 border-b-[6px] border-colPinkB">{thing}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_007;