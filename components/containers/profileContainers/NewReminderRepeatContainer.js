import React from 'react'
import { NewReminderRepeatPresenter } from '../../presenters'

/*
  NewReminderRepeatContainer exists because of some unfortunate behavior from react navigation.
  React navigation's props don't trigger a rerender, so they can't be used to display the
  selected repeat time period. This means that the selected repeat time period needs to be stored
  on the state of both NewReminderContainer (for creating the reminder) and
  NewReminderRepeatContainer (for displaying visual cues to the user about their selection).
  NewReminderRepeatContainer passes through the necessary method from NewReminderContainer using
  react navigation params so that NewReminderRepeatPresenter can set the state of both Containers.
*/

class NewReminderRepeatContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repeatSelection: 'Daily'
    }
    this.setRepeatSelection = this.setRepeatSelection.bind(this)
  }

  /*
    When the component mounts, it checks to see which repeat time period is on the state of
    NewReminderContainer, and sets its own state to match the selection.
  */
  componentDidMount() {
    this.setRepeatSelection(this.props.navigation.state.params.newReminderRepeat)
  }

  setRepeatSelection(repeatSelection) {
    this.setState({ repeatSelection })
  }

  render() {
    return (
      <NewReminderRepeatPresenter
        repeatSelection={this.state.repeatSelection}
        setRepeatSelection={this.setRepeatSelection}
        setNewReminderRepeat={this.props.navigation.state.params.setNewReminderRepeat} />
    )
  }
}

export default NewReminderRepeatContainer
