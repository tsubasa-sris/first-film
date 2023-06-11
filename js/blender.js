window.addEventListener("DOMContentLoaded", () => {
  // モーダルを取得
  const modal = document.getElementById("modal");
  // モーダルを開く
  const openModalBtns = document.querySelectorAll(".modalOpen");
  // モーダルを閉じる
  const closeModalBtns = document.querySelectorAll(".modalClose");

  // Swiperの設定
  const swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30, //任意のマージン
  });

  // モーダルのボタンクリック
  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener("click", () => {
      // data-modalで設定したスライド番号を取得
      const modalIndex = openModalBtn.getAttribute("data-modal");
      swiper.slideTo(modalIndex);
      modal.classList.add("is-active");
    });
  });

  // モーダルの閉じるボタンクリック
  closeModalBtns.forEach((closeModalBtn) => {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
  });
});

function Time() {
  var realTime = new Date();
  var hour = realTime.getHours();
  var minutes = realTime.getMinutes();
  var text = hour + ":" + minutes;
  document.getElementById("real-time").innerHTML = text;
}
setInterval("Time()", 1000);
