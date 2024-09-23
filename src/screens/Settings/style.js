import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 20,
    color: colors.grayText,
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: sizes.screenHeight * 0.03,
  },
  title: {
    fontSize: fontSize.h5,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.grayText,
  },
  center: {
    textAlign: 'center',
    right: sizes.screenWidth * 0.3,
    top: sizes.screenHeight * 0.015,
  },
  premiumContainer: {
    backgroundColor: colors.btnBg,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    bottom: sizes.screenHeight * 0.009,
    width: sizes.screenWidth * 0.89,
    alignSelf: 'center',
  },
  premiumText: {
    color: '#fff',
    fontSize: fontSize.h5,
  },
  expiryText: {
    marginTop: 5,
    color: colors.grayText,
    fontSize: fontSize.h6,
    textAlign: 'center',
    paddingBottom: sizes.screenHeight * 0.03,
  },
  updateButton: {
    backgroundColor: '#fff',
    padding: sizes.screenHeight * 0.025,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  borderTop: {
    borderTopLeftRadius: sizes.screenWidth * 0.03,
    borderTopRightRadius: sizes.screenWidth * 0.03,
  },
  borderBottom: {
    borderBottomLeftRadius: sizes.screenWidth * 0.03,
    borderBottomRightRadius: sizes.screenWidth * 0.03,
  },
  buttonText: {
    fontSize: fontSize.h5,
    color: colors.grayText,
  },
  sectionTitle: {
    marginVertical: 20,
    fontSize: 18,
    color: colors.grayText,
    textAlign: 'center',
  },
  sectionTitle2: {
    fontSize: 18,
    color: colors.grayText,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: sizes.screenHeight * 0.02,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#000',
  },
  noteText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 12,
  },
  label: {
    fontWeight: '500',
    marginBottom: 5,
    color: colors.black,
  },
  icon: {
    height: sizes.screenHeight * 0.041,
    width: sizes.screenWidth * 0.082,
    right: sizes.screenWidth * 0.01,
  },
  icon2: {
    height: sizes.screenHeight * 0.041,
    width: sizes.screenWidth * 0.075,
    right: sizes.screenWidth * 0.01,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    // marginLeft: 10,
    color: colors.grayText,
    width: sizes.screenWidth * 0.77,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.05,
    marginBottom: sizes.screenHeight * 0.06,
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
  saveButton: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    borderRadius: sizes.screenWidth * 0.05,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.4,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
    fontWeight: '600',
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
  btnText: {
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
