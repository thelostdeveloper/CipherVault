function caesarCipher(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  }
  
  function vigenereCipher(plaintext, keyword) {
    let ciphertext = "";
    let keywordIndex = 0;
    for (let i = 0; i < plaintext.length; i++) {
      let charCode = plaintext.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        let keywordCharCode = keyword.charCodeAt(keywordIndex % keyword.length);
        ciphertext += String.fromCharCode(((charCode - 65 + keywordCharCode - 65) % 26) + 65);
        keywordIndex++;
      } else if (charCode >= 97 && charCode <= 122) {
        let keywordCharCode = keyword.charCodeAt(keywordIndex % keyword.length);
        ciphertext += String.fromCharCode(((charCode - 97 + keywordCharCode - 97) % 26) + 97);
        keywordIndex++;
      } else {
        ciphertext += plaintext.charAt(i);
      }
    }
    return ciphertext;
  }
  
  
  function railFenceCipher(text, rails) {
    let fence = [];
    for (let i = 0; i < rails; i++) {
      fence.push([]);
    }
  
    let rail = 0;
    let direction = 1;
  
    for (let i = 0; i < text.length; i++) {
      fence[rail].push(text.charAt(i));
      rail += direction;
  
      if (rail === 0 || rail === rails - 1) {
        direction = -direction;
      }
    }
  
    let result = "";
    for (let i = 0; i < fence.length; i++) {
      result += fence[i].join("");
    }
    return result;
  }
  
  
  export { caesarCipher, vigenereCipher, railFenceCipher };
  
  