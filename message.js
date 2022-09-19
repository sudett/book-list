class Message {
  showMsg(msg, type) {
    const element = document.querySelector(`.${type}`)
    element.style.visibility = 'visible';
    element.textContent = msg;

    setTimeout(() => {
      element.style.visibility = 'hidden';
    }, 3000);
  }
}

export default new Message();