import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { ShareOraPresenter, OraMissionaryPresenter } from '../../presenters'
import { DangerZone } from 'expo'
import ss from '../../StyleSheet'

const { Branch } = DangerZone

class ShareOraContainer extends React.Component {
  constructor(props) {
    super(props)
    this.onShareLinkPress = this.onShareLinkPress.bind(this)
    this.createBranchUniversalObject = this.createBranchUniversalObject.bind(this)
  }

  componentDidMount() {
    this.createBranchUniversalObject()
  }

  async createBranchUniversalObject() {
    this.branchUniversalObject = await Branch.createBranchUniversalObject('ora_share_v1.0.0', {
      title: 'Cultivate a Life of Devotion',
      contentImageUrl: 'https://www.oraprayernetwork.com/images/icon.png',
      contentDescription: 'New tech nonprofit connects Christians around the world through prayer'
    })
    console.log('buo created!: ', this.branchUniversalObject)
  }

  async onShareLinkPress() {
    console.log('share link pressed...')
    const shareOptions = {
      messageHeader: 'Cultivate a Life of Devotion',
      messageBody: 'Thought you might like this'
    }
    const linkProperties = {
      feature: 'share',
      channel: 'App'
    }
    console.log('calling showShareSheet on ', this.branchUniversalObject)
    await this.branchUniversalObject.showShareSheet(shareOptions, linkProperties)
    console.log('log after showShareSheet')
  }

  render() {
    console.log('this.props.oraMissionary: ', this.props.oraMissionary)
    return (
      <View style={ss.invisiContainer}>
        {this.props.oraMissionary
        ? <OraMissionaryPresenter onShareLinkPress={this.onShareLinkPress} />
        : <ShareOraPresenter
            navigation={this.props.navigation}
            onShareLinkPress={this.onShareLinkPress} />
        }
      </View>
    )
  }
}

const mapState = state => ({
  oraMissionary: state.userInfo.oraMissionary
})

export default connect(mapState)(ShareOraContainer)
