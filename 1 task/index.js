const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return(seconds) => {
    const timer = setInterval(() => {
      // преобразуем входны данные в секунды, минуты и часы
      let sec = Math.trunc(seconds%60);
      let min = Math.trunc(seconds/60%60);
      let h = Math.trunc(seconds/60/60%60);

      if(seconds <= 0) {                                // проверяем значение 
        clearInterval(timer);                           // останавливаем таймер
        timerEl.textContent = 'Время закончилось'       // уведомляем пользователя
      }
      else {
        let textStr;                                    // задаем переменную, где будем хранить текстовое отображение
        const basicStr = `${min} минут, ${sec} секунд.` // записываем стандартное значение, которое не изменяется
        switch(h) {                                     // проверяем входную переменную и выводим соответствующую строчку
          case 1:
            textStr = `${h} час, ${basicStr}`
            break;
          case 2:
          case 3:
          case 4:
            textStr =`${h} часа, ${basicStr}`
            break;
          default:
            textStr = `${h} часов, ${basicStr}`
            break;
        }

        const numericStr = (h <= 9) ? `0${h}:${min}:${sec}` : `${h}:${min}:${sec}`;   // задаем числовое значение таймера
        let resultStr = `${numericStr} - ${textStr}`                                  // задаем общую строчку
        timerEl.textContent = resultStr;                                              // выводим результат на страницу
      }
      --seconds                                         // уменьшаем значение
    }, 1000)                                            // делаем шаг интервала
  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
// Очистите input так, чтобы в значении
// оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9\.]/g,'') // заменяем текущее значение инпута только на цифры
})

buttonEl.addEventListener('click', () => {
  const seconds = parseInt(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});