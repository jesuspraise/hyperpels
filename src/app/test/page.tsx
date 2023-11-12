
'use client';

// import dynamic from "next/dynamic";
// const Animator = dynamic(
//   import("react-scroll-motion").then((it) => it.Animator),
//   { ssr: false }
// );

import {Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Test = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div>
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={Sticky()}>
                <span>Let me show you scroll animation</span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                <span style={{ fontSize: "40px" }}>Im FadeUpScrollOut</span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={FadeUp}>
                <span style={{ fontSize: "40px" }}>Im FadeUp</span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                <span style={{ fontSize: "40px" }}>
                    <Animator animation={MoveIn(-1000, 0)}>Hello Guys</Animator>
                    <Animator animation={MoveIn(1000, 0)}>Nice to meet you</Animator>
                    - Im Dante Chun -
                    <Animator animation={MoveOut(1000, 0)}>Good bye</Animator>
                    <Animator animation={MoveOut(-1000, 0)}>See you</Animator>
                </span>
                </div>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky())}>
                <span style={{ fontSize: "40px" }}>Done</span>
                <br/>
                <span style={{ fontSize: "30px" }}>
                    Theres FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                </span>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
        </div>
    )
}

export default Test;