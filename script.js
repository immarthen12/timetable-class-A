/* =========================================================
   KONFIGURASI UTAMA
========================================================= */

const cycleConfig = {
    // Tanggal ini dianggap sebagai awal Pekan 1
    tanggalMulai: "2026-09-12",

    // Kalau suatu saat tanggal mulai adalah Pekan 2,
    // cukup ubah angka ini menjadi 2.
    pekanAwal: 1
};


/* =========================================================
   DATA JADWAL
========================================================= */

const scheduleData = {

    PAI: {

        1: {
            saturday: [
                {
                    start: "14:00",
                    end: "15:00",
                    name: "Sistem Penjaminan Mutu",
                    lecturer: "Moch. Sahidin, MA."
                },

                {
                    start: "15:00",
                    end: "16:00",
                    name: "Kuliah Kerja Nyata",
                    lecturer: "Beni Bunyamin, S.Pd., M.Pd."
                },

                {
                    start: "16:00",
                    end: "17:00",
                    name: "Kapita Selekta Pendidikan",
                    lecturer: "Nasri, M.Pd."
                }
            ],

            sunday: []
        },


        2: {

            saturday: [
                {
                    start: "14:00",
                    end: "15:00",
                    name: "Kewirausahaan",
                    lecturer: "Aries Setiawan, SE., MM."
                },

                {
                    start: "15:00",
                    end: "16:00",
                    name: "Pendidikan Luar Sekolah",
                    lecturer: "Saefudin, S.Pd., MM."
                }
            ],

            sunday: [
                {
                    start: "11:00",
                    end: "12:00",
                    name: "Pendidikan Keterampilan Hidup",
                    lecturer: "Dr. Hasan Basri"
                },

                {
                    start: "12:00",
                    end: "13:00",
                    name: "Istirahat",
                    type: "break"
                },

                {
                    start: "13:00",
                    end: "14:00",
                    name: "Metodologi Penelitian Pendidikan",
                    lecturer: "Dr. Budiman"
                }
            ]
        }

    },


    PIAUD: {

        1: {

            saturday: [
                {
                    start: "15:00",
                    end: "16:00",
                    name: "Kewirausahaan",
                    lecturer: "Aries Setiawan, SE., MM."
                },

                {
                    start: "16:00",
                    end: "16:30",
                    name: "Istirahat",
                    type: "break"
                },

                {
                    start: "16:30",
                    end: "17:30",
                    name: "Pembelajaran Literasi, Numerasi Anak Usia Dini",
                    lecturer: "Nuni Wahyuningsih, M.Pd."
                }
            ],


            sunday: [
                {
                    start: "10:00",
                    end: "11:00",
                    name: "Pembelajaran Sains Anak Usia Dini",
                    lecturer: "Yandra, S.Pd.I., M.Pd. / Ahdan Abdul Ghani, S.Pd."
                },

                {
                    start: "11:00",
                    end: "12:00",
                    name: "Kuliah Kerja Nyata",
                    lecturer: "Dr. Hasan Basri"
                }
            ]
        },


        2: {

            saturday: [
                {
                    start: "14:00",
                    end: "15:00",
                    name: "Pembelajaran Anak Usia Dini",
                    lecturer: "Dede Iwanah, S.Pd., M.Pd. / Nurhasanah, S.Pd."
                },

                {
                    start: "15:00",
                    end: "16:00",
                    name: "Manajemen Pengelolaan Kelas",
                    lecturer: "Ahmad Azizi, S.Pd., M.Si."
                },

                {
                    start: "16:00",
                    end: "16:30",
                    name: "Istirahat",
                    type: "break"
                },

                {
                    start: "16:30",
                    end: "17:30",
                    name: "Pembelajaran Al-Qur'an Anak Usia Dini",
                    lecturer: "Siti Mutmainah, M.Pd."
                }
            ],


            sunday: [
                {
                    start: "10:00",
                    end: "11:00",
                    name: "Metodologi Penelitian Pendidikan Anak Usia Dini",
                    lecturer: "Dr. Budiman"
                },

                {
                    start: "11:00",
                    end: "12:00",
                    name: "Pembelajaran Bahasa Daerah Anak Usia Dini",
                    lecturer: "Eni Nuraeni, S.Pd."
                },

                {
                    start: "12:00",
                    end: "13:00",
                    name: "Istirahat",
                    type: "break"
                },

                {
                    start: "13:00",
                    end: "14:00",
                    name: "Bermain dan Permainan Anak Usia Dini",
                    lecturer: "Teti Srihayati, S.Pd., M.Pd."
                }
            ]
        }

    }

};


