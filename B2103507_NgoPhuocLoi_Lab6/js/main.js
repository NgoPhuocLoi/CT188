var courseList = [
  {
    code: "CB001",
    startDate: 1638205200000,
    endDate: 1640797200000, //in milisecond
    type: 1, //thứ 3-5-7
    name: {
      "vi-VN": "Thiên văn học cơ bản Khóa 1",
      "en-US": "Introduction to Astronomy, 1<sup>st</sup> Course",
    },
    fee: { "vi-VN": 1750000, "en-US": 78 },
  },
  {
    code: "VT002",
    startDate: 1638291600000,
    endDate: 1643562000000,
    type: 0, //thứ 2-4-6
    name: {
      "vi-VN": "Vũ Trụ Học Cơ Bản Khóa 2",
      "en-US": "Introduction to Cosmology, 2<sup>nd</sup> Course",
    },
    fee: { "vi-VN": 1050000, "en-US": 47 },
  },
  {
    code: "QS001",
    startDate: 1639501200000,
    endDate: 1640710800000,
    type: 0, //thứ 2-4-6
    name: {
      "vi-VN": "Học Máy Và Thiên Văn Học Khóa 1",
      "en-US": "Machine Learning and Astronomy, 1<sup>st</sup> Course",
    },
    fee: { "vi-VN": 750000, "en-US": 34 },
  },
  {
    code: "CB002",
    startDate: 1638291600000,
    endDate: 1640883600000,
    type: 0, //2-4-6
    name: {
      "vi-VN": "Thiên văn học cơ bản Khóa 2",
      "en-US": "Introduction to Astronomy, 2<sup>nd</sup> Course",
    },
    fee: { "vi-VN": 1750000, "en-US": 78 },
  },
  {
    code: "CB003",
    startDate: 1638550800000,
    endDate: 1641229200000,
    type: 1, //thứ 3-5-7
    name: {
      "vi-VN": "Thiên văn học cơ bản Khóa 3",
      "en-US": "Introduction to Astronomy, 3<sup>rd</sup> Course",
    },
    fee: { "vi-VN": 1750000, "en-US": 78 },
  },
  {
    code: "VT003",
    startDate: 1638291600000,
    endDate: 1643562000000,
    type: 0, //thứ 2-4-6
    name: {
      "vi-VN": "Vũ Trụ Học Cơ Bản Khóa 3",
      "en-US": "Introduction to Cosmology, 3<sup>rd</sup> Course",
    },
    fee: { "vi-VN": 1050000, "en-US": 47 },
  },
  {
    code: "QS002",
    startDate: 1639587600000,
    endDate: 1640797200000,
    type: 1, //thứ 3-5-7
    name: {
      "vi-VN": "Học Máy Và Thiên Văn Học Khóa 2",
      "en-US": "Machine Learning and Astronomy, 2<sup>nd</sup> Course",
    },
    fee: { "vi-VN": 750000, "en-US": 34 },
  },
];
var labels = {
  //menu
  MENU_HOME: {
    "vi-VN": "Trang Chủ",
    "en-US": "Home",
  },
  MENU_ABOUT_US: {
    "vi-VN": "Giới Thiệu",
    "en-US": "About Us",
  },
  MENU_COURSES: {
    "vi-VN": "Các Khóa Học",
    "en-US": "Courses",
  },
  MENU_CONTACT: {
    "vi-VN": "Liên hệ",
    "en-US": "Contact",
  },
  //heading-tiêu đề
  HEAD_SOLAR_SYSTEM: {
    "vi-VN": "Các Hành Tinh Trong Hệ Mặt Trời",
    "en-US": "Planets of Solar System",
  },
  HEAD_UPCOMING_COURSES: {
    "vi-VN":
      "Các khóa học sắp khai giảng (Quý khách hàng vui lòng liên hệ <button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'> văn phòng công ty </button> để đăng ký)",
    "en-US":
      "Upcoming courses (please contact <button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'> the company office </button> for registration)",
  },
  COPYRIGHT: {
    "vi-VN": "Copyright 2021 Bản quyền thuộc về Công ty Astronomia.",
    "en-US": "Copyright 2021 Astronomia All Rights Reserved.",
  },
  //modal box
  MODAL_HEAD: {
    "vi-VN": "Địa Chỉ Đăng Ký Khóa Học",
    "en-US": "Registration Address",
  },
  MODAL_CONTENT: {
    "vi-VN":
      "Văn phòng: Tầng 8. Tòa Nhà Universal. Số 900A đường Quang Trung, Cần Thơ",
    "en-US":
      "Office: 8<sup>th</sup> floor. Universal Building. 900A Quang Trung Street, Can Tho",
  },
  //các khóa học sắp khai giảng
  UP_COURSES_CB001: {
    "vi-VN": { name: "Thiên văn học cơ bản Khóa 1", startDate: "30/11/2021" },
    "en-US": {
      name: "Introduction to Astronomy, 1<sup>st</sup> Course",
      startDate: "11/30/2021",
    },
  },
  UP_COURSES_VT002: {
    "vi-VN": { name: "Vũ Trụ Học Cơ Bản Khóa 2", startDate: "01/12/2021" },
    "en-US": {
      name: "Introduction to Cosmology, 2<sup>nd</sup> Course",
      startDate: "12/01/2021",
    },
  },
  UP_COURSES_QS001: {
    "vi-VN": {
      name: "Học Máy Và Thiên Văn Học Khóa 1",
      startDate: "15/12/2021",
    },
    "en-US": {
      name: "Machine Learning and Astronomy, 1<sup>st</sup> Course",
      startDate: "12/15/2021",
    },
  },
  //trang chủ
  CONTENTS_HEAD_JUPITER: {
    "vi-VN": "Sao Mộc - Jupiter",
    "en-US": "Jupiter",
  },
  CONTENTS_DETAIL_JUPITER: {
    "vi-VN":
      "Sao Mộc được đặt theo tên của thần Zeus trong tiếng Hy Lạp; Trong tiếng La Mã, Zeus nghĩa là Jupiter.",
    "en-US":
      "It has been observed since pre-historic times and is named after the Roman god Jupiter, the king of the gods, because of its observed size.",
  },
  CONTENTS_HEAD_SATURN: {
    "vi-VN": "Sao Thổ - Saturn",
    "en-US": "Saturn",
  },
  CONTENTS_DETAIL_SATURN: {
    "vi-VN":
      "Sao Thổ được đặt theo tên của thần Thời gian Cronus trong tiếng Hy Lạp; Trong tiếng La Mã, Cronus nghĩa là Saturn.",
    "en-US": "Saturn is named after the Roman god of wealth and agriculture.",
  },
  CONTENTS_HEAD_URANUS: {
    "vi-VN": "Sao Thiên Vương - Uranus",
    "en-US": "Uranus",
  },
  CONTENTS_DETAIL_URANUS: {
    "vi-VN":
      "Sao Thiên Vương được đặt theo tên của thần đảm trách bầu trời Uranus trong tiếng Hy Lạp.",
    "en-US":
      "Its name is a reference to the Greek god of the sky, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus",
  },
  CONTENTS_TITLE_MERCURY: {
    "vi-VN": "Sao Thủy - Mercury",
    "en-US": "Mercury",
  },
  CONTENTS_TITLE_VENUS: {
    "vi-VN": "Sao Kim - Venus",
    "en-US": "Venus",
  },
  CONTENTS_TITLE_NEPTUNE: {
    "vi-VN": "Sao Hải Vương - Neptune",
    "en-US": "Neptune",
  },
  CONTENTS_TITLE_MARS: {
    "vi-VN": "Sao Hỏa - Mars",
    "en-US": "Mars",
  },
  //các khóa học
  COURSES_COURSES: {
    "vi-VN": "Các Khóa Học",
    "en-US": "Courses",
  },
  COURSES_CODE: {
    "vi-VN": "Mã Khóa Học",
    "en-US": "Course Code",
  },
  COURSES_NAME: {
    "vi-VN": "Khóa Học",
    "en-US": "Course",
  },
  COURSES_STARTDATE: {
    "vi-VN": "Ngày Khai Giảng",
    "en-US": "Start Date",
  },
  COURSES_ENDDATE: {
    "vi-VN": "Ngày Bế Giảng",
    "en-US": "End Date",
  },
  COURSES_FEE: {
    "vi-VN": "Học Phí (VNĐ)",
    "en-US": "Tuition Fee ($)",
  },
  COURSES_OVERLAP: {
    "vi-VN": "Thời gian khóa học trùng với các khóa học đã đăng ký",
    "en-US": "The course time coincides with the registered courses",
  },
};

