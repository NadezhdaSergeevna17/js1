let number = Math.floor(3 * Math.random()) + 1; // случайное число от 1 до 15
console.log(number)

// ограничить кол-во попыток до 3х
let count = 2;

document.getElementById('check').onclick = function () {
  if (count > 0) {  // если попыток больше нуля, то выполняется следующее 
    let usernum = document.getElementById('mynum').value;
    usernum = parseInt(usernum);
    let out = document.getElementById('out');

    if (usernum == number) {
      out.innerHTML = 'Ты угаладала! Поздравляю! А это значит, что ты самая милая писька на свете!!!';
    }
    else if (usernum > number) {
      out.innerHTML = 'Слишком много!';
    }
    else if (usernum < number) {
      out.innerHTML = 'Слишком мало!';
    }
    count = count - 1; // с каждой попыткой отнимать 1
    document.getElementById('count').innerHTML = 'Осталось попыток ' + count; // выводим сколько осталось попыток

  }
  else {
    alert('Кончились попытки, вы проиграли');
  }
}