function alphabetPosition(text) {
    let tes = text.split('');
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0, len = text.length; i < len; i++) {
      tes[i] = alphabet.indexOf(tes[i].toLowerCase());
    }
    return tes.filter(n => { 
      if(n > 1) 
        return n; 
    } ).join(' ');
  }
  
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));
  