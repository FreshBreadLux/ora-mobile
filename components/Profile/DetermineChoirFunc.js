import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import ss from '../StyleSheet'

export const determineChoirTitle = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers > 31:
    return (
      <Text style={[ss.buttonText]}>ninth choir</Text>
    )
  case userTotalPrayers < 32:
    return (
      <Text style={[ss.buttonText]}>welcome</Text>
    )
  default:
    return (
      <Text style={[ss.buttonText]}>welcome</Text>
    )
  }
}

export const determineChoirName = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers > 31:
    return (
      <Text style={ss.choirName}>Angel</Text>
    )
  case userTotalPrayers < 32:
    return (
      <Text style={ss.choirName}>New Member</Text>
    )
  default:
    return (
      <Text style={ss.choirName}>New Member</Text>
    )
  }
}

export const determineChoirText = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers > 31:
      return (
        <View style={ss.invisiContainer}>
          <View style={ss.backgroundImageFrame}>
            <Image
              source={require('../../assets/images/Choirs.jpg')}
              style={ss.backgroundImage}
            />
          </View>
          <ScrollView>
            <View style={[ss.center, ss.addViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.header, ss.padding15]}>NINTH CHOIR</Text>
              <Text style={ss.subHeader}>STANDARD ANGELS</Text>
            </View>
            <View style={[ss.addLargeViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>Christians believe that God has organized the entirety of creation in a hierarchical fashion. This belief in a hierarchy extends to the realm of angels, and for the past two thousand years theologians have speculated about the nature and structure of the hierarchy of angels. Our understanding comes from references to angels in Sacred Scripture, the teachings of the early Church Fathers, and guidance of Sacred Tradition.</Text>
            </View>
            <View style={[ss.editHeight, ss.center]}>
              <Text style={[ss.body, ss.blackTextShadow, ss.whiteText, ss.centerText, ss.threeQuarterWidth]}>“The scheme is not official dogma, but it is a beautiful work of art, a reasonable work of philosophical speculation, an inspiring work of faith, and an enduring work of tradition”{'\n'}- Dr. Peter Kreeft</Text>
            </View>
            <View style={[ss.center, ss.addLargeViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={ss.header}>ANGELS</Text>
            </View>
            <View style={[ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>The ninth and lowest choir, referred to simply and generally as the Angels, is the collection of angels that God has assigned to directly aid humanity. This choir includes the personal guardian angels that Jesus alludes to in the Gospel of Matthew. We find numerous references to these general angels throughout Sacred Scripture, including the verses quoted below.</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>“See that you do not despise one of these little ones, for I say to you that their angels in heaven always look upon the face of my heavenly Father.”{'\n'}- Matthew 18:10</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>At this, Jesus said to him, “Get away, Satan! It is written: ‘The Lord, your God, shall you worship and him alone shall you serve.’” Then the devil left him and, behold, angels came and ministered to him.{'\n'}- Matthew 4:10-11</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>After withdrawing about a stone’s throw from them and kneeling, he prayed, saying, “Father, if you are willing, take this cup away from me; still, not my will but yours be done.” And to strengthen him an angel from heaven appeared to him.{'\n'}- Luke 22:41-43</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>Let mutual love continue. Do not neglect hospitality, for through it some have unknowingly entertained angels.{'\n'}- Hebrews 13:1-2</Text>
            </View>
          </ScrollView>
        </View>
      )
    case userTotalPrayers < 32:
      return (
        <View style={ss.invisiContainer}>
          <View style={ss.backgroundImageFrame}>
            <Image
              source={require('../../assets/images/Choirs.jpg')}
              style={ss.backgroundImage}
            />
          </View>
          <ScrollView>
            <View style={[ss.center, ss.addViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.header, ss.padding15]}>WELCOME TO ORA</Text>
            </View>
            <View style={[ss.addLargeViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>We hope you're enjoying the app. Once you've accepted more prayers, come back and visit this page to learn a little about the hierarchical nature of the Nine Choirs.</Text>
            </View>
          </ScrollView>
        </View>
      )
    default:
      return (
        <View style={ss.invisiContainer}>
          <View style={ss.backgroundImageFrame}>
            <Image
              source={require('../../assets/images/Choirs.jpg')}
              style={ss.backgroundImage}
            />
          </View>
          <ScrollView>
            <View style={[ss.center, ss.addViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.header, ss.padding15]}>WELCOME TO ORA</Text>
            </View>
            <View style={[ss.addLargeViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>Christians believe that God has organized the entirety of creation in a hierarchical fashion. This belief in a hierarchy extends to the realm of angels, and for the past two thousand years theologians have speculated about the nature and structure of the hierarchy of angels. Our understanding comes from references to angels in Sacred Scripture, the teachings of the early Church Fathers, and guidance of Sacred Tradition.</Text>
            </View>
          </ScrollView>
        </View>
      )
  }
}