/* =========================================================
   RUNNING TEXT
========================================================= */

const runningMessages = [
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


/* =========================================================
   STATE
========================================================= */

let selectedProgram = "PAI";

// Pekan yang sedang DILIHAT
let selectedWeek = null;

// Pekan aktual berdasarkan tanggal hari ini
let actualWeek = 1;


/* =========================================================
   DOM
========================================================= */

const currentDateElement =
    document.getElementById("currentDate");

const currentTimeElement =
    document.getElementById("currentTime");

const currentWeekElement =
    document.getElementById("currentWeek");

const runningTextElement =
    document.getElementById("runningText");

const saturdayScheduleElement =
    document.getElementById("saturdaySchedule");

const sundayScheduleElement =
    document.getElementById("sundaySchedule");

const scheduleTitleElement =
    document.getElementById("scheduleTitle");

const countdownLabelElement =
    document.getElementById("countdownLabel");

const nextClassNameElement =
    document.getElementById("nextClassName");

const countdownElement =
    document.getElementById("countdown");

const nextClassDetailElement =
    document.getElementById("nextClassDetail");

const nextClassLecturerElement =
    document.getElementById("nextClassLecturer");

const nextClassTimeElement =
    document.getElementById("nextClassTime");

const nextClassDetailBottom =
    document.getElementById("nextClassDetailBottom");

const nextClassLecturerBottom =
    document.getElementById("nextClassLecturerBottom");

const nextClassTimeBottom =
    document.getElementById("nextClassTimeBottom");

const saturdayStatusElement =
    document.getElementById("saturdayStatus");

const sundayStatusElement =
    document.getElementById("sundayStatus");

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const themeText =
    document.getElementById("themeText");

const classPhoto =
    document.getElementById("classPhoto");

const photoFallback =
    document.getElementById("photoFallback");


/* =========================================================
   TANGGAL
========================================================= */

function parseDateOnly(dateString) {

    const [year, month, day] =
        dateString.split("-").map(Number);

    return new Date(
        year,
        month - 1,
        day,
        0,
        0,
        0,
        0
    );
}


const startDate =
    parseDateOnly(cycleConfig.tanggalMulai);


/* =========================================================
   GET CURRENT WEEK
========================================================= */

function getCurrentWeek(date = new Date()) {

    const today = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );

    const difference =
        today.getTime() - startDate.getTime();

    /*
        Kalau tanggal masih sebelum tanggal mulai,
        gunakan Pekan Awal.
    */

    if (difference < 0) {
        return cycleConfig.pekanAwal;
    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const cyclePosition =
        Math.floor(days / 7) % 2;

    if (cycleConfig.pekanAwal === 1) {
        return cyclePosition + 1;
    }

    return cyclePosition === 0 ? 2 : 1;
}


/* =========================================================
   FORMAT TANGGAL
========================================================= */

function formatDate(date) {

    return date.toLocaleDateString(
        "id-ID",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );
}


/* =========================================================
   FORMAT JAM
========================================================= */

function formatTime(date) {

    return date.toLocaleTimeString(
        "id-ID",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
    );
}


/* =========================================================
   FORMAT COUNTDOWN
========================================================= */

function formatCountdown(milliseconds) {

    if (milliseconds <= 0) {
        return "00:00:00";
    }

    const totalSeconds =
        Math.floor(milliseconds / 1000);

    const hours =
        Math.floor(totalSeconds / 3600);

    const minutes =
        Math.floor((totalSeconds % 3600) / 60);

    const seconds =
        totalSeconds % 60;

    return [
        hours,
        minutes,
        seconds
    ]
        .map(value =>
            String(value).padStart(2, "0")
        )
        .join(":");
}


/* =========================================================
   CREATE DATETIME
========================================================= */

function createDateTime(
    date,
    time
) {

    const [hours, minutes] =
        time.split(":").map(Number);

    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes,
        0,
        0
    );
}


/* =========================================================
   DAY KEY
========================================================= */

function getDayKey(dayNumber) {

    if (dayNumber === 6) {
        return "saturday";
    }

    if (dayNumber === 0) {
        return "sunday";
    }

    return null;
}


/* =========================================================
   GET SCHEDULE FOR DATE
========================================================= */

function getScheduleForDate(
    program,
    date
) {

    const dayKey =
        getDayKey(date.getDay());

    if (!dayKey) {
        return [];
    }

    const week =
        getCurrentWeek(date);

    return scheduleData?.[program]?.[week]?.[dayKey] || [];
}


