/**
 * @return {object}
 */
export default function createMessenger() {
  function setMessage(messageAbout) {
    message = messageAbout;
  }

  let sender = 'Gromcode';
  function setSender(senderName) {
    sender = senderName;
  }

  let message = 'Just learn it';
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
