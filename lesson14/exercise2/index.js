/**
 * @return {object}
 */
export function createMessenger() {
  function setMessage(message) {}
  const message = 'Just learn it';

  function setSender(sender) {}
  const sender = 'Gromcode';

  function sendMessage(name) {
    console.log(
      `Hello, ${name}! ${message}! This message was sent by ${sender}`
    );
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}
const messanger3 = createMessenger();