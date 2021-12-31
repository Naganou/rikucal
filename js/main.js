'use strict';

console.clear();

{
  const images = [
    'img/riku01.JPG',
    'img/riku02.JPG',
    'img/riku03.JPG',
    'img/riku04.JPG',
    'img/riku05.JPG',
    'img/riku06.JPG',
    'img/riku07.JPG',
    'img/riku08.JPG',
    'img/riku09.JPG',
    'img/riku10.JPG',
    'img/riku11.JPG',
    'img/riku12.JPG',
    'img/riku13.JPG',
    'img/riku14.JPG',
    'img/riku15.JPG',
    'img/riku16.JPG',
    'img/riku17.JPG',
    'img/riku18.JPG',
    'img/riku19.JPG',
    'img/riku20.JPG',
    'img/riku21.JPG',
    'img/riku22.JPG',
    'img/riku23.JPG',
    'img/riku24.JPG',
  ];

  const rholiday = [206,524,]

  const pholiday = [101,303,505,707,1224,1225,]

  const jholiday = [20200101,20200113,20200211,20200223,20200224,20200320,20200429,20200503,20200504,20200505,20200506,20200723,20200724,20200810,20200921,20200922,20201103,20201123,20210101,20210111,20210211,20210223,20210320,20210429,20210503,20210504,20210505,20210722,20210723,20210808,20210809,20210920,20210923,20211103,20211123,20220101,20220110,20220211,20220223,20220321,20220429,20220503,20220504,20220505,20220718,20220811,20220919,20220923,20221010,20221103,20221123,20230101,20230102,20230109,20230211,20230223,20230321,20230429,20230503,20230504,20230505,20230717,20230811,20230918,20230923,20231009,20231103,20231123,];

  const holiday = [20201003,20201004,20201010,20201011,20201017,20201018,20201024,20201025,20201031,20201101,20201103,20201107,20201108,20201114,20201115,20201122,20201123,20201129,20201205,20201206,20201212,20201213,20201219,20201220,20201227,20201229,20201230,20201231,20210101,20210102,20210103,20210104,20210105,20210110,20210111,20210117,20210123,20210124,20210131,20210206,20210207,20210211,20210214,20210221,20210223,20210228,20210306,20210307,20210313,20210314,20210320,20210321,20210328,20210403,20210404,20210410,20210411,20210417,20210418,20210425,20210429,20210502,20210503,20210504,20210505,20210509,20210515,20210516,20210522,20210523,20210529,20210530,20210605,20210606,20210612,20210613,20210619,20210620,20210626,20210627,20210704,20210710,20210711,20210718,20210722,20210723,20210724,20210725,20210731,20210801,20210808,20210809,20210812,20210813,20210814,20210815,20210816,20210817,20210822,20210829,20210904,20210905,20210912,20210919,20210920,20210923,20210926,20211002,20211003,20211009,20211010,20211017,20211023,20211024,20211030,20211031,20211103,20211106,20211107,20211113,20211114,20211120,20211121,20211123,20211128,20211204,20211205,20211211,20211212,20211218,20211219,20211226,20211229,20211230,20211231,20220101,20220102,20220103,20220104,20220109,20220110,20220116,20220122,20220123,20220129,20220130,20220205,20220206,20220211,20220213,20220219,20220220,20220223,20220227,20220305,20220306,20220312,20220313,20220320,20220321,20220327,20220403,20220409,20220410,20220416,20220417,20220423,20220424,20220429,20220501,20220503,20220504,20220505,20220508,20220514,20220515,20220521,20220522,20220528,20220529,20220604,20220605,20220611,20220612,20220618,20220619,20220625,20220626,20220702,20220703,20220710,20220716,20220717,20220718,20220723,20220724,20220731,20220807,20220811,20220812,20220813,20220814,20220815,20220820,20220821,20220827,20220828,20220904,20220910,20220911,20220918,20220919,20220923,20220925,];

  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  function getCalendarHead() {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();

    for (let i = 0; i < n; i++) {
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
        isHday: false,
        isJday: false,
        isPday: false,
        isRday: false,
      });
    }

    return dates;
  }

  function getCalendarBody() {
    const dates = []; // date: 日付, day: 曜日
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      let holich = year * 10000 + (month + 1) * 100 + i;

      let ci = 0;
      let cj = 0;
      let ck = 0;
      let cr = 0;

      for (let j = 0; j <= holiday.length; j++) {
        if (holich === holiday[j]) { ci = 1;}
      } 

      for (let j = 0; j <= jholiday.length; j++) {
        if (holich === jholiday[j]) { cj = 1;}
      } 

      for (let j = 0; j <= pholiday.length; j++) {
        if (holich === pholiday[j] + year * 10000) { ck = 1;}
      } 

      for (let j = 0; j <= rholiday.length; j++) {
        if (holich === rholiday[j] + year * 10000) { cr = 1;}
      } 

      if (ci === 1) {
        dates.push({
          date: i,
          isToday: false,
          isDisabled: false,
          isHday: true,
          isJday: false,
          isPday: false,
          isRday: false,
        });
      } else {
        dates.push({
          date: i,
          isToday: false,
          isDisabled: false,
          isHday: false,
          isJday: false,
          isPday: false,
          isRday: false,
        });
      }

      if (cj === 1) {
        dates[i-1].isJday = true;
      }

      if (ck === 1) {
        dates[i-1].isPday = true;
      }

      if (cr === 1) {
        dates[i-1].isRday = true;
      }
    
    }

    if (year === today.getFullYear() && month === today.getMonth()) {
      dates[today.getDate() - 1].isToday = true;
    }
    return dates;
  }

  function getCalendarTail() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();

    for (let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
        isHday: false,
        isJday: false,
        isPday: false,
        isRday: false,
      });
    }

    let currentIndex = month + (year % 2) * 12;
    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];

    return dates;
  }

  function getCalendarTail2() {
    const dates = [];
    
    for (let i = 1; i < 8; i++) {
      dates.push({
        date: '*',
        isToday: false,
        isDisabled: true,
        isHday: false,
        isJday: false,
        isPday: false,
        isRday: false,
      });
    }

    return dates;
  }

  function clearCalendar() {
    const tbody = document.querySelector('tbody');

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  function renderTitle() {
    const title = `${year}/${String(month + 1).padStart(2, '0')}`;
    document.getElementById('title').textContent = title;
  }

  function renderWeeks() {
    let dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail(),
      ...getCalendarTail2(),
    ];

    const weeks = [];

    for (let i = 0; i < 6; i++) {
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');

        td.textContent = date.date;
        if (date.isToday) {
          td.classList.add('today');
        }
        if (date.isDisabled) {
          td.classList.add('disabled');
        }
        if (date.isHday) {
          td.classList.add('hday');
        } 
        if (date.isJday) {
          td.classList.add('jhday');
        }
        if (date.isPday) {
          td.classList.add('phday');
        }
        if (date.isRday) {
          td.classList.add('rhday');
        }
        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr);
    });
  }

  function createCalendar() {
    clearCalendar();
    renderTitle();
    renderWeeks();
  }

  document.getElementById('prev').addEventListener('click', () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }

    createCalendar();
  });

  document.getElementById('next').addEventListener('click', () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }

    createCalendar();
  });

  document.getElementById('today').addEventListener('click', () => {
    year = today.getFullYear();
    month = today.getMonth();

    createCalendar();
  });

  let picIndex = 0;

  document.getElementById('nextpic').addEventListener('click', () => {
    if (picIndex >= images.length) {
      picIndex = 0;
    }
    const mainImage = document.getElementById('main');
    mainImage.src = images[picIndex];
    picIndex ++;
  });

  let timeoutId;
  let timeoutCt = 0;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      timeoutCt ++;
      nextpic.click();
      if (timeoutCt < images.length) {
        playSlideshow();
      } else {
        play.textContent = 'play';
        isPlaying = false;
        timeoutCt = 0;
        alert('The slideshow is over!');
      }
    }, 1000);
    return;
  }

  let isPlaying = false;

  const play = document.getElementById('play');
  play.addEventListener('click', () => {
    if (isPlaying === false) {
      play.textContent = 'pause';
      playSlideshow();
    } else  {
      clearTimeout(timeoutId);
      play.textContent = 'play';  
    }
    isPlaying = !isPlaying;
  });

  createCalendar();

}