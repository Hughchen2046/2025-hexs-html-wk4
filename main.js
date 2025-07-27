import './assets/scss/all.scss';

console.log('Hello world');


const sliders = document.querySelectorAll('.slider, .style-slider, .card-slider');
sliders.forEach(slider => {
let isDown = false;
let startX;
let scrollLeft;

// 滑鼠滾輪橫向滾動
slider.addEventListener('wheel', (e) => {
  e.preventDefault();
  slider.scrollLeft += e.deltaY;
});

// 滑鼠按下
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.style.cursor = 'grabbing';
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// 滑鼠離開、滑鼠放開
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

// 滑鼠移動
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // 可調整滑動速度
  slider.scrollLeft = scrollLeft - walk;
});
});

// 按鈕選擇用
    // 有複數按鈕選項,先建立事件監聽器來複製選擇到的目標
    document.querySelectorAll(".btn-active").forEach(btn =>
        btn.addEventListener("click", e => {
            const clickedBtn = e.currentTarget;
            // 如果原本按鈕有選擇了,就取消選擇狀態
            if (clickedBtn.classList.contains("active")) {
                clickedBtn.classList.remove("active");
            } else {
                // 否則只能複數中選其中一個,先清掉所有的,在給予選擇的目標狀態
                document.querySelectorAll(".btn-active").forEach(b => b.classList.remove("active"));
                clickedBtn.classList.add("active");
            }
        })
    );

// 產品詳情頁的收藏按鍵
document.querySelectorAll('.nempty-btn').forEach(btn => {
  btn.addEventListener('focus', () => {
    const handbagIcon = btn.querySelector('.bi-handbag');
    if (handbagIcon) {
      handbagIcon.classList.remove('bi-handbag');
      handbagIcon.classList.add('bi-handbag-fill');
    }

    const heartIcon = btn.querySelector('.bi-heart');
    if (heartIcon) {
      heartIcon.classList.remove('bi-heart');
      heartIcon.classList.add('bi-heart-fill');
    }
  });

  btn.addEventListener('blur', () => {
    const handbagIcon = btn.querySelector('.bi-handbag-fill');
    if (handbagIcon) {
      handbagIcon.classList.remove('bi-handbag-fill');
      handbagIcon.classList.add('bi-handbag');
    }

    const heartIcon = btn.querySelector('.bi-heart-fill');
    if (heartIcon) {
      heartIcon.classList.remove('bi-heart-fill');
      heartIcon.classList.add('bi-heart');
    }
  });
  });

// 首頁導覽頁
document.querySelectorAll('.go-to-page').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-href');
    if (target) {
      window.location.href = target;
    }
  });
});


// 登入註冊
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.login-btn');
  const loginBlock = document.querySelector('.login-block');
  const registerBlock = document.querySelector('.register-block');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.type;
      if (type === 'login') {
        loginBlock.classList.remove('d-none');
        registerBlock.classList.add('d-none');
      } else {
        loginBlock.classList.add('d-none');
        registerBlock.classList.remove('d-none');
      }
    });
  });
});
