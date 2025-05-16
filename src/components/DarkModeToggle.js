import React,{useState, useEffect} from "react";

function DarkModeToggle() {
    const [darkMode, setdarkMode] = useState(false);

    useEffect(() => {
        document.body.className= darkMode? 'bg-dark text-white':'bg-light text-dark';
    }, [darkMode]);
    return (
        <div className="text-end p-2">
            <button
                className="btn btn-outline-secondary"
                onClick={() => setdarkMode(!darkMode)}
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}

export default DarkModeToggle;