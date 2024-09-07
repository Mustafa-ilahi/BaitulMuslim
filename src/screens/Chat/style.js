import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#68a063',
    padding: sizes.screenHeight * 0.03,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  backButton: {
    paddingRight: 10,
  },
  backText: {
    fontSize: 20,
    color: '#fff',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: sizes.screenWidth * 0.05,
    marginRight: sizes.screenWidth * 0.02,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.03,
  },
  messageWrapperRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: sizes.screenHeight * 0.03,
  },
  messageProfileImage: {
    width: 50,
    height: 53,
    borderRadius: sizes.screenWidth * 0.5,
    marginRight: 5,
    marginLeft: 5,
  },
  receiverMessage: {
    backgroundColor: '#C0EFBA',
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  senderMessage: {
    backgroundColor: '#E8CD96',
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  messageText: {
    fontSize: 16,
    color: colors.grayText,
  },
  messageDate: {
    fontSize: fontSize.small,
    color: '#555',
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    position: 'relative',
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
    paddingRight: 40,
    color: colors.black,
    marginStart: sizes.screenWidth * 0.02,
  },
  sendButton: {
    position: 'absolute',
    right: sizes.screenWidth * 0.05,
    top: sizes.screenHeight * 0.03,
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
  headerBack: {
    height: 15,
    width: 10,
  },
});
