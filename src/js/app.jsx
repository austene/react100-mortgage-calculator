import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      balance: '',
      rate: '',
      term: '',
      payment: ''
    };
    // console.log(this.state.payment);
      // this.handleClick = this.handleClick.bind(this);
    this.calculateButton = this.calculateButton.bind(this);

    this.updateBalance = this.updateBalance.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.updatePayment = this.updatePayment.bind(this);
  }
/*
  calculateButton(event) {
    console.log('hello');

    event.preventDefault();
    this.setState({ payment: event.target.value });
  }
*/

  calculateButton(event) {
    event.preventDefault();
    console.log('inside calculate');
    const b = this.state.balance;
    const r = (this.state.rate / 100) / 12;
    const t = this.state.term * 12;
    const monthlyPayment = (b * ((r * ((1 + r) ** t)) / (((1 + r) ** t) - 1))).toFixed(2);
    console.log(`after payment ${monthlyPayment}`);
    // this.setState({ payment: monthlyPayment });
    this.setState({ payment: monthlyPayment },
      function () {
        console.log(`after setState for payment ${this.state.payment}`);
      });
  }

  updateBalance(event) {
    this.setState({ balance: event.target.value });
    console.log('inside updateBalance');
  }

  updateRate(event) {
    this.setState({ rate: event.target.value });
    console.log('inside updateRate');
  }
  updateTerm(event) {
    this.setState({ term: event.target.value });
    console.log('inside updateevent');
  }
  updatePayment(event) {
    this.setState({ payment: event.target.value });
    console.log('inside updatePayment');
  }

  /* handleClick(e) {
    if (e.target.name = 'balance') {
      this.setState({ balance: e.target.value });
      console.log(this.props.balance);
    } else if (e.target.name = 'rate') {
      this.setState({ rate: e.target.value });
      console.log(this.props.rate);
    } else if (e.target.name = 'term') {
      this.setState({ term: e.target.value });
    }
  }
*/

  render() {
    console.log('inside render');
    return (
      <div className='container'> {

        <form className='form-horizontal' onSubmit={ this.calculateButton }>
          <div className='form-group'>
            <h3>Mortgage Calculator</h3>
          </div>

          <div className='form-group'>
            <label htmlFor='balance' className='col-sm-2 control-label'>Loan Balance</label>
            <div className='col-sm-5'>
              <input
                className='form-control'
                type='number'
                name='balance'
                placeholder='0'
                value={ this.state.balance }
                onChange={ this.updateBalance }
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='rate' className='col-sm-2 control-label'>Interest Rate (%)</label>
            <div className='col-sm-5'>
              <input
                className='form-control'
                type='number'
                name='rate'
                step='0.01'
                placeholder='0%'
                value={ this.state.rate }
                onChange={ this.updateRate }
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='term' className='col-sm-2 control-label'>Loan Term (years)</label>
            <div className='col-sm-5'>
              <select
                className='form-control'
                name='term'
                value={ this.state.term }
                onChange={ this.updateTerm }
                placeholder='Term'
              >
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>

          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-5'>
              <button
                className='btn btn-primary'
                type='submit'
                name='submit'
                onClick={ this.calculateButton }
              >Calculate</button>
            </div>
          </div>

          <div className='form-group col-sm-offset-2'>
            <label htmlFor='output' className='control-label'>
            Monthly Mortgage Payment</label>
            <div
              className='col-sm-5 form-control'
              type='number'
              name='output'
              id='output'
            >
              {`$${this.state.payment} is your payment.`}
            </div>
          </div>

        </form>
      }
      </div>
    );
  }
}
