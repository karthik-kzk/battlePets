import logo from './logo.svg';
import './App.css';
const axios = require('axios');

function App() {
  async function onClick(){
  // console.log("test")
  try{
    for(let i=0;i<1000;i++){
    const response =  await axios.post(
        'https://pilotapi.minvarisai.com/auth/token-booking',
        {
          "org_id": "16578910737",
          "branch_id": "165789121219",
          "counter_catid": 436,
          "cus_name": "test",
          "cus_phone": "+917200159799",
          "alert_msg_type": ""
        },
        {
          headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1RGF0YSI6eyJ1SWQiOiIxNjU3ODkxMjEyMTkiLCJ1TmFtZSI6ImJyYW5jaEBjdXN0b20uY29tIiwidVR5cGUiOiJCUkFOQ0giLCJvcmdJZCI6IjE2NTc4OTEwNzM3In0sImlhdCI6MTY2NzI5MjQxNH0.cdKF9GOxlN7gSrC73Fv1SjoJeXOcaOoWAMnAlm1tems` }
        }
      ) 
      console.log(response.data, i)   
    }
    
  }catch(error){
console.log(error)
  }
  
    // .then(function (response) {
    //   // handle success
    //   console.log(response);
    // }).catch(function (error) {
    //   // handle error
    //   console.log(error);
    // });
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <button onClick={()=>onClick()}>TEST</button>
    </div>
  );
}

export default App;
