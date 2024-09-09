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
  title: {
    fontSize: fontSize.h5,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.grayText,
  },
  center: {
    textAlign: 'center',
    right: sizes.screenWidth * 0.2,
    top: sizes.screenHeight * 0.015,
  },
  label: {
    fontSize: fontSize.h6,
    marginBottom: 10,
    color: colors.grayText,
    fontWeight: '500',
  },
  input: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  id: {
    color: colors.grayText,
    fontWeight: '600',
    fontSize: fontSize.h6,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
    color: colors.grayText,
  },
  fileInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    color: colors.grayText,
  },
  submitButton: {
    backgroundColor: colors.blue,
    padding: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.02,
    alignItems: 'center',
    width: sizes.screenWidth * 0.3,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  marginBottom: {
    marginBottom: sizes.screenHeight * 0.01,
  },
  chooseText: {
    color: colors.grayText,
    fontWeight: 'bold',
    fontSize: fontSize.h6,
    backgroundColor: colors.disabledBg2,
    paddingRight: sizes.screenHeight * 0.011,
    paddingLeft: sizes.screenHeight * 0.011,
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: sizes.screenHeight * 0.03,
  },
});
