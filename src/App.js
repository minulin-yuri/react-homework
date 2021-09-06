import { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message';

function App() {
  //state для списка сообщений
  const [messageList, setMessageList] = useState([]);
  //state для текста, введенного пользователем
  const [text, setText] = useState('');

  /**
   * Функция для получения текста с текстового поля
   * @param {*} event 
   */
  const handleChange = (event) => {
    setText(event.target.value);
  }

  /**
   * Функция для добавления сообщения в список
   * при нажатии кнопки
   * @returns 
   */
  const handleSubmit = () => {
    if (text.length === 0) {
      return;
    }
    const newMessage = Object.assign({
      'id': messageList.length,
      'author': 'human',
      'text': text,
    });
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
    setText('');
  }

  /**
   * Функция для добавления ответа на сообщение
   */
  useEffect(() => {
    if (messageList.length === 0) {
      const botAnswer = Object.assign({
        'id': messageList.length,
        'author': 'bot',
        'text': 'What can I help you?',
      });
      setMessageList((prevMessageList) => [...prevMessageList, botAnswer]);
    } else {
      if (messageList[(messageList.length - 1)].author !== 'bot') {
        const botAnswer = Object.assign({
          'id': messageList.length,
          'author': 'bot',
          'text': 'Your request has been successfully sent!',
        });
        setTimeout(() => {
          setMessageList((prevMessageList) => [...prevMessageList, botAnswer])
        }, 1500);

      }
    }
  }, [messageList]);

  return (
    <div className="App">
      <section className="messages">
        <div className="message-list">
          <Message messageList={messageList} />
        </div>
        <form className="add-message">
          <textarea className="new-message" value={text} onChange={handleChange} />
          <button className="send-message" type="button" onClick={handleSubmit}>Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
