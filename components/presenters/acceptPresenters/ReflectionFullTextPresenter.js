import React from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import ss from '../../StyleSheet'

const ReflectionFullTextPresenter = ({ dailyReflection }) => {
  console.log('dailyReflection in ReflectionFullTextPresenter:', dailyReflection)
  return(
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.horizontalPadding]}>
      <View style={[ss.paddingBottom15, ss.bottomBorder]} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ss.flex1}>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={ss.body}>{`${dailyReflection.fullText}`}</Text>
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
)}

const mapState = state => ({
  dailyReflection: state.dailyReflection
})

export default connect(mapState)(ReflectionFullTextPresenter)
