import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    // height: sizes.screenHeight,
  },
  title: {
    fontSize: fontSize.h5,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.greenBg,
    marginBottom: sizes.screenHeight * 0.03,
  },
  text: {
    color: colors.grayText,
    textAlign: 'center',
    fontSize: fontSize.medium,
    marginBottom: sizes.screenHeight * 0.05,
  },
  cardContainer: {
    backgroundColor: '#CAEFCF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 10,

    marginBottom:sizes.screenHeight*0.05,
    width: sizes.screenWidth*0.85,
    alignSelf: 'center',
    alignItems: 'center', 
    position: 'relative',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  idText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom:sizes.screenHeight*0.005
  },
  premiumBadge: {
    backgroundColor: '#FEC76B',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    position: 'absolute',
    top: 10,
    right: 10,
    padding: sizes.screenHeight * 0.005,

  },
  premiumText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  actionSection: {
    width: '100%',
  },
  actionButtonBlue: {
    backgroundColor: colors.blue,
    borderRadius: sizes.screenWidth*0.02,
    paddingVertical: 7,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf:'center',
    width:sizes.screenWidth*0.4
  },
  actionButtonWhite: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 7,
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: sizes.screenWidth*0.02,
    width:sizes.screenWidth*0.65,
    alignSelf:'center',

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextBlack: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnTop: {
    top: sizes.screenHeight * 0.02,
    paddingBottom: 20,
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: sizes.screenWidth * 0.1,
    padding: 20,
    width: sizes.screenWidth * 0.75,
    alignSelf: 'center',
  },

  modalText: {
    color: colors.grayText,
    textAlign: 'center',
    fontSize: fontSize.h5,
    marginBottom: sizes.screenHeight * 0.02,
  },
  bold: {
    // fontWeight: '600',
  },
  modalBtn: {
    color: colors.white,
    backgroundColor: '#C0EFBA',
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.23,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  modalBtnText: {
    color: colors.grayText,
    fontSize: fontSize.h6,
    fontWeight: '600',
  },
  greenBorderModal: {
    borderWidth: 0.3,
    width: sizes.screenWidth * 0.65,
    marginBottom: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.02,
    borderColor: colors.border,
    alignSelf: 'center',
  },
  logo: {
    height: 68,
    width: 60,
    alignSelf: 'center',
  },
});
