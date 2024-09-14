import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  title: {
    fontSize: fontSize.h5,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.greenBg,
    marginBottom: sizes.screenHeight * 0.03,
  },
  text: {
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSize.medium,
    marginBottom: sizes.screenHeight * 0.05,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#CAEFCF',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 10,
    // marginVertical: 5,
    marginBottom: sizes.screenHeight * 0.05,
  },
  profileSection: {
    flexDirection: 'column',
    alignItems: 'center',
    bottom: sizes.screenHeight * 0.01,
  },
  profileImage: {
    width: sizes.screenHeight * 0.1,
    height: sizes.screenHeight * 0.1,
    marginBottom: 5,
  },
  idText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grayText,
  },
  actionSection: {
    flex: 1,
  },
  premiumBadge: {
    backgroundColor: '#FEC76B',
    borderRadius: 5,
    paddingHorizontal: 5,
    alignSelf: 'flex-end',
    marginBottom: 15,
    padding: sizes.screenHeight * 0.005,
  },
  premiumText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  actionButtonBlue: {
    backgroundColor: colors.blue,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 8,
    width: sizes.screenWidth * 0.42,
    alignSelf: 'flex-end',
  },
  actionButtonWhite: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',

    width: sizes.screenWidth * 0.42,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonTextBlack: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
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
