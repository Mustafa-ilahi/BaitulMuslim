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
  bgImg: {
    height: '98%',
    width: '98%',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.02,
    paddingTop: sizes.screenHeight * 0.03,
  },
  bgImgStyle: {
    resizeMode: 'cover',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: colors.greenBg,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.h4,
    marginBottom: sizes.screenHeight * 0.02,
  },
  formContainer: {
    width: '90%',
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginVertical: sizes.screenHeight * 0.005,
    color: colors.white,
    fontSize: fontSize.h6,
  },
  input: {
    width: '100%',
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
    width: '100%',
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
    color: colors.white,
    backgroundColor: colors.greenBg,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  redNoteText: {
    color: colors.red,
    fontSize: fontSize.h6,
    textAlign: 'center',
  },
  redNote: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.08,
    top: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.84,
  },
  buttonContainer: {
    bottom: sizes.screenHeight * 0.03,
  },
  greenBorder: {
    borderWidth: 0.3,
    width: sizes.screenWidth * 0.8,
    bottom: sizes.screenHeight * 0.015,
    borderColor: colors.greenBg,
  },
});
