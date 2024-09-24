import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    borderWidth: 1,
    padding: sizes.screenHeight * 0.02,
    width: sizes.screenWidth,
    borderColor: colors.border,
  },
  headerText: {
    color: colors.borderColor,
    fontSize: fontSize.large,
    marginLeft: sizes.screenWidth * 0.1,
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: sizes.screenHeight * 0.03,
  },
  title: {
    fontSize: fontSize.h4,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.greenBg,
  },
  center: {
    textAlign: 'center',
    // right: sizes.screenWidth * 0.3,
    top: sizes.screenHeight * 0.015,
  },

  formContainer: {
    width: '90%',
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginVertical: sizes.screenHeight * 0.005,
    color: colors.grayText,
    fontSize: fontSize.h6,
  },
  input: {
    width: sizes.screenWidth * 0.9,
    // width: '100%',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.white,
    color: colors.black,
    fontSize: fontSize.h6,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.white,
  },
  picker: {
    flex: 1,
    color: colors.grayText,
    fontSize: fontSize.h6,
    backgroundColor: colors.white,
  },
  pickerIcon: {
    height: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.03,
    right: sizes.screenWidth * 0.02,
  },
  submitButton: {
    backgroundColor: colors.greenBg,
    padding: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.02,
    alignItems: 'center',
    width: sizes.screenWidth * 0.35,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    // fontWeight: 'bold',
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
