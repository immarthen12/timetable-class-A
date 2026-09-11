// ======================================================
// JADWAL SEMESTER 7
// PRODI PIAUD & PAI
//
// Jadwal berulang setiap minggu.
// Tidak menggunakan Cycle A / B.
//
// PIAUD:
// Jumat  = ONLINE
// Sabtu  = REGULER
// Minggu = REGULER
//
// PAI:
// Sabtu  = REGULER
// Minggu = REGULER
// ======================================================



// ======================================================
// DATA JADWAL
// ======================================================

const jadwal = {

    // ==================================================
    // PIAUD
    // ==================================================

    piaud: {

        nama: "PIAUD",

        hari: {

            // --------------------------
            // JUMAT
            // KELAS ONLINE
            // --------------------------

            jumat: [

                {
                    mulai: "14:00",
                    selesai: "15:30",
                    matkul: "KEWIRAUSAHAAN",
                    dosen: "Aries Setiawan, SE., MM."
                },

                {
                    mulai: "15:30",
                    selesai: "16:00",
                    istirahat: true
                },

                {
                    mulai: "16:00",
                    selesai: "17:30",
                    matkul: "MANAJEMEN PENGELOLAAN KELAS",
                    dosen: "Ahmad Azizi, S.Pd., M.Si."
                },

                {
                    mulai: "19:00",
                    selesai: "20:30",
                    matkul: "PEMBELAJARAN BAHASA DAERAH ANAK USIA DINI",
                    dosen: "Eni Nuraeni, S.Pd"
                }

            ],


            // --------------------------
            // SABTU
            // KELAS REGULER
            // --------------------------

            sabtu: [

                {
                    mulai: "13:30",
                    selesai: "15:00",
                    matkul: "PEMBELAJARAN LITERASI, NURNERASI ANAK USIA DINI",
                    dosen: "Nuni Wahyuningsih, M.Pd."
                },

                {
                    mulai: "15:00",
                    selesai: "16:30",
                    matkul: "PEMBELAJARAN SAINS ANAK USIA DINI",
                    dosen: "Yandra, S.Pd.I., M.Pd.,/Ahdan Abdul Ghani, S.Pd."
                },

                {
                    mulai: "16:30",
                    selesai: "17:00",
                    istirahat: true
                },

                {
                    mulai: "17:00",
                    selesai: "18:30",
                    matkul: "PENDIDIKAN KELUARGA",
                    dosen: "Dede Iwanah, S.Pd., M.Pd.,/Nurhasanah, S.Pd."
                }

            ],


            // --------------------------
            // MINGGU
            // KELAS REGULER
            // --------------------------

            minggu: [

                {
                    mulai: "09:00",
                    selesai: "10:30",
                    matkul: "PEMBELAJARAN KESENIAN ANAK USIA DINI",
                    dosen: "Siti Mutmainah, M.Pd."
                },

                {
                    mulai: "10:30",
                    selesai: "12:00",
                    matkul: "METODOLOGI PENELITIAN PENDIDIKAN ANAK USIA DINI",
                    dosen: "Dr. Budiman"
                },

                {
                    mulai: "12:00",
                    selesai: "13:00",
                    istirahat: true
                },

                {
                    mulai: "13:00",
                    selesai: "14:30",
                    matkul: "BERMAIN DAN PERMAINAN ANAK USIA DINI",
                    dosen: "Tety Srihayati, S.Pd., M.Pd."
                },

                {
                    mulai: "14:30",
                    selesai: "16:30",
                    matkul: "KULIAH KERJA NYATA",
                    dosen: "Dr. Hasan Basri"
                }

            ]

        }

    },


    // ==================================================
    // PAI
    // ==================================================

    pai: {

        nama: "PAI",

        hari: {

            // --------------------------
            // SABTU
            // KELAS REGULER
            // --------------------------

            sabtu: [

                {
                    mulai: "13:30",
                    selesai: "15:00",
                    matkul: "KEWIRAUSAHAAN",
                    dosen: "Aries Setiawan, SE., MM."
                },

                {
                    mulai: "15:00",
                    selesai: "16:30",
                    matkul: "SISTEM PENJAMINAN MUTU",
                    dosen: "Moch Sahidin, MA."
                },

                {
                    mulai: "16:30",
                    selesai: "17:00",
                    istirahat: true
                },

                {
                    mulai: "17:00",
                    selesai: "18:30",
                    matkul: "KULIAH KERJA NYATA",
                    dosen: "Beni Bunyamin, S.Pd., M.Pd."
                }

            ],


            // --------------------------
            // MINGGU
            // KELAS REGULER
            // --------------------------

            minggu: [

                {
                    mulai: "09:00",
                    selesai: "10:30",
                    matkul: "METODOLOGI PENELITIAN PENDIDIKAN",
                    dosen: "Dr. Budiman"
                },

                {
                    mulai: "10:30",
                    selesai: "12:00",
                    matkul: "KAPITA SELEKTA PENDIDIKAN",
                    dosen: "Nasri, M.Pd"
                },

                {
                    mulai: "12:00",
                    selesai: "13:00",
                    istirahat: true
                },

                {
                    mulai: "13:00",
                    selesai: "14:30",
                    matkul: "PENDIDIKAN KETERAMPILAN HIDUP (LIFESKILL)",
                    dosen: "Dr. Hasan Basri"
                },

                {
                    mulai: "14:30",
                    selesai: "16:30",
                    matkul: "PENDIDIKAN LUAR SEKOLAH",
                    dosen: "Saefudin, S.Pd., MM."
                }

            ]

        }

    }

};



