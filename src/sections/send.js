export default function Send() {
  const token = window.sessionStorage.getItem('token') || 'project_token';
  const secret = window.sessionStorage.getItem('secret') || 'project_secret';

  return (
    <div id="section-4">
      {/* <h2><T _str="Send content to Transifex" /></h2> */}
      <h2>Send content to Transifex</h2>

      {/* <p><T _str="Open the console in Glitch to identify all mapped strings and send to Transifex with the command:" /></p> */}
      <p>Open the console in Glitch to identify all mapped strings and send to Transifex with the command:</p>

      <code className="o-code">
        $ npx txjs-cli push src --token={token} --secret={secret}
      </code>
      {(token === 'project_token') &&
      <>
      {/* <p><UT _str="Make sure to replace <span className='o-pre'>&lt;PROJECT_TOKEN&gt;</span> and <span className='o-pre'>&lt;PROJECT_SECRET&gt;</span> with the token and secret you saved in the doc from step #4 at the start!" /></p> */}
      <p>Make sure to set <span className="o-pre">--token</span> and <span className="o-pre">--secret</span> with the token and secret you saved in the doc from step #1 at the start!</p>
      </>}

      {/* <p><T _str="When you are sure that you have correctly replaced the token and secret, press enter to execute the command." /></p> */}
      <p>When you are sure that you have correctly replaced the token and secret, press enter to execute the command.</p>

      {/* <p><T _str="You will soon see in your console how many phrases were detected in your code and sent to Transifex." /></p> */}
      <p>You will soon see in your console how many phrases were detected in your code and sent to Transifex.</p>

      <div className="o-highlight o-highlight--success">
        {/* <h3 className="o-highlight__color u-marginBottom-0_5x"><b><T _str="That&apos;s it! You&apos;re done with all setup &amp; coding!" /></b></h3> */}
        <h3 className="o-highlight__color u-marginBottom-0_5x"><b>That&apos;s it! You&apos;re done with all setup &amp; coding!</b></h3>

        {/* <p className="u-color-muted"><b><T _str="Now for the fun part of actual translations &amp; preview of your localized application!" /></p> */}
        <p className="u-color-muted">Now for the fun part of actual translations &amp; preview of your localized application!</p>
      </div>
    </div>
  );
}
