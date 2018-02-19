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
    width: 90,
  },
  notificationIcon: {
    height: 15,
    width: 15,
  },
  padding15: {
    padding: 15,
  },
  padding10: {
    padding: 10,
  },
  paddingBottom15: {
    paddingBottom: 15,
  },
  paddingBottom10: {
    paddingBottom: 10,
  },
  paddingBottom30: {
    paddingBottom: 30,
  },
  paddingTop10: {
    paddingTop: 10,
  },
  paddingLeft7: {
    paddingLeft: 7,
  },
  scrollViewPadding: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  horizontalPadding: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  editPadding: {
    paddingLeft: 15,
    paddingRight: 15,
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
    fontSize: 14,
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
  redText: {
    color: 'red',
  },
  greyText: {
    color: '#555'
  },
  blackTextShadow: {
    fontWeight: 'bold',
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
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 7,
    borderRadius: 7,
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
  editButton: {
    backgroundColor: '#000',
    borderRadius: 6,
    padding: 8,
    width: '49%',
    alignItems: 'center',
  },
  smallButton: {
    backgroundColor: '#000',
    borderRadius: 6,
    padding: 8,
    width: '24%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    width: '49%',
    alignItems: 'center',
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
  threeQuarterWidth: {
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
  marginTop: {
    marginTop: 10,
  },
})

export default ss
