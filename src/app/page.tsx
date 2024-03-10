"use client";

import React, { useState } from "react";
import NavBar from "../components/navBar";
import BreathingAnim from "../components/breathingAnim";

export default function Home() {
    return (
        <main>
            <NavBar />
            <div id="landing">
                <BreathingAnim />
                <div className="introContainer">
                    Hey!
                    <br />
                    <div className="whoami">
                        I'm{" "}
                        <a href="https://github.com/crllect">
                            <strong>Crllect</strong>
                        </a>
                    </div>
                    <div className="funFact">(im 15 :o)</div>
                    <div className="bio">
                        I am an artist and wannabe programmer. <br />
                        Also, I need copious amounts of
                        <br />
                        caffeine to stay awake. <br />
                    </div>
                </div>
            </div>
            <div id="projectsContainer"></div>
        </main>
    );
}
