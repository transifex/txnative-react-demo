export default function Setup() {
  const token = window.sessionStorage.getItem('token') || 'project_token';

  return (
    <div id="section-2">
      {/* <h2><T _str="Install React Native in your code" /></h2> */}
      <h2>Install React Native in your code</h2>

      <p>Let's jump in the code in here now!</p>
      <p>Open the console in here to install the Transifex Native libraries:</p>

      <code className="o-code">
        npm install @transifex/native @transifex/react @transifex/cli --save
      </code>

      <p>Now you're ready to use the library in your code 😊</p>
      <p>Edit the code of your <span className="o-pre">App.js</span> and import at the top:</p>
      <code className="o-code"><pre>{`
import { tx } from '@transifex/native';
tx.init({
  // Public project token, defaults to empty string
  token: '${token}',
});`}</pre></code>
      {/* <p><UT _str="Make sure to replace <span className='o-pre'>project_token</span> with the token you saved in the doc from step #4 above!" /></p> */}
      <p>Make sure to set <span className="o-pre">token</span> with the token you saved in the doc from step #1 above!</p>

      <div className="o-highlight o-highlight--success">
        {/* <h3 className="o-highlight__color u-marginBottom-0_5x"><T _str="🎉 Your React app can now &quot;talk&quot; to your Transifex Native project!" /></h3> */}
        <h3 className="o-highlight__color u-marginBottom-0_5x">🎉 Your React app can now &quot;talk&quot; to your Transifex Native project!</h3>
      </div>
    </div>
  );
}
