import React, { useState } from "react";


const defaultIcon = (<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g filter="url(#filter0_d_0_14)">
<rect x="2" y="2" width="50" height="50" rx="25" fill="white" shape-rendering="crispEdges"/>
<path d="M21.9361 19.3349C24.2055 19.3349 26.4707 20.8566 26.953 22.6274C27.3087 20.9414 29.6277 19.3517 31.9635 19.3517C33.7806 19.3517 35.6076 20.3132 36.5291 22.9394C38.7944 29.3965 27.7424 35.5968 26.9526 36.364C26.1629 35.3984 15.1116 29.5075 17.3782 22.9431C18.285 20.317 20.1119 19.3345 21.9361 19.3349ZM21.9361 18.625H21.9354C19.5405 18.625 17.6541 20.1089 16.7607 22.6956C14.7264 28.5869 22.1129 33.7502 25.2663 35.9541C25.7741 36.3092 26.3495 36.7116 26.4627 36.8369L26.9034 37.375L27.3941 36.8905C27.4756 36.814 27.8527 36.5564 28.2176 36.3074C31.2416 34.2419 39.2741 28.7545 37.1453 22.6881C36.2434 20.1164 34.3546 18.6415 31.9639 18.6415C29.945 18.6415 27.948 19.6776 26.9336 21.0992C25.8855 19.6562 23.9138 18.6254 21.9361 18.625V18.625Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_0_14" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_14"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_14" result="shape"/>
</filter>
</defs>
</svg>);

const clickedIcon = (<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g filter="url(#filter0_d_0_62)">
<rect x="1.99994" y="2" width="50" height="50" rx="25" fill="#FFD6D6" shape-rendering="crispEdges"/>
<path d="M21.936 19.3349C24.2055 19.3349 26.4707 20.8566 26.9529 22.6274C27.3086 20.9414 29.6276 19.3517 31.9635 19.3517C33.7806 19.3517 35.6075 20.3132 36.5291 22.9394C38.7943 29.3965 27.7423 35.5968 26.9526 36.364C26.1628 35.3984 15.1115 29.5075 17.3781 22.9431C18.2849 20.317 20.1119 19.3345 21.936 19.3349ZM21.936 18.625H21.9353C19.5404 18.625 17.6541 20.1089 16.7606 22.6956C14.7263 28.5869 22.1128 33.7502 25.2662 35.9541C25.7741 36.3092 26.3494 36.7116 26.4626 36.8369L26.9033 37.375L27.394 36.8905C27.4755 36.814 27.8527 36.5564 28.2175 36.3074C31.2415 34.2419 39.274 28.7545 37.1452 22.6881C36.2433 20.1164 34.3545 18.6415 31.9638 18.6415C29.945 18.6415 27.9479 19.6776 26.9336 21.0992C25.8855 19.6562 23.9137 18.6254 21.936 18.625Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_0_62" x="-6.10352e-05" y="0" width="54.0001" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_62"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_62" result="shape"/>
</filter>
</defs>
</svg>)

function HeartButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    return(
      <div className="icon" onClick={handleClick}>
        {isActive ? clickedIcon : defaultIcon}
    </div>
    )
}


export default HeartButton;