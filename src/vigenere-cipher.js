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

  constructor (machine = true) {
    this.machine = machine;
  };

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    else {
      if (key.length < message.length) {
        for (let i = 0; i < message.length; i++) {
          key += key[i % key.length];
        };
      };
    key = key.toUpperCase();
    let mes = message.toUpperCase().match(/[a-z]/gi);
    if (mes !== null) {
      mes = mes.join('');
    };
    let result = '';
    let num = 0;
    for (let i = 0; i < message.length; i++) {     
      if (message[i].match(/[a-z]/gi) !== null ) {
        let a = mes.charCodeAt(num) - 65;
        let b = key.charCodeAt(num) - 65;
        result += String.fromCharCode(((a + b) % 26) + 65); 
        num = num + 1;
      }
      else { 
        result += message[i];
      };
    };
    if (!this.machine) { 
      return result.split('').reverse().join('');
    }
    else {
      return result;
    };
    };
  };

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    else {
      if (key.length < message.length) {
        for (let i = 0; i < message.length; i++) {
          key += key[i % key.length];
        };
      };
    key = key.toUpperCase();
    let mes = message.toUpperCase().match(/[a-z]/gi);
    if (mes !== null) {
        mes = mes.join('');
    };
    let result = '';
    let num = 0;
    for (let i = 0; i < message.length; i++) {     
      if (message[i].match(/[a-z]/gi) !== null ) {
        let a = mes.charCodeAt(num) - 65;
        let b = key.charCodeAt(num) - 65;
        result += String.fromCharCode(((a + 26 - b) % 26) + 65); 
        num = num + 1;
      }
      else { 
        result += message[i];
      };
    };
    if (!this.machine) { 
      return result.split('').reverse().join('');
    }
    else {
      return result;
    };
  };
  };
}

module.exports = {
  VigenereCipheringMachine
};