/* =========================================================
   FIND CURRENT CLASS
========================================================= */

function findOngoingClass(
    program,
    now = new Date()
) {

    const dayKey =
        getDayKey(now.getDay());

    if (!dayKey) {
        return null;
    }

    const week =
        getCurrentWeek(now);

    const schedule =
        scheduleData?.[program]?.[week]?.[dayKey] || [];

    for (const item of schedule) {

        if (item.type === "break") {
            continue;
        }

        const start =
            createDateTime(now, item.start);

        const end =
            createDateTime(now, item.end);

        if (
            now >= start &&
            now < end
        ) {

            return {
                ...item,
                date: new Date(now),
                startDateTime: start,
                endDateTime: end
            };
        }
    }

    return null;
}


/* =========================================================
   FIND NEXT CLASS
========================================================= */

function findNextClass(
    program,
    now = new Date()
) {

    /*
        Cek sampai 14 hari ke depan.
        Jadi kalau hari ini bukan Sabtu/Minggu,
        sistem tetap bisa menemukan kuliah berikutnya.
    */

    for (
        let offset = 0;
        offset <= 14;
        offset++
    ) {

        const date =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate() + offset
            );

        const dayKey =
            getDayKey(date.getDay());

        if (!dayKey) {
            continue;
        }

        const schedule =
            getScheduleForDate(
                program,
                date
            );

        for (const item of schedule) {

            if (item.type === "break") {
                continue;
            }

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

            /*
                Untuk hari ini, jangan anggap kelas
                yang sudah lewat sebagai next class.
            */

            if (start > now) {

                return {
                    ...item,
                    date: date,
                    startDateTime: start,
                    endDateTime: end
                };
            }
        }
    }

    return null;
}


/* =========================================================
   GET CURRENT SCHEDULE STATE
========================================================= */

function getCurrentScheduleState(
    program,
    now = new Date()
) {

    const ongoing =
        findOngoingClass(
            program,
            now
        );

    const next =
        findNextClass(
            program,
            now
        );

    return {
        ongoing,
        next
    };
}


/* =========================================================
   ITEM STATUS
========================================================= */

function getItemStatus(
    item,
    date,
    now
) {

    if (item.type === "break") {
        return "";
    }

    /*
        Status hanya diberikan kalau tanggal
        yang sedang ditampilkan adalah hari ini.
    */

    const isToday =
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate();

    if (!isToday) {
        return "";
    }

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

    if (start > now) {
        return "next";
    }

    return "finished";
}


/* =========================================================
   RENDER DAY
========================================================= */

function renderDay(
    dayNumber,
    element,
    week
) {

    const dayKey =
        getDayKey(dayNumber);

    const now =
        new Date();

    /*
        Cari tanggal Sabtu/Minggu dari minggu
        kalender yang sedang berjalan.

        Ini hanya untuk menentukan tanggal tampilan.
        Status tetap menggunakan tanggal hari ini.
    */

    const today =
        new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        );

    const currentDay =
        today.getDay();

    let difference;

    if (dayNumber === 6) {
        difference =
            6 - currentDay;
    } else {
        difference =
            -currentDay;
    }

    const displayDate =
        new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + difference
        );

    /*
        Kalau tanggal tampilan ternyata sudah lewat
        dan sekarang Senin-Jumat, cari weekend berikutnya.
    */

    if (
        currentDay >= 1 &&
        currentDay <= 5
    ) {

        const daysUntilSaturday =
            6 - currentDay;

        const daysUntilSunday =
            7 - currentDay;

        if (dayNumber === 6) {

            displayDate.setDate(
                today.getDate() +
                daysUntilSaturday
            );

        } else {

            displayDate.setDate(
                today.getDate() +
                daysUntilSunday
            );
        }
    }


    const schedule =
        scheduleData?.[selectedProgram]?.[week]?.[dayKey] || [];


    element.innerHTML = "";


    /*
        OFF
    */

    if (schedule.length === 0) {

        element.innerHTML = `
            <div class="off-day">
                <i class="bi bi-calendar-x"></i>
                <span>Tidak ada jadwal kuliah</span>
            </div>
        `;

        return;
    }


    schedule.forEach(item => {

        const status =
            getItemStatus(
                item,
                displayDate,
                now
            );

        const itemElement =
            document.createElement("div");

        itemElement.className =
            `schedule-item ${status} ${item.type === "break" ? "break" : ""}`;


        /*
            ISTIRAHAT
        */

        if (item.type === "break") {

            itemElement.innerHTML = `
                <div class="schedule-time">
                    ${item.start} – ${item.end}
                </div>

                <div class="schedule-name">
                    ☕ ${item.name}
                </div>
            `;

            element.appendChild(itemElement);

            return;
        }


        let statusHTML = "";

        if (status === "ongoing") {

            statusHTML = `
                <span class="schedule-status status-ongoing">
                    <i class="bi bi-broadcast-pin"></i>
                    Sedang berlangsung
                </span>
            `;

        } else if (status === "next") {

            statusHTML = `
                <span class="schedule-status status-next">
                    <i class="bi bi-arrow-right-circle"></i>
                    Selanjutnya
                </span>
            `;

        } else if (status === "finished") {

            statusHTML = `
                <span class="schedule-status status-finished">
                    <i class="bi bi-check2-circle"></i>
                    Selesai
                </span>
            `;
        }


        itemElement.innerHTML = `
            <div class="schedule-time">
                ${item.start} – ${item.end}
            </div>

            <div class="schedule-name">
                ${item.name}
            </div>

            <div class="schedule-lecturer">
                ${item.lecturer}
            </div>

            ${statusHTML}
        `;

        element.appendChild(itemElement);

    });
}


