let slideIndex = 0;
function setButtons() {
  // Устанавливаем обработчики событий для кнопок
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
}
// Функция для показа предыдущего слайда
function showPreviousSlide() {
  // Получаем элементы слайдера
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const slides = Array.from(slider.querySelectorAll('img'));
  const slideCount = slides.length;
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const slides = Array.from(slider.querySelectorAll('img'));
  const slideCount = slides.length;
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const slides = Array.from(slider.querySelectorAll('img'));
  const slideCount = slides.length;
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
function start() {
  updateSlider()
  setButtons()
}

// Инициализация слайдера
// updateSlider();
const questions = [
{
  id: 0,
  question: 'Задание. Изучить методы поиска неисправностей в радиоэлектронной технике, составить алгоритм поиска неисправности для электронного устройства. <br><br><p style="font-weight: normal;">Алгоритм - это набор инструкций, описывающих порядок действий специалиста для достижения результата решения задачи за конечное число действий. Попробуйте справиться со следующей задачей.',
  options:[]
},
{
  id: 1,
  question: 'Задание 1. Один мастер за алгоритм выполнения ремонта лазерного принтера выдал следующую последовательность действий. Исправьте алгоритм операций так, чтобы принтер был отремонтирован.',
  options: ["продолжить"],
  correct: "продолжить",
  dnd: true,
  items: [
  'Отключить принтер от сети',
  'Выполнить операции по снятию картриджа из лазерного принтера',
  'Разобрать картридж',
  'Выполнить отчистку картриджа от остатков тонера',
  'Очистить отсек для отработанного тонера',
  'Выполнить замену неисправных элементов картриджа',
  'Собрать картридж и проверить его работоспособность, выполнив тест проверки вращения барабана'],
  droppable: ['1 -  ','2 -  ','3 -  ','4 -  ','5 -  ','6 -  ','7 -  '],
  drop_style: ['justify-content: left;','justify-content: left;','justify-content: left;','justify-content: left;','justify-content: left;','justify-content: left;','justify-content: left;'],
  answers: ['0-0','1-1','2-2','3-3','4-4','5-5','6-6']
},
{
  id: 2,
  question: 'Задание2. Сопоставьте алгоритм проверки биполярного p-n-p транзистора с помощью цифрового мультиметра с соответствующим рисунком.<br><div style="display: flex; justify-content: space-around; flex-wrap: wrap"><img src="../img/2_2/img1.jpg" width="300px"><img src="../img/2_2/img2.jpg" width="300px"><div style="width: 50%; text-align:center">Рисунок 1</div><div style="width: 50%;text-align:center">Рисунок 2</div></div>'+
  '<span style="font-weight:normal">Проверка мультиметром биполярного p-n-p транзистора состоит из таких последовательных операций:'+
'<p style="text-align: justify;text-indent: 40px;">1)  Проверяем обратное сопротивление, для этого присоединяем «плюсовой» щуп прибора к его базе.'+
'<p style="text-align: justify;text-indent: 40px;">2)  Тестируется эмиттерный переход, для этого «минусовой» щуп подключаем к эмиттеру.'+
'<p style="text-align: justify;text-indent: 40px;">3)  Для проверки коллектора перемещаем на него «минусовой» щуп.'+
'<p style="text-align: justify;">Результаты этих измерений должны показать сопротивление в пределах значения «1».'+
'<p style="text-align: justify;">Для проверки прямого сопротивления меняем щупы местами:'+
'<p style="text-align: justify;text-indent: 40px;">1)  «Минусовой» щуп прибора присоединяем к базе.'+
'<p style="text-align: justify;text-indent: 40px;">2)  «Плюсовой» щуп поочередно перемещаем от эмиттера к коллектору.'+
'<p style="text-align: justify;text-indent: 40px;">3)  На экране мультиметра показатели сопротивления должны составить от 500 до 1200 Ом.'+
'<p style="text-align: justify;">Данные показания свидетельствуют о том, что переходы не нарушены, транзистор технически исправен.</span>',
  options: ["Рисунок 1","Рисунок 2"],
  correct: "Рисунок 2",
  nextButton: true
},
{
  id:3,
  question: 'Задание 3. Укажите правильный порядок действий и выберите соответствующую блок-схему алгоритма при ремонте блока питания ',
  options: ["продолжить"],
  correct: "продолжить",
  dnd: true,
  items: [
  'устанавливается неработоспособность аппаратуры',
  'определяется отказавший блок с точностью до сборочной единицы',
  'в отказавшем блоке находится неисправный элемент',
  'восстанавливается отказавший блок (элемент)',
  'проверяется работоспособность аппаратуры',
  'производится настройка аппаратуры'],
  droppable: ['1 -  ','2 -  ','3 -  ','4 -  ','5 -  ','6 -  '],
  drop_style: ['justify-content: left;','justify-content: left;','justify-content: left;','justify-content: left;','justify-content: left;','justify-content: left;'],
  answers: ['0-0','1-1','2-2','3-3','4-4','5-5'],
  img: 'img3'
},
{
  id:4,
  question: 'Задание 4. Выберите соответствующую блок - схему алгоритма ремонта компьютера.<br><div style="display: flex; justify-content: space-around; flex-wrap: wrap"><img src="../img/2_2/img5.jpg" width="300px"><img src="../img/2_2/img6.jpg" width="300px"><div style="width: 50%; text-align:center">А</div><div style="width: 50%;text-align:center">Б</div></div>',
  options: ["А","Б"],
  correct: "Б",
  nextButton: true
},
{
  id: 5,
  question: 'Задание 5. В каком элементе блок - схемы алгоритма поиска неисправностей указывается внешнее проявление дефекта.<br><img src="../img/2_2/img7.jpg">',
  options: ['блок 1','блок 2','блок 3','блок 4','блок 5','блок 6','блок 7','блок 8','блок 9','блок 10','блок 11'],
  correct: 'блок 1',
  nextButton: true
},
{
  id: 6,
  question: 'Задание 6. В каких элементах блок - схемы алгоритма поиска неисправностей указывается замена неисправного радиокомпонента.<br><img src="../img/2_2/img8.jpg">',
  options: ['блок 1','блок 2','блок 3','блок 4','блок 5','блок 6','блок 7','блок 8','блок 9','блок 10','блок 11'],
  correct: ['блок 5','блок 7','блок 10'],
  nextButton: true
},
{
  id: 7,
  question: 'Задание 7. В каких элементах блок - схемы алгоритма поиска неисправностей указывается необходимое действие, например, измерить напряжение, подключить мультиметр и т.д.<br><img src="../img/2_2/img9.jpg">',
  options: ['блок 1','блок 2','блок 3','блок 4','блок 5','блок 6','блок 7','блок 8','блок 9','блок 10','блок 11'],
  correct: ['блок 2','блок 4','блок 8'],
  nextButton: true
},
]