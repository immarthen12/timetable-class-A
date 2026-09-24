
/* =========================================================
   JADWAL SEMESTER 7A
   =========================================================

   19 September 2026 = PEKAN 1

   19-20 September  = Pekan 1
   26-27 September  = Pekan 2
   03-04 Oktober    = Pekan 1
   10-11 Oktober    = Pekan 2
   dan seterusnya.

   SEMUA DATA JADWAL ADA DI SINI.
========================================================= */


/* =========================================================
   DATA JADWAL
========================================================= */

const scheduleData = {

    PAI: {

        1: {

            Saturday: [
                {
                    start: "14:00",
                    end: "15:00",
                    subject: "Kewirausahaan",
                    lecturer: "Aries Setiawan, SE., MM."
                },
                {
                    start: "15:00",
                    end: "16:00",
                    subject: "Pendidikan Luar Sekolah",
                    lecturer: "Saefudin, S.Pd., MM."
                }
            ],

            Sunday: [
                {
                    start: "11:00",
                    end: "12:00",
                    subject: "Pendidikan Keterampilan Hidup",
                    lecturer: "Dr. Hasan Basri"
                },
                {
                    start: "12:00",
                    end: "13:00",
                    subject: "Istirahat",
                    lecturer: "",
                    break: true
                },
                {
                    start: "13:00",
                    end: "14:00",
                    subject: "Metodologi Penelitian Pendidikan",
                    lecturer: "Dr. Budiman"
                }
            ]

        },


        2: {

            Saturday: [
                {
                    start: "14:00",
                    end: "15:00",
                    subject: "Sistem Penjaminan Mutu",
                    lecturer: "Moch. Sahidin, MA."
                },
                {
                    start: "15:00",
                    end: "16:00",
                    subject: "Kuliah Kerja Nyata",
                    lecturer: "Beni Bunyamin, S.Pd., M.Pd."
                },
               {
                    start: "16:00",
                    end: "16:30",
                    subject: "Istirahat",
                    lecturer: "",
                    break: true
                },
                {
                    start: "16:30",
                    end: "17:30",
                    subject: "Kapita Selekta Pendidikan",
                    lecturer: "Nasri, M.Pd."
                }
            ],

            Sunday: []

        }

    },


    PIAUD: {

        1: {

            Saturday: [
                {
                    start: "14:00",
                    end: "15:00",
                    subject: "Pembelajaran Anak Usia Dini",
                    lecturer: "Dede Iwanah, S.Pd., M.Pd. / Nurhasanah, S.Pd."
                },
                {
                    start: "15:00",
                    end: "16:00",
                    subject: "Manajemen Pengelolaan Kelas",
                    lecturer: "Ahmad Azizi, S.Pd., M.Si."
                },
                {
                    start: "16:00",
                    end: "16:30",
                    subject: "Istirahat",
                    lecturer: "",
                    break: true
                },
                {
                    start: "16:30",
                    end: "17:30",
                    subject: "Pembelajaran Al-Qur'an Anak Usia Dini",
                    lecturer: "Siti Mutmainah, M.Pd."
                }
            ],

            Sunday: [
                {
                    start: "10:00",
                    end: "11:00",
                    subject: "Metodologi Penelitian Pendidikan Anak Usia Dini",
                    lecturer: "Dr. Budiman"
                },
                {
                    start: "11:00",
                    end: "12:00",
                    subject: "Pembelajaran Bahasa Daerah Anak Usia Dini",
                    lecturer: "Eni Nuraeni, S.Pd."
                },
                {
                    start: "12:00",
                    end: "13:00",
                    subject: "Istirahat",
                    lecturer: "",
                    break: true
                },
                {
                    start: "13:00",
                    end: "14:00",
                    subject: "Bermain dan Permainan Anak Usia Dini",
                    lecturer: "Teti Srihayati, S.Pd., M.Pd."
                }
            ]

        },


        2: {

            Saturday: [
                {
                    start: "15:00",
                    end: "16:00",
                    subject: "Kewirausahaan",
                    lecturer: "Aries Setiawan, SE., MM."
                },
                {
                    start: "16:00",
                    end: "16:30",
                    subject: "Istirahat",
                    lecturer: "",
                    break: true
                },
                {
                    start: "16:30",
                    end: "17:30",
                    subject: "Pembelajaran Literasi, Numerasi Anak Usia Dini",
                    lecturer: "Nuni Wahyuningsih, M.Pd."
                }
            ],

            Sunday: [
                {
                    start: "10:00",
                    end: "11:00",
                    subject: "Pembelajaran Sains Anak Usia Dini",
                    lecturer: "Yandra, S.Pd.I., M.Pd. / Ahdan Abdul Ghani, S.Pd."
                },
                {
                    start: "11:00",
                    end: "12:00",
                    subject: "Kuliah Kerja Nyata",
                    lecturer: "Dr. Hasan Basri"
                }
            ]

        }

    }

};


