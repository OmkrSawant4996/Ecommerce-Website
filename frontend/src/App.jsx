import './App.css'
import { LogInScreen } from './components/index'
import axios from "axios"

function App() {

  const signInUser = async (userName, password, loginId, firstName, lastName) => {

    const credential = `${firstName.charAt(0) + lastName.charAt(0)}`;
    const userData = { username: userName, password, loginid: loginId, firstname: firstName, lastname: lastName, cred: credential };
    try {
      const response = await axios.post('http://localhost:5000/insertUser', userData);
  
      if (response.status === 201) {
        showMessage(response.data, 'success');
      } else {
        showMessage(response.data, 'error');
      }
    } catch (error) {
      console.error('Error occurred while signing in:', error);
      showMessage('An error occurred while signing in. Please try again later.', 'error');
      throw error;
    }
  };
  
  const logInUser = async (userName, password) => {
    const userData = { userdetail: userName, password: password };
    try {
      const response = await axios.post('http://localhost:5000/loginUser', userData);
      if (response.data) {
        if (response.status === 201) {
          showMessage(response.data, 'success');
        } else {
          showMessage(response.data, 'error');
        }
      }
    } catch (error) {
      throw error;
    }
  };
  

  return (
    <>
      <LogInScreen signInUser={signInUser} logInUser={logInUser} />
    </>
  )
}

export default App
