export default function Map() {
  return (
    <div id="section-3">
      {/* <h2><T _str="Map your content for localization" /></h2> */}
      <h2>Map your content for localization</h2>

      {/* <p><T _str="Now the final step to mark your strings and send to Transifex over the air (OTA) for translation!" /></p> */}
      <p>Now the final step to mark your strings and send to Transifex over the air (OTA) for translation!</p>

      {/* <p><UT _str="Now open your <span className='o-pre'>home.jsx</span> file and import at the top:" /></p> */}
      <p>Now open your <span className="o-pre">App.js</span> file and import at the top:</p>
      <code className="o-code">{`
        import { T, LanguagePicker } from '@transifex/react';
      `}</code>

      {/* <p><T _str="And now you'll need to mark all strings for translation. Do that by simply commenting all &lt;p&gt; tags and uncommenting the comment right above them"/></p> */}
      <p>And now you&apos;ll need to mark all strings for translation. Do that by simply commenting all &lt;p&gt; tags and uncommenting the commented code, right above each one.</p>

      {/* <p><T _str="You can find more details about the syntax in the code 🙂" /></p> */}
      <p>You can find more details about the syntax in the code 🙂</p>

      {/* <p><T _str="At the bottom of the page you&apos;ll see a commented part containing &lt;LanguagePicker/&gt;." /></p> */}
      <p>At the bottom of the page you&apos;ll see a commented part containing <span className="o-pre">&lt;LanguagePicker /&gt;</span>.</p>

      {/* <p><T _str="You can proceed and uncomment this, to get a language picker with the languages you have set in your Transifex project, on step #2!" /></p> */}
      <p>You can proceed and uncomment this, to get a language picker with the languages you have set in your Transifex project, on step #1!</p>

      <div className="o-highlight o-highlight--success">
        {/* <h3 className="o-highlight__color u-marginBottom-0_5x"><b><T _str="Now you're all set to send your content for translation in Transifex!" /></b></h3> */}
        <h3 className="o-highlight__color u-marginBottom-0_5x"><b>Now you're all set to send your content for translation in Transifex!</b></h3>
      </div>
    </div>
  );
}
