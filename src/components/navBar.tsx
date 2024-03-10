import { useState, useEffect, useRef } from "react";

export default function NavBar() {
    const [selected, setSelected] = useState<string>("home");
    const landingRef = useRef<HTMLDivElement>(null);
    const projectsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const landingElement = landingRef.current;
            const projectsContainerElement = projectsContainerRef.current;

            if (landingElement && projectsContainerElement) {
                const landingHeight = landingElement.offsetHeight;
                const projectsContainerHeight =
                    projectsContainerElement.offsetHeight;
                const scrollY = window.scrollY;

                if (scrollY < landingHeight) {
                    setSelected("home");
                } else if (
                    scrollY >= landingHeight &&
                    scrollY < landingHeight + projectsContainerHeight
                ) {
                    setSelected("projects");
                } else {
                    setSelected("blog");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navBar">
            <div className="navLinksContainer">
                <a href="#" className={selected === "home" ? "selected" : "navLink"}>
                    Home
                </a>
                <a
                    href="#"
                    className={selected === "projects" ? "selected" : "navLink"}
                >
                    Projects
                </a>
                <a href="#" className={selected === "blog" ? "selected" : "navLink"}>
                    Blog
                </a>
            </div>
            <div className="centInfo"></div>
        </div>
    );
}
