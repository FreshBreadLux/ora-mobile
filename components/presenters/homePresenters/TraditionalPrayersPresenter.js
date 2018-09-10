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
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>ST. MICHAEL PRAYER</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>St. Michael the Archangel, defend us in battle. Be our defense against the wickedness and snares of the Devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, thrust into hell Satan, and all the evil spirits, who prowl about the world seeking the ruin of souls. Amen.</Text>
        </View>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>ACT OF LOVE</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>O my God, I love You above all things with my whole heart and soul, because You are all good and worthy of all my love. I love my neighbor as myself for the love of You. I forgive all who have injured me and I ask pardon of those whom I have injured. Amen.</Text>
        </View>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>ACT OF HOPE</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>O my God, relying on Your infinite mercy and promises, I hope to obtain pardon of my sins, the help of Your grace, and life everlasting, through the merits of Jesus Christ, my Lord and Redeemer. Amen.</Text>
        </View>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>ACT OF FAITH</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>O my God, I firmly believe that You are one God in three divine Persons, Father, Son, and Holy Spirit. I believe that Your divine Son became man and died for our sins, and that He will come to judge the living and the dead. I believe these and all the truths which the Holy Catholic Church teaches, because You have revealed them, Who can neither deceive nor be deceived. Amen.</Text>
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
)

export default TraditionalPrayersPresenter
