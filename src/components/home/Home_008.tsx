
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ButtonA from "../widgets/button/ButtonA";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Home_008 = ({id = '', name = '', className = '', onView = () => {}}: typeHomeA) => {

    const localRef = useRef(null);
    const isInView = useInView(localRef);

    useEffect(() => {
        if(isInView){
            onView({
                name: name
            })
        }
    }, [isInView])

    const things: any = [
        {
            type: 'standard',
            prop_a: 'One request at a time. 7 days money back guarantee.',
            prop_b: '$499/m',
            includes: [
                {text: 'One request at a time', bolded: false},
                {text: 'Average 48 hour delivery', bolded: false},
                {text: 'Unlimited brands and users', bolded: false},
                {text: 'Brand guidelines', bolded: false},
                {text: 'Unlimited stock photos via Envato', bolded: false},
                {text: 'Enough support', bolded: false},
                {text: '7 day money back guarantee', bolded: false}
            ]
        },
        {
            type: 'pro',
            prop_a: 'Double the requests. 7 days money back guarantee.',
            prop_b: '$799/m',
            includes: [
                {text: 'Content Ideas', bolded: true},
                {text: 'Two requests at a time', bolded: true},
                {text: 'Average 48 hour delivery', bolded: false},
                {text: 'Unlimited brands and users', bolded: false},
                {text: 'Brand guidelines', bolded: false},
                {text: 'Unlimited stock photos via Envato', bolded: false},
                {text: 'Enough support', bolded: false},
                {text: '7 day money back guarantee', bolded: false}
            ]
        }
    ];
  
    return (
        <div ref={localRef} id={id} className={`${className} relative`}>
            <div className="absolute left-0 top-0 w-[44%] h-[480px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_007.png)'}}></div>
            <div className="relative bg-colPinkB px-20 pt-28 pb-32">
                <Image data-aos="fade-right" data-aos-duration="1500" className="absolute left-0 top-[-60px] w-[120px] h-[180px] m-auto object-fill" src="/images/sketches/sketch_013.png" width={0} height={0} sizes="100vw" alt=""/>
                <Image data-aos="fade-down" data-aos-duration="1500" className="absolute left-[50%] top-[-40px] w-[60px] h-[80px] m-auto object-fill translate-x-[-50%]" src="/images/sketches/sketch_014.png" width={0} height={0} sizes="100vw" alt=""/>
                <Image data-aos="fade-left" data-aos-duration="1500" className="absolute right-0 top-[-40px] w-[80px] h-[100px] m-auto object-fill" src="/images/sketches/sketch_015.png" width={0} height={0} sizes="100vw" alt=""/>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <div className="mb-14">
                        <div className="mb-6 text-center font-familyA font-semibold leading-tight tracking-wide text-5xl">
                            <span>Memberships levels</span>
                        </div>
                        <div className="mb-10 w-[60%] m-auto text-2xl text-center">
                            <span>{`Choose a plan that's right for you.`}</span>
                        </div>
                        <Image className="w-[350px] h-[60px] m-auto object-fill" src="/images/sketches/sketch_016.png" width={0} height={0} sizes="100vw" alt=""/>
                    </div>
                    <div className="">
                        <div className="relative flex">
                            <Image data-aos="fade-right" data-aos-duration="1500" className="absolute left-[80px] top-[-40px] w-[38px] h-[16px] m-auto object-fill" src="/images/sketches/sketch_017.png" width={0} height={0} sizes="100vw" alt=""/>
                            <span className="absolute left-[50px] top-[-15px] block w-[fit-content] uppercase text-smallest px-3 py-2 bg-colOrangeA text-white rounded-[4px]">most popular</span>
                            {
                                things.map((thing: any, a: number) => {
                                    return (
                                        <div key={a} className="w-[33%]">
                                            <div className="bg-white px-6 py-8 pt-20 set_bg w-[calc(100%-3px)] mr-[3px] mb-[3px]" style={{backgroundImage: 'url(/images/noises/noise_005.png'}}>
                                                <span className="mb-4 block font-familyA font-semibold leading-tight tracking-wide text-2xl capitalize">{thing.type}</span>
                                                <span className="mb-16 block text-sm h-[40px]">{thing.prop_a}</span>
                                                <span className="mb-2 block font-familyA font-semibold leading-tight tracking-wide text-3xl">{thing.prop_b}</span>
                                                <span className="mb-16 block text-smaller">Get discounts with special coupons</span>
                                                <div className="mb-6 m-auto">
                                                    <ButtonA className="!w-full">
                                                        Get started
                                                    </ButtonA>
                                                </div>
                                                <Link href="#" className="block font-black text-small w-[fit-content] m-auto border-b-[1px] border-dotted border-black">Book a call</Link>
                                            </div>
                                            <div className="bg-white px-6 py-10 pt-8 set_bg w-[calc(100%-3px)] mr-[3px] mb-[3px] h-[360px]" style={{backgroundImage: 'url(/images/noises/noise_005.png'}}>
                                                <span className="mb-6 block text-small font-bold">{`What's included:`}</span>
                                                <div className="pl-8">
                                                    {
                                                        thing.includes.map((include: any, b: number) => <span key={`${a}_${b}`} className={`mb-2 block text-small ${include.bolded ? 'font-bold' : ''}`}>{include.text}</span>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="bg-white w-[calc(33%+12px)] px-6 py-10 pt-20 set_bg" style={{backgroundImage: 'url(/images/noises/noise_005.png'}}>
                                <Image className="mb-6 w-[200px] h-[96px] m-auto object-fill" src="/images/sketches/sketch_018.png" width={0} height={0} sizes="100vw" alt=""/>
                                <span className="mb-4 block font-familyA font-semibold leading-tight tracking-wide text-lg">Book a call</span>
                                <span className="mb-4 block text-sm">Learn more about how Hyper Pels works and how it can help you.</span>
                                <Link href="#" className="block font-black text-small">Book a call</Link>
                                <hr className="mt-10 w-full h-[2px] bg-black"/>
                                <Image className="mb-6 w-[200px] h-[200px] m-auto object-fill" src="/images/sketches/sketch_019.png" width={0} height={0} sizes="100vw" alt=""/>
                                <span className="mb-4 block font-familyA font-semibold leading-tight tracking-wide text-lg">Refer a friend & earn</span>
                                <span className="mb-4 block text-sm">Earn 5% monthly recurring commissions for each referral.</span>
                                <Link href="#" className="block font-black text-small">Join now</Link>
                            </div>
                        </div>
                        <div className="bg-black text-white py-14">
                            <span className="block w-[fit-content] m-auto mb-4 bg-colYellowA text-black text-smallest font-semibold uppercase rounded-xl px-4 py-1">add-on</span>
                            <span className="block w-[fit-content] m-auto mb-4 font-familyA font-semibold leading-tight tracking-wide text-2xl">Website development</span>
                            <span className="block w-[fit-content] m-auto mb-4 text-sm">Get a high-end custom website. Requires a design subscription.</span>
                            <span className="block w-[fit-content] m-auto font-familyA font-semibold leading-tight tracking-wide text-2xl">$499/m</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_008;