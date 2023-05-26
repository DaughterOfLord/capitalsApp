/* eslint-disable array-callback-return */
import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
  {
    id: 'OTTAWA',
    capitalDisplayText: 'Ottawa',
    country: 'Canada',
  },
  {
    id: 'SOFIA',
    capitalDisplayText: 'Sofia',
    country: 'Bulgaria',
  },
  {
    id: 'CAIRO',
    capitalDisplayText: 'Cairo',
    country: 'Egypt',
  },
  {
    id: 'ROME',
    capitalDisplayText: 'Rome',
    country: 'Italy',
  },
  {
    id: 'JERUSALEM',
    capitalDisplayText: 'Jerusalem',
    country: 'Israel',
  },
  {
    id: 'JAKARTA',
    capitalDisplayText: 'Jakarta',
    country: 'Indonesia',
  },
  {
    id: 'MALE',
    capitalDisplayText: 'Malé',
    country: 'Maldives',
  },
  {
    id: 'KUALA LUMPUR',
    capitalDisplayText: 'Kuala Lumpur',
    country: 'Malaysia',
  },
  {
    id: 'ABUJA',
    capitalDisplayText: 'Abuja',
    country: 'Nigeria',
  },
  {
    id: 'ISLAMABAD',
    capitalDisplayText: 'Islamabad',
    country: 'Pakistan',
  },
  {
    id: 'MOSCOW',
    capitalDisplayText: 'Moscow',
    country: 'Russia',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