// ======================================================
// PRODI AKTIF
// ======================================================

let prodiAktif = "piaud";



// ======================================================
// NAMA HARI
// ======================================================

const namaHari = {

    0: "Minggu",
    1: "Senin",
    2: "Selasa",
    3: "Rabu",
    4: "Kamis",
    5: "Jumat",
    6: "Sabtu"

};


const keyHari = {

    0: "minggu",
    5: "jumat",
    6: "sabtu"

};



// ======================================================
// MENDAPATKAN WAKTU WIB
// ======================================================

function getNowWIB() {

    const parts =
        new Intl.DateTimeFormat(
            "en-GB",
            {
                timeZone: "Asia/Jakarta",

                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",

                hour12: false
            }
        ).formatToParts(new Date());


    const getPart = (type) => {

        return parts.find(
            part => part.type === type
        )?.value;

    };


    return {

        hour: Number(getPart("hour")),

        minute: Number(getPart("minute")),

        second: Number(getPart("second"))

    };

}



// ======================================================
// MENDAPATKAN HARI SEKARANG
// ======================================================

function getTodayIndex() {

    const parts =
        new Intl.DateTimeFormat(
            "en-US",
            {
                timeZone: "Asia/Jakarta",

                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }
        ).formatToParts(new Date());


    const year =
        Number(
            parts.find(
                p => p.type === "year"
            ).value
        );


    const month =
        Number(
            parts.find(
                p => p.type === "month"
            ).value
        );


    const day =
        Number(
            parts.find(
                p => p.type === "day"
            ).value
        );


    const date =
        new Date(
            Date.UTC(
                year,
                month - 1,
                day
            )
        );


    return date.getUTCDay();

}



// ======================================================
// KONVERSI JAM KE DETIK
// ======================================================

function timeToSeconds(time) {

    const [hour, minute] =
        time.split(":").map(Number);


    return (
        hour * 3600 +
        minute * 60
    );

}



// ======================================================
// DETIK SEKARANG
// ======================================================

function getCurrentSeconds() {

    const now = getNowWIB();


    return (
        now.hour * 3600 +
        now.minute * 60 +
        now.second
    );

}



// ======================================================
// FORMAT COUNTDOWN
// ======================================================

