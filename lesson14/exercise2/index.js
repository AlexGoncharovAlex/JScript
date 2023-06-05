/**
 * @return {object}
 */
let sender = 'Gromcode';
let message = 'Just learn it';
export function createMessenger() {
  function setMessage(message) {
    message = message;
  }

  function setSender(sender) {
    sender = sender;
  }

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
