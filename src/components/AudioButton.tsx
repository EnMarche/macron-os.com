import React, { useState, useEffect, useRef } from 'react';
import type IButton from '../types/button.types';

interface IAudioButton extends IButton {
    audioPath: string
}

const AudioButton = (props: IAudioButton) => {
    const audio = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio(props.audioPath) : undefined
    );


    const toggleAudio = (event) => {
        event.preventDefault();
        audio.current?.play();
        props.onClick();
    };

    return (
        <div>
            <button className={props.twlClasses} onClick={toggleAudio} type='button'>
                {props.label}
            </button>
        </div>
    );
};

export default AudioButton;
