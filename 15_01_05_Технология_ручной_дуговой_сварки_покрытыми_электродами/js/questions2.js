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
    question: `Задание 1. Изучите текст, описывающий технологию ручной дуговой сварки. 
    <br><br>
      <p style="font-weight: normal;">
        Зажигание (возбуждение) дуги производится двумя способами. 
        При первом способе электрод перпендикулярно подводят к месту начала сварки и после 
        сравнительно легкого прикосновения к изделию отводят вверх на расстояние 2...5 мм.
      </p>
      <p style="font-weight: normal;">
        Второй способ осуществляется резким кратковременным контактным скольжением электрода
        по свариваемым поверхностям образца и отводом вверх на 2…5 мм. Если дуга не зажглась
        или произошел ее обрыв, повторное зажигание дуги следует осуществлять впереди кратера
        или эрозионного следа на чистом металле.
      </p>`,
    options: []
  },
  {
    id: 1,
    question: 'Задание 2. Ознакомьтесь с рисунком схема сварки наклонным электродом. Соотнести цифры и название элемента сварки.',
    options: ["продолжить"],
    correct: "продолжить",
    dnd: true,
    items: [
      'дуга',
      'шов',
      'электрод',
      'штанга',
      'обойма'],
    droppable: ['1 -  ', '2 -  ', '3 -  ', '4 -  ', '5 -  '],
    drop_style: ['justify-content: left;', 'justify-content: left;', 'justify-content: left;', 'justify-content: left;', 'justify-content: left;'],
    answers: ['0-1', '1-0', '2-2', '3-4', '4-3'],
    img: 'img1'
  },
  {
    id: 2,
    question: `Задание 3. Ознакомьтесь с рисунком. Укажите что обозначается на рисунке под цифрой 6.
      <br>
      <div style="display: block; text-align: center">
        <img src="../img/2_2/img2.jpg" width="300px">
        <div style="text-align:center">Рисунок 2</div>
      </div>
      <p style="text-align: justify; text-indent: 40px; font-weight: normal;">На рисунке показана схема сварки лежачим электродом. Что обозначено под цифрой 6 на схеме, выберете один вариант ответа:</p>`,
    options: ['Контакт', 'Электрод', 'Слой меди', 'Дуга'],
    correct: 'Контакт',
    nextButton: true
  },
  {
    id: 3,
    question: `Задание 4. Ознакомьтесь с текстом Задания. Выберите правильный ответ.
        <br>
        <p style="text-align: justify; text-indent: 40px; font-weight: normal;">
            Определить ориентировочные режимы ручной дуговой сварки стали, если толщина
            металла 4 мм: силу тока, А; диаметр покрытого электрода; силу тока таврого
            соединения, А
        </p>`,
    options: ["продолжить"],
    correct: "продолжить",
    dnd: true,
    items: ['20-50', '40-100', '90-120', '140-180', '1,5 -2,0', '2,0-3,-', '3-4', '4-5', '60-80', '80-100', '90-120', '130-140', '150-160'],
    droppable: ['Сила тока, А ', 'Диаметр покрытого электрода, мм ', 'Сила тока при сварке таврого соединения,А ', 'обработки и сокращает', '.'],
    answers: ["0-2","1-6", "2-10"],
    nextButton: false,
    line:true
  },
  {
    id: 4,
    question: `Задание 5. Изучите текст, описывающий электроды для ручной сварки.
        <br>
        <p style="font-weight: normal;">
            Для ручной дуговой сварки применяются плавящиеся покрытые электроды и неплавящиеся электроды из вольфрама, графита или электротехнического угля.
            Плавящиеся покрытые электроды представляют собой металлический стержень, имеющий на поверхности покрытие, адгезионно связанное с металлом электрода.
            Материалы, входящие в состав покрытия, обеспечивают устойчивое горение дуги,
            защиту зоны сварки от воздействия кислорода воздуха и влияют на металлургиче-
            ские процессы в сварочной ванне. 
        </p>`,
    options: [],
  },
  {
    id: 5,
    question: 'Задание 6. Ознакомьтесь с текстом задания. Дополните правильный ответ ',
    isSelectText: true,
    options: [
      "1) для сварки углеродистых и низколегированных кон- струкционных сталей с временным сопротивлением разрыву до 600 МПа", 
      "2) для сварки легированных конструкционных сталей с временным сопротивлением разрыву свыше 600 МПа", 
      "3) для сварки легированных теплоустойчивых сталей", 
      "4) для сварки высоколегированных статей с особыми свойствами", 
      "5) для наплавки поверхностных слоев с особыми свойствами", 
    ],
    correct: ["У", "Л", "Т", "В", "Н"],
    nextButton: false
  },
  {
    id: 6,
    question: `Задание 7. Ознакомьтесь с текстом задания. 
      <br>
      <p style="font-weight: normal;">
        Какие марки электродов из перечисленных подходят для сварки и наплавки конструкционных чугунов по ГОСТ 30430-96:
      </p>`,
    options: ['1. ЭЧ -1', '2. ОЗА -2', '3. ЦЧ – 5', '4. Комсомолец-100'],
    correct: ['1. ЭЧ -1', '3. ЦЧ – 5'],
    nextButton: true
  },
]