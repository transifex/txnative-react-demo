import { useState } from 'react';
import Setup from './sections/setup';
import Install from './sections/install';
import Map from './sections/map';
import Send from './sections/send';
import Translate from './sections/translate';

export default function App() {
  const SECTIONS = [
    {
      // text: <T _str="Setup Project in Transifex" />,
      text: 'Setup Project in Transifex',
      component: <Setup />,
    },
    {
      text: 'Install React Native in your code',
      component: <Install />,
    },
    {
      text: 'Map your content for localization',
      component: <Map />,
    },
    {
      text: 'Send content to Transifex',
      component: <Send />,
    },
    {
      text: 'Translate & view your app localized!',
      component: <Translate />,
    }
  ]

  const [section, setSection] = useState(0);
  return (
    <>
      <div className="o-layout">
        <div className="o-layout__content">
          {/* <T> is the React Native mapping component that you'll be wrapping all your translatable content with.*/}

          <h1>
            {/* <T _str="Transifex Native: React demo" /> */}
            Transifex Native: React demo
          </h1>

          <h3 className="u-paddingBottom-0_5x">
            {/* <T _str="Welcome to the Transifex Native React demo. This page will be your testbench and tutorial with Transifex Native." /> */}
            Welcome to the Transifex Native React demo. This page will be your testbench and tutorial with Transifex Native.
          </h3>
          <hr/>
        </div>
      </div>
      <div className="o-layout">
        <div className="o-layout__sidebar">
          <ol className="u-color-link">
            {SECTIONS.map((entry, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSection(index)}
                  className={(index === section) ? 'u-backgroundColor-highlight' : 'u-cursor-pointer'}>
                    <span className={(index === section) ? 'o-link is-active' : 'o-link'}>
                      {entry.text}
                    </span>
                  </li>
              );
            })}
          </ol>
        </div>
        <div className="o-layout__content">
          {SECTIONS[section].component}
        </div>
      </div>
      {/* <LanguagePicker /> */}
    </>
  );
}
