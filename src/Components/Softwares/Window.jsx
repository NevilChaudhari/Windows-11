import "./Window.css"
import React, { useState, useRef } from "react";
import { assets } from "../../assets/assets.js";
import Chrome from "./Chrome/Chrome.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";

function Window({ icon, title, onClose, isMinimized, setIsMinimized, volume, url}) {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({ width: 1280, height: 720 });
    const [ismaximize, setMaximize] = useState(false);
    // const [isminimize, setMinimize] = useState(false);

    const windowRef = useRef(null);
    const posRef = useRef({ x: 0, y: 0 });
    const sizeRef = useRef({ width: 0, height: 0 });
    const draggingRef = useRef(false);
    const resizingRef = useRef(false);

    function onMouseDown(e) {
        draggingRef.current = true;
        posRef.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };

        // To capture mouse events outside the window while dragging
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(e) {
        if (!draggingRef.current) return;
        setPosition({
            x: e.clientX - posRef.current.x,
            y: e.clientY - posRef.current.y,
        });
    }

    function onMouseUp() {
        draggingRef.current = false;
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    }

    // Resize
    function onMouseDownResize(e) {
        e.stopPropagation(); // Prevent dragging while resizing
        resizingRef.current = true;
        sizeRef.current = {
            width,
            height,
            mouseX: e.clientX,
            mouseY: e.clientY,
        };
        window.addEventListener("mousemove", onMouseMoveResize);
        window.addEventListener("mouseup", onMouseUpResize);
    }

    function onMouseMoveResize(e) {
        if (!resizingRef.current) return;
        const newWidth = sizeRef.current.width + (e.clientX - sizeRef.current.mouseX);
        const newHeight = sizeRef.current.height + (e.clientY - sizeRef.current.mouseY);
        setSize({
            width: Math.max(newWidth, 200), // minimum width
            height: Math.max(newHeight, 150), // minimum height
        });
        if (size.width == window.innerWidth && size.height == window.innerHeight - 50) {
            setMaximize(true);
        } else {
            setMaximize(false);
        }
    }

    function onMouseUpResize() {
        resizingRef.current = false;
        window.removeEventListener("mousemove", onMouseMoveResize);
        window.removeEventListener("mouseup", onMouseUpResize);
    }

    const { width, height } = size;

    function maximize() {
        if (ismaximize) {
            setSize({
                width: 1280,
                height: 720,
            });
        } else {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight - 50,
            });
            setPosition({
                x: 0,
                y: 0,
            });
        }
        setMaximize(!ismaximize);
    }

    function minimize() {
        setIsMinimized(prev => ({
            ...prev,
            [title]: !prev[title]
        }));
    }

    return (
        <div ref={windowRef}
            className={`window ${isMinimized[title] ? "minimize" : ""}`}
            style={{ left: position.x, top: position.y, width: width, height: height, userSelect: "none", minHeight: 600, maxHeight: window.innerHeight - 50, minWidth: 1400 }}>
            <div className="headbar" onMouseDown={onMouseDown}>
                <div className="title">
                    <div className="windowIcon">
                        <img src={icon} alt="Icon" className="windowIconImg" onClick={()=>{window.open(url, '_blank', 'noopener,noreferrer')}}/>
                    </div>
                    <span>{title}</span>
                </div>
                <div className="windowControllBar">
                    <div className="minimize windowControll" onClick={() => minimize()}>
                        <img src={assets.minimizeIcon} alt="" className="systemIcon" />
                    </div>
                    <div className="maximize windowControll" onClick={() => maximize()}>
                        <img src={assets.maximizeIcon} alt="" className="systemIcon" />
                    </div>
                    <div className="close windowControll" onClick={onClose}>
                        <img src={assets.closeIcon} alt="" className="systemIcon" />
                    </div>
                </div>
            </div>

            <div className="content">
                <iframe src={url} width="100%" height="100%" title="Web View" frameBorder="0" />
            </div>

            <div className="resize-handle" onMouseDown={onMouseDownResize} />

        </div >
    );
}

export default Window