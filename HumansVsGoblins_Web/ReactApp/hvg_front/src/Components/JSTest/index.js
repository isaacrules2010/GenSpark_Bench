import React from 'react'
import { Helmet } from "react-helmet";
import './style.css';

const Test = () => {

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = './script.js';
    //     script.async = true;
    //     document.body.appendChild(script);
    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, []);

    return (
        <>
            <Helmet>
                <script type='text/javascript' src='/src/Components/JSTest/testScript.js'></script>
            </Helmet>
            
            <canvas id='canvas1'/>
            <div className='controls'>
                <label htmlFor="animations1">Choose Animation</label>
                <select id="animations1" name="animations1">
                    <option value="idle">Idle</option>
                    <option value="jump">Jump</option>
                    <option value="fall">Fall</option>
                    <option value="run">Run</option>
                    <option value="dizzy">Dizzy</option>
                    <option value="sit">Sit</option>
                    <option value="roll">Roll</option>
                    <option value="bite">Bite</option>
                    <option value="ko">KO</option>
                    <option value="getHit">Get Hit</option>
                </select>
            </div>
        </>
    )
}

export default Test