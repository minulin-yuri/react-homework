import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import MyTheme from './variables/myTheme';
import Header from './components/Header/Header';
import Router from './components/Router/Router';



function App() {

  // //создание рефа для текстового поля
  // const inputRef = useRef(null);

  // //state для списка сообщений
  // const [messageList, setMessageList] = useState([]);
  // //state для текста, введенного пользователем
  // const [text, setText] = useState('');

  // /**
  //  * Функция для получения текста с текстового поля
  //  * @param {*} event 
  //  */
  // const handleChange = (event) => {
  //   setText(event.target.value);
  // }

  // /**
  //  * Функция для добавления сообщения в список
  //  * при нажатии кнопки
  //  * @returns 
  //  */
  // const handleSubmit = () => {
  //   if (text.length === 0) {
  //     return;
  //   }
  //   const newMessage = Object.assign({
  //     'id': messageList.length,
  //     'author': 'human',
  //     'text': text,
  //   });
  //   setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  //   setText('');
  // }

  // /**
  //  * Функция для добавления ответа на сообщение
  //  */
  // useEffect(() => {
  //   //если сообщений до этого не было
  //   if (messageList.length === 0) {
  //     //бот задает первым вопрос
  //     const botAnswer = Object.assign({
  //       'id': messageList.length,
  //       'author': 'bot',
  //       'text': 'What can I help you?',
  //     });
  //     setMessageList((prevMessageList) => [...prevMessageList, botAnswer]);
  //   } else {
  //     //если пользователь уже написал сообщение
  //     if (messageList[(messageList.length - 1)].author !== 'bot') {
  //       //бот отвечает
  //       const botAnswer = Object.assign({
  //         'id': messageList.length,
  //         'author': 'bot',
  //         'text': 'Your request has been successfully sent!',
  //       });
  //       setTimeout(() => {
  //         setMessageList((prevMessageList) => [...prevMessageList, botAnswer])
  //       }, 1500);

  //     }
  //   }
  //   //добавление фокуса к текстовому полю
  //   inputRef.current?.focus();

  // }, [messageList]);

  return (
    <ThemeProvider theme={MyTheme}>
      <header>
        <Header />
        <Router />
      </header>
      <div className="App">

      </div >
    </ThemeProvider >
  );
}

export default App;
