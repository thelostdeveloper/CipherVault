function caesarDecipher(ciphertext, shift) {
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
      let charCode = ciphertext.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        plaintext += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        plaintext += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      } else {
        plaintext += ciphertext.charAt(i);
      }
    }
    return plaintext;
  }
  
  function vigenereDecipher(ciphertext, keyword) {
    let plaintext = "";
    let keywordIndex = 0;
    for (let i = 0; i < ciphertext.length; i++) {
      let charCode = ciphertext.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        let keywordCharCode = keyword.charCodeAt(keywordIndex % keyword.length);
        plaintext += String.fromCharCode(((charCode - 65 - (keywordCharCode - 65) + 26) % 26) + 65);
        keywordIndex++;
      } else if (charCode >= 97 && charCode <= 122) {
        let keywordCharCode = keyword.charCodeAt(keywordIndex % keyword.length);
        plaintext += String.fromCharCode(((charCode - 97 - (keywordCharCode - 97) + 26) % 26) + 97);
        keywordIndex++;
      } else {
        plaintext += ciphertext.charAt(i);
      }
    }
    return plaintext;
  }
  
  function railFenceDecipher(ciphertext, rails) {
    let fence = [];
    for (let i = 0; i < rails; i++) {
      fence.push([]);
    }
  
    let rail = 0;
    let direction = 1;
  
    for (let i = 0; i < ciphertext.length; i++) {
      fence[rail].push(null);
      rail += direction;
  
      if (rail === 0 || rail === rails - 1) {
        direction = -direction;
      }
    }
  
    let currentIndex = 0;
    for (let i = 0; i < rails; i++) {
      for (let j = 0; j < fence[i].length; j++) {
        if (fence[i][j] === null) {
          fence[i][j] = ciphertext.charAt(currentIndex);
          currentIndex++;
        }
      }
    }
  
    rail = 0;
    direction = 1;
    let plaintext = "";
  
    for (let i = 0; i < ciphertext.length; i++) {
      plaintext += fence[rail][0];
      fence[rail] = fence[rail].slice(1);
      rail += direction;
  
      if (rail === 0 || rail === rails - 1) {
        direction = -direction;
      }
    }
  
    return plaintext;
  }
  
  export { caesarDecipher, vigenereDecipher, railFenceDecipher };
  