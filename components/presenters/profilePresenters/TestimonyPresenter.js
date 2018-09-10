import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Linking, ScrollView, Image } from 'react-native'
import { ampEvents, ampLogEvent } from '../../analytics'
import ss from '../../StyleSheet'

const TestimonyPresenter = () => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.horizontalPadding]}>
      <View style={[ss.paddingBottom15, ss.bottomBorder]} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ss.flex1}>
        <View style={[ss.fullWidth, ss.center, ss.paddingTop20, ss.paddingBottom10]}>
          <Image
            style={{height: 150, width: 150, borderRadius: 75, resizeMode: 'cover'}}
            source={require('../../../assets/images/bobby-headshot.jpg')} />
        </View>
        <View style={ss.paddingTop10}>
          <Text style={ss.body}>Hi there! My name is Bobby Lux and I’m the founder of Ora. I’d like to tell you my story.{'\n\n'}About two years ago I realized that I was behaviorally addicted to social media.{'\n\n'}Social media addiction is not a formal diagnosis. The science of behavioral addiction is very young, and most of the “evidence” we have at this point is worrying anecdotes and general, correlative studies. Still, the studies don’t paint an encouraging picture. People addicted to social media exhibit symptoms similar to substance addiction, and they face withdrawal symptoms when denied access.{'\n\n'}I was checking social media constantly throughout the day, and each session left me feeling drained and lonely. I wanted my heart and my mind to fly to God during the quiet moments in my day, but instead they were flying to my profiles and news feeds.</Text>
          <View style={[ss.darkBottomBorder, {margin: 30}]} />
          <Text style={ss.body}>Jesus calls us to a life of prayer and devotion, and he leads by example. Countless times throughout the Gospels, we see Jesus “withdraw to deserted places to pray.” (Luke 5:16) In order to follow his example, we must work to cultivate the time and space for prayer in a digital age that is aggressively competing for our attention. We need to design technology systems from a Christian paradigm, such that our social media habits occupy a healthy place in our lives.</Text>
          <View style={[ss.darkBottomBorder, {margin: 30}]} />
          <Text style={ss.body}>I started Ora to help people cultivate habits of prayer and lives of devotion. Rather than run from technology because of the current unhealthy use-cases, I believe that we can design beautiful, graceful technology systems that lead us into a deeper relationship with God.{'\n\n'}It’s easy to think of prayer, devotion, and other pillars of Christianity as abstract ideals that occupy the place of honor “in our hearts” but don’t actually make an appearance in our daily lives. In reality, the love that God pours out into our hearts will flourish best when it takes root in the soil of our everyday habits. I hope that you’ll join us in this beautiful, daily work.</Text>
          <View style={[ss.center, ss.addLargeViewSpacing, ss.fullWidth]}>
            <TouchableOpacity
              style={[ss.blueButton, ss.halfWidth]}
              onPress={() => {
                ampLogEvent(ampEvents.OPEN_DONATE_PAGE)
                Linking.openURL('https://www.oraprayernetwork.com/donor-signup')
              }}>
                <Text style={[ss.buttonText, ss.whiteText]}>DONATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
)

export default TestimonyPresenter
