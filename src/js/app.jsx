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
            <label htmlFor='balance' className='col-sm-2 control-label'>Loan Balance</label>
            <div className='col-sm-5'>
              <input type='number' className='form-control' name='balance' placeholder='0' />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='rate' className='col-sm-2 control-label'>Interest Rate (%)</label>
            <div className='col-sm-5'>
              <input type='number' className='form-control' name='rate' step='0.01' placeholder='0' />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='term' className='col-sm-2 control-label'>Loan Term (years)</label>
            <div className='col-sm-5'>
              <select className='form-control' name='term' >
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>

          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-5'>
              <button type='submit' className='btn btn-primary' name='submit'>Calculate</button>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='output' className='col-sm-2 control-label'>Mortgage Payment</label>
            <div className='col-sm-5'>
              <output type='number' className='form-control' name='output' />
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