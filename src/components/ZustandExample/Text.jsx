import React from 'react';
import create from "zustand";

const useStore = create((set) => ({
    fontSize: 14,
    increaseFontSize: () => set((state) => ({fontSize: state.fontSize + 1})),
    trigger: false,
    toggleTrigger: () => set((state) => ({trigger: !state.trigger}), true)
}));

const FontLabel = () => {
    const {fontSize, increaseFontSize, fontSizeLabel, trigger, toggleTrigger} = useStore(
        (state) => ({
            fontSize: state.fontSize,
            increaseFontSize: state.increaseFontSize,
            fontSizeLabel: `${state.fontSize}px`,
            trigger: state.trigger,
            toggleTrigger: state.toggleTrigger
        }),
        (oldState, newState) => oldState.trigger === newState.trigger
    );

    return (
        <>
            <div style={{fontSize}}>Current font size: {fontSizeLabel}</div>
            <button onClick={increaseFontSize}>size up</button>
            <button onClick={toggleTrigger}>toggle {trigger.toString()}</button>
        </>
    )
}

const Text = () => {
    const {fontSize} = useStore((state) => state);
    return (
        <>
            <p style={{fontSize}}>This text will increase in size too.</p>
            {/*<button onClick={increaseFontSize}>size up</button>*/}
            <FontLabel/>
        </>
    );
};

export default Text;
