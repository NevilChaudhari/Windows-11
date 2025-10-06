function Portfolio() {
    return (
        <div className="browser-app" style={{ width: '100%', height: '100%', marginTop: '8px', overflow: "hidden" }}>
            <iframe
                src="https://nevilchaudhari.github.io/portfolio/"
                title="Browser Window"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    );
}

export default Portfolio;