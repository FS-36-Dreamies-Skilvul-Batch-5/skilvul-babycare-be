"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Vaccines",
      [
        {
          name: "Hepatitis B 1",
          grant_date_guide: "Saat Lahir",
          benefit:
            "Mencegah penyakit Hepatitis B yang bisa menyebabkan kerusakan hati.",
          information: `
          <ol>
            <li>
              Untuk semua bayi baru lahir dengan berat lahir minimal 2 kg.
            </li>
            <li>
              Anak yang belum pernah imunisasi hepatitis B.
            </li>
            <li>
              Pasien cuci darah/hemodialisis.
            </li>
            <li>
              Pasien yang membutuhkan transfusi berulang
            </li>
            <li>
              Orang yang berisiko tertular hepatitis B  dari pekerjaan.
            </li>
          </ol>
        `,
        },
        {
          name: "Polio 0",
          grant_date_guide: "Saat Lahir",
          benefit: "Mencegah infeksi virus polio",
          information: `
          <ol>
            <li>
              Untuk semua bayi baru lahir
            </li>
            <li>
              Dapat diberikan untuk anak usia < 1 tahun.
            </li>
          </ol>
        `,
        },
        {
          name: "BCG",
          grant_date_guide: "Saat Lahir",
          benefit:
            "Melindungi bayi dan mencegah penyakit tuberkulosis (TB) yang disebabkan oleh bakteri Mycobacterium tuberculosis.",
          information: `
          <ol>
            <li>
              Untuk bayi usia < 3 bulan yang belum mendapatkan imunisasi BCG
            </li>
            <li>
              Bayi baru lahir yang kontak erat dengan penderita TB aktif.
            </li>
            <li>
              Mencegah Tuberkulosis (TB) yang berat.
            </li>
          </ol>
        `,
        },
        {
          name: "Hepatitis B2",
          grant_date_guide: "59 Hari",
          benefit:
            "Mencegah penyakit Hepatitis B yang bisa menyebabkan kerusakan hati.",
          information: `
          <ol>
            <li>
              Untuk semua bayi baru lahir dengan berat lahir minimal 2 kg.
            </li>
            <li>
              Anak yang belum pernah imunisasi hepatitis B.
            </li>
            <li>
              Pasien cuci darah/hemodialisis.
            </li>
            <li>
              Pasien yang membutuhkan transfusi berulang
            </li>
            <li>
              Orang yang berisiko tertular hepatitis B dari pekerjaan.  
            </li>
          </ol>
        `,
        },
        {
          name: "Polio 1",
          grant_date_guide: "59 Hari",
          benefit:
            "Mencegah infeksi virus polio",
          information: `
          <ol>
            <li>
              Untuk semua bayi baru lahir
            </li>
            <li>
              Dapat diberikan untuk anak usia < 1 tahun.
            </li>
          </ol>
        `,
        },
        {
          name: "DTP 1",
          grant_date_guide: "59 Hari",
          benefit:
            "Mencegah infeksi yang menyebabkan penyumbatan jalan nafas, infeksi  pertusis yang menyebabkan batuk rejan/ batuk 100 hari serta infeksi tetanus",
          information: `
          <ol>
            <li>
              Semua anak yang belum imunisasi DTP, diberikan min. Usia 6 minggu
            </li>
            <li>
              Orang yang terpapar dengan orang yang terinfeksi difteri dan pertusis.
            </li>
            <li>
              Orang yang terpapar luka terbuka dan kotor. Dapat diberikan vaksi DTwP atau DTaP atau kombinasi vaksin lain.
            </li>
            <li>
              Untuk usia > 7 tahun dapat diberikan Td atau Tdap.
            </li>
            <li>
              DTP-1 diberikan di usia 2,3, dan 4 bulan.
            </li>
          </ol>
        `,
        },
        {
          name: "HIb 1",
          grant_date_guide: "59 Hari",
          benefit:
            "Mencegah infeksi virus Hib yang menyebabkan meningitis (infeksi/radang selaput otak) dan pneumonia (radang paru).",
          information: `
          <ol>
            <li>
              Semua anak yang belum diberikan imunisasi Hib
            </li>
            <li>
              Diberikan bersamaan dengan imunisasi DTP/DTaP, hepatitis B, dan polio.
            </li>
          </ol>
        `,
        },
        {
          name: "PCV 1",
          grant_date_guide: "59 Hari",
          benefit:
            "Mencegah penyakit pneumonia (radang paru) akibat infeksi pneumokokus.",
          information: `
          <ol>
            <li>
              Untuk semua anak yang belum pernah imunisasi PCV mulai usia 6 minggu.
            </li>
            <li>
              Anak dengan risiko tinggi terkena penyakit pneumokokus invasif, seperti yang memiliki gangguan imunitas (HIV, kanker, penyakit ginjal kronik, mendapat cangkok organ, dan yang menjalani pengangkatan limpa).
            </li>
            <li>
              Dianjurkan juga pada anak yang tinggal dalam lingkungan hunian padat, paparan asap rokok, panti asuhan, dan bila sering terserang otitis media akut.
            </li>
          </ol>
        `,
        },
        {
          name: "Rotavirus 1",
          grant_date_guide: "59 Hari",
          benefit:
            "Mencegah diare akibat rotavirus",
          information: `
          <ol>
            <li>
              Untuk semua bayi berusia 2-8 bulan yang belum diberikan imunisasi rotavirus.
            </li>
            <li>
              Diberikan secara oral/diteteskan ke mulut
            </li>
            <li>
              Monovalen (diberikan 2 dosis): dosis pertama diberikan mulai usia 6-12 minggu, dosisi kedua dengan jarak minimal 4 minggu dan selesai di usia 24 minggu.
            </li>
            <li>
              Pentavalen (diberikan 3 dosis): dosis pertama diberikan antara usia 6-12 minggu dan pemberian berikutnya dengan interval 4-10 minggu, dosis ketiga dilengkapi sebelum usia 32 minggu.
            </li>
          </ol>
        `,
        },
        {
          name: "Hepatitis B3",
          grant_date_guide: "79 Hari",
          benefit:
            "Mencegah penyakit Hepatitis B yang bisa menyebabkan kerusakan hati",
          information: `
          <ol>
            <li>
              Untuk semua bayi baru lahir dengan berat lahir minimal 2 kg.
            </li>
            <li>
              Anak yang belum pernah imunisasi hepatitis B.
            </li>
            <li>
              Pasien cuci darah/hemodialisis.
            </li>
            <li>
              Pasien yang membutuhkan transfusi berulang.
            </li>
            <li>
              Orang yang berisiko tertular hepatitis B  dari pekerjaan.
            </li>
          </ol>
        `,
        },
        {
          name: "DTP 2",
          grant_date_guide: "79 Hari",
          benefit:
            "Mencegah infeksi yang menyebabkan penyumbatan jalan nafas, infeksi  pertusis yang menyebabkan batuk rejan/ batuk 100 hari serta infeksi tetanus.",
          information: `
          <ol>
            <li>
              Semua anak yang belum imunisasi DTP, diberikan min. Usia 6 minggu
            </li>
            <li>
              Orang yang terpapar dengan orang yang terinfeksi difteri dan pertusis.
            </li>
            <li>
              Orang yang terpapar luka terbuka dan kotor. Dapat diberikan vaksi DTwP atau DTaP atau kombinasi vaksin lain.
            </li>
            <li>
              Untuk usia > 7 tahun dapat diberikan Td atau Tdap.
            </li>
          </ol>
        `,
        },
        {
          name: "Hib 2",
          grant_date_guide: "79 Hari",
          benefit:
            "Mencegah infeksi virus Hib yang menyebabkan meningitis (infeksi/radang selaput otak) dan pneumonia (radang paru).",
          information: `
          <ol>
            <li>
              Semua anak yang belum diberikan imunisasi Hib.
            </li>
            <li>
              Diberikan bersamaan dengan imunisasi DTP/DTaP, hepatitis B, dan polio.
            </li>
          </ol>
        `,
        },
        {
          name: "Polio 2",
          grant_date_guide: "3 bulan",
          benefit:
            "Mencegah infeksi virus polio",
          information: `
          <ol>
            <li>
              Untuk semua bayi baru lahir
            </li>
            <li>
              Dapat diberikan untuk anak usia < 1 tahun.
            </li>
          </ol>
        `,
        },
        {
          name: "Hepatitis B4",
          grant_date_guide: "4 bulan",
          benefit:
            "Mencegah penyakit Hepatitis B yang bisa menyebabkan kerusakan hati.",
          information: `
          <ol>
            <li>
              Untuk semua bayi baru lahir dengan berat lahir minimal 2 kg.
            </li>
            <li>
              Anak yang belum pernah imunisasi hepatitis B.
            </li>
            <li>
              Pasien cuci darah/hemodialisis.
            </li>
            <li>
              Pasien yang membutuhkan transfusi berulang.
            </li>
            <li>
              Orang yang berisiko tertular hepatitis B  dari pekerjaan.
            </li>
          </ol>
        `,
        },
        {
          name: "Hepatitis B4",
          grant_date_guide: "4 bulan",
          benefit:
            "Mencegah penyakit Hepatitis B yang bisa menyebabkan kerusakan hati.",
          information: `
          <ol>
            <li>
              Untuk semua bayi baru lahir dengan berat lahir minimal 2 kg.
            </li>
            <li>
              Anak yang belum pernah imunisasi hepatitis B.
            </li>
            <li>
              Pasien cuci darah/hemodialisis.
            </li>
            <li>
              Pasien yang membutuhkan transfusi berulang
            </li>
            <li>
              Orang yang berisiko tertular hepatitis B dari pekerjaan.  
            </li>
          </ol>
        `,
        },
        {
          name: "Polio 3",
          grant_date_guide: "4 bulan",
          benefit:
            "Mencegah infeksi virus polio",
          information: `
          <ol>
            <li>
              Untuk semua bayi baru lahir
            </li>
            <li>
              Dapat diberikan untuk anak usia < 1 tahun.
            </li>
          </ol>
        `,
        },
        {
          name: "DTP 3",
          grant_date_guide: "4 bulan",
          benefit:
            "Mencegah infeksi yang menyebabkan penyumbatan jalan nafas, infeksi pertusis yang menyebabkan batuk rejan/ batuk 100 hari serta infeksi tetanus.",
          information: `
          <ol>
            <li>
              Semua anak yang belum imunisasi DTP, diberikan min. Usia 6 minggu
            </li>
            <li>
              Orang yang terpapar dengan orang yang terinfeksi difteri dan pertusis.
            </li>
            <li>
              Orang yang terpapar luka terbuka dan kotor. Dapat diberikan vaksi DTwP atau DTaP atau kombinasi vaksin lain.
            </li>
            <li>
              Untuk usia > 7 tahun dapat diberikan Td atau Tdap.
            </li>
          </ol>
        `,
        },
        {
          name: "Hib 3",
          grant_date_guide: "4 bulan",
          benefit:
            "Mencegah infeksi virus Hib yang menyebabkan meningitis (infeksi/radang selaput otak) dan pneumonia (radang paru).",
          information: `
          <ol>
            <li>
              Semua anak yang belum diberikan imunisasi Hib.
            </li>
            <li>
              Diberikan bersamaan dengan imunisasi DTP/DTaP, hepatitis B, dan polio.
            </li>
          </ol>
        `,
        },
        {
          name: "PCV 2",
          grant_date_guide: "4 bulan",
          benefit:
            "Mencegah penyakit pneumonia (radang paru) akibat infeksi pneumokokus.",
          information: `
          <ol>
            <li>
              Untuk semua anak yang belum pernah imunisasi PCV mulai usia 6 minggu.
            </li>
            <li>
              Anak dengan risiko tinggi terkena penyakit pneumokokus invasif, seperti yang memiliki gangguan imunitas (HIV, kanker, penyakit ginjal kronik, mendapat cangkok organ, dan yang menjalani pengangkatan limpa).
            </li>
            <li>
              Dianjurkan juga pada anak yang tinggal dalam lingkungan hunian padat, paparan asap rokok, panti asuhan, dan bila sering terserang otitis media akut.
            </li>
          </ol>
        `,
        },
        {
          name: "Rotavirus 2",
          grant_date_guide: "4 bulan",
          benefit:
            "Mencegah diare akibat rotavirus",
          information: `
          <ol>
            <li>
              Untuk semua bayi berusia 2-8 bulan yang belum diberikan imunisasi rotavirus.
            </li>
            <li>
              Diberikan secara oral/diteteskan ke mulut
            </li>
            <li>
              Monovalen (diberikan 2 dosis): dosis pertama diberikan mulai usia 6-12 minggu, dosisi kedua dengan jarak minimal 4 minggu dan selesai di usia 24 minggu.
            </li>
            <li>
              Pentavalen (diberikan 3 dosis): dosis pertama diberikan antara usia 6-12 minggu dan pemberian berikutnya dengan interval 4-10 minggu, dosis ketiga dilengkapi sebelum usia 32 minggu.
            </li>
          </ol>
        `,
        },
        {
          name: "Influenza",
          grant_date_guide: "6 bulan",
          benefit:
            "Mencegah sakit berat akibat virus flu/influenza",
          information: `
          <ol>
            <li>
              Untuk semua anak usia > 6 bulan yang belum diberikan imunisasi influenza.
            </li>
            <li>
              Untuk anak dengan penyakit jantung bawaan, risiko infeksi saluran napas berulang seperti asma, diabetes, penyakit ginjal kronis, gangguan imunitas (HIV atau penggunaan obat imunosupresif jangka panjang)
            </li>
            <li>
              Anak yang tinggal di asrama
            </li>
            <li>
              Imunisasi pertama di usia 6 bulan - 8 tahun diberikan 2 dosis dengan interval 4 minggu. Pada usia 9 tahun atau lebih, imunisasi pertama cukup 1 dosis.
            </li>
            <li>
              Pemberian vaksin diulang 1x setiap tahun.
            </li>
          </ol>
        `,
        },
        {
          name: "Rotavirus 3",
          grant_date_guide: "6 bulan",
          benefit:
            "Mencegah diare akibat rotavirus",
          information: `
          <ol>
            <li>
              Untuk semua bayi berusia 2-8 bulan yang belum diberikan imunisasi rotavirus.
            </li>
            <li>
              Diberikan secara oral/diteteskan ke mulut
            </li>
            <li>
              Monovalen (diberikan 2 dosis): dosis pertama diberikan mulai usia 6-12 minggu, dosisi kedua dengan jarak minimal 4 minggu dan selesai di usia 24 minggu.
            </li>
            <li>
              Pentavalen (diberikan 3 dosis): dosis pertama diberikan antara usia 6-12 minggu dan pemberian berikutnya dengan interval 4-10 minggu, dosis ketiga dilengkapi sebelum usia 32 minggu.
            </li>
          </ol>
        `,
        },
        {
          name: "Influenza",
          grant_date_guide: "7 bulan",
          benefit:
            "Mencegah sakit berat akibat virus flu/influenza",
          information: `
          <ol>
            <li>
              Untuk semua anak usia > 6 bulan yang belum diberikan imunisasi influenza.
            </li>
            <li>
              Untuk anak dengan penyakit jantung bawaan, risiko infeksi saluran napas berulang seperti asma, diabetes, penyakit ginjal kronis, gangguan imunitas (HIV atau penggunaan obat imunosupresif jangka panjang)
            </li>
            <li>
              Anak yang tinggal di asrama
            </li>
            <li>
              Imunisasi pertama di usia 6 bulan - 8 tahun diberikan 2 dosis dengan interval 4 minggu. Pada usia 9 tahun atau lebih, imunisasi pertama cukup 1 dosis.
            </li>
            <li>
              Pemberian vaksin diulang 1x setiap tahun.
            </li>
          </ol>
        `,
        },
        {
          name: "Japanese Encephalitis",
          grant_date_guide: "9 bulan",
          benefit:
            "Mencegah penyakit radang/infeksi jaringan otak (ensefalitis) akibat virus Japanese Encephalitis (JE)",
          information: `
          <ol>
            <li>
              Untuk semua anak yang eblum mendapatkan imunisasi JE dengan usia min.9 bulan yang tinggal atau bepergian ke daerah endemis > 1 bulan. Booster diberikan 1-2 tahun kemudian.
            </li>
          </ol>
        `,
        },
        {
          name: "MR",
          grant_date_guide: "9 bulan",
          benefit:
            "Mencegah penyakit campak (Measles) yang dapat mengakibatkan komplikasi radang paru dan radang otak, gondongan (Mumps), dan campak jerman (Rubella).",
          information: `
          <ol>
            <li>
              Untuk semua anak yang belum pernah imunisasi MR/MMR dengan usia min. 9 bulan.
            </li>
            <li>
              Jika sampai usia 12 bulan belum mendapat vaksin MR, dapat diberikan MMR.
            </li>
            <li>
              Saat usia 18 bulan berikan MR atau MMR.
            </li>
            <li>
              Usia 5-7 tahun berikan MR (Dalam program BIAS kelas 1) atau MMR.
            </li>
            <li>
              Untuk anak dengan penyakit kronis seperti fribosis, kelainan, jantung bawaan, kelainan ginjal bawaan, gagal tumbuh, dan down syndrome.
            </li>
            <li>
              Anak yang tinggal di lembaga cacat mental   
            </li>
          </ol>
        `,
        },
        {
          name: "PCV 3",
          grant_date_guide: "12 bulan",
          benefit:
            "Mencegah penyakit pneumonia (radang paru) akibat infeksi pneumokokus.",
          information: `
          <ol>
            <li>
              Untuk semua anak yang belum pernah imunisasi PCV mulai usia 6 minggu.
            </li>
            <li>
              Anak dengan risiko tinggi terkena penyakit pneumokokus invasif, seperti yang memiliki gangguan imunitas (HIV, kanker, penyakit ginjal kronik, mendapat cangkok organ, dan yang menjalani pengangkatan limpa).
            </li>
            <li>
              Dianjurkan juga pada anak yang tinggal dalam lingkungan hunian padat, paparan asap rokok, panti asuhan, dan bila sering terserang otitis media akut.
            </li>
          </ol>
        `,
        },
        {
          name: "Varisela 1",
          grant_date_guide: "12 bulan",
          benefit:
            "Mencegah penyakit cacar air (varisela) akibat infeksi virus Varicella Zoster.",
          information: `
          <ol>
            <li>
              Untuk semua anak yang belum pernah imunisasi varisela dengan usia min. 12 bulan.
            </li>
            <li>
              Terpapar dengan penderita cacar dalam 72 jam dan belum pernah imunisasi cacar
            </li>
            <li>
              Imunisasi diberikan mulai usia 12 bulan, sebaiknya sudah diberikan sebelum masuk sekolah dasar.
            </li>
          </ol>
        `,
        },

        {
          name: "Hepatitis A 1",
          grant_date_guide: "12 bulan",
          benefit:
            "Mencegah penyakit Hepatitis (radang hati) akibat infeksi virus Hepatitis A.",
          information: `
          <ol>
            <li>
              Untuk semua anak yang belum pernah imunisasi hepatitis A atau tinggal di daerah endemis dengan usia min. 12 bulan.
            </li>
            <li>
              Penderita penyakit kronis.
            </li>
            <li>
              Pasca kontak dengan penderita hepatitis A
            </li>
            <li>
              Vaksin hepatitis A diberikan 2 dosis, dosis 1 mulai usia 12 bulan dab dosis 2 diberikan 6 bulan sampai 18 bulan setelahnya.
            </li>
          </ol>
        `,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vaccines", null, {});
  },
};
