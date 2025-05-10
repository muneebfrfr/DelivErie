import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 24,
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  header: {
    marginTop: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
  },
  loginButton: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#C49660',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  or: {
    marginVertical: 16,
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 24,
  },
  socialButton: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: '#f1f1f1',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  bottomImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  emailButton: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  emailButtonText: {
    color: '#C49660',
  },
});
export default styles;
