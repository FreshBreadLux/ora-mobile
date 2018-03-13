import React from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import ss from '../../StyleSheet'

const TraditionalPrayersPresenter = () => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.horizontalPadding]}>
      <View style={[ss.paddingBottom15, ss.bottomBorder]} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ss.flex1}>
        <View style={[ss.paddingTop20, ss.paddingBottom10]}>
          <Text style={[ss.header, ss.centerText]}>OUR FATHER</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>Our Father, Who art in heaven, hallowed be Thy name. Thy kingdom come, Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.</Text>
        </View>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>HAIL MARY</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners now and at the hour of our death. Amen.</Text>
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
)

export default TraditionalPrayersPresenter
