import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.screenWidth * 0.1,
    paddingTop: sizes.screenHeight * 0.05,
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  logo: {
    height: sizes.screenHeight * 0.131,
    width: sizes.screenHeight * 0.115,
    marginBottom: sizes.screenHeight * 0.01,
  },
  title: {
    fontSize: fontSize.h3,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.02,
  },
  bgImg: {
    height: sizes.screenHeight * 0.8,
    width: sizes.screenWidth,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: sizes.screenHeight * 0.1,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.h5,
    marginTop: sizes.screenHeight * 0.05,
  },
  input: {
    width: sizes.screenWidth * 0.85,
    padding: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenHeight * 0.06,
    backgroundColor: colors.white,
    color: colors.black,
  },
  inputTop: {
    marginTop: sizes.screenHeight * 0.05,
  },
  registerButton: {
    backgroundColor: colors.gray,
    paddingVertical: sizes.screenHeight * 0.008,
    paddingHorizontal: sizes.screenWidth * 0.06,
    borderRadius: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
  },
  registerButtonText: {
    color: colors.green,
    fontSize: fontSize.large,
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: sizes.screenWidth * 0.1,
    padding: 20,
  },

  modalText: {
    color: colors.grayText,
    textAlign: 'center',
    fontSize: fontSize.h5,
    marginBottom: sizes.screenHeight * 0.02,
  },
  bold: {
    fontWeight: '600',
  },
  modalBtn: {
    color: colors.white,
    backgroundColor: '#C0EFBA',
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnText: {
    color: colors.grayText,
    fontSize: fontSize.h6,
    fontWeight: '600',
  },
  btnTop: {
    marginTop: sizes.screenHeight * 0.02,
    paddingBottom:sizes.screenHeight*0.02
  },
});
