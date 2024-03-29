import React, { useState } from 'react';
import useDarkSide from './useDarkSide';
import {DarkModeSwitch} from 'react-toggle-dark-mode';

function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true: false)

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    }

    return (
      <>
        <div>
          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
            sunColor='#ffc759'
            moonColor='#e8e9ed'
            className="mx-2"
          />
        </div>
      </>
    );
}   

export default Switcher;