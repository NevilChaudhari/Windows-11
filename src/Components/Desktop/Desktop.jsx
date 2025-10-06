import "./Desktop.css"
import React, { useState } from 'react';
import { assets } from "../../assets/assets.js";
import Window from "../Softwares/Window.jsx";
import StartMenu from "../Softwares/StartMenu/startMenu.jsx";
import OptionsMenu from "../Softwares/OptionsMenu/OptionsMenu.jsx";
import DesktopIcon from "../Widget/DesktopIcon.jsx";

function Desktop() {
    const [openWindows, setOpenWindows] = useState({
        Windows: false,
        OptionsMenu: false,
        Settings: false,
        Chrome: false,
        Spotify: false,
        FileExplorer: false,
        Portfolio: false,
    });

    const [isMinimized, setIsMinimized] = useState({
        Windows: false,
        OptionsMenu: false,
        Settings: false,
        Chrome: false,
        Spotify: false,
        FileExplorer: false,
        Portfolio: false,
    });

    function activateStartMenu() {
        setOpenWindows(prev => ({
            ...prev,
            Windows: !prev.Windows,
        }));
        console.log("Opened " + !openWindows.Windows);
    }

    function activateOptionsMenu() {
        setOpenWindows(prev => ({
            ...prev,
            OptionsMenu: !prev.OptionsMenu,
        }));
        console.log("Opened " + !openWindows.OptionsMenu);
    }

    function activate(name) {
        const isActive = openWindows[name];

        if (!isActive) {
            setOpenWindows(prev => ({
                ...prev,
                [name]: true,
            }));
            console.log("Opened " + name);

        } else {
            setIsMinimized(prev => {
                const newMinimized = !prev[name];
                console.log(newMinimized ? "Minimized " + name : "Maximized " + name);
                return {
                    ...prev,
                    [name]: newMinimized
                };
            });
        }
    }



    function deactivate(name) {
        const isActive = openWindows[name];

        if (isActive) {
            setOpenWindows(prev => ({
                ...prev,
                [name]: false,
            }));
            console.log("Closed " + name);
        }
    }

    function closeWindowsMenu() {
        setOpenWindows(prev => ({
            ...prev,
            Windows: false,
            OptionsMenu: false,
        }));
    }

    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (name) => {
        setSelectedIcon(selectedIcon === name ? null : name);
        console.log({ name } + "is selected");
    };

    const handleIconOffClick = () => {
        setSelectedIcon(null);
        console.log("is not selected");
    };
    return (
        <>
            <div className="Desktop" onClick={() => {
                if (openWindows.Windows || openWindows.OptionsMenu) {
                    closeWindowsMenu();
                }
                if (selectedIcon) {
                    handleIconOffClick();
                }
            }}>
                <div className="desktopicons">
                    <DesktopIcon icon={assets.spotifyIcon} name={"Spotify"} onCLick={() => handleIconClick('Spotify')} isSelected={selectedIcon === 'Spotify'} onDoubleClick={() => activate("Spotify")} />
                    <DesktopIcon icon={assets.user} name={"Portfolio"} onCLick={() => handleIconClick('Portfolio')} isSelected={selectedIcon === 'Portfolio'} onDoubleClick={() => activate("Portfolio")} />
                </div>


                <div className="Taskbar" onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <div className={`icon ${openWindows.Windows ? "startMenuActive" : ""}`} onClick={() => activateStartMenu()}>
                        <img src={assets.logo} alt="" className="iconImg" />
                    </div>
                    <div className={`icon  ${openWindows.Settings && isMinimized.Settings ? "minimizedIcon" : ""} ${openWindows.Settings && !isMinimized.Settings ? "active" : ""}`} onClick={() => activate("Settings")}>
                        <img src={assets.settingsIcon} alt="" className="iconImg" />
                    </div>
                    <div className={`icon  ${openWindows.Chrome && isMinimized.Chrome ? "minimizedIcon" : ""} ${openWindows.Chrome && !isMinimized.Chrome ? "active" : ""}`} onClick={() => activate("Chrome")}>
                        <img src={assets.chromeIcon} alt="" className="iconImg" />
                    </div>
                    <div className={`icon  ${openWindows.Spotify && isMinimized.Spotify ? "minimizedIcon" : ""} ${openWindows.Spotify && !isMinimized.Spotify ? "active" : ""}`} onClick={() => activate("Spotify")}>
                        <img src={assets.spotifyIcon} alt="" className="iconImg" />
                    </div>
                    <div className={`icon ${openWindows.FileExplorer && isMinimized.FileExplorer ? "minimizedIcon" : ""} ${openWindows.FileExplorer && !isMinimized.FileExplorer ? "active" : ""}`} onClick={() => activate("FileExplorer")}>
                        <img src={assets.fileExplorerIcon} alt="" className="iconImg" />
                    </div>
                    <div className={`icon ${openWindows.Portfolio && isMinimized.Portfolio ? "minimizedIcon" : ""} ${openWindows.Portfolio && !isMinimized.Portfolio ? "active" : ""}`} onClick={() => activate("Portfolio")}>
                        <img src={assets.user} alt="" className="iconImg" />
                    </div>

                    <div className="rightSide">
                        <div className="IconsTab moreOptions">
                            <img src={assets.moreOptionsIcon} alt="" className="systemIcon" />
                        </div>
                        <div className={`IconsTab ${openWindows.OptionsMenu ? "startMenuActive" : ""}`} onClick={() => activateOptionsMenu()}>
                            <img src={assets.wifiIcon} alt="" className="systemIcon" />
                            <img src={assets.volumeFullIcon} alt="" className="systemIcon" />
                        </div>
                        <div className="TimeTab">
                            <div className="time">7:16PM</div>
                            <div className="time">9/27/2025</div>
                        </div>
                        <div className="ShowDesktop"> </div>
                    </div>
                </div>
                {openWindows.FileExplorer && (
                    <Window icon={assets.fileExplorerIcon} title="FileExplorer" onClose={() => deactivate("FileExplorer")} isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
                )}

                {openWindows.Chrome && (
                    <Window icon={assets.chromeIcon} title="Chrome" onClose={() => deactivate("Chrome")} isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
                )}

                {openWindows.Spotify && (
                    <Window icon={assets.spotifyIcon} title="Spotify" onClose={() => deactivate("Spotify")} isMinimized={isMinimized} setIsMinimized={setIsMinimized} url={"https://spotifyclonebynevil.netlify.app/"}/>
                )}

                {openWindows.Settings && (
                    <Window icon={assets.settingsIcon} title="Settings" onClose={() => deactivate("Settings")} isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
                )}

                {openWindows.Portfolio && (
                    <Window icon={assets.user} title="Portfolio" onClose={() => deactivate("Portfolio")} isMinimized={isMinimized} setIsMinimized={setIsMinimized} url={"https://nevilchaudhari.github.io/portfolio/"}/>
                )}

                {openWindows.Windows && (
                    <StartMenu />
                )}

                {openWindows.OptionsMenu && (
                    <OptionsMenu onClick={() => activate("Settings")}/>
                )}
            </div>
        </>
    );
}

export default Desktop;