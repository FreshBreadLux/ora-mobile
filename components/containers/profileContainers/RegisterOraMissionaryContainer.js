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
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      gender: '',
      age: '',
      loading: false,
      failed: false,
      error: false,
    }
    this.focusInput = this.focusInput.bind(this)
    this.setInputRef = this.setInputRef.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setStateField = this.setStateField.bind(this)
  }

  handleSubmit() {
    const { firstName, lastName, city, state, gender, age, address } = this.state
    if (firstName && lastName && city && state && gender && age && address) {
      this.setState({ loading: true })
      axios.put(`${ROOT_URL}/api/users/${this.props.userId}`, {
        firstName, lastName, city, state, gender, age, address, oraMissionary: true
      })
      .then(res => this.props.dispatchSetUserInfo(res.data))
    } else {
      this.setState({ error: 'Please fill out all form fields' })
    }
  }

  setInputRef(name, ref) {
    this[name] = ref
  }

  setStateField(name, value) {
    this.setState({ [name]: value })
  }

  focusInput(name) {
    this[name].focus()
  }

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
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        setStateField={this.setStateField} />
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId,
  firstName: state.userInfo.firstName,
  lastName: state.userInfo.lastName,
  address: state.userInfo.address,
  city: state.userInfo.city,
  state: state.userInfo.state,
})

const mapDispatch = dispatch => ({
  dispatchSetUserInfo: userInfo => dispatch(setUserInfo(userInfo))
})

export default connect(mapState, mapDispatch)(RegisterOraMissionaryContainer)
