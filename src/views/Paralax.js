// ALWAYS IMPORT REACT
import React from 'react';

// CSS
import '../static/css/Paralax.css'

export default() => {
    return(
        <div>
            <div className="section">
                <div className="cont">
                    <div className="header">PARALAX</div>
                    <div className="main">
                        <div>(<span>with paralax animation</span>)</div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="thing">Vincent Salazar</div>
            </div>
            <div className="mainOne">
                <div className="cont">
                    <div className="header">On A Journey...</div>
                    <div className="main">.. into Web Development</div>
                </div>
            </div>
            <div className="wrapperTwo"></div>
            <div className="space"></div>
            <div className="wrapperThree"></div>
            <div className="section">
                <div className="cont">
                    <div className="header">LIONEL MESSI<br/><span>-put into context-</span></div>
                    <div className="main"><span>Money is not a motivating factor … My motivation comes from </span>doing<span> what I love. If I wasn’t paid to be a professional </span>Web Dev<span>, I would willingly </span>code<span> for nothing.</span></div>
                </div>
            </div>
            <div className="gta" id="animation">
                <div className="title">GTA V</div>
            </div>
            <div className="halo" id="animation">
                <div className="gameTitle">
                    <div className="title">HALO</div>
                </div>
            </div>
            <div className="gorillaz" id="animation">
                <div className="gameTitle">
                    <div className="title">GORILLAZ</div>
                </div>
            </div>
            <div className="dbz" id="animation">
                <div className="gameTitle">
                    <div className="title">DBZ</div>
                </div>
            </div>
            <div className="acu" id="animation">
                <div className="gameTitle">
                    <div className="title">ACU</div>
                </div>
            </div>
            <div className="section">
                <div className="cont">
                    <div className="header">Vincent Salazar</div>
                    <div className="main">
                        <div>(<span>portfolio coming soon</span>)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}