/* =========================================================
   KONFIGURASI
========================================================= */

const startDate = new Date(
    2026,
    8,
    12,
    0,
    0,
    0
);

let currentProgram = "PAI";


/* =========================================================
   RUNNING TEXT
========================================================= */

const runningTexts = [

    "🤡 IRI YA GAPUNYA SISTEM JADWAL PELAJARAN KEK KITA!.",

    "🫂 Friendly ≠ Feeling. 😭🙏🏻 Jangan cinlok sama temen sekelas, kita cuma nyaman berteman—bukan sedang jatuh cinta.",

    "🗿 Datang tepat waktu adalah investasi. Datang terlambat adalah tradisi.",

    "😭 Dosen: 'Absen menjadi patokan nilai.' — Nyatanya yang rajin aja nilainnya kecil 🗿.",

    "📚 Kuliah boleh santai, bayaran dan iuran tidak kenal kata santai.",

    "💀 Semester baru, tugas baru, kenangan lama.",

    "🗿 Jangan takut sama tugas. Takutlah kalau ditagih uang KAS.",

    "😭 Niatnya kuliah dengan tenang, kenyataannya liat dosen yang masuk langsung sebal.",

    "🔥 Semangat semester 7! Tinggal sedikit lagi... ceunah mah.",

    "🫠 Kuliah: datang, ghibah, makan, mabar.",

    "💻 Akan kuhadapi semua tugas kuliah, tapi ngopi dulu bang ☕.",

    "📝 Semua pepatah kita patahin.",

    "🗿 Absensi tidak mengenal alasan 'macet, Bang'."

];

let runningIndex = 0;

const runningElement =
    document.getElementById("runningText");

function startRunningText() {

    if (!runningElement) return;

    runningElement.textContent =
        runningTexts[runningIndex];

}

if (runningElement) {

    runningElement.addEventListener(
        "animationiteration",
        () => {

            runningIndex++;

            if (
                runningIndex >=
                runningTexts.length
            ) {
                runningIndex = 0;
            }

            runningElement.textContent =
                runningTexts[runningIndex];

        }
    );

    startRunningText();
}


/* =========================================================
   HELPER
========================================================= */

function timeToMinutes(time) {

    const [hours, minutes] =
        time.split(":").map(Number);

    return hours * 60 + minutes;

}


function getDayName(dayNumber) {

    if (dayNumber === 6) {
        return "Saturday";
    }

    if (dayNumber === 0) {
        return "Sunday";
    }

    return null;

}


function formatTwoDigits(number) {

    return String(number).padStart(2, "0");

}


/* =========================================================
   MENENTUKAN PEKAN
========================================================= */

