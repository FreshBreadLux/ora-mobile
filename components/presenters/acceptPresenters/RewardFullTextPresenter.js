import React from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import ss from '../../StyleSheet'

const RewardFullTextPresenter = ({ dailyReward }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.horizontalPadding]}>
      <View style={[ss.paddingBottom15, ss.bottomBorder]} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ss.flex1}>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          {dailyReward.fullText
          ? <View style={[ss.flex1, ss.fullWidth]}>
              <Text style={ss.body}>{dailyReward.fullText}</Text>
              <Text style={[ss.body, ss.rightText, ss.paddingTop15]}>{dailyReward.fullSource}</Text>
            </View>
          : <Text style={ss.body}>It looks like the Gospel reading hasn't loaded yet</Text>
          }
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
)

const mapState = state => ({
  dailyReward: state.acceptPrayer.dailyReward
})

export default connect(mapState)(RewardFullTextPresenter)
