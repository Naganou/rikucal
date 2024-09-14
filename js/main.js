'use strict';

console.clear();

{
  // images一覧
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

  // 記念日
  /* personal anniversary */
  const rholiday = [206, 524,]

  // 行事
  /* traditional anniversary 正月 雛祭 子供の日 七夕 クリスマス */
  const pholiday = [101, 303, 505, 707, 1224, 1225,]

  // 祝日
  const japaneseHolidays = [[20230923, "秋分の日",], [20231009, "スポーツの日",], [20231103, "文化の日",], [20231123, "勤労感謝の日",], [20240101, "元日",], [20240108, "成人の日",], [20240211, "建国記念の日",], [20240212, "振替休日",], [20240223, "天皇誕生日",], [20240320, "春分の日",], [20240429, "昭和の日",], [20240503, "憲法記念日",], [20240504, "みどりの日",], [20240505, "こどもの日",], [20240506, "振替休日",], [20240715, "海の日",], [20240811, "山の日",], [20240812, "振替休日",], [20240916, "敬老の日",], [20240922, "秋分の日",], [20240923, "振替休日",], [20241014, "スポーツの日",], [20241103, "文化の日",], [20241104, "振替休日",], [20241123, "勤労感謝の日",], [20250101, "元日",], [20250113, "成人の日",], [20250211, "建国記念の日",], [20250223, "天皇誕生日",], [20250224, "振替休日",], [20250320, "春分の日",], [20250429, "昭和の日",], [20250503, "憲法記念日",], [20250504, "みどりの日",], [20250505, "こどもの日",], [20250506, "振替休日",], [20250721, "海の日",], [20250811, "山の日",], [20250915, "敬老の日",], [20250923, "秋分の日",], [20251013, "スポーツの日",], [20251103, "文化の日",], [20251123, "勤労感謝の日",], [20251124, "振替休日",]];


  // 出勤日
  /* company working days */
  const workdays = [20230106, 20230109, 20230113, 20230116, 20230120, 20230123, 20230127, 20230130, 20230203, 20230206, 20230210, 20230213, 20230217, 20230220, 20230224, 20230227, 20230303, 20230306, 20230310, 20230313, 20230317, 20230320, 20230324, 20230327, 20230331, 20230403, 20230407, 20230410, 20230414, 20230417, 20230421, 20230424, 20230428, 20230501, 20230505, 20230508, 20230512, 20230515, 20230519, 20230522, 20230526, 20230529, 20230530, 20230531, 20230602, 20230605, 20230607, 20230609, 20230612, 20230614, 20230616, 20230619, 20230621, 20230623, 20230626, 20230628, 20230630, 20230703, 20230705, 20230707, 20230710, 20230712, 20230714, 20230719, 20230721, 20230724, 20230726, 20230728, 20230731, 20230802, 20230804, 20230807, 20230809, 20230814, 20230816, 20230818, 20230821, 20230823, 20230825, 20230828, 20230830, 20230901, 20230904, 20230906, 20230908, 20230911, 20230913, 20230915, 20230920, 20230922, 20230925, 20230927, 20230929, 20231002, 20231004, 20231006, 20231011, 20231013, 20231016, 20231018, 20231020, 20231023, 20231025, 20231027, 20231030, 20231101, 20231106, 20231108, 20231110, 20231113, 20231115, 20231117, 20231120, 20231122, 20231124, 20231127, 20231129, 20231201, 20231204, 20231206, 20231208, 20231211, 20231213, 20231215, 20231218, 20231220, 20231222, 20231225, 20231227, 20231229, 20240105, 20240110, 20240112, 20240115, 20240117, 20240119, 20240122, 20240124, 20240126, 20240129, 20240131, 20240202, 20240205, 20240207, 20240209, 20240214, 20240216, 20240219, 20240221, 20240226, 20240228, 20240301, 20240304, 20240306, 20240308, 20240311, 20240313, 20240315, 20240318, 20240322, 20240325, 20240327, 20240329, 20240401, 20240403, 20240405, 20240408, 20240410, 20240412, 20240415, 20240417, 20240419, 20240422, 20240424, 20240426, 20240501, 20240508, 20240510, 20240513, 20240515, 20240517, 20240520, 20240522, 20240524, 20240527, 20240529, 20240531, 20240603, 20240605, 20240607, 20240610, 20240612, 20240614, 20240617, 20240619, 20240621, 20240624, 20240626, 20240628, 20240701, 20240703, 20240705, 20240708, 20240710, 20240712, 20240717, 20240719, 20240722, 20240724, 20240726, 20240729, 20240731, 20240802, 20240805, 20240807, 20240809, 20240814, 20240816, 20240819, 20240821, 20240823, 20240826, 20240828, 20240830, 20240902, 20240904, 20240906, 20240909, 20240911, 20240913, 20240918, 20240920, 20240925, 20240927, 20240930, 20241002, 20241004, 20241007, 20241009, 20241011, 20241016, 20241018, 20241021, 20241023, 20241025, 20241028, 20241030, 20241101, 20241106, 20241108, 20241111, 20241113, 20241115, 20241118, 20241120, 20241122, 20241125, 20241127, 20241129, 20241202, 20241204, 20241206, 20241209, 20241211, 20241213, 20241216, 20241218, 20241220, 20241223, 20241225, 20241227, 20241230,];


  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  console.log('yyy');

  // 余白用
  function getCalendarDummy() {
    const dates = [];

    for (let i = 1; i < 8; i++) {
      dates.push({
        // date: '123456789012345',
        date: 'ABCDEFGHIJKLMNOP',
        isToday: false,
        isDisabled: false,
        isWday: false,
        isJday: false,
        isPday: false,
        isRday: false,
        isSnday: false,
        isStday: false,
        comment: "空白",
      });
    }
    return dates;
  }


  function getCalendarHead() {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();

    for (let i = 0; i < n; i++) {
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
        isWday: false,
        isJday: false,
        isPday: false,
        isRday: false,
        isSnday: false,
        isStday: false,
        comment: "               ",
      });
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
        isWday: false,
        isJday: false,
        isPday: false,
        isRday: false,
        isSnday: false,
        isStday: false,
        comment: "空白",
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
        isWday: false,
        isJday: false,
        isPday: false,
        isRday: false,
        isSnday: false,
        isStday: false,
        comment: "空白",
      });
    }

    return dates;
  }


  function getCalendarComment() {
    const dates = []; // date: 日付, day: 曜日
    const lastDatec = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDatec; i++) {
      let holich = year * 10000 + (month + 1) * 100 + i;

      let ci = 0;
      let cj = 0;
      let ck = 0;
      let cr = 0;
      // ここ　const weakDay = new Date(year, month + 1, i).getDay();
      let weakDay = new Date(year, month, i).getDay();
      // console.log(`曜日weakDay: ${weakDay}`);

      // 出勤日(ci=1)
      for (let j = 0; j <= workdays.length; j++) {
        if (holich === workdays[j]) { ci = 1; }
      }

      // 祝日(cj=1)
      let dateName = "";
      for (const holiday of japaneseHolidays) {

        for (let j = 0; j <= holiday.length; j++) {
          if (holich === holiday[j]) {
            cj = 1;
            dateName = holiday[j, 1];
          }
        }
      }

      // 年中行事日(ck=1)
      for (let j = 0; j <= pholiday.length; j++) {
        if (holich === pholiday[j] + year * 10000) { ck = 1; }
      }

      // 個人記念日(cr=1)
      for (let j = 0; j <= rholiday.length; j++) {
        if (holich === rholiday[j] + year * 10000) { cr = 1; }
      }

      // 出勤日(ci=1)
      if (ci === 1) {
        if (weakDay === 0) {
          dates.push({
            date: i,
            isToday: false,
            isDisabled: false,
            isWday: true,
            isJday: false,
            isPday: false,
            isRday: false,
            isSnday: true,
            isStday: false,
            comment: "空白",
          });
        }
        else if (weakDay === 6) {
          dates.push({
            date: i,
            isToday: false,
            isDisabled: false,
            isWday: true,
            isJday: false,
            isPday: false,
            isRday: false,
            isSnday: false,
            isStday: true,
            comment: "空白",
          });
        }
        else {
          dates.push({
            date: i,
            isToday: false,
            isDisabled: false,
            isWday: true,
            isJday: false,
            isPday: false,
            isRday: false,
            isSnday: false,
            isStday: false,
            comment: "空白",
          });
        }

      } else {

        if (weakDay === 0) {
          dates.push({
            date: i,
            isToday: false,
            isDisabled: false,
            isWday: false,
            isJday: false,
            isPday: false,
            isRday: false,
            isSnday: true,
            isStday: false,
            comment: "空白",
          });
        }

        else if (weakDay === 6) {
          dates.push({
            date: i,
            isToday: false,
            isDisabled: false,
            isWday: false,
            isJday: false,
            isPday: false,
            isRday: false,
            isSnday: false,
            isStday: true,
            comment: "空白",
          });
        }

        else {
          dates.push({
            date: i,
            isToday: false,
            isDisabled: false,
            isWday: false,
            isJday: false,
            isPday: false,
            isRday: false,
            isSnday: false,
            isStday: false,
            comment: "空白",
          });
        }
      }

      // 祝日(cj=1)
      if (cj === 1) {
        dates[i - 1].isJday = true;
        // dates[i-1].date = "祝";
        // dates[i-1].date = i + "    " + dateName;
        dates[i - 1].comment = dateName;
      }

      // 年中行事日(ck=1)
      if (ck === 1) {
        dates[i - 1].isPday = true;
      }

      // 個人記念日(cr=1)
      if (cr === 1) {
        dates[i - 1].isRday = true;
      }

    }

    if (year === today.getFullYear() && month === today.getMonth()) {
      dates[today.getDate() - 1].isToday = true;
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
      ...getCalendarDummy(),
      ...getCalendarHead(),
      // ...getCalendarBody(),
      ...getCalendarComment(),
      ...getCalendarTail(),
      ...getCalendarTail2(),
      ...getCalendarTail2(),
    ];

    const weeks = [];

    // for (let i = 0; i < 6; i++) {
    // for (let i = 0; i < 7; i++) {
    // for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 7; i++) {
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
        if (date.isWday) {
          td.classList.add('wday');
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
        if (date.isSnday) {
          td.classList.add('snday');
        }
        if (date.isStday) {
          td.classList.add('stday');
        }
        tr.appendChild(td);
      });

      document.querySelector('tbody').appendChild(tr);

      const tr2 = document.createElement('tr');
      // const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');

        td.textContent = date.comment;

        if (date.isDisabled) {
          td.classList.add('disabled');
        }

        if (date.isJday) {
          td.classList.add('jhday');
        }

        if (!date.isJday) {
          td.classList.add('njhday');
        }

        tr2.appendChild(td);

        tr.classList.add('commentLine');

      });
      document.querySelector('tbody').appendChild(tr2);

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
    picIndex++;
  });

  let timeoutId;
  let timeoutCt = 0;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      timeoutCt++;
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
      play.textContent = 'stop';
      playSlideshow();
    } else {
      clearTimeout(timeoutId);
      play.textContent = 'play';
    }
    isPlaying = !isPlaying;
  });

  createCalendar();

}
