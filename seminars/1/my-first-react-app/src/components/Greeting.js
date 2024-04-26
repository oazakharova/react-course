function Greeting() {
  const currentTime = new Date().getHours();
  let greetingText = "";

  if (currentTime < 12) {
    greetingText = "Доброе утро";
  } else if (currentTime < 18) {
    greetingText = "Добрый день";
  } else {
    greetingText = "Добрый вечер";
  }

  return <h1>{greetingText} от компонента Greeting</h1>;
}

export default Greeting;
