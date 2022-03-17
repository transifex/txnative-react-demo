import { useState } from 'react';
import Setup from './sections/setup';
import Install from './sections/install';
import Map from './sections/map';
import Send from './sections/send';
import Translate from './sections/translate';

export default function App() {
  const SECTIONS = [
    {
      text: 'Setup Project in Transifex',
      component: <Setup />,
    },
    {
      text: 'Install React Native in your code',
      component: <Install />,
    },
    {
      text: 'Send content to Transifex',
      component: <Send />,
    },
    {
      text: 'Map your content for localization',
      component: <Map />,
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

          <p className="u-paddingVertical-0_5x">
            {/* <T _str="Welcome to the Transifex Native React demo. This page will be your testbench and tutorial with Transifex Native." /> */}
            Welcome to the Transifex Native React demo. This page will be your testbench and tutorial with Transifex Native.
          </p>
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
                  className="o-link u-cursor-pointer">{entry.text}</li>
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
