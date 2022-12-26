const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playlist = $(".playlist");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const player = $(".player");
const playBtn = $(".btn-toggle-play");
const audio = $("#audio");
const cd = $(".cd");

const app = {
  //vị tri hiện tại
  currenIndex: 0,

  songs: [
    {
      name: "Chúng Ta Của Hiện Tại",
      singer: "Sơn Tùng M-TP",
      mp3: "../audio/chung.mp3",
      image: "../img/CTCHT.png",
    },
    {
      name: "Kẻ Điên Tin Vào Tình Yêu",
      singer: "Lil Z",
      mp3: "../audio/dien.mp3",
      image: "../img/dien.png",
    },
    {
      name: "3107-1",
      singer: "Nâu, Duongg",
      mp3: "../audio/3107.mp3",
      image: "../img/3107.png",
    },
    {
      name: "Mãi Mãi Chẳng Thuộc Về Anh",
      singer: "Bozitt",
      mp3: "../audio/mai.mp3",
      image: "../img/mai.png",
    },
    {
      name: "Như Anh Đã Thấy Em",
      singer: "PhucXp ft.Freak D",
      mp3: "../audio/anh.mp3",
      image: "../img/NEDT.png",
    },
    {
      name: "I Love You 3000",
      singer: "Stephanie Poetri",
      mp3: "../audio/3000.mp3",
      image: "../img/3000.png",
    },
    {
      name: "Watting For You",
      singer: "MONO",
      mp3: "../audio/watting.mp3",
      image: "../img/watting.png",
    },
    {
      name: "Lần Sau Cuối",
      singer: "Duongg",
      mp3: "../audio/cuoi.mp3",
      image: "../img/LSC.png",
    },
    {
      name: "Nổi Gió Rồi",
      singer: "Châu Thấm",
      mp3: "../audio/gio.mp3",
      image: "../img/gio.png",
    },
    {
      name: "Tay Trái Chỉ Trăng",
      singer: "Tát Đỉnh Đỉnh",
      mp3: "../audio/trang.mp3",
      image: "../img/trang.png",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
      <div class="song">
          <div
            class="thumb"
            style="
              background-image: url('${song.image} ');
            "
          ></div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },

  //xác định thuộc tính
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        // Lấy  bài hát hiện tại

        return this.songs[this.currenIndex];
      },
    });
  },

  handleEvents: function () {
    const cdWidth = cd.offsetWidth;

    // Click play ỏ pause
    playBtn.onclick = function () {
      audio.play();
      player.classList.add("playing");
    };

    //Phóng to thu nhỏ khi cuộn

    document.onscroll = function () {
      // Cuộn trang
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      // Cuộn trang lên thu nhỏ lại
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
  },

  loadCurrenSong: function () {
    const audio = $("#audio");

    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },

  start: function () {
    //định nghĩa các thuộc tính obj
    this.defineProperties();

    //Lắng nghe /xử lý các sự kiện DOM even
    this.handleEvents();

    //Tải thông tin bài hát đầu tiên UI khi chạy ứng dụng
    this.loadCurrenSong();

    //Render playlist
    this.render();
  },
};

app.start();
