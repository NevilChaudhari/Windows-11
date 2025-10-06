import "./OptionsMenu.css"
import { assets } from '../../../assets/assets.js'
import React, { useState, useRef } from 'react';

const OptionTab = ({ imgSrc, name, isDouble }) => {
    if (isDouble) {
        return (
            <div className="systemOption">
                <div className="optionIcons">
                    <div className="left">
                        <img src={imgSrc} alt="" className="optionImage" />
                    </div>
                    <div className="right">
                        <img src={assets.moreOptionsIcon} alt="" className="optionImage" />
                    </div>
                </div>
                <span>{name}</span>
            </div>
        )
    } else {
        return (
            <div className="systemOption">
                <div className="optionIcons">
                    <img src={imgSrc} alt="" className="optionImage" />
                </div>
                <span>{name}</span>
            </div>
        )
    }
}

function OptionsMenu({onClick}) {

    return (
        <div className="OptionsMenu">
            <div className="systemOtions">
                <OptionTab imgSrc={assets.wifiIcon} name={"Wifi"} isDouble={true} />
                <OptionTab imgSrc={assets.bluetoothIcon} name={"Bluetooth"} isDouble={true} />
                <OptionTab imgSrc={assets.hotspotIcon} name={"Hotspot"} isDouble={false} />
                <OptionTab imgSrc={assets.aeroplaneIcon} name={"Aeroplane Mode"} isDouble={false} />
                <OptionTab imgSrc={assets.accessibilityIcon} name={"Accessibility"} isDouble={false} />
                <OptionTab imgSrc={assets.energysaverIcon} name={"Energy Saver"} isDouble={false} />
            </div>
            <div className="rangeOptions">
                <div className="brightnessIcon">
                    <img src={assets.brightnessIcon} alt="" className="optionImage" />
                    <input type="range" min="10" max="100" />
                </div>
                <div className="volumeIcon">
                    <img src={assets.volumeFullIcon} alt="" className="optionImage" />
                    <input type="range" min="0" max="1" step="0.01" />
                </div>
            </div>
            <div className="footer">
                <img src={assets.settingsIcon} alt="" className="optionImage" onClick={onClick}/>
            </div>
        </div>
    )
}

export default OptionsMenu;