import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  image: { width: '100%', height: '40%' },
  content: { flex: 1, paddingHorizontal: 20, justifyContent: 'center' },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 25,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#C49660',
  },
  button: {
    backgroundColor: '#C49660',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  terms: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
  },
  link: {
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default styles;
