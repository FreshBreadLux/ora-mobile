import React from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import ss from '../../StyleSheet'

const ReflectionFullTextPresenter = ({ dailyReflection }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.horizontalPadding]}>
      <View style={[ss.paddingBottom15, ss.bottomBorder]} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ss.flex1}>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          {dailyReflection.fullText
          ? <Text style={ss.body}>{dailyReflection.fullText}</Text>
          : <Text style={ss.body}>It looks like your reflection hasn't loaded yet</Text>
          }
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
)

const mapState = state => ({
  dailyReflection: state.acceptPrayer.dailyReflection
})

export default connect(mapState)(ReflectionFullTextPresenter)