/* =========================================================
   RENDER SCHEDULE
========================================================= */

function renderSchedule() {

    /*
        Kalau selectedWeek belum dipilih,
        otomatis pakai pekan sekarang.
    */

    const week =
        selectedWeek || actualWeek;


    scheduleTitleElement.textContent =
        `${selectedProgram} · Pekan ${week}`;


    renderDay(
        6,
        saturdayScheduleElement,
        week
    );

    renderDay(
        0,
        sundayScheduleElement,
        week
    );


    /*
        Badge hari ini.
    */

    const today =
        new Date().getDay();

    saturdayStatusElement.style.display =
        today === 6 ? "inline-flex" : "none";

    sundayStatusElement.style.display =
        today === 0 ? "inline-flex" : "none";

    saturdayStatusElement.textContent =
        today === 6 ? "HARI INI" : "";

    sundayStatusElement.textContent =
        today === 0 ? "HARI INI" : "";


    /*
        Update active button
    */

    document
        .querySelectorAll(".week-btn")
        .forEach(button => {

            const buttonWeek =
                Number(
                    button.dataset.week
                );

            button.classList.toggle(
                "active",
                buttonWeek === week
            );
        });


    document
        .querySelectorAll(".program-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.program === selectedProgram
            );
        });
}


/* =========================================================
   UPDATE DATE / TIME
========================================================= */

function updateDateTime() {

    const now =
        new Date();

    actualWeek =
        getCurrentWeek(now);


    currentDateElement.textContent =
        formatDate(now);

    currentTimeElement.textContent =
        formatTime(now);

    currentWeekElement.textContent =
        `Pekan ${actualWeek}`;


    /*
        Kalau user belum memilih manual,
        jadwal mengikuti pekan aktual.
    */

    if (selectedWeek === null) {
        renderSchedule();
    }
}


/* =========================================================
   UPDATE COUNTDOWN
========================================================= */

function updateCountdown() {

    const now =
        new Date();

    const state =
        getCurrentScheduleState(
            selectedProgram,
            now
        );


    /*
        ADA KELAS YANG SEDANG BERLANGSUNG
    */

    if (state.ongoing) {

        const remaining =
            state.ongoing.endDateTime.getTime() -
            now.getTime();

        countdownLabelElement.textContent =
            "SEDANG BERLANGSUNG";

        nextClassNameElement.textContent =
            state.ongoing.name;

        countdownElement.textContent =
            formatCountdown(remaining);

        nextClassDetailElement.textContent =
            state.ongoing.name;

        nextClassLecturerElement.textContent =
            state.ongoing.lecturer;

        nextClassTimeElement.textContent =
            `${state.ongoing.start} – ${state.ongoing.end}`;

        return;
    }


    /*
        TIDAK ADA YANG BERLANGSUNG,
        CARI KELAS BERIKUTNYA
    */

    if (state.next) {

        const remaining =
            state.next.startDateTime.getTime() -
            now.getTime();

        countdownLabelElement.textContent =
            "KELAS BERIKUTNYA";

        nextClassNameElement.textContent =
            state.next.name;

        countdownElement.textContent =
            formatCountdown(remaining);

        nextClassDetailElement.textContent =
            state.next.name;

        nextClassLecturerElement.textContent =
            state.next.lecturer;

        nextClassTimeElement.textContent =
            `${formatDate(state.next.date)} · ${state.next.start} – ${state.next.end}`;

        return;
    }


    /*
        TIDAK ADA JADWAL
    */

    countdownLabelElement.textContent =
        "TIDAK ADA JADWAL";

    nextClassNameElement.textContent =
        "Belum ada jadwal berikutnya";

    countdownElement.textContent =
        "00:00:00";

    nextClassDetailElement.textContent =
        "-";

    nextClassLecturerElement.textContent =
        "-";

    nextClassTimeElement.textContent =
        "-";
}


