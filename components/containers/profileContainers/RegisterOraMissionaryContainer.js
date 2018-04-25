import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { setUserInfo } from '../../../store'
import { RegisterOraMissionaryPresenter } from '../../presenters'
import ROOT_URL from '../../../config'

class RegisterOraMissionaryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      gender: '',
      age: '',
      loading: false,
      failed: false,
      error: false,
    }
    // this.setAge = this.setAge.bind(this)
    // this.setCity = this.setCity.bind(this)
    // this.setGender = this.setGender.bind(this)
    // this.setAddress = this.setAddress.bind(this)
    this.focusInput = this.focusInput.bind(this)
    // this.setStateVal = this.setStateVal.bind(this)
    this.setInputRef = this.setInputRef.bind(this)
    // this.setLastName = this.setLastName.bind(this)
    // this.setFirstName = this.setFirstName.bind(this)
    this.setStateField = this.setStateField.bind(this)
    this.registerMissionary = this.registerMissionary.bind(this)
  }

  registerMissionary() {
    const { firstName, lastName, city, state, gender, age, address } = this.state
    console.log('this.state: ', this.state)
    if (firstName && lastName && city && state && gender && age && address) {
      this.setState({ loading: true })
      axios.put(`${ROOT_URL}/api/users/${this.props.userId}`, {
        firstName, lastName, city, state, gender, age, address, oraMissionary: true
      })
      .then(res => this.props.dispatchSetUserInfo(res.data))
      .then(() => this.props.navigation.goBack())
      .catch(error => {
        console.log(error)
        this.setState({ loading: false, failed: true })
        setTimeout(() => this.setState({failed: false}), 10000)
      })
    } else {
      this.setState({ error: 'Please fill out all form fields' })
    }
  }

  setInputRef(name, ref) {
    this[name] = ref
  }
  focusInput(name) {
    this[name].focus()
  }
  setStateField(name, value) {
    this.setState({ [name]: value })
  }

  // setFirstName(firstName) {
  //   this.setState({firstName})
  // }
  // setLastName(lastName) {
  //   this.setState({lastName})
  // }
  // setAddress(address) {
  //   this.setState({address})
  // }
  // setCity(city) {
  //   this.setState({city})
  // }
  // setStateVal(state) {
  //   this.setState({state})
  // }
  // setGender(gender) {
  //   this.setState({gender})
  // }
  // setAge(age) {
  //   this.setState({age})
  // }

  render() {
    return (
      <RegisterOraMissionaryPresenter
        age={this.state.age}
        city={this.state.city}
        state={this.state.state}
        error={this.state.error}
        gender={this.state.gender}
        failed={this.state.failed}
        address={this.state.address}
        loading={this.state.loading}
        focusInput={this.focusInput}
        lastName={this.state.lastName}
        setInputRef={this.setInputRef}
        firstName={this.state.firstName}
        registerMissionary={this.registerMissionary} />
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId,
})

const mapDispatch = dispatch => ({
  dispatchSetUserInfo: userInfo => dispatch(setUserInfo(userInfo))
})

export default connect(mapState, mapDispatch)(RegisterOraMissionaryContainer)

/*
setAge={this.setAge}
setCity={this.setCity}
setGender={this.setGender}
setAddress={this.setAddress}
setLastName={this.setLastName}
setStateVal={this.setStateVal}
setFirstName={this.setFirstName}
*/
