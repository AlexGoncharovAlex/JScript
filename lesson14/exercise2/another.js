import { createMessenger } from './index.js';

const messanger1 = createMessenger();
messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcod

const messanger2 = createMessenger();
messanger2.setMessage('You are learning JS and you do it well');
messanger2.sendMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcod

const messanger3 = createMessenger();
messanger3.setMessage('The weather is amazing today');
messanger3.setSender('Anna');
messanger3.sendMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna
