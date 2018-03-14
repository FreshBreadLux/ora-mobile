import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import ss from './StyleSheet'

export const determineChoirTitle = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers > 299:
      return <Text style={ss.buttonText}>SEVENTH CHOIR</Text>
    case userTotalPrayers > 99:
      return <Text style={ss.buttonText}>EIGHTH CHOIR</Text>
    case userTotalPrayers > 32:
      return <Text style={ss.buttonText}>NINTH CHOIR</Text>
    case userTotalPrayers < 33:
      return <Text style={ss.buttonText}>WELCOME</Text>
    default:
      return <Text style={ss.buttonText}>WELCOME</Text>
  }
}

export const determineChoirName = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers > 299:
      return <Text style={ss.choirName}>Principalities</Text>
    case userTotalPrayers > 99:
      return <Text style={ss.choirName}>Archangel</Text>
    case userTotalPrayers > 32:
      return <Text style={ss.choirName}>Angel</Text>
    case userTotalPrayers < 33:
      return <Text style={ss.choirName}>New Member</Text>
    default:
      return <Text style={ss.choirName}>New Member</Text>
  }
}

export const determineChoirText = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers > 299:
      return (
        <View style={ss.invisiContainer}>
          <View style={ss.backgroundImageFrame}>
            <Image
              source={require('../assets/images/Choirs.jpg')}
              style={ss.backgroundImage}
            />
          </View>
          <ScrollView>
            <View style={[ss.center, ss.addViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.subHeader, ss.padding15]}>SEVENTH CHOIR</Text>
              <Text style={ss.tagLine}>PRINCIPALITIES</Text>
            </View>
            <View style={[ss.addLargeViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>Christians believe that God has organized the entirety of creation in a hierarchical fashion. This belief in a hierarchy extends to the realm of angels, and for the past two thousand years theologians have speculated about the nature and structure of the hierarchy of angels. Our understanding comes from references to angels in Sacred Scripture, the teachings of the early Church Fathers, and guidance of Sacred Tradition.</Text>
            </View>
            <View style={[ss.editHeight, ss.center]}>
              <Text style={[ss.body, ss.blackTextShadow, ss.whiteText, ss.centerText, ss.threeQuarterWidth]}>“The scheme is not official dogma, but it is a beautiful work of art, a reasonable work of philosophical speculation, an inspiring work of faith, and an enduring work of tradition”{'\n'}- Dr. Peter Kreeft</Text>
            </View>
            <View style={[ss.center, ss.addLargeViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={ss.header}>PRINCIPALITIES</Text>
            </View>
            <View style={[ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>Both the Old and New Testaments reference a level of created beings called Principalities, or Princes. In the Book of Daniel, Daniel recounts a vision of an angel that must contend with a fallen Principality. The angel in Daniel's vision is . The New Testament letters reference Principalities numerous times, usually in the context of Christ's reign over all of creation, including created beings in the heavens.</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>To me, the very least of all the holy ones, this grace was given, to preach to the Gentiles the inscrutable riches of Christ, and to bring to light what is the plan of the mystery hidden from ages past in God who created all things, so that the manifold wisdom of God might now be made known through the Church to the principalities and authorities in the heavens.{'\n'}- Ephesians 3:8-10</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>May the eyes of your hearts be enlightened, that you may know what is the hope that belongs to His call, what are the riches of glory in His inheritance among the holy ones, and what is the surpassing greatness of His power for us who believe, in accord with the exercise of His great might, which He worked in Christ, raising Him from the dead and seating Him at His right hand in the heavens, far above every principality, authority, power, and dominion, and every name that is named not only in this age but also in the one to come.{'\n'}- Ephesians 1:18-21</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>Put on the armor of God so that you may be able to stand firm against the tactics of the devil. For our struggle is not with flesh and blood but with the principalities, with the powers, with the world rulers of this present darkness, with the evil spirits in the heavens.{'\n'}- Ephesians 6:11-12</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>For in Him were created all things in heaven and on earth, the visible and the invisible, whether thrones or dominions or principalities or powers; all things were created through Him and for Him.{'\n'}- Colossians 1:18</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>For I am convinced that neither death, nor life, nor angels, nor principalities, nor present things, nor future things, nor powers, nor height, nor depth, nor any other creature will be able to separate us from the love of God in Christ Jesus our Lord.{'\n'}- Romans 8:38-39</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>On the twenty-fourth day of the first month I was on the bank of the great river, the Tigris. As I looked up, I saw a man dressed in linen with a belt of fine gold around his waist. His body was like chrysolite, his face shone like lightning, his eyes were like fiery torches, his arms and feet looked like burnished bronze, and the sound of his voice was like the roar of a multitude. I alone, Daniel, saw the vision; but great fear seized those who were with me; they fled and hid themselves, although they did not see the vision. So I was left alone to see this great vision. No strength remained in me; I turned the color of death and was powerless. When I heard the sound of his voice, I fell face forward unconscious. But then a hand touched me, raising me to my hands and knees. “Daniel, beloved,” he said to me, “understand the words which I am speaking to you; stand up, for my mission now is to you.” When he said this to me, I stood up trembling. “Do not fear, Daniel,” he continued; “from the first day you made up your mind to acquire understanding and humble yourself before God, your prayer was heard. Because of it I started out, but the prince of the kingdom of Persia stood in my way for twenty-one days, until finally Michael, one of the chief princes, came to help me. I left him there with the prince of the kingdom of Persia, and came to make you understand what shall happen to your people in the last days; for there is yet a vision concerning those days.”{'\n'}- Daniel 10:4-14</Text>
            </View>
          </ScrollView>
        </View>
      )
    case userTotalPrayers > 99:
      return (
        <View style={ss.invisiContainer}>
          <View style={ss.backgroundImageFrame}>
            <Image
              source={require('../assets/images/Choirs.jpg')}
              style={ss.backgroundImage}
            />
          </View>
          <ScrollView>
            <View style={[ss.center, ss.addViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.subHeader, ss.padding15]}>EIGHTH CHOIR</Text>
              <Text style={ss.tagLine}>ARCHANGELS</Text>
            </View>
            <View style={[ss.addLargeViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>Christians believe that God has organized the entirety of creation in a hierarchical fashion. This belief in a hierarchy extends to the realm of angels, and for the past two thousand years theologians have speculated about the nature and structure of the hierarchy of angels. Our understanding comes from references to angels in Sacred Scripture, the teachings of the early Church Fathers, and guidance of Sacred Tradition.</Text>
            </View>
            <View style={[ss.editHeight, ss.center]}>
              <Text style={[ss.body, ss.blackTextShadow, ss.whiteText, ss.centerText, ss.threeQuarterWidth]}>“The scheme is not official dogma, but it is a beautiful work of art, a reasonable work of philosophical speculation, an inspiring work of faith, and an enduring work of tradition”{'\n'}- Dr. Peter Kreeft</Text>
            </View>
            <View style={[ss.center, ss.addLargeViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={ss.header}>ARCHANGELS</Text>
            </View>
            <View style={[ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>Sacred Scripture tells us that there are seven archangels, and references three of them by name: St. Michael, St. Gabriel, and St. Raphael. God has given these angels prominent roles in salvation history.</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>Then war broke out in heaven; Michael and his angels battled against the dragon. The dragon and its angels fought back, but they did not prevail and there was no longer any place for them in heaven. The huge dragon, the ancient serpent, who is called the Devil and Satan, who deceived the whole world, was thrown down to earth, and its angels were thrown down with it.{'\n'}- Revelation 12:7-9</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>Yet the archangel Michael, when he argued with the devil in dispute over the body of Moses, did not venture to pronounce a reviling judgement upon him but said, "May the Lord rebuke you!"{'\n'}- Jude 1:9</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>"I was sent to put you to the test. At the same time, however, God sent me to heal you and your daughter-in-law Sarah. I am Raphael, one of the seven angels who stand and serve before the Glory of the Lord." Greatly shaken, the two of them fell prostrate in fear. But Raphael said to them: "Do not fear; peace be with you! Bless God now and forever."{'\n'}- Tobit 12:14-17</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>In the sixth month, the angel Gabriel was sent from God to a town of Galilee called Nazareth, to a virgin betrothed to a man named Jospeph, of the house of David, and the virgin's name was Mary. And coming to her, he said "Hail, favored one! The Lord is with you."{'\n'}- Luke 1:26-28</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>For the Lord Himself, with a word of command, with the voice of an archangel and with the trumpet of God, will come down from heaven, and the dead in Christ will rise first.{'\n'}- 1 Thessalonians 4:16</Text>
            </View>
          </ScrollView>
        </View>
      )
    case userTotalPrayers > 32:
      return (
        <View style={ss.invisiContainer}>
          <View style={ss.backgroundImageFrame}>
            <Image
              source={require('../assets/images/Choirs.jpg')}
              style={ss.backgroundImage}
            />
          </View>
          <ScrollView>
            <View style={[ss.center, ss.addViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.subHeader, ss.padding15]}>NINTH CHOIR</Text>
              <Text style={ss.tagLine}>STANDARD ANGELS</Text>
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
              <Text style={[ss.body, ss.centerText]}>“See that you do not despise one of these little ones, for I say to you that their angels in heaven always look upon the face of My heavenly Father.”{'\n'}- Matthew 18:10</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>At this, Jesus said to him, “Get away, Satan! It is written: ‘The Lord, your God, shall you worship and Him alone shall you serve.’” Then the devil left Him and, behold, angels came and ministered to Him.{'\n'}- Matthew 4:10-11</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>After withdrawing about a stone’s throw from them and kneeling, He prayed, saying, “Father, if You are willing, take this cup away from Me; still, not My will but Yours be done.” And to strengthen Him an angel from heaven appeared to Him.{'\n'}- Luke 22:41-43</Text>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.body, ss.centerText]}>Let mutual love continue. Do not neglect hospitality, for through it some have unknowingly entertained angels.{'\n'}- Hebrews 13:1-2</Text>
            </View>
          </ScrollView>
        </View>
      )
    case userTotalPrayers < 33:
      return (
        <View style={ss.invisiContainer}>
          <View style={ss.backgroundImageFrame}>
            <Image
              source={require('../assets/images/Choirs.jpg')}
              style={ss.backgroundImage}
            />
          </View>
          <View style={[ss.whiteBackground, ss.horizontalPadding]}>
            <View style={[ss.paddingBottom15, ss.bottomBorder]} />
          </View>
          <ScrollView>
            <View style={[ss.center, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.subHeader, ss.padding15, ss.paddingTop30]}>WELCOME TO ORA</Text>
            </View>
            <View style={[ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>At Ora, we care about strengthening people's faith and devotional lives. To encourage users to pray more consistently, we've incorporated a "level" system within the app, with each level named after one of the Nine Choirs of Angels that we read about in scripture. Your level will increase as you accept more prayers, and you can check back here to learn more about each of the choirs of angels.</Text>
            </View>
          </ScrollView>
        </View>
      )
    default:
      return (
        <View style={ss.invisiContainer}>
          <View style={ss.backgroundImageFrame}>
            <Image
              source={require('../assets/images/Choirs.jpg')}
              style={ss.backgroundImage}
            />
          </View>
          <View style={[ss.whiteBackground, ss.horizontalPadding]}>
            <View style={[ss.paddingBottom15, ss.bottomBorder]} />
          </View>
          <ScrollView>
            <View style={[ss.center, ss.whiteBackground, ss.padding15]}>
              <Text style={[ss.subHeader, ss.padding15, ss.paddingTop30]}>WELCOME TO ORA</Text>
            </View>
            <View style={[ss.addLargeViewSpacing, ss.whiteBackground, ss.padding15]}>
              <Text style={ss.body}>At Ora, we care about strengthening people's faith and devotional lives. To encourage users to pray more consistently, we've incorporated a "level" system within the app, with each level named after one of the Nine Choirs of Angels that we read about in scripture. Your level will increase as you accept more prayers, and you can check back here to learn more about each of the choirs of angels.</Text>
            </View>
          </ScrollView>
        </View>
      )
  }
}

