import { useEffect, useState, useRef } from 'react';
import './App.scss';
import ChatList from './components/ChatList'
import Message from './components/Message';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles';



function App() {

  //создание рефа для текстового поля
  const inputRef = useRef(null);

  //создание темы
  const myTheme = createTheme({
    palette: {
      primary: {
        main: '#0077B5',
      },
      secondary: {
        main: '#E5E5E5',
      },
    },
  });

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
    //если сообщений до этого не было
    if (messageList.length === 0) {
      //бот задает первым вопрос
      const botAnswer = Object.assign({
        'id': messageList.length,
        'author': 'bot',
        'text': 'What can I help you?',
      });
      setMessageList((prevMessageList) => [...prevMessageList, botAnswer]);
    } else {
      //если пользователь уже написал сообщение
      if (messageList[(messageList.length - 1)].author !== 'bot') {
        //бот отвечает
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
    //добавление фокуса к текстовому полю
    inputRef.current?.focus();

  }, [messageList]);

  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <section className="charts">
          <ChatList />
          <div className="new-chat">
            <Button variant="contained" color="primary">
              Start new chat
            </Button>
          </div>
        </section>
        <section className="messages">
          <div className="message-list">
            <Typography className="chat-header">
              Chat with <span>bot</span>
            </Typography>
            <Divider />
            <Message messageList={messageList} />

          </div>

          <form className="add-message">
            <input
              className="new-message"
              value={text}
              onChange={handleChange}
              placeholder='Write your message'
              ref={inputRef} />
            <button className="add-file">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.15">
                  <path d="M21 11.4385L12.8446 19.4644C11.8455 20.4477 10.4904 21.0001 9.07749 21.0001C7.66455 21.0001 6.30948 20.4477 5.31039 19.4644C4.31129 18.4812 3.75 17.1476 3.75 15.7571C3.75 14.3666 4.31129 13.033 5.31039 12.0498L13.4658 4.02381C14.1319 3.36831 15.0352 3.00006 15.9772 3.00006C16.9192 3.00006 17.8225 3.36831 18.4886 4.02381C19.1547 4.67931 19.5289 5.56835 19.5289 6.49536C19.5289 7.42237 19.1547 8.31141 18.4886 8.96691L10.3243 16.9929C9.99129 17.3206 9.5396 17.5048 9.06862 17.5048C8.59764 17.5048 8.14595 17.3206 7.81291 16.9929C7.47988 16.6651 7.29279 16.2206 7.29279 15.7571C7.29279 15.2936 7.47988 14.8491 7.81291 14.5213L15.3471 7.11543" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </button>
            <button
              className="send-message"
              type="button"
              onClick={handleSubmit}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="6.10352e-05" width="32" height="32" rx="4" fill="url(#paint0_linear)" />
                <g clip-path="url(#clip0)">
                  <path d="M21.6668 10.3334L14.3335 17.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.6668 10.3334L17.0002 23.6667L14.3335 17.6667L8.3335 15L21.6668 10.3334Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear" x1="16" y1="6.10352e-05" x2="16" y2="32.0001" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0077B5" />
                    <stop offset="1" stop-color="#0E6795" />
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white" transform="translate(7 9.00006)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </form>
        </section>
      </div >
    </ThemeProvider >
  );
}

export default App;
