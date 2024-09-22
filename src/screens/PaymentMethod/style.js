import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  title: {
    fontSize: fontSize.h4,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.greenBg,
    marginBottom: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.015,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  tabButton: {
    padding: 3,
    borderWidth: 1.5,
    borderColor: colors.black,
    borderRadius: sizes.screenWidth * 0.3,
    backgroundColor: '#5EB0F6',
  },
  activeTab: {
    backgroundColor: '#5EB0F6',
  },
  tabText: {
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.1,
    padding: sizes.screenHeight * 0.02,
  },
  greenBorder: {
    borderWidth: 2,
    borderRadius: sizes.screenWidth * 0.04,
    borderColor: colors.greenBg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    marginBottom: 10,
  },
  inputGroupHalf: {
    marginBottom: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.grayText,
  },
  input: {
    // borderWidth: 1,
    // borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    color: colors.black,
    backgroundColor: colors.gray,
  },
  inputHalf: {
    padding: 10,
    borderRadius: 8,
    // flex: 1,
    color: colors.black,
    backgroundColor: colors.gray,
  },
  continueButton: {
    backgroundColor: colors.blue,
    padding: 15,
    borderRadius: sizes.screenWidth * 0.05,
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.5,
  },
  continueButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSize.medium,
  },
  dropdown: {
    height: 50,
    borderColor: colors.grayText,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
    color: colors.grayText,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: colors.black,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderBottomWidth: 0.5,
    // borderBottomColor: colors.grayBorder,
  },
  itemText: {
    fontSize: 16,
    // You can set a global color for the text here, but it can also be overwritten in renderItem
  },
});
