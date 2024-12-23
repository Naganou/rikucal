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

  /* personal anniversary */
  const rholiday = [206,524,]

  /* traditional anniversary 正月 雛祭 子供の日 七夕 クリスマス */
  const pholiday = [101,303,505,707,1224,1225,]

  /* national holiday 祝祭日*/
  const jholiday = [20240101,20240108,20240211,20240212,20240223,20240320,20240429,20240503,20240504,20240505,20240506,20240715,20240811,20240812,20240916,20240922,20240923,20241014,20241103,20241104,20241123,20250101,20250113,20250211,20250223,20250224,20250320,20250429,20250503,20250504,20250505,20250506,20250721,20250811,20250915,20250923,20251013,20251103,20251123,20251124,];

  /* company working days */
  const holiday = [20240603,20240605,20240607,20240610,20240612,20240614,20240617,20240619,20240621,20240624,20240626,20240628,20240701,20240703,20240705,20240708,20240710,20240712,20240717,20240719,20240722,20240724,20240726,20240729,20240731,20240802,20240805,20240807,20240809,20240814,20240816,20240819,20240821,20240823,20240826,20240828,20240830,20240902,20240904,20240906,20240909,20240911,20240913,20240918,20240920,20240925,20240927,20240930,20241002,20241004,20241007,20241009,20241011,20241016,20241018,20241021,20241023,20241025,20241028,20241030,20241101,20241106,20241108,20241111,20241113,20241115,20241118,20241120,20241122,20241125,20241127,20241129,20241202,20241204,20241206,20241209,20241211,20241213,20241216,20241218,20241220,20241223,20241225,20241227,20241230,20250106,20250108,20250110,20250115,20250117,20250120,20250122,20250124,20250127,20250129,20250131,20250203,20250205,20250207,20250210,20250212,20250214,20250217,20250219,20250221,20250226,20250228,20250303,20250305,20250307,20250310,20250312,20250314,20250317,20250319,20250321,20250324,20250326,20250328,20250331,20250402,20250404,20250407,20250409,20250411,20250414,20250416,20250418,20250421,20250423,20250425,20250428,20250430,20250502,20250507,20250509,20250512,20250514,20250516,20250519,20250521,20250523,20250526,20250528,20250530,20250602,20250604,20250606,20250609,20250611,20250613,20250616,20250618,20250620,20250623,20250625,20250627,20250630,20250702,20250704,20250707,20250709,20250711,20250714,20250716,20250718,20250723,20250725,20250728,20250730,20250801,20250804,20250806,20250808,20250813,20250815,20250818,20250820,20250822,20250825,20250827,20250829,20250901,20250903,20250905,20250908,20250910,20250912,20250917,20250919,20250922,20250924,20250926,20250929,20251001,20251003,20251006,20251008,20251010,20251015,20251017,20251020,20251022,20251024,20251027,20251029,20251031,20251105,20251107,20251110,20251112,20251114,20251117,20251119,20251121,20251126,20251128,20251201,20251203,20251205,20251208,20251210,20251212,20251215,20251217,20251219,20251222,20251224,20251226,20251229,20251231,];

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
