function alphabetPosition(text) {
    let tes = text.split('');
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0, len = text.length; i < len; i++) {
      tes[i] = alphabet.indexOf(tes[i].toLowerCase()) + 1;
    }
    return tes.filter(n => { 
      if(n > 0) 
        return n; 
    } ).join(' ');
  }