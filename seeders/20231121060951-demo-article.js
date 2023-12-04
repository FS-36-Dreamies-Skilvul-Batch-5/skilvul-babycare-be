"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Articles",
      [
        {
          category_id: 1,
          title: "5 Kebiasaan Bayi Baru Lahir yang Harus Diketahui Oleh Ibunda",
          slug: "",
          author: "admin",
          img_url: "https://res.cloudinary.com/dbvjnvtvz/image/upload/v1701689271/articles/sgku78o9cixx8vclb4tr.webp",
          content: `<p>
        Sebagai orang tua baru, Ayah Bunda mungkin memiliki banyak pertanyaan terkait kondisi, kebiasaan, dan tumbuh kembang bayi AyBun yang baru lahir, apakah ia berkembang dengan normal atau tidak. Nah, untuk memahaminya, perlu AyBun ketahui bahwa orang tua dapat memperhatikan kebiasaan bayi sejak baru dilahirkan. Ada beberapa kebiasaan bayi baru lahir (new born) berusia 0 hingga 6 bulan. Namun, kendati merupakan hal yang wajar, beberapa kebiasaan dapat menjadi tanda bahaya bagi si Kecil jika sudah mulai terlihat berlebihan. Di sini lah pentingnya peran AyBun untuk selalu mengawasi si Kecil. Untuk lebih jelasnya, simak kebiasaan bayi dari usia 0 hingga 6 bulan seperti di bawah ini, termasuk gejala, cara mengatasi, hingga tanda-tanda bahayanya!
      </p>
      <ol>
        <li>
          <p>Gumoh</p>
          <p>Gumoh merupakan saat bayi mengeluarkan cairan dari mulut setelah ia menyusu.</p>
        </li>
        <li>
          <p>Cegukan</p>
          <p>Cegukan juga merupakan hal yang wajar dialami. Cegukan merupakan efek yang timbul saat terjadi kontraksi spontan pada otot diafragma.</p>
        </li>
        <li>
          <p>Ngulet</p>
          <p>Ngulet dapat diartikan sebagai gerakan meregangkan badan si Kecil untuk mengeluarkan gas dari saluran cernanya.</p>
        </li>
        <li>
          <p>Ngemut</p>
          <p>Bayi Mengemut jari atau memasukkan barang ke dalam mulut oleh si bayi sebetulnya merupakan hal yang wajar. Aktivitas ini tidak perlu dilarang sampai ia berusia 2 tahun.</p>
        </li>
        <li>
          <p>Jarang BAB</p>
          <p>Bayi jarang melakukan buang air besar (BAB) sebetulnya juga merupakan hal yang masih dapat dikatakan normal dan dapat segera diatasi. Bayi yang baru berusia satu minggu biasanya BAB sebanyak 4 kali sehari, kemudian turun menjadi rata-rata 2 kali sehari hingga mereka mencapai usia 1 tahun.</p>
        </li>
      </ol>`,
          posted_on: "2023-11-21",
        },
        {
          category_id: 1,
          title: "Cara Merawat Bayi yang Baik dan Benar",
          slug: "",
          author: "admin",
          img_url: "https://res.cloudinary.com/dbvjnvtvz/image/upload/v1701689271/articles/zzjbdggrbbfuow9kkl8v.webp",
          content: `  <p>
        Setelah sembilan bulan berada di dalam kandungan, kini akhirnya si kecil dapat menghirup udara yang sama dengan Mama dan Papa. Rasa senang, lega, dan haru akan bercampur aduk saat melihat kehadirannya di dunia. Namun, bagi sebagian wanita yang baru pertama menjadi ibu, rasa khawatir juga mungkin kerap meliputi dirinya. Pertanyaan-pertanyaan, bagaimana cara merawat bayi yang benar dan sehat mungkin muncul di benak Mama. Namun, Mama tidak perlu khawatir, ulasan berikut ini akan memberikan panduan cara merawat bayi yang baik dan benar.
      </p>
      <ol>
        <li>
          <p>Menyiapkan Peralatan Penting</p>
          Persiapkan peralatan seperti pompa payudara, kain untuk menggendong, popok, tisu dan krim popok, botol minum, tempat tidur, pakaian, dan perlengkapan mandi bayi.</p>
        </li>
        <li>
          <p>Pemberian ASI</p>
          ASI tetap menjadi pilihan terbaik untuk bayi baru lahir. Artikel ini menyarankan interval pemberian makan dan memberikan tips bagi ibu yang mungkin kesulitan memproduksi ASI yang cukup.</p>
        </li>
        <li>
          <p>Kebersihan Tangan</p>
          Mencuci tangan sebelum memberikan makan atau susu kepada bayi sangat penting untuk mencegah penularan kuman.</p>
        </li>
        <li>
          <p>Mensterilkan Botol Susu</p>
          <p>Mensterilkan botol susu sebelum penggunaan agar menghindari pertumbuhan kuman dari sisa susu yang tertinggal.</p>
        </li>
        <li>
          <p>Mandikan Bayi dengan Hati-Hati</p>
          <p>Mencatat pentingnya mandi bayi dengan air hangat, penggunaan sabun khusus bayi, dan pijatan lembut. Membersihkan dengan detail, terutama pada lipatan tubuh bayi, dan tidak perlu khawatir dengan tali pusarnya.</p>
        </li>
        <li>
          <p>Perhatian dan Interaksi</p>
          <p>Menekankan pentingnya memberikan perhatian yang cukup pada bayi. Berkomunikasi, mengobrol, serta membangun bonding dan koneksi emosional yang baik sejak dini. Inisiatif dalam merawat bayi dan menjaga keamanannya, serta memberikan stimulasi untuk perkembangan otaknya sejak usia dini.</p>
        </li>
      </ol>`,
          posted_on: "2023-10-10",
        },
        {
          category_id: 2,
          title: "Stimulasi yang Tepat agar Bayi Cepat Duduk dan Merangkak",
          slug: "",
          author: "admin",
          img_url: "https://res.cloudinary.com/dbvjnvtvz/image/upload/v1701689270/articles/c1vomgsxh73uyonfssx0.jpg",
          content: `  <p>
        Setiap bayi mempelajari hal baru setiap harinya, mereka berkembang begitu cepat. Sebelum bisa duduk atau merangkak, bayi menguasai cara untuk mengangkat kepala mereka terlebih dahulu pada usia 2 bulan. Kemudian pada usia 4 bulan, bayi dapat mengangkat kepalanya tanpa bantuan dari orang tua. Menginjak usia 6 bulan, bayi seharusnya bisa duduk dengan bantuan. Di saat yang sama, bayi juga akan menggoyangkan tangan dan lututnya, ini adalah langkah awal untuk merangkak. Lalu, pada usia 9 bulan bayi sudah bisa duduk tanpa bantuan dan merangkak. Beberapa bayi mungkin akan menguasai merangkak dengan menyeret diri mereka sepanjang lantai dengan lengannya. Supaya bayi dapat menguasai duduk dan merangkak, Ayah Bunda perlu memberikan si kecil stimulasi. Di bawah ini adalah cara menstimulasi bayi agar cepat duduk dan merangkak:
      </p>
      <ol>
        <li>
          <p>Dukung untuk memiliki tummy time</p>
          <p>Tummy time adalah sesi latihan bayi untuk tengkurap. Bayi mulai tengkurap bisa dimulai dari minggu-minggu pertama kehidupan selama beberapa menit setiap hari. Pada awalnya, bayi mungkin tidak menyukainya, tapi mereka akan menyukainya setelah beberapa waktu.</p>
        </li>
        <li>
          <p>Duduk dengan bantuan orang tua</p>
          <p>Setelah bayi dapat menahan kepalanya dengan stabil, Ayah Bunda dapat mulai mendudukkan bayi di pangkuannya. Ayah Bunda dapat coba goyang perlahan ke depan dan ke belakang, dorong bayi agar tubuh bagian atas tetap sejajar dengan tubuh bagian bawah.</p>
        </li>
        <li>
          <p>Berlatih di lantai</p>
          <p>Di lantai, bayi bisa belajar untuk duduk dan merangkak. Ayah Bunda dapat duduk di lantai dengan bayi di antara kedua kaki, kemudian beri mereka dukungan untuk belajar duduk dan merangkak.</p>
        </li>
        <li>
          <p>Berikan bantal untuk latihan</p>
          <p>Ayah Bunda juga dapat membantu bayi untuk duduk dengan memberikan penopang di belakangnya. Bantal menjadi objek yang tepat untuk membantunya karena empuk, sehingga aman ketika bayi jatuh.</p>
        </li>
        <li>
          <p>Kurangi waktu bayi di bouncer</p>
          <p>Bayi yang tidak menghabiskan banyak waktu di lantai mungkin membutuhkan waktu lebih lama untuk mengembangkan kekuatan fisiknya untuk duduk ataupun merangkak. Oleh sebab itu, Ayah Bunda perlu kurangi waktu bayi seperti di ayunan bayi atau kursi bayi.</p>
        </li>
      </ol>`,
          posted_on: "2023-10-22",
        },
        {
          category_id: 2,
          title: "5 Ide Stimulasi Sensori Latih Kemandirian",
          slug: "",
          author: "admin",
          img_url: "https://res.cloudinary.com/dbvjnvtvz/image/upload/v1701689269/articles/knm2adtyutw0hxdxyymd.webp",
          content: `  <p>
        Sensory play adalah aktivitas yang melibatkan indera bayi, termasuk indera penglihatan, pendengaran, penciuman, perasa, dan sentuhan. Selain itu, sensory play juga merupakan aktivitas yang melibatkan gerakan dan keseimbangan bayi. Maka dari itu, sensory play untuk bayi bukan hanya menyenangkan tetapi juga dapat memberikan manfaat yang luar biasa untuk tumbuh kembangnya. Sebelum menerapkan metode sensory play pada Si Kecil, Moms perlu mengetahui metode pembelajaran yang satu ini terlebih dahulu. Untuk itu, yuk simak informasi lengkap mengenai 5 ide stimulasi sensori yang bisa melatih bayi anda!
      </p>
      <ol>
        <li>
          <p>Bermain dengan Sensory Bin</p>
          <p>Salah satu aktivitas sensory play yang bisa Moms lakukan bersama Si Kecil adalah bermain tekstur sensory bin berupa bak. Moms juga dapat membuat wadah sensoris menggunakan nasi kering, pasta, atau kacang-kacangan. Pastikan Moms tidak menggunakan benda yang dapat menimbulkan bahaya tersedak.</p>
        </li>
        <li>
          <p>Melukis Jari</p>
          <p>Aktivitas sensory play selanjutnya adalah melukis jari tangan anak. Ini mungkin sedikit berantakan, tetapi melukis dengan jari adalah aktivitas yang bagus untuk bayi dan balita. Melakukan aktivitas melukis jari ini dapat membantu anak-anak terbiasa dengan pengalaman sensoris dan mengenal tekstur cairan.</p>
        </li>
        <li>
          <p>Bermain dengan Adonan</p>
          <p>Aktivitas sensory play berikutnya adalah bermain dengan adonan atau play dough. Tekstur play dough yang lembut dan licin memastikan anak akan menikmati berjam-jam menggulung, mengiris, dan memotong saat mereka bermain.</p>
        </li>
        <li>
          <p>Bak Pasir</p>
          <p>Jika Moms ingin keluar atau ingin anak merasakan sinar matahari saat bermain, pertimbangkan untuk membeli kotak pasir dan beberapa mainan pasir yang dapat dibentuk. Selain pasir, bisa juga ajak Si Kecil bermain di rumput, karena ini juga termasuk bentuk permainan sensoris.</p>
        </li>
        <li>
          <p>Mainan Beku</p>
          <p>Aktivitas sensory play lainnya adalah mengajari anak tentang mainan dingin. Dengan sedikit es dan beberapa mainan, Si Kecil bisa bersenang-senang mengeksplorasi sensasi ini sendiri. Untuk membuat aktivitas mainan beku, cukup bekukan beberapa mainan mini, lalu biarkan anak membuatnya kembali seperti semula.</p>
        </li>
      </ol>`,
          posted_on: "2023-10-26",
        },
        {
          category_id: 3,
          title: "Anak Susah Makan? Ini Tips Mengatasinya",
          slug: "",
          author: "admin",
          img_url: "https://res.cloudinary.com/dbvjnvtvz/image/upload/v1701689271/articles/w5wj25i4kvtzzcprjbuv.webp",
          content: `  <p>
        Pada masa pertumbuhan, si Kecil bisa saja memiliki kendala saat makan. Sangat umum jika nafsu makannya cenderung naik turun dan bergantung pada variasi aktivitasnya. Tidak seperti saat bayi yang pertumbuhannya pesat, saat si Kecil memasuki usia satu tahun perkembangannya mungkin terasa lebih lambat. Pada balita misalnya, penyebab naik turunnya nafsu makan bisa diakibatkan oleh kondisi fisik, hingga terlalu tertarik dengan dunia baru di sekeliling sehingga tidak terlalu tertarik pada makanannya. Namun, terlepas dari beragam alasan di atas, sebagai orang tua tentu kita perlu terus mengupayakan mencukupi pemenuhan nutrisi harian agar si Kecil tumbuh kembangnya tidak terhambat. Berikut merupakan beberapa tips yang bisa dilakukan untuk mengatasi anak susah makan dan membuat meal time lebih menarik buat si Kecil.
      </p>
      <ol>
        <li>
          <p>Mengatur Waktu Makan yang Teratur dan Menyenangkan</p>
          <p>Jadikan waktu makan sebagai acara keluarga yang menyenangkan dan teratur. Duduk bersama anak, bersosialisasi dengan anggota keluarga, dan sisipkan waktu mengobrol. Hal ini akan memicu si Kecil untuk melihat makan sebagai rutinitas yang menyenangkan dan tidak boleh dilewatkan.</p>
        </li>
        <li>
          <p>Tunjukkan Nikmatnya Makan</p>
          <p>Salah satu upaya yang bisa digunakan dalam cara mengatasi anak yang susah makan usia 1 tahun hingga 3 tahun biasanya adalah dengan menunjukkan bagaimana Ibu sebagai orang tua menikmati setiap makanan yang disiapkan. Hal ini dapat mendorong rasa penasaran si Kecil akan apa yang dikonsumsi orang tua sehingga ia merasa perlu mencobanya juga.</p>
        </li>
        <li>
          <p>Siapkan Makanan Bersama</p>
          <p>Pada masa pertumbuhan, si Kecil tentu sangat tertarik dengan hal-hal baru di sekelilingnya. Dengan melibatkan anak dalam membantu menyiapkan makanan atau bahkan membuat makanan, bukan tidak mungkin bisa menambah excitement saat ia melahap makanannya.</p>
        </li>
        <li>
          <p>Buat Menu Bervariasi</p>
          <p>Terus menawarkan si Kecil hal-hal baru merupakan cara mengatasi anak susah makan lainnya yang perlu dicoba. Fluktuasi nafsu makannya yang tidak menentu bisa jadi disebabkan oleh kebosanannya terhadap sajian makanan yang itu-itu saja.</p>
        </li>
        <li>
          <p>Hadapi dengan Sabar dan Sajikan Makanan Secukupnya</p>
          <p>Menjaga komunikasi yang baik dengan si Kecil merupakan poin penting yang perlu Ibu jaga. Penolakan mungkin akan sering terjadi, namun jangan sampai Ibu lekas menyerah. Beri selang beberapa menit untuk menawarkan kembali. Lalu, jangan lupa berikan takaran yang sesuai dan tidak langsung banyak.</p>
        </li>
      </ol>`,
          posted_on: "2023-10-30",
        },
        {
          category_id: 1,
          title: "Kenapa Orang Tua Perlu Selektif Memilih Bath Toys",
          slug: "",
          author: "admin",
          img_url: "https://res.cloudinary.com/dbvjnvtvz/image/upload/v1701689269/articles/pzl0mnj7wtyhabpixz83.webp",
          content: `  <p>
        Bath toys adalah mainan yang dirancang khusus untuk digunakan di dalam bak mandi saat anak mandi. Mainan ini dibuat dari bahan yang tahan air dan aman untuk digunakan di lingkungan basah. Bath toys memiliki berbagai bentuk dan ukuran, termasuk boneka berbentuk hewan, kapal kecil, cetakan berbentuk binatang, bola-bola berwarna, dan masih banyak lagi. Nah, untuk memilih bath toys, orang tua perlu selektif karena ada beberapa alasan penting yang dipertimbangkan, antara lain:
      </p>
      <ol>
        <li>
          <p>Keamanan anak</p>
          <p>Bath toys yang tidak aman dapat menjadi ancaman bagi keselamatan anak. Bahan yang tidak tahan air atau mudah rusak dapat menyebabkan potensi kecelakaan atau cedera pada anak. Misalnya, mainan yang rusak bisa mengandung potongan kecil yang bisa tertelan atau menjadi penyebab tersedak.</p>
        </li>
        <li>
          <p>Pencegahan infeksi</p>
          <p>Bath toys yang tidak dirawat dengan baik dapat menjadi tempat berkembangnya bakteri, jamur, atau kuman lainnya. Kondisi basah dan lembap di kamar mandi adalah lingkungan yang ideal bagi pertumbuhan mikroorganisme. Jika mainan mandi tidak dibersihkan secara teratur atau bahan pembuatnya tidak tahan terhadap pertumbuhan mikroba, anak dapat terpapar risiko infeksi atau iritasi kulit.</p>
        </li>
        <li>
          <p>Kualitas produk</p>
          <p>Memilih bath toys yang aman berarti memilih produk berkualitas tinggi. Mainan mandi berkualitas tinggi biasanya dibuat dari bahan yang aman, tahan air, dan tahan lama. Dengan memilih produk yang baik, Anda dapat memastikan bahwa mainan tersebut tidak akan rusak dengan mudah dan tidak mengandung bahan berbahaya seperti BPA atau ftalat.</p>
        </li>
        <li>
          <p>Stimulasi pengembangan anak</p>
          <p>Bath toys yang aman dan sesuai usia dapat memberikan pengalaman yang menyenangkan dan merangsang pengembangan anak. Mainan yang dirancang khusus untuk mandi dapat membantu meningkatkan keterampilan motorik, koordinasi mata-tangan, dan kreativitas anak.</p>
        </li>
      </ol>
      <p>
        Untuk memilih bath toys yang aman, pastikan untuk memeriksa label dan petunjuk penggunaan, memilih mainan yang sesuai dengan usia anak, memeriksa apakah ada bagian kecil yang dapat lepas atau tersedak, serta memastikan bahwa mainan mudah dibersihkan dan dirawat dengan baik. Jika memungkinkan, pilihlah mainan yang tahan air dan bebas dari bahan kimia berbahaya.
      </p>`,
          posted_on: "2023-11-02",
        },
        {
          category_id: 1,
          title: "Cara Memandikan si Kecil",
          slug: "",
          author: "admin",
          img_url: "https://res.cloudinary.com/dbvjnvtvz/image/upload/v1701689270/articles/act0ojobgvxvfq40ikwt.webp",
          content: `  <p>
        Cara memandikan bayi adalah salah satu kemampuan yang wajib dimiliki oleh setiap orang tua. Namun, tidak sedikit pasangan, terutama orang tua baru, yang masih merasa gugup ketika memandikan buah hatinya. Memandikan bayi memang tidak boleh dilakukan sembarangan. Berbagai hal perlu diperhatikan dan Anda pun dituntut untuk lebih hati-hati. Misalnya, hindari memandikan bayi setelah ia selesai menyusu atau makan agar bayi tidak muntah. Oleh karena itu, mari simak bagaimana cara memandikan bayi yang tepat. Berikut ini adalah langkah-langkah atau cara memandikan bayi yang dapat Anda lakukan:
      </p>
      <ol>
        <li>
          <p>Isi bak mandi bayi dengan air hangat bersuhu sekitar 32o Celcius dan ketinggian air sekitar 7 cm.</p>
        </li>
        <li>
          <p>Baringkan bayi di alas ganti atau handuk, buka pakaian bayi secara perlahan.</p>
        </li>
        <li>
          <p>Gunakan satu tangan dan lengan Anda untuk menopang kepala dan tubuh bayi, sedangkan tangan yang lain untuk menyangga tubuh bayi bagian bawah.</p>
        </li>
        <li>
          <p>Letakkan bayi ke dalam bak mandi secara perlahan, dimulai dengan kaki. Pastikan satu tangan tetap menyangga punggung dan kepala bayi, sementara tangan Anda yang lain membersihkan bagian tubuh bayi.</p>
        </li>
        <li>
          <p>Jaga posisi kepala bayi agar selalu berada di atas permukaan air.</p>
        </li>
        <li>
          <p>Bersihkan bayi dimulai dari kelopak matanya dengan kapas atau kain katun lembut yang dicelupkan ke dalam air hangat. Gunakan kain yang berbeda untuk setiap mata.</p>
        </li>
        <li>
          <p>Lanjutkan dengan membersihkan hidung, telinga, dan wajah bayi.</p>
        </li>
        <li>
          <p>Jika menggunakan sabun, tuang sedikit saja atau oleskan tipis di kulit Anda sebelum mengusapnya di kulit bayi.</p>
        </li>
        <li>
          <p>Usap secara perlahan dan lembut ketika membersihkan bagian ketiak, belakang telinga, leher dan kelamin bayi.</p>
        </li>
        <li>
          <p>Guyur kepala dan seluruh tubuh bayi secara perlahan dengan gayung, kemudian seka dengan kain atau waslap bersih. Jika sudah selesai, angkat bayi secara perlahan dari bak mandi.</p>
        </li>
        <li>
          <p>Segera letakkan bayi di atas tempat tidur yang sudah diberi alas handuk. Keringkan setiap bagian tubuh bayi secara perlahan-lahan dengan handuk berbahan lembut.</p>
        </li>
      </ol>`,
          posted_on: "2023-11-06",
        },
        {
          category_id: 1,
          title: "Bagaimana Cara Memahami Tangisan Bayi",
          slug: "",
          author: "admin",
          img_url: "https://res.cloudinary.com/dbvjnvtvz/image/upload/v1701689270/articles/tmtwlvmtn6qaabfyjrxv.webp",
          content: `  <p>
          Tangisan bayi adalah salah satu cara utama bagi mereka untuk berkomunikasi dengan orang-orang di sekitarnya. Namun, bagi sebagian orang tua, memahami apa yang bayi mereka coba sampaikan melalui tangisan bisa menjadi tantangan. Berikut beberapa tanda dan petunjuk yang dapat membantu Anda mengenali tangisan bayi dan merespons dengan tepat, sehingga Anda dapat memberikan perawatan yang sesuai dan memenuhi kebutuhan bayi Anda.
        </p>
        <ol>
          <li>
            <p>Membedakan Jenis Tangisan</p>
            <p>Bath toys yang tidak aman dapat menjadi ancaman bagi keselamatan anak. Bahan yang tidak tahan air atau mudah rusak dapat menyebabkan potensi kecelakaan atau cedera pada anak. Misalnya, mainan yang rusak bisa mengandung potongan kecil yang bisa tertelan atau menjadi penyebab tersedak.</p>
          </li>
          <li>
            <p>Coba Mengamati Ekspresi Wajah</p>
            <p>Wajah bayi seringkali memberikan petunjuk yang berharga tentang apa yang mereka rasakan. Ekspresi wajah yang terlihat kesakitan atau tegang dapat mengindikasikan ketidaknyamanan fisik, sementara ekspresi wajah yang lebih santai dan tenang mungkin menunjukkan kelelahan atau rasa kantuk.</p>
          </li>
          <li>
            <p>Dengarkan Intonasi Tangisan</p>
            <p>Intonasi tangisan juga dapat memberikan petunjuk penting tentang apa yang sedang dirasakan oleh bayi. Sebagai contoh, tangisan dengan nada tinggi dan keras mungkin menandakan rasa sakit atau frustrasi, sementara tangisan dengan nada rendah dan bergetar mungkin menunjukkan kelelahan. </p>
          </li>
          <li>
            <p>Perhatikan Isyarat Tubuh</p>
            <p>Bayi juga menggunakan isyarat tubuh untuk mengkomunikasikan kebutuhan mereka. Mereka mungkin menggerakkan tangan atau kaki mereka dengan cara tertentu, atau mengubah posisi tubuh mereka sebagai upaya untuk menunjukkan ketidaknyamanan atau keinginan tertentu.</p>
          </li>
          <li>
            <p>Jangan Lupa dengan Faktor Lingkungan</p>
            <p>Lingkungan sekitar juga dapat mempengaruhi tangisan bayi. Mencoba memahami preferensi bayi Anda terkait dengan lingkungan dapat membantu Anda menciptakan suasana yang nyaman dan menenangkan bagi mereka.</p>
          </li>
        </ol>`,
          posted_on: "2023-11-11",
        },
        {
          category_id: 1,
          title: "Panduan skin to skin dalam Perawatan Bayi",
          slug: "",
          author: "admin",
          img_url: "https://res.cloudinary.com/dbvjnvtvz/image/upload/v1701689270/articles/ewtuzftxlyx6ud6emosv.webp",
          content: `  <p>
          Pertemuan pertama antara seorang bayi dan orang tua merupakan momen yang sangat penting. Salah satu cara yang dianjurkan oleh para ahli adalah melakukan metode skin-to-skin atau kulit ke kulit. Metode ini tidak hanya menghangatkan bayi, tetapi juga membawa sejumlah manfaat luar biasa bagi perkembangan fisik dan emosionalnya. Berikut cara melakukan skin-to-skin dengan benar :
        </p>
        <ol>
          <li>
            <p>Lakukan segera setelah kelahiran: Setelah bayi lahir, segera letakkan bayi dengan telanjang di dada ibu atau ayah.</p>
          </li>
          <li>
            <p>Gunakan selimut untuk mempertahankan suhu: Tutupi bayi dengan selimut ringan untuk mempertahankan suhu tubuhnya.</p>
          </li>
          <li>
            <p>Tempat yang nyaman dan tenang: Ciptakan lingkungan yang tenang dan nyaman agar bayi merasa aman.</p>
          </li>
          <li>
            <p>Lakukan sesuai kebutuhan: Lakukan skin-to-skin sebanyak mungkin sesuai kebutuhan, baik saat di rumah maupun di rumah sakit.</p>
          </li>
        </ol>
        <p>
          Skin-to-skin dapat dilakukan setelah persalinan normal dimana sebaiknya dilakukan sesegera mungkin setelah anak lahir, bahkan ketika masih di ruang operasi. Selain itu, pada persalinan caesar juga skin-to-skin dapat dilakukan segera setelah kondisi ibu stabil. Pastikan kulit bayi bersih dan kering sebelum melakukan skin-to-skin. Berikan juga ruang bagi bayi untuk merespons, jika bayi tidak nyaman, jangan dipaksakan. Skin-to-skin adalah momen yang luar biasa bagi bayi dan orang tua. Hal ini membantu membentuk ikatan awal yang kuat, memberikan bayi perlindungan fisik, dan mendukung kesehatan emosionalnya. Ingatlah untuk selalu konsultasikan dengan dokter atau bidan untuk saran dan informasi lebih lanjut terkait perawatan bayi.
        </p>`,
          posted_on: "2023-11-22",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Articles", null, {});
  },
};
