import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import ss from '../../StyleSheet'

const FAQPresenter = () => (
  <View style={[ss.whiteContainer, ss.horizontalPadding]}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={ss.flex1}>
      <View style={[ss.paddingTop30, ss.fullWidth]}>
        <Text style={ss.subHeader}>What is Ora's mission?</Text>
      </View>
      <View style={ss.addViewSpacing}>
        <Text style={ss.body}>Ora’s mission is to help people cultivate lives of devotion. We believe that we can design beautiful, elegant software that draws people into a deeper relationship with God.</Text>
      </View>
      <View style={[ss.paddingTop30, ss.fullWidth]}>
        <Text style={ss.subHeader}>Where does the name Ora come from?</Text>
      </View>
      <View style={ss.addViewSpacing}>
        <Text style={ss.body}>"Ora" is the Latin imperative for "pray". The name was inspired by a line from the Ave Maria: "Ora pro nobis peccatoribus", which means "Pray for us sinners".</Text>
      </View>
      <View style={[ss.paddingTop30, ss.fullWidth]}>
        <Text style={ss.subHeader}>When does someone get a notification that I’m praying for them?</Text>
      </View>
      <View style={ss.addViewSpacing}>
        <Text style={ss.body}>As soon as a prayer loads, the author gets a notification. When you click “Accept New Prayer”, you are committing to pray for the next request shown to you. There is no way to read a request without sending the author a notification, so you take on the responsibility of prayer whenever you accept a request. If you’ve followed a prayer, you can continue to send notifications to the author by pressing the “send prayer” button.</Text>
      </View>
      <View style={[ss.paddingTop30, ss.fullWidth]}>
        <Text style={ss.subHeader}>What is Ora’s religious affiliation?</Text>
      </View>
      <View style={[ss.paddingTop10, ss.paddingBottom20]}>
        <Text style={ss.body}>The Ora Prayer Network is a Catholic nonprofit created to serve all Christians. Prayer unites all of our brothers and sisters in Christ, and we're excited for the ecumenical potential that Ora brings. If you aren't a Christian and you want to learn more about our faith in Jesus, please reach out to us. If you already have a relationship with Jesus and you'd like to ask questions about the Catholic Church, we would love to hear from you. Reach out to us any time at support@oraprayernetwork.com</Text>
      </View>
    </ScrollView>
  </View>
)

export default FAQPresenter