/* =========================================================
   UPDATE NEXT CLASS BOTTOM
========================================================= */

function updateNextClassBottom() {

    const now =
        new Date();

    const state =
        getCurrentScheduleState(
            selectedProgram,
            now
        );


    let target =
        state.ongoing || state.next;


    if (!target) {

        nextClassDetailBottom.textContent =
            "Belum ada jadwal";

        nextClassLecturerBottom.textContent =
            "-";

        nextClassTimeBottom.textContent =
            "-";

        return;
    }


    nextClassDetailBottom.textContent =
        target.name;

    nextClassLecturerBottom.textContent =
        target.lecturer;

    nextClassTimeBottom.textContent =
        `${formatDate(target.date)} · ${target.start} – ${target.end}`;
}


/* =========================================================
   RUNNING TEXT
========================================================= */

function changeRunningText() {

    if (!runningTextElement) {
        return;
    }

    runningTextElement.style.animation = "none";

    /*
        Force reflow supaya animasi bisa
        dimulai ulang dari posisi awal.
    */

    void runningTextElement.offsetWidth;

    runningTextElement.textContent =
        runningMessages[runningIndex];

    runningTextElement.style.animation =
        "runningText 20s linear infinite";

    runningIndex =
        (runningIndex + 1) %
        runningMessages.length;
}


/*
    Ganti pesan setiap 20 detik.
*/

changeRunningText();

setInterval(
    changeRunningText,
    20000
);


/* =========================================================
   WEEK BUTTON
========================================================= */

document
    .querySelectorAll(".week-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectedWeek =
                    Number(
                        button.dataset.week
                    );

                renderSchedule();

                /*
                    Beri keterangan bahwa user
                    sedang melihat pekan manual.
                */

                const autoInfo =
                    document.getElementById(
                        "weekAutoInfo"
                    );

                if (selectedWeek === actualWeek) {

                    autoInfo.textContent =
                        "Sama dengan pekan sekarang";

                } else {

                    autoInfo.textContent =
                        `Pekan sekarang: Pekan ${actualWeek}`;
                }
            }
        );

    });


/* =========================================================
   PROGRAM BUTTON
========================================================= */

document
    .querySelectorAll(".program-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectedProgram =
                    button.dataset.program;

                renderSchedule();

                /*
                    Countdown juga langsung
                    mengikuti program yang dipilih.
                */

                updateCountdown();

                updateNextClassBottom();
            }
        );

    });


/* =========================================================
   THEME
========================================================= */

function updateThemeButton() {

    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        themeIcon.className =
            "bi bi-sun-fill";

        themeText.textContent =
            "Light";

    } else {

        themeIcon.className =
            "bi bi-moon-stars-fill";

        themeText.textContent =
            "Dark";
    }
}


/* =========================================================
   LOAD SAVED THEME
========================================================= */

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "semester7-theme"
        );

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");
    }

    updateThemeButton();
}


/* =========================================================
   TOGGLE THEME
========================================================= */

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        const isDark =
            document.body.classList.contains("dark");


        localStorage.setItem(
            "semester7-theme",
            isDark ? "dark" : "light"
        );


        updateThemeButton();
    }
);


/* =========================================================
   FOTO FALLBACK
========================================================= */

classPhoto.addEventListener(
    "error",
    () => {

        classPhoto.style.display =
            "none";

        photoFallback.style.display =
            "flex";
    }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initialize() {

    actualWeek =
        getCurrentWeek();

    /*
        null = otomatis mengikuti pekan aktual
    */

    selectedWeek = null;

    loadTheme();

    renderSchedule();

    updateDateTime();

    updateCountdown();

    updateNextClassBottom();
}


/* =========================================================
   RUN
========================================================= */

initialize();


/*
    Semua sistem realtime berjalan setiap 1 detik.
*/

setInterval(
    () => {

        updateDateTime();

        updateCountdown();

        updateNextClassBottom();

    },
    1000
);
