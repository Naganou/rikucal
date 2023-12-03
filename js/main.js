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

  /* national holiday */
  const jholiday = [20200101,20200113,20200211,20200223,20200224,20200320,20200429,20200503,20200504,20200505,20200506,20200723,20200724,20200810,20200921,20200922,20201103,20201123,20210101,20210111,20210211,20210223,20210320,20210429,20210503,20210504,20210505,20210722,20210723,20210808,20210809,20210920,20210923,20211103,20211123,20220101,20220110,20220211,20220223,20220321,20220429,20220503,20220504,20220505,20220718,20220811,20220919,20220923,20221010,20221103,20221123,20230101,20230102,20230109,20230211,20230223,20230321,20230429,20230503,20230504,20230505,20230717,20230811,20230918,20230923,20231009,20231103,20231123,20240101,20240108,20240211,20240212,20240223,20240320,20240429,20240503,20240504,20240505,20240506,20240715,20240811,20240812,20240916,20240922,20240923,20241014,20241103,20241104,20241123,];

  /* company working days */
  const holiday = [20230106,20230109,20230113,20230116,20230120,20230123,20230127,20230130,20230203,20230206,20230210,20230213,20230217,20230220,20230224,20230227,20230303,20230306,20230310,20230313,20230317,20230320,20230324,20230327,20230331,20230403,20230407,20230410,20230414,20230417,20230421,20230424,20230428,20230501,20230505,20230508,20230512,20230515,20230519,20230522,20230526,20230529,20230530,20230531,20230602,20230605,20230607,20230609,20230612,20230614,20230616,20230619,20230621,20230623,20230626,20230628,20230630,20230703,20230705,20230707,20230710,20230712,20230714,20230719,20230721,20230724,20230726,20230728,20230731,20230802,20230804,20230807,20230809,20230814,20230816,20230818,20230821,20230823,20230825,20230828,20230830,20230901,20230904,20230906,20230908,20230911,20230913,20230915,20230920,20230922,20230925,20230927,20230929,20231002,20231004,20231006,20231011,20231013,20231016,20231018,20231020,20231023,20231025,20231027,20231030,20231101,20231106,20231108,20231110,20231113,20231115,20231117,20231120,20231122,20231124,20231127,20231129,20231201,20231204,20231206,20231208,20231211,20231213,20231215,20231218,20231220,20231222,20231225,20231227,20231229,20240105,20240110,20240112,20240115,20240117,20240119,20240122,20240124,20240126,20240129,20240131,20240202,20240205,20240207,20240209,20240214,20240216,20240219,20240221,20240226,20240228,20240301,20240304,20240306,20240308,20240311,20240313,20240315,20240318,20240322,20240325,20240327,20240329,20240401,20240403,20240405,20240408,20240410,20240412,20240415,20240417,20240419,20240422,20240424,20240426,20240501,20240508,20240510,20240513,20240515,20240517,20240520,20240522,20240524,20240527,20240529,20240531,20240603,20240605,20240607,20240610,20240612,20240614,20240617,20240619,20240621,20240624,20240626,20240628,20240701,20240703,20240705,20240708,20240710,20240712,20240717,20240719,20240722,20240724,20240726,20240729,20240731,20240802,20240805,20240807,20240809,20240814,20240816,20240819,20240821,20240823,20240826,20240828,20240830,20240902,20240904,20240906,20240909,20240911,20240913,20240918,20240920,20240925,20240927,20240930,20241002,20241004,20241007,20241009,20241011,20241016,20241018,20241021,20241023,20241025,20241028,20241030,20241101,20241106,20241108,20241111,20241113,20241115,20241118,20241120,20241122,20241125,20241127,20241129,20241202,20241204,20241206,20241209,20241211,20241213,20241216,20241218,20241220,20241223,20241225,20241227,20241230,];

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
