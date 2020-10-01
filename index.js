class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[&\/\\#,+()$~%.":*?<>^{}!@]/g, '');
  }

  static titleize(string){
    string.toLowerCase().split(' ');
    for (let i = 0; i > string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1):
    }
    return string.join(' ');
  }
}
