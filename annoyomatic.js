const annoyer = {
  phrases: ['literally', 'cray cray', 'I can\'t even', 'Totes!', 'YOLO', 'Can\'t Stop, Won\'t Stop'],
  pickPhrase() {
    const { phrases } = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId);
  }
};