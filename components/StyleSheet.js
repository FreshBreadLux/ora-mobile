import { StyleSheet } from 'react-native'

const ss = StyleSheet.create({
  whiteContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  whiteBackground: {
    backgroundColor: '#fff',
  },
  invisiContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  opacityContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  opacityBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  rowOpacity: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  backgroundImageFrame: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  thumbnail: {
    height: 90,
    width: '100%'
  },
  notificationIcon: {
    height: 15,
    width: 15,
  },
  iosFlexPadding: {
    flex: 1,
    padding: 15,
  },
  androidFlexPadding: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15
  },
  padding4: {
    padding: 4,
  },
  padding10: {
    padding: 10,
  },
  padding15: {
    padding: 15,
  },
  paddingBottom4: {
    paddingBottom: 4
  },
  paddingBottom10: {
    paddingBottom: 10,
  },
  paddingBottom15: {
    paddingBottom: 15,
  },
  paddingBottom20: {
    paddingBottom: 20
  },
  paddingBottom30: {
    paddingBottom: 30,
  },
  paddingTop4: {
    paddingTop: 4
  },
  paddingTop10: {
    paddingTop: 10,
  },
  paddingTop15: {
    paddingTop: 15
  },
  paddingTop20: {
    paddingTop: 20
  },
  paddingTop30: {
    paddingTop: 30
  },
  paddingLeft7: {
    paddingLeft: 7,
  },
  paddingRight7: {
    paddingRight: 7
  },
  paddingSides10: {
    paddingLeft: 10,
    paddingRight: 10
  },
  scrollViewPadding: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  iosFlexScrollPadding: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  androidFlexScrollPadding: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  horizontalPadding: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  editPadding: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  androidPadding: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15
  },
  addViewSpacing: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  addMedViewSpacing: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  addLargeViewSpacing: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignFlexEnd: {
    alignSelf: 'flex-end'
  },
  alignFlexStart: {
    alignSelf: 'flex-start'
  },
  spaceAround: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  proflileHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  profileRow: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  consecutiveDays: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'raleway',
    fontSize: 100,
    color: '#fff'
  },
  choirName: {
    fontFamily: 'raleway',
    fontSize: 70,
    color: '#fff',
  },
  consecutiveNumber: {
    fontFamily: 'raleway',
    fontSize: 40,
    color: '#000'
  },
  welcomeText: {
    fontFamily: 'raleway',
    fontSize: 30,
    color: '#fff',
  },
  header: {
    fontFamily: 'raleway',
    fontSize: 24,
  },
  subHeader: {
    fontFamily: 'raleway',
    fontSize: 20,
  },
  tagLine: {
    fontFamily: 'raleway',
    fontSize: 18,
  },
  body: {
    fontFamily: 'eb',
    fontSize: 20,
  },
  subBody: {
    fontFamily: 'raleway',
    fontSize: 15,
  },
  reflectionPrayer: {
    fontFamily: 'eb',
    fontSize: 26,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  rightText: {
    textAlign: 'right',
  },
  whiteText: {
    color: '#fff'
  },
  blueText: {
    color: 'rgb(69, 119, 238)',
  },
  darkBlueText: {
    color: '#1e3799'
  },
  redText: {
    color: 'red',
  },
  greyText: {
    color: '#555'
  },
  pinkText: {
    color: '#FF4081',
  },
  blackTextShadow: {
    textShadowColor: '#000',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  whiteTextShadow: {
    fontWeight: 'bold',
    textShadowColor: '#fff',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    padding: 7,
    borderRadius: 7,
  },
  topAlignAndroidTextInput: {
    textAlignVertical: 'top'
  },
  boxBorder: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  darkBottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#777'
  },
  topBorder: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  darkTopBorder: {
    borderTopWidth: 1,
    borderTopColor: '#555',
  },
  viewTopBorder: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  listBottomBorder: {
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleBottomBorder: {
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  titleBottomBorderWhite: {
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'raleway',
    fontSize: 16,
  },
  blackButton: {
    backgroundColor: '#000',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  topModal: {
    justifyContent: 'flex-start',
    margin: 0,
  },
  notificationModal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginTop: 10,
    shadowColor: '#777',
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    shadowOpacity: 0.7
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  modalText: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888',
    paddingBottom: 10,
  },
  modalLineView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3
  },
  flex4: {
    flex: 4
  },
  fullWidth: {
    width: '100%',
  },
  threeQuartersWidth: {
    width: '75%',
  },
  halfWidth: {
    width: '50%',
  },
  oneThirdWidth: {
    width: '33%',
  },
  maxWidth100: {
    maxWidth: '50%',
  },
  fullHeight: {
    height: '100%',
  },
  submitHeight: {
    height: 230,
  },
  editHeight: {
    height: 320,
  },
  androidReminderHeight: {
    height: 100,
  },
  marginTop: {
    marginTop: 10,
  },
})

export default ss
