const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (messageChar >= 'A' && messageChar <= 'Z') {
        const messageCharCode = messageChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedCharCode = (messageCharCode + keyCharCode) % 26;
        encryptedMessage += String.fromCharCode(encryptedCharCode + 'A'.charCodeAt(0));
        keyIndex++;
      } else {
        encryptedMessage += messageChar;
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];
      if (encryptedChar >= 'A' && encryptedChar <= 'Z') {
        const encryptedCharCode = encryptedChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26;
        decryptedMessage += String.fromCharCode(decryptedCharCode + 'A'.charCodeAt(0));
        keyIndex++;
      } else {
        decryptedMessage += encryptedChar;
      }
    }

    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
