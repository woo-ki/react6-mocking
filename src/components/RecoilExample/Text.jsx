import React from 'react';
import {fontSizeState} from "./store";
import {useRecoilState} from "recoil";

const Text = () => {
    const [fontSize] = useRecoilState(fontSizeState);
    return <p style={{fontSize}}>This text will increase in size too.</p>;
};

export default Text;
