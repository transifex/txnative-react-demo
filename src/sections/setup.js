import { useState } from 'react';

export default function Setup() {
  const [token, setToken] = useState(window.sessionStorage.getItem('token'));
  const [secret, setSecret] = useState(window.sessionStorage.getItem('secret'));

  function handleToken(event) {
    setToken(event.target.value);
    window.sessionStorage.setItem('token', event.target.value);
  }

  function handleSecret(event) {
    setSecret(event.target.value);
    window.sessionStorage.setItem('secret', event.target.value);
  }

  return (
    <div id="section-1">
      {/* <h2><T _str="Setup Project in Transifex" /></h2> */}
      <h2>Setup Project in Transifex</h2>

      {/* <p><T _str="When you&apos;re ready we can start! These are the steps you&apos;ll need to follow:" /></p> */}
      <p>When you&apos;re ready we can start! These are the steps you&apos;ll need to follow:</p>

      <ol>
        <li>Create a new project at Transifex, choosing Native as project type</li>
        <li>Select <b>English(en)</b> as source language, and a language you speak as a target language.</li>
        <li>When you push &quot;Create project&quot;, then press the &quot;Generate Native Credentials&quot; button.</li>
        <li>At that step copy and paste the token and secret key that it&apos;s created!</li>
      </ol>
      <p>Here are some simple inputs to add your token and secret for your testing convenience:</p>
      <div className="u-display-flex u-paddingVertical-0_5x">
        <div className="u-width-50 u-paddingRight-1x">
          <label><b>Your token</b></label><br/>
          <input className="u-width-100" type="text" value={token} onChange={handleToken} />
        </div>
        <div className="u-width-50">
          <label><b>Your Secret</b></label><br/>
          <input className="u-width-100" type="text" value={secret} onChange={handleSecret} />
        </div>
      </div>
      <div className="o-highlight o-highlight--success">
        <h3 className="o-highlight__color u-marginBottom-0_5x">🎉 That&apos;s all the setup you'll need in Transifex</h3>
        <p className="u-color-muted">
          From now on your only visits in Transifex are for translations and language additions.
        </p>
      </div>
    </div>
  );
}
