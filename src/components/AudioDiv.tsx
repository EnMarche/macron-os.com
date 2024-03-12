import * as React from "react";

export const AudioDiv = (
    {
        children,
        audioPath
    }: {
        children: React.ReactNode,
        audioPath: string
    }
) => {
    const audioRef = React.useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio(audioPath) : undefined
    );


    React.useEffect(() => {

        const handleScroll = () => {
            const audio = audioRef.current;
            if (audio) {
                console.log("coucou");
                const boundingBox = audio.getBoundingClientRect();
                const isInViewport = (
                    boundingBox.top >= 0 &&
                    boundingBox.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );

                if (isInViewport) {
                    audio.play();
                } else {
                    audio.pause();
                }
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
        <>
            {children}
        </>
    );
}