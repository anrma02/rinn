const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  const TabActive = $(".tab-item.active");
  const line = $(".tabs .line");

  line.style.left = TabActive.offsetLeft + "px";
  line.style.width = TabActive.offsetWidth + "px";

  tab.onclick = function () {
    //xóa active
    $(".tab-item.active").classList.remove("active");

    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    // thêm actve
    this.classList.add("active");
    pane.classList.add("active");
  };
});
