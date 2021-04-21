import React from 'react';
import '../../../styles/Top.css';
import { HouseFill } from 'react-bootstrap-icons';

function Top() {
    return (
        <div className="header">
            
            <button className="homeButton">
                <HouseFill size={20} color="black"></HouseFill>
            </button>
        </div>
    );
}
export default Top;