const questions = [

  {
  id: 100,
  // type: "matchingImg",
  question: "Задание. <p style=font-weight:normal><br> Перед вами 15 заданий различных уровней сложности по 5 группам. <br>Задания могут содержать вопросы: по выбору одного или нескольких правильных ответов, на установление соответствия, вставку пропущенных слов. <br><br>Ваша задача: набрать за всю игру не менее 1300 призовых очков. <br> В этом случае на экране появится сообщение «Поздравляем! Вы успешно завершили данный этап!». <br><br> Если вы набрали малое количество очков (менее 1300) – то игру необходимо пройти повторно (до 10 попыток). <br><br>Время прохождения игры - 20 мин. Кликните на кнопку <img src=../img/ArrowRight.png>, чтобы начать задания. ",
  // left: ['Резец','Фреза','Сверло','Метчик','Плашка'],
  // options: ["img6", "img7", "img8", "img9", "img10"],
  // cost: 100,
},
{
  id: 0,
  type: "matchingImg",
  question: "<p style=font-size:18px> 1. Установите соответствие между изображениями и видами режущего инструмента (100 баллов). <br><br><p style=font-weight:normal;font-size:18px> Кликайте на вариант в левом и соответствующий ему вариант в правом столбце. <br>Выбранные ответы перемещаются вниз. <br>Верные окрашиваются в зеленый, неверные в красный цвет. Баллы начисляются за полностью верный ответ.<br></br>",
  left: ['Резец','Фреза','Сверло','Метчик','Плашка'],
  options: ["img6", "img7", "img8", "img9", "img10"],
  cost: 100,
},
{
  id: 1,
  type: 'matchingImg',
  question: "<p style=font-size:18px>2. Установите соответствие между изображениями и видами технологических приспособлений (100 баллов). <br><br><p style=font-weight:normal;font-size:18px> Кликайте на вариант в левом и соответствующий ему вариант в правом столбце. <br>Выбранные ответы перемещаются вниз. <br>Верные окрашиваются в зеленый, неверные в красный цвет. Баллы начисляются за полностью верный ответ.<br></br>",
  left: ["Станочное приспособление", "Вспомогательный инструмент", "Сборочное приспособление", "Контрольное приспособление", "Приспособления для захвата заготовок"],
  options: ["img11", "img12", "img13", "img14", "img15"],
  correct: "",
  cost: 100,
},
{
  id: 2,
  type: 'matchingImg',
  question: "<p style=font-size:18px>3. Установите соответствие между изображениями и видами измерительного инструмента (100 баллов). <br><br><p style=font-weight:normal;font-size:18px> Кликайте на вариант в левом и соответствующий ему вариант в правом столбце. <br>Выбранные ответы перемещаются вниз. <br>Верные окрашиваются в зеленый, неверные в красный цвет. Баллы начисляются за полностью верный ответ. <br></br>",
  left: ["Микрометр", "Штангенциркуль", "Нутромер", "Кронциркуль", "Штангенглубиномер"],
  options: ["img16", "img17", "img18", "img19", "img20"],
  cost: 100,
},
{
  id: 3,
  type: 'matchingImg',
  question: "<p style=font-size:18px>4. Установите соответствие между изображениями и видами металлорежущих станков (150 баллов). <br><br><p style=font-weight:normal;font-size:18px> Кликайте на вариант в левом и соответствующий ему вариант в правом столбце. <br>Выбранные ответы перемещаются вниз. <br>Верные окрашиваются в зеленый, неверные в красный цвет. Баллы начисляются за полностью верный ответ. <br></br>",
  left: ["Токарный станок", "Сверлильный", "Шлифовальный станок", "Фрезерный станок", "Протяжной  станок"],
  options: ["img1", "img2", "img3", "img4", "img5"],
  correct: "",
  cost: 150,
},
{
  id: 4,
  type: 'one_of',
  question: "<p style=font-size:18px>5. Укажите фактор, влияющий на выбор технологических приспособлений (150 баллов). <br><br><p style=font-weight:normal;font-size:18px>Выберите единственно правильный ответ.</p><br></br> ",
  options: ["Тип производства", "Материал заготовки", "Твердость заготовки", "Использование СОЖ ", "Высота станка"],
  correct: "Тип производства",
  cost: 150,
}, 
{
  id: 5,
  type: 'one_of',
  question: "<p style=font-size:18px>6. Укажите критерий, влияющий на выбор материала для изготовления режущей части инструмента (150 баллов). <br><br><p style=font-weight:normal;font-size:18px>Выберите единственно правильный ответ.</p> <br></br>",
  options: ["Частота использования инструмента", "Стоимость станка", "Твердость державки инструмента", "Использование станке по мощности", "Температура нагрева шпинделя станка"],
  correct: "Частота использования инструмента",
  cost: 150,
}, 
{
  id: 6,
  type: 'many',
  question: '<p style=font-size:18px>7. Укажите типы микрометров (200 баллов). <br><br><p style=font-weight:normal;font-size:18px>Выберите все правильные ответы</p> <br></br>',
  options: ['Гладкие','Рычажные','Поворотные','Листовые','Призматические','Наклонные','Цилиндрические'],
  correct: ['Гладкие','Рычажные','Листовые','Призматические'],
  cost: 200,
},
{
  id: 7,
  type: 'many',
  question: '<p style=font-size:18px>8. Укажите типы фрезерных станков (200 баллов). <br><br><p style=font-weight:normal;font-size:18px>Выберите все правильные ответы</p><br></br>',
  options: ['Барабанно-фрезерные','Вертикально-фрезерные','Наклонно-фрезерные','Продольные одностоечные','Вертикальные бесконсольные','Горизонтальные бесконсольные','Разные фрезерные'],
  correct: ['Барабанно-фрезерные','Вертикально-фрезерные','Продольные одностоечные','Вертикальные бесконсольные','Разные фрезерные'],
  cost: 200,
},
{
  id: 8,
  type: 'many',
  question: '<p style=font-size:18px>9. Укажите типы станочных приспособлений (200 баллов). <br><br><p style=font-weight:normal;font-size:18px>Выберите все правильные ответы</p><br></br>',
  options: ['Универсальные','Универсальные безналадочные','Универсальные неразборные','Универсально-сборные','Специализированные наладочные','Специализированные безналадочные','Неразборные специальные'],
  correct: ['Универсальные','Универсальные безналадочные','Универсально-сборные','Специализированные наладочные','Неразборные специальные'],
  cost: 200,
},
{
  id: 9,
  type: 'many',
  question: '<p style=font-size:18px>10. Укажите факторы, влияющие на выбор металлорежущего оборудования для реализации технологического процесса (250 баллов). <br><br><p style=font-weight:normal;font-size:18px>Выберите все правильные ответы</p><br></br> ',
  options: ['Объем выпускаемой продукции','Стоимость затрат на расходные материалы','Требования к точности, качеству и экономичности обработки','Использование станке по мощности и загрузке','Стоимость станка','Ориентацию на применение станков отечественного производства','Удобство демонтажа станка',],
  correct: ['Объем выпускаемой продукции','Требования к точности, качеству и экономичности обработки','Использование станке по мощности и загрузке','Стоимость станка','Ориентацию на применение станков отечественного производства'],
  cost: 250,
},
{
  id: 10,
  type: 'many',
  question: '<p style=font-size:18px>11. Укажите типы фрез (250 баллов). <br><br><p style=font-weight:normal;font-size:18px>Выберите все правильные ответы</p><br></br> ',
  options: ['Торцовые','Шпоночные','Протяжные','Концевые','Фасонные','Наклонные','Отрезные'],
  correct: ['Торцовые','Шпоночные','Концевые','Фасонные','Отрезные'],
  cost: 250,
},
{
  id: 11,
  type: 'many',
  question: '<p style=font-size:18px>12. Укажите критерии, влияющий на выбор измерительного инструмента (250 баллов). <br><br><p style=font-weight:normal;font-size:18px>Выберите все правильные ответы</p><br></br> ',
  options: ['Величина допуска на изготовление измеряемого размера','Номинальный размер','Температурный режим предприятия','Допускаемая погрешность измерения детали','Общий контур детали'],
  correct: ['Величина допуска на изготовление измеряемого размера','Номинальный размер','Допускаемая погрешность измерения детали','Общий контур детали'],
  cost: 250,
},
{
  id: 12,
  type: 'choice',
  question: '<p style=font-size:18px>13. Вставьте пропущенные слова, выбрав их из предложенного списка (300 баллов)<br></br>',
  offer: '<br><br>Наиболее технически и экономически подходящее оборудование:<br>• в единичном производстве – {0}<br>• в серийном – {1}<br>• в массовом – {2}',
  options: {0: ['универсальное', 'станки с ЧПУ', 'автоматы'], 1:['обрабатывающие центры', 'роторные линии', 'автоматы'], 2:['автоматические линии', 'станки с ЧПУ', 'универсальное']},
  correct: {0: 'универсальное', 1: 'обрабатывающие центры', 2:'автоматические линии'},
  cost: 300,
},
{
  id: 13,
  type: 'choice',
  question: "<p style=font-size:18px>14. Вставьте пропущенные слова, выбрав их из предложенного списка (300 баллов)<br></br>",
  offer: "<br><br>В качестве материала режущей части применяют: инструментальные углеродистую сталь {0} для сверл, метчиков, плашек, инструментальную легированную сталь {1} для протяжек и фрез; быстрорежущую сталь {2} для обработки вязких, но прочных сталей",
  options: {0: ['У10', 'Р6М5', 'ХВГ'], 1:['ХВГ', 'Р18', '65Г'], 2:['Р6М5', 'У7', '9ХС']},
  correct: {0: 'У10', 1: 'ХВГ', 2:'Р6М5'},
  cost: 300,
}, 
{
  id: 14,
  type: 'choice',
  question: '<p style=font-size:18px>15. Вставьте пропущенные слова, выбрав их из предложенного списка (300 баллов)<br></br>',
  offer: '<br><br>Наиболее технически и экономически подходящее приспособление:<br>• в единичном производстве – {0}<br>• в серийном – {1}<br>• в массовом – {2}',
  options: {0: ['универсальное', 'многоместное', 'автоматическое'], 1:['наладочное', 'приспособление-спутник', 'безналадочное'], 2:['специальное', 'сборное', 'универсальное']},
  correct: {0: 'универсальное', 1: 'наладочное', 2:'специальное'},
  cost: 300,
},
];
  const exercise =[
    {
      id:"0",
      text:"<p class='text-exercise'>"+"<br> <b>Режущий инструмент </b> – инструмент, предназначенный для изменения формы и размеров заготовки путём удаления части материала в виде стружки с целью получения готовой детали или полуфабриката."
      
    }
  ];


