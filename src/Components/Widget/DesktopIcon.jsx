import './DesktopIcon.css';

function DesktopIcon({ name, icon, isSelected, onCLick, onDoubleClick}) {
    return (
        <div className={`desktopIcon ${isSelected ? "selectedDesktopIcon" : ""}`} onClick={onCLick} onDoubleClick={onDoubleClick}>
            <img src={icon} alt={name} className="desktopIcon-image" />
            <p className="desktopIcon-name">{name}</p>
        </div>
    )
}

export default DesktopIcon;