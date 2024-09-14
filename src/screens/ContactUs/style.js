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
  btnTop: {
    marginTop: sizes.screenHeight * 0.03,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#25D366',
    alignItems: 'center',
    padding: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.02,
    justifyContent: 'center',
  },
  whatsappIcon: {
    height: sizes.screenHeight * 0.041,
    width: sizes.screenHeight * 0.0411,
    marginEnd: sizes.screenWidth * 0.01,
  },
  btnText: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: fontSize.h6,
    fontWeight: '500',
  },
  phoneIcon: {
    height: sizes.screenHeight * 0.031,
    width: sizes.screenHeight * 0.031,
    marginEnd: sizes.screenWidth * 0.01,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.04,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grayText,
  },
  orText: {
    marginHorizontal: sizes.screenWidth * 0.02,
    color: colors.grayText,
  },
  input: {
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    padding: sizes.screenHeight * 0.02,
    borderWidth: 1,
    borderColor: colors.grayText,
    borderRadius: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenHeight * 0.025,
    backgroundColor: colors.white,
    color: colors.black,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.grayText,
    borderRadius: sizes.screenWidth * 0.02,
    paddingHorizontal: 10,
    width: sizes.screenWidth * 0.85,
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.083,
    marginBottom: sizes.screenHeight * 0.025,
  },
  picker: {
    flex: 1,
    color: colors.grayText,
    backgroundColor: colors.white,
  },
  pickerIcon: {
    height: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.03,
    right: sizes.screenWidth * 0.02,
  },
  label: {
    fontSize: fontSize.h6,
    marginBottom: 10,
    color: colors.black,
    fontWeight: '500',
    left:sizes.screenWidth*0.05
  },
  fileInput: {
    padding: sizes.screenHeight * 0.02,
    borderWidth: 1,
    borderColor: colors.grayText,
    marginBottom: 20,
    borderRadius: sizes.screenWidth * 0.02,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    color: colors.grayText,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
  },
  chooseText: {
    color: colors.grayText,
    fontWeight: 'bold',
    fontSize: fontSize.h6,
    backgroundColor: colors.disabledBg2,
    paddingRight: sizes.screenHeight * 0.011,
    paddingLeft: sizes.screenHeight * 0.011,
  },
  submitButton: {
    backgroundColor: colors.blue,
    padding: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.02,
    alignItems: 'center',
    width: sizes.screenWidth * 0.45,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
    backgroundColor: colors.gray,
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