function getCurrentWeek(date = new Date()) {

    const difference =
        date.getTime() -
        startDate.getTime();

    /*
       Sebelum 19 September 2026
       tetap dianggap Pekan 1.
    */

    if (difference < 0) {
        return 1;
    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    return (
        Math.floor(days / 7) % 2
    ) + 1;

}


/* =========================================================
   UPDATE TANGGAL & JAM
========================================================= */

function updateDateTime() {

    const now = new Date();

    const dateElement =
        document.getElementById(
            "currentDate"
        );

    const timeElement =
        document.getElementById(
            "currentTime"
        );


    if (dateElement) {

        dateElement.textContent =
            now.toLocaleDateString(
                "id-ID",
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );

    }


    if (timeElement) {

        timeElement.textContent =
            now.toLocaleTimeString(
                "id-ID",
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            );

    }

}


/* =========================================================
   BUAT OBJEK WAKTU HARI INI
========================================================= */

function createDateTime(
    baseDate,
    time
) {

    const [hours, minutes] =
        time.split(":").map(Number);

    const result =
        new Date(baseDate);

    result.setHours(
        hours,
        minutes,
        0,
        0
    );

    return result;

}


/* =========================================================
   CARI KELAS YANG SEDANG BERLANGSUNG
========================================================= */

function findOngoingClass() {

    const now = new Date();

    const dayName =
        getDayName(
            now.getDay()
        );

    /*
       Senin-Jumat tidak ada kuliah.
    */

    if (!dayName) {
        return null;
    }


    const week =
        getCurrentWeek(now);

    const daySchedule =
        scheduleData[currentProgram]
        [week]
        [dayName] || [];


    for (const item of daySchedule) {

        if (item.break) {
            continue;
        }


        const start =
            createDateTime(
                now,
                item.start
            );

        const end =
            createDateTime(
                now,
                item.end
            );


        if (
            now >= start &&
            now < end
        ) {

            return {
                item,
                start,
                end,
                day: dayName,
                week
            };

        }

    }


    return null;

}


/* =========================================================
   CARI KELAS BERIKUTNYA
========================================================= */

function findNextClass() {

    const now = new Date();

    /*
       Kita cek maksimal 14 hari ke depan.
       Ini aman karena siklus jadwal adalah 2 minggu.
    */

    for (
        let offset = 0;
        offset <= 14;
        offset++
    ) {

        const checkDate =
            new Date(now);

        checkDate.setDate(
            now.getDate() + offset
        );

        checkDate.setHours(
            0,
            0,
            0,
            0
        );


        const dayName =
            getDayName(
                checkDate.getDay()
            );


        /*
           Lewati Senin-Jumat.
        */

        if (!dayName) {
            continue;
        }


        const week =
            getCurrentWeek(
                checkDate
            );


        const daySchedule =
            scheduleData[currentProgram]
            [week]
            [dayName] || [];


        for (const item of daySchedule) {

            /*
               Istirahat bukan mata kuliah.
            */

            if (item.break) {
                continue;
            }


            const classStart =
                createDateTime(
                    checkDate,
                    item.start
                );


            /*
               Kalau kelas hari ini sudah mulai,
               jangan dianggap "berikutnya".
            */

            if (
                classStart <= now
            ) {
                continue;
            }


            const classEnd =
                createDateTime(
                    checkDate,
                    item.end
                );


            return {
                item,
                start: classStart,
                end: classEnd,
                day: dayName,
                week
            };

        }

    }


    return null;

}


/* =========================================================
   CARI SEMUA INFORMASI KELAS SEKARANG
========================================================= */

function getCurrentScheduleState() {

    const ongoing =
        findOngoingClass();

    const next =
        findNextClass();


    return {
        ongoing,
        next
    };

}


/* =========================================================
   STATUS JADWAL
========================================================= */

function getItemStatus(
    item,
    date,
    isToday
) {

    if (item.break) {

        return "break";

    }


    if (!isToday) {

        return "";

    }


    const now =
        new Date();


    const start =
        createDateTime(
            date,
            item.start
        );


    const end =
        createDateTime(
            date,
            item.end
        );


    if (
        now >= start &&
        now < end
    ) {

        return "ongoing";

    }


    if (now >= end) {

        return "finished";

    }


    if (now < start) {

        return "next";

    }


    return "";

}


/* =========================================================
   RENDER JADWAL HARI
========================================================= */

function renderDay(
    elementId,
    schedule,
    dayNumber
) {

    const container =
        document.getElementById(
            elementId
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (
        !schedule ||
        schedule.length === 0
    ) {

        container.innerHTML = `
            <div class="off-day">
                <i class="bi bi-calendar-x"></i>
                Tidak ada jadwal pada hari ini.
            </div>
        `;

        return;

    }


    const now =
        new Date();


    const isToday =
        now.getDay() === dayNumber;


    /*
       Gunakan tanggal hari yang sedang
       ditampilkan.
    */

    const displayDate =
        new Date(now);


    /*
       Kalau hari yang ditampilkan berbeda
       dari hari sekarang, cari tanggal
       terdekat dalam minggu berjalan.
    */

    const difference =
        dayNumber -
        now.getDay();


    displayDate.setDate(
        now.getDate() + difference
    );


    schedule.forEach(item => {

        const status =
            getItemStatus(
                item,
                displayDate,
                isToday
            );


        let statusText = "";


        if (status === "ongoing") {

            statusText =
                "Sedang berlangsung";

        }
        else if (status === "next") {

            statusText =
                "Selanjutnya";

        }
        else if (status === "finished") {

            statusText =
                "Selesai";

        }
        else if (status === "break") {

            statusText =
                "Istirahat";

        }


        const card =
            document.createElement(
                "div"
            );


        card.className =
            `schedule-card ${status}`;


        card.innerHTML = `

            <div class="schedule-time">
                ${item.start} – ${item.end}
            </div>

            <div class="schedule-info">

                <h4>
                    ${item.subject}
                </h4>

                ${
                    item.lecturer
                        ? `<p>${item.lecturer}</p>`
                        : ""
                }

            </div>

            ${
                statusText
                    ? `
                        <span class="schedule-status">
                            ${statusText}
                        </span>
                    `
                    : ""
            }

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   RENDER SELURUH JADWAL
========================================================= */

function renderSchedule() {

    const now =
        new Date();


    const week =
        getCurrentWeek(now);


    const weekElement =
        document.getElementById(
            "weekNumber"
        );


    const scheduleWeekElement =
        document.getElementById(
            "scheduleWeek"
        );


    const programTitleElement =
        document.getElementById(
            "programTitle"
        );


    if (weekElement) {
        weekElement.textContent =
            week;
    }


    if (scheduleWeekElement) {
        scheduleWeekElement.textContent =
            week;
    }


    if (programTitleElement) {
        programTitleElement.textContent =
            currentProgram;
    }


    const programData =
        scheduleData[
            currentProgram
        ][week];


    renderDay(
        "saturdaySchedule",
        programData.Saturday,
        6
    );


    renderDay(
        "sundaySchedule",
        programData.Sunday,
        0
    );


    updateCurrentAndNext();

}


/* =========================================================
   UPDATE MATKUL SEKARANG + BERIKUTNYA
========================================================= */

function updateCurrentAndNext() {

    const state =
        getCurrentScheduleState();


    const ongoing =
        state.ongoing;

    const next =
        state.next;


    /*
       =========================================
       JIKA ADA KELAS YANG SEDANG BERLANGSUNG
       =========================================
    */

    if (ongoing) {

        updateOngoingDisplay(
            ongoing
        );

    }

    else {

        updateNoOngoingDisplay();

    }


    /*
       =========================================
       KELAS BERIKUTNYA
       =========================================
    */

    if (next) {

        updateNextDisplay(
            next
        );

    }

    else {

        const nextName =
            document.getElementById(
                "nextClassName"
            );

        const nextDetail =
            document.getElementById(
                "nextClassDetail"
            );

        const nextLecturer =
            document.getElementById(
                "nextClassLecturer"
            );

        const nextTime =
            document.getElementById(
                "nextClassTime"
            );


        if (nextName) {
            nextName.textContent =
                "Tidak ada jadwal";
        }

        if (nextDetail) {
            nextDetail.textContent =
                "Tidak ada jadwal berikutnya";
        }

        if (nextLecturer) {
            nextLecturer.textContent =
                "-";
        }

        if (nextTime) {
            nextTime.textContent =
                "--";
        }

    }

}


/* =========================================================
   TAMPILKAN KELAS YANG SEDANG BERLANGSUNG
========================================================= */

function updateOngoingDisplay(
    ongoing
) {

    const countdownLabel =
        document.getElementById(
            "countdownLabel"
        );

    const nextClassName =
        document.getElementById(
            "nextClassName"
        );

    if (countdownLabel) {

        countdownLabel.textContent =
            "Sedang berlangsung";

    }


    if (nextClassName) {

        nextClassName.textContent =
            ongoing.item.subject;

    }


    /*
       Countdown sekarang menghitung
       SISA WAKTU kelas yang sedang berjalan.
    */

    updateOngoingCountdown(
        ongoing
    );

}


/* =========================================================
   KALAU TIDAK ADA KELAS YANG BERLANGSUNG
========================================================= */

function updateNoOngoingDisplay() {

    const countdownLabel =
        document.getElementById(
            "countdownLabel"
        );

    const nextClassName =
        document.getElementById(
            "nextClassName"
        );


    if (countdownLabel) {

        countdownLabel.textContent =
            "Menuju kelas berikutnya";

    }


    if (nextClassName) {

        const next =
            findNextClass();

        nextClassName.textContent =
            next
                ? next.item.subject
                : "Tidak ada jadwal";

    }


    updateNextCountdown();

}


/* =========================================================
   COUNTDOWN KELAS YANG SEDANG BERLANGSUNG
========================================================= */

function updateOngoingCountdown(
    ongoing
) {

    const now =
        new Date();


    const difference =
        ongoing.end.getTime() -
        now.getTime();


    if (difference <= 0) {

        const countdown =
            document.getElementById(
                "countdown"
            );

        if (countdown) {
            countdown.textContent =
                "Kelas selesai";
        }

        return;

    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const hours =
        Math.floor(
            totalSeconds / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    const countdown =
        document.getElementById(
            "countdown"
        );


    if (countdown) {

        countdown.textContent =
            `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;

    }

}


/* =========================================================
   COUNTDOWN MENUJU KELAS BERIKUTNYA
========================================================= */

function updateNextCountdown() {

    const next =
        findNextClass();


    const countdown =
        document.getElementById(
            "countdown"
        );


    if (!countdown) {
        return;
    }


    if (!next) {

        countdown.textContent =
            "--:--:--";

        return;

    }


    const now =
        new Date();


    const difference =
        next.start.getTime() -
        now.getTime();


    if (difference <= 0) {

        countdown.textContent =
            "Sebentar lagi...";

        return;

    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    if (days > 0) {

        countdown.textContent =
            `${days} hari ${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;

    }

    else {

        countdown.textContent =
            `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;

    }

}


/* =========================================================
   UPDATE NEXT CLASS CARD
========================================================= */

function updateNextDisplay(
    next
) {

    const detail =
        document.getElementById(
            "nextClassDetail"
        );

    const lecturer =
        document.getElementById(
            "nextClassLecturer"
        );

    const time =
        document.getElementById(
            "nextClassTime"
        );


    if (detail) {

        detail.textContent =
            next.item.subject;

    }


    if (lecturer) {

        lecturer.textContent =
            next.item.lecturer ||
            "-";

    }


    if (time) {

        time.textContent =
            `${next.item.start} – ${next.item.end}`;

    }

}


/* =========================================================
   PROGRAM BUTTON
========================================================= */

document.querySelectorAll(
    ".program-btn"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            /*
               Hapus active dari semua tombol.
            */

            document.querySelectorAll(
                ".program-btn"
            ).forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            /*
               Aktifkan tombol yang diklik.
            */

            button.classList.add(
                "active"
            );


            /*
               Ganti program.
            */

            currentProgram =
                button.dataset.program;


            /*
               Render ulang jadwal.
            */

            renderSchedule();

        }
    );

});


/* =========================================================
   UPDATE OTOMATIS
========================================================= */

/*
   Jam dan countdown diperbarui
   setiap 1 detik.
*/

setInterval(() => {

    updateDateTime();

    renderSchedule();

}, 1000);


/* =========================================================
   JALANKAN SAAT HALAMAN DIBUKA
========================================================= */

updateDateTime();

renderSchedule();

