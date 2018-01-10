import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  whiteContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  invisiContainer: {
    flex: 1,
    backgroundColor: 'transparent',
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
  horizontalPadding: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  addViewSpacing: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceAround: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  profileRow: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontFamily: 'open-sans',
    fontSize: 100,
    color: '#fff'
  },
  font24: {
    fontFamily: 'open-sans',
    fontSize: 24,
  },
  font20: {
    fontFamily: 'open-sans',
    fontSize: 20,
  },
  font16: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
  centerText: {
    textAlign: 'center',
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
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 7,
    borderRadius: 7,
  },
  listBottomBorder: {
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    backgroundColor: 'rgb(69, 119, 238)',
    borderRadius: 6,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'open-sans',
    fontSize: 16,
    color: '#fff'
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
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
    width: '100%'
  }
})

export default styles
