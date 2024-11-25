const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');

// 複製滑塊以實現無縫滾動效果
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    sliderWrapper.appendChild(clone);
});

 // 這個函數將顏色從 startColor 平滑過渡到 endColor，並控制動畫的持續時間
 function smoothColorChange(element, startColor, endColor, duration) {
    let startTime = null;

    function updateColor(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        // 計算顏色過渡的每個通道的變化
        const r = Math.round(startColor.r + progress * (endColor.r - startColor.r));
        const g = Math.round(startColor.g + progress * (endColor.g - startColor.g));
        const b = Math.round(startColor.b + progress * (endColor.b - startColor.b));

        element.style.color = `rgb(${r}, ${g}, ${b})`;

        requestAnimationFrame(updateColor);  // 繼續動畫直到達到結束
      } else {
        // 動畫結束後設置最終顏色，並重新啟動變換
        element.style.color = `rgb(${endColor.r}, ${endColor.g}, ${endColor.b})`;

        // 改變顏色後，開始新的過渡
        setTimeout(() => {
          smoothColorChange(element, endColor, generateRandomColor(), duration);  // 過渡到隨機顏色
        }, 100);  // 延遲一下再開始新的顏色過渡
      }
    }

    requestAnimationFrame(updateColor);  // 開始顏色過渡
  }

  // 生成隨機顏色
  function generateRandomColor() {
    return {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256)
    };
  }

  const textElement = document.querySelector('.smooth-color-text');

  // 初始顏色設定為紅色，動畫持續2秒
  smoothColorChange(textElement, { r: 255, g: 0, b: 0 }, generateRandomColor(), 500);




//--------------------回頂部按鈕--------------------------------- 
   // 獲取回到頂部按鈕
   const backToTopBtn = document.getElementById("backToTopBtn");

   // 當用戶滾動頁面時顯示或隱藏按鈕
   window.onscroll = function() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       backToTopBtn.classList.add('show');  // 顯示按鈕
     } else {
       backToTopBtn.classList.remove('show');  // 隱藏按鈕
     }
   };

   // 點擊按鈕時平滑捲動到頁面頂部
   backToTopBtn.onclick = function() {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'  // 平滑捲動
     });
   };

//--------------------------------另一個class換顏色
// 這個函數將顏色從 startColor 平滑過渡到 endColor，並控制動畫的持續時間
function smoothColorChange(element, startColor, endColor, duration) {
    let startTime = null;
  
    function updateColor(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = (timestamp - startTime) / duration;
  
      if (progress < 1) {
        // 計算顏色過渡的每個通道的變化
        const r = Math.round(startColor.r + progress * (endColor.r - startColor.r));
        const g = Math.round(startColor.g + progress * (endColor.g - startColor.g));
        const b = Math.round(startColor.b + progress * (endColor.b - startColor.b));
  
        element.style.color = `rgb(${r}, ${g}, ${b})`;
  
        requestAnimationFrame(updateColor);  // 繼續動畫直到達到結束
      } else {
        // 動畫結束後設置最終顏色
        element.style.color = `rgb(${endColor.r}, ${endColor.g}, ${endColor.b})`;
  
        // 改變顏色後，開始新的過渡
        smoothColorChange(element, endColor, generateRandomColor(), duration);  // 過渡到隨機顏色
      }
    }
  
    requestAnimationFrame(updateColor);  // 開始顏色過渡
  }
  
  // 生成隨機顏色
  function generateRandomColor() {
    return {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256)
    };
  }
  
  const textelement = document.querySelector('.change-text-color');
  
  // 初始顏色設定為紅色，動畫持續2秒
  smoothColorChange(textelement, { r: 255, g: 0, b: 0 }, generateRandomColor(), 500);

