import React from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import ss from '../../StyleSheet'

const AboutPresenter = () => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.horizontalPadding]}>
      <View style={[ss.paddingBottom15, ss.bottomBorder]} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ss.flex1}>
        <View style={[ss.paddingTop20, ss.paddingBottom10]}>
          <Text style={[ss.header, ss.centerText]}>ORA</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>Ora is a nonprofit dedicated to illustrating the beauty of the One, Holy, Catholic, and Apostolic Church, and helping Christians cultivate a stronger prayer life and relationship with God. The app has two primary goals: to give support and encouragement to people with burdens, and to encourage people to actively participate in the Body of Christ by taking time out of their day to pray for their brothers and sisters in need. Ora will always be free, and relies on donations from users in order to operate.</Text>
        </View>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>THE NAME</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>"Ora" is the Latin imperative for "pray". The name was inspired by a line from the Ave Maria: "Ora pro nobis peccatoribus", which means "pray for us sinners".</Text>
        </View>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>USING THE APP</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>When you accept a prayer, you will be given an anonymous request and the author will receive a notification that someone is praying for them. It is then your responsibility to spend time praying for the intention.</Text>
        </View>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>FOLLOWING PRAYERS</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>While all prayers are submitted and viewed anonymously, we hope to use connections between users to illustrate the power of prayer. You can follow prayers by tapping the heart icon, and you will receive notifications anytime the author provides updates to their prayer request.{'\n\n'}Note: Once you move on to a new prayer, you will not be able to return to the previous one, so please be sure to Follow any prayer requests you would like to receive updates about before accepting another.</Text>
        </View>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>REPORTING CONTENT</Text>
        </View>
        <View style={ss.addViewSpacing}>
          <Text style={ss.body}>If you come across a request that shouldn't be in our prayer network, use the flag icon to bring it to our attention.</Text>
        </View>
        <View style={[ss.addViewSpacing, ss.fullWidth]}>
          <Text style={[ss.header, ss.centerText]}>RELIGIOUS AFFILIATION</Text>
        </View>
        <View style={[ss.paddingTop10, ss.paddingBottom20]}>
          <Text style={ss.body}>The Ora Prayer Network is a Catholic nonprofit created to serve all Christians. Prayer unites all of our brothers and sisters in Christ, of all denominations, and we're excited for the ecumenical potential that Ora brings. If you aren't a Christian and you want to learn more about our faith in Jesus, please reach out to us. If you already have a relationship with Jesus and you'd like to ask questions about the Catholic Church, we would love to hear from you.</Text>
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
)

export default AboutPresenter
