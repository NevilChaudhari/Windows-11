import "./startMenu.css"
import { assets } from "../../../assets/assets.js";

function StartMenu() {
    return (
        <div className="StartMenu">
            <div className="searchBar">
                <input type="text" placeholder="Seacrch for apps, settings, and documents" />
            </div>
            <div className="apps topSection">
                <div className="header">
                    <span>Pinned</span>
                    <div className="allApps">All <img src={assets.moreOptionsIcon} alt="" className="moreOptions"/></div>
                </div>
                <div className="programs">
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="program">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                </div>
            </div>
            <div className="apps bottomSection">
                <div className="header">
                    <span>Recommended</span>
                    <div className="allApps">More  <img src={assets.moreOptionsIcon} alt="" className="moreOptions"/></div>
                </div>
                <div className="softwares">
                    <div className="software">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="software">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="software">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="software">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="software">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                    <div className="software">
                        <img src={assets.chromeIcon} alt="" className="programImg"/>
                        <span>Chrome</span>
                    </div>
                </div>
            </div>
            <div className="accountSection">
                <div className="account">
                    <img src={assets.user} alt="" />
                    <span>User 1</span>
                </div>
                <div className="powerOptions">
                    <img src={assets.powerIcon} alt=""/>
                </div>
            </div>
        </div >
    )
}

export default StartMenu