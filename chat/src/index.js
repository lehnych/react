import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import {Layout, MessageList, ChatList} from './components';
import './index.css';

const light = createTheme({
    theme: {
        color: "red",
    },
});

ReactDOM.render(
    <ThemeProvider theme={light}>
        <Layout
            chats={<ChatList />}
            messages={<MessageList />}
        />
    </ThemeProvider>,
    document.getElementById('root')
);
