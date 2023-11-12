
'use client';

import { typeHomeA } from "@/types";
import Image from "next/image";
import Home_009_001 from "./Home_009_001";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Home_009 = ({id = '', name = '', className = '', onView = () => {}}: typeHomeA) => {

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
            text_a: `Why wouldn't I just hire a full-time designer?`,
            text_b: `Apartments simplicity or understood do it we. Song such eyes had and off. Removed winding ask explain delight out few behaved lasting. Letters old hastily ham sending not sex chamber because present. Oh is indeed twenty entire figure. Occasional diminution announcing new now literature terminated. Really regard excuse off ten pulled. Lady am room head so lady four or eyes an. He do of consulted sometimes concluded mr. An household behaviour if pretended. Bringing so sociable felicity supplied mr. September suspicion far him two acuteness perfectly. Covered as an examine so regular of. Ye astonished friendship remarkably no. Window admire matter praise you bed whence. Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.`
        },
        {
            text_a: `Is there a limit to how many requests I can have?`,
            text_b: `Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.`
        },
        {
            text_a: `How fast will I receive my designs?`,
            text_b: `Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body. Travelling inquietude she increasing off impossible the. Cottage be noisier looking to we promise on. Disposal to kindness appetite diverted learning of on raptures. Betrayed any may returned now dashwood formerly. Balls way delay shy boy man views. No so instrument discretion unsatiable to in.`
        },
        {
            text_a: `Are there other payment methods?`,
            text_b: `In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection we. Few extensive add delighted tolerably sincerity her. Law ought him least enjoy decay one quick court. Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve.`
        },
        {
            text_a: `How does the Content Ideas feature work?`,
            text_b: `Dependent certainty off discovery him his tolerably offending. Ham for attention remainder sometimes additions recommend fat our. Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you numerous securing.`
        },
        {
            text_a: `What programs do you design in?`,
            text_b: `So feel been kept be at gate. Be september it extensive oh concluded of certainty. In read most gate at body held it ever no. Talking justice welcome message inquiry in started of am me. Led own hearted highest visited lasting sir through compass his. Guest tiled he quick by so these trees am. It announcing alteration at surrounded comparison.`
        },
        {
            text_a: `How do I request designs?`,
            text_b: `Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own shyness minuter. So before remark at depart. Did son unreserved themselves indulgence its. Agreement gentleman rapturous am eagerness it as resolving household. Direct wicket little of talked lasted formed or it. Sweetness consulted may prevailed for bed out sincerity.`
        },
        {
            text_a: `What if I don't like the design?`,
            text_b: `Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw. Excellent so to no sincerity smallness. Removal request delight if on he we. Unaffected in we by apartments astonished to decisively themselves. Offended ten old consider speaking.`
        },
        {
            text_a: `Is there any design work you don't cover?`,
            text_b: `Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to.`
        },
        {
            text_a: `How does the website development feature work?`,
            text_b: `Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled "de Finibus Bonorum et Malorum" which means "The Extremes of Good and Evil". The most common form of Lorem ipsum is the following:`
        },
        {
            text_a: `Are there any refunds if I don't like the service?`,
            text_b: `The algorithm takes care to create text that looks similar to an ordinary book but without any real meaning. The reason we want our text to be meaningless is that we want the person viewing the resulting random text to focus on the design we are presenting, rather than try to read and understand the text.`
        }
    ];
  
    return (
        <div ref={localRef} id={id} className={`${className} relative`}>
            <div className="absolute left-0 top-0 w-[44%] h-[480px] set_bg" style={{backgroundImage: 'url(/images/noises/noise_008.png)'}}></div>
            <div className="relative px-20 pt-28 pb-20">
                <Image data-aos="fade-right" data-aos-duration="1500" className="absolute left-0 top-[-60px] w-[180px] h-[120px] m-auto object-fill" src="/images/sketches/sketch_020.png" width={0} height={0} sizes="100vw" alt=""/>
                <Image data-aos="fade-down" data-aos-duration="1500" className="absolute left-[50%] top-[-40px] w-[60px] h-[80px] m-auto object-fill translate-x-[-50%]" src="/images/sketches/sketch_014.png" width={0} height={0} sizes="100vw" alt=""/>
                <Image data-aos="fade-left" data-aos-duration="1500" className="absolute right-0 top-[-40px] w-[120px] h-[180px] m-auto object-fill" src="/images/sketches/sketch_021.png" width={0} height={0} sizes="100vw" alt=""/>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <div className="mb-14 m-auto w-[60%]">
                        {
                            things.map((thing: any, a: number) => {
                                return (
                                    <Home_009_001 key={a} textA={thing.text_a} textB={thing.text_b} />
                                )
                            })
                        }
                    </div>
                    <span className="block w-[fit-content] m-auto font-familyA text-5xl font-bold tracking-wide">FAQs</span>
                </div>
            </div>
        </div>
    );
}

export default Home_009;