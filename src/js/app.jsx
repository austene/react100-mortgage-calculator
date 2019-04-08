import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
  }
  render() {
    return ( // todo: redo elements to correct syntax {}
      <div className='container'> {

        <form className='form-horizontal'>
          <div classNmae='form-group'>
            <h1>Mortgage Calculator</h1>
          </div>

          <div className='form-group'>
            <label htmlFor='balance'>Loan Balance</label>
            <div className='col-sm-10'>
              <input className='form-control' name='balance' type='number' placeholder='0' />
            </div>
          </div>

        </form>
      }
      </div>
    );
  }
}

/*
{<input name='balance' type='number'>Loan Balance</input>}
        {<input name='rate' type='number' step='0.01'>Interest Rate (%)</input>}
        {<select name='term'>
          {<option value='15'>15</option>}
          {<option value='30'>30</option>}
        </select>}
        {<button name='submit' type='button'>Caluculate </button>}
        {<div name='output' id='output'></div>}
*/