const langBtns = document.querySelectorAll(".multi-lang img");
const multiLangElements = document.querySelectorAll(".multilang");

console.log(langBtns);
function getLang() {
  if (localStorage["lang"]) return localStorage["lang"];
  localStorage.setItem("lang", "vi-VN");
  return localStorage["lang"];
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

langBtns.forEach((btn) =>
  btn.addEventListener("click", () => setLang(btn.dataset.lang))
);

const lang = getLang();

multiLangElements.forEach((e) => {
  e.innerHTML = labels[e.id][lang];
  if (e.src) e.setAttribute("data-bs-original-title", labels[e.id][lang]);
});

function showCourseList() {
  const courseListElement = document.querySelector("#course_list");
  const upCourses = document.querySelector("#up-courses");
  if (courseListElement) {
    let htmlForCourseList = "";
    courseList.forEach((course) => {
      htmlForCourseList += `<tr>
                <td>${course.code}</td>
                <td>${course.name[lang]}</td>
                <td>${new Date(course.startDate).toLocaleDateString(lang)}</td>
                <td>${new Date(course.endDate).toLocaleDateString(lang)}</td>
                <td>${course.fee[lang]}</td>
                <td>
                    <div class="d-grid gap-2">
                        <button class="btn btn-success btn-lg" onclick="">
                        ✔️
                        </button>
                    </div>
                </td>
            </tr>`;
    });
    courseListElement.innerHTML = htmlForCourseList;
  }

  if (upCourses) {
    let htmlForUpCourses = `
    <tr>
        <td>CB001</td>
        <td>${labels.UP_COURSES_CB001[lang].name}</td>
        <td>${labels.UP_COURSES_CB001[lang].startDate}</td>
    </tr>
    <tr>
        <td>VT002</td>
        <td>${labels.UP_COURSES_VT002[lang].name}</td>
        <td>${labels.UP_COURSES_VT002[lang].startDate}</td>
    </tr>
    <tr>
        <td>QS001</td>
        <td>${labels.UP_COURSES_QS001[lang].name}</td>
        <td>${labels.UP_COURSES_QS001[lang].startDate}</td>
    </tr>
    `;

    upCourses.innerHTML = htmlForUpCourses;
  }
}

showCourseList();