function formatCountdown(totalSeconds) {

    totalSeconds =
        Math.max(
            0,
            Math.floor(totalSeconds)
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


    return [

        String(hours).padStart(2, "0"),

        String(minutes).padStart(2, "0"),

        String(seconds).padStart(2, "0")

    ].join(":");

}



// ======================================================
// MENDAPATKAN JADWAL HARI INI
// ======================================================

function getScheduleToday() {

    const today =
        getTodayIndex();


    const key =
        keyHari[today];


    if (!key) {

        return [];

    }


    return (
        jadwal[prodiAktif]
            .hari[key] || []
    );

}



// ======================================================
// MENCARI KELAS YANG SEDANG BERLANGSUNG
// ======================================================

function getActiveClass() {

    const schedule =
        getScheduleToday();


    const now =
        getCurrentSeconds();


    return schedule.find(
        item => {

            if (item.istirahat) {

                return false;

            }


            const start =
                timeToSeconds(
                    item.mulai
                );


            const end =
                timeToSeconds(
                    item.selesai
                );


            return (
                now >= start &&
                now < end
            );

        }
    );

}



// ======================================================
// MENCARI KELAS BERIKUTNYA HARI INI
// ======================================================

function getNextClassToday() {

    const schedule =
        getScheduleToday();


    const now =
        getCurrentSeconds();


    return schedule.find(
        item => {

            if (item.istirahat) {

                return false;

            }


            return (
                now <
                timeToSeconds(
                    item.mulai
                )
            );

        }
    );

}



// ======================================================
// MENCARI KELAS BERIKUTNYA
// TERMASUK HARI BERIKUTNYA
// ======================================================

function getNextScheduledClass() {

    const today =
        getTodayIndex();


    const now =
        getCurrentSeconds();


    /*
        Kita cari maksimal 7 hari
        ke depan.
    */

    for (
        let offset = 0;
        offset <= 7;
        offset++
    ) {

        const targetDay =
            (today + offset) % 7;


        const key =
            keyHari[targetDay];


        /*
            Senin-Kamis tidak punya
            jadwal, jadi dilewati.
        */

        if (!key) {

            continue;

        }


        const schedule =
            jadwal[prodiAktif]
                .hari[key] || [];


        for (const item of schedule) {

            if (item.istirahat) {

                continue;

            }


            const start =
                timeToSeconds(
                    item.mulai
                );


            /*
                Kalau masih hari yang sama,
                kelas yang sudah lewat dilewati.
            */

            if (
                offset === 0 &&
                start <= now
            ) {

                continue;

            }


            return {

                item: item,

                offset: offset

            };

        }

    }


    return null;

}



// ======================================================
// UPDATE JAM
// ======================================================

function updateClock() {

    const now =
        new Date();


    document.getElementById(
        "clock"
    ).textContent =

        new Intl.DateTimeFormat(
            "id-ID",
            {
                timeZone: "Asia/Jakarta",

                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",

                hour12: false
            }
        ).format(now);


    document.getElementById(
        "date"
    ).textContent =

        new Intl.DateTimeFormat(
            "id-ID",
            {
                timeZone: "Asia/Jakarta",

                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        ).format(now);

}



// ======================================================
// RENDER JADWAL
// ======================================================

function renderSchedule() {

    const container =
        document.getElementById(
            "scheduleContainer"
        );


    const data =
        jadwal[prodiAktif];


    /*
        Judul prodi
    */

    document.getElementById(
        "todayTitle"
    ).textContent =
        data.nama;


    /*
        Hari sekarang
    */

    const todayIndex =
        getTodayIndex();


    const todayKey =
        keyHari[todayIndex];


    /*
        Status kelas hari ini
    */

    const todayType =
        document.getElementById(
            "todayType"
        );


    if (
        prodiAktif === "piaud" &&
        todayKey === "jumat"
    ) {

        todayType.textContent =
            "🟣 KELAS ONLINE";

    }

    else if (
        todayKey === "sabtu" ||
        todayKey === "minggu"
    ) {

        todayType.textContent =
            "🟢 KELAS OFFLINE";

    }

    else {

        todayType.textContent =
            "Tidak Ada Kelas";

    }


    /*
        Kosongkan jadwal lama
    */

    container.innerHTML = "";


    /*
        Kita tampilkan:

        Jumat
        Sabtu
        Minggu
    */

    [
        "jumat",
        "sabtu",
        "minggu"
    ].forEach(day => {

        const schedule =
            data.hari[day] || [];


        const card =
            document.createElement(
                "section"
            );


        card.className =
            "day-card";


        /*
            Apakah hari ini?
        */

        if (
            day === todayKey
        ) {

            card.classList.add(
                "today"
            );

        }


        /*
            Label online/reguler
        */

        let note = "";


        if (
            prodiAktif === "piaud" &&
            day === "jumat"
        ) {

            note =
                `<span class="online-note">
                    🟣 Kelas Online
                </span>`;

        }

        else if (
            schedule.length > 0
        ) {

            note =
                `<span class="online-note">
                    🟢 Kelas Offline
                </span>`;

        }


        /*
            Nama hari
        */

        const dayIndex =
            [
                "minggu",
                "senin",
                "selasa",
                "rabu",
                "kamis",
                "jumat",
                "sabtu"
            ].indexOf(day);


        const displayDay =
            namaHari[dayIndex];


        /*
            Buat baris jadwal
        */

        let rows = "";


        if (
            schedule.length === 0
        ) {

            rows = `
                <div class="empty-day">
                    💤 TIDUR DULU AJA, TIDAK ADA JADWAL.
                </div>
            `;

        }

        else {

            rows =
                schedule.map(
                    item => {

                        /*
                            Kalau istirahat
                        */

                        if (
                            item.istirahat
                        ) {

                            return `

                                <div class="schedule-row break">

                                    <div class="time">
                                        ${item.mulai}
                                        -
                                        ${item.selesai}
                                    </div>

                                    <div>

                                        <div class="subject">
                                            ☕ ISTIRAHAT
                                        </div>

                                        <div class="lecturer">
                                            Waktu istirahat
                                        </div>

                                    </div>

                                </div>

                            `;

                        }


                        /*
                            Kalau mata kuliah
                        */

                        return `

                            <div
                                class="schedule-row"
                                data-day="${day}"
                                data-start="${item.mulai}"
                                data-end="${item.selesai}"
                            >

                                <div class="time">

                                    ${item.mulai}
                                    -
                                    ${item.selesai}

                                </div>


                                <div>

                                    <div class="subject">

                                        ${item.matkul}

                                    </div>


                                    <div class="lecturer">

                                        ${item.dosen}

                                    </div>

                                </div>

                            </div>

                        `;

                    }
                ).join("");

        }


        /*
            Masukkan ke card
        */

        card.innerHTML = `

            <div class="day-head">

                <h3>

                    ${displayDay}

                    ${
                        day === todayKey
                        ? " • HARI INI"
                        : ""
                    }

                </h3>


                <p>
                    ${note}
                </p>

            </div>


            ${rows}

        `;


        container.appendChild(card);

    });

}



// ======================================================
// UPDATE LIVE CARD
// ======================================================

function updateLiveClass() {

    const active =
        getActiveClass();


    const next =
        getNextScheduledClass();


    const badge =
        document.getElementById(
            "liveBadge"
        );


    const title =
        document.getElementById(
            "liveTitle"
        );


    const lecturer =
        document.getElementById(
            "liveLecturer"
        );


    const status =
        document.getElementById(
            "status"
        );


    const countdown =
        document.getElementById(
            "countdown"
        );


    const progressBar =
        document.getElementById(
            "progressBar"
        );


    const liveStart =
        document.getElementById(
            "liveStart"
        );


    const liveEnd =
        document.getElementById(
            "liveEnd"
        );


    const livePercent =
        document.getElementById(
            "livePercent"
        );


    /*
        ================================================
        ADA KELAS YANG SEDANG BERLANGSUNG
        ================================================
    */

    if (active) {

        badge.textContent =
            "● SEDANG BERLANGSUNG";


        badge.classList.remove(
            "waiting"
        );


        title.textContent =
            active.matkul;


        lecturer.textContent =
            active.dosen;


        const start =
            timeToSeconds(
                active.mulai
            );


        const end =
            timeToSeconds(
                active.selesai
            );


        const now =
            getCurrentSeconds();


        const duration =
            end - start;


        const elapsed =
            now - start;


        const remaining =
            end - now;


        const percent =
            Math.min(
                100,
                Math.max(
                    0,
                    (elapsed / duration) * 100
                )
            );


        status.textContent =
            "Selesai dalam";


        countdown.textContent =
            formatCountdown(
                remaining
            );


        progressBar.style.width =
            `${percent}%`;


        liveStart.textContent =
            active.mulai;


        liveEnd.textContent =
            active.selesai;


        livePercent.textContent =
            `${Math.round(percent)}%`;


        /*
            Hapus highlight lama
        */

        document
            .querySelectorAll(
                ".schedule-row.active"
            )
            .forEach(row => {

                row.classList.remove(
                    "active"
                );

            });


        /*
            Highlight kelas aktif
        */

        const today =
            keyHari[
                getTodayIndex()
            ];


        const activeRow =
            document.querySelector(
                `.schedule-row[data-day="${today}"][data-start="${active.mulai}"]`
            );


        if (activeRow) {

            activeRow.classList.add(
                "active"
            );

        }


        return;

    }



    /*
        ================================================
        TIDAK ADA KELAS SEDANG BERLANGSUNG
        ================================================
    */

    document
        .querySelectorAll(
            ".schedule-row.active"
        )
        .forEach(row => {

            row.classList.remove(
                "active"
            );

        });


    progressBar.style.width =
        "0%";


    livePercent.textContent =
        "0%";



    /*
        ================================================
        ADA KELAS BERIKUTNYA
        ================================================
    */

    if (next) {

        const current =
            getCurrentSeconds();


        const nextStart =
            timeToSeconds(
                next.item.mulai
            );


        /*
            86400 = jumlah detik
            dalam 1 hari
        */

        const totalSeconds =
            nextStart -
            current +
            (
                next.offset *
                24 *
                60 *
                60
            );


        badge.textContent =
            "○ KELAS BERIKUTNYA";


        badge.classList.add(
            "waiting"
        );


        title.textContent =
            next.item.matkul;


        lecturer.textContent =
            next.item.dosen;


        /*
            Kalau masih hari ini
        */

        if (
            next.offset === 0
        ) {

            status.textContent =
                "Mulai dalam";

        }

        else {

            const today =
                getTodayIndex();


            const target =
                (
                    today +
                    next.offset
                ) % 7;


            status.textContent =
                `Mulai ${namaHari[target]}`;

        }


        countdown.textContent =
            formatCountdown(
                totalSeconds
            );


        liveStart.textContent =
            next.item.mulai;


        liveEnd.textContent =
            next.item.selesai;


        return;

    }



    /*
        ================================================
        SEMUA JADWAL SELESAI
        ================================================
    */

    badge.textContent =
        "✓ SELESAI";


    badge.classList.add(
        "waiting"
    );


    title.textContent =
        "Jadwal selesai";


    lecturer.textContent =
        "Sampai jumpa di kelas berikutnya.";


    status.textContent =
        "Tidak ada kelas berikutnya";


    countdown.textContent =
        "--:--:--";


    liveStart.textContent =
        "--:--";


    liveEnd.textContent =
        "--:--";

}



// ======================================================
// TOMBOL PIAUD / PAI
// ======================================================

document
    .querySelectorAll(".prodi-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                /*
                    Ambil prodi
                    dari data-prodi
                */

                prodiAktif =
                    button.dataset.prodi;


                /*
                    Hilangkan active
                    dari semua tombol
                */

                document
                    .querySelectorAll(
                        ".prodi-btn"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                /*
                    Aktifkan tombol
                    yang diklik
                */

                button.classList.add(
                    "active"
                );


                /*
                    Render ulang
                */

                renderSchedule();


                updateLiveClass();

            }
        );

    });



// ======================================================
// PROGRAM DIMULAI
// ======================================================

renderSchedule();

updateClock();

updateLiveClass();



// ======================================================
// UPDATE SETIAP 1 DETIK
// ======================================================

setInterval(
    () => {

        updateClock();

        updateLiveClass();

    },
    1000
);
