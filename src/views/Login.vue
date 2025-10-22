<script setup>
import { ref } from 'vue';

// 為了示範 v-model，我們加上 ref
const email = ref('');
const password = ref('');

const Login = () => {
  // 這裡可以放登入的邏輯
   alert('會員功能建置中');
};
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>會員登入</h2>
      <form @submit.prevent="Login">
        <div class="form-group">
          <label for="email">電子郵件</label>
          <input type="email" id="email" v-model="email" required placeholder="請輸入您的 Email">
        </div>
        <div class="form-group">
          <label for="password">密碼</label>
          <input type="password" id="password" v-model="password" required placeholder="請輸入您的密碼">
        </div>
        <button type="submit">登入</button>
        <button onclick="alert('會員功能建置中')">申請會員</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* scoped 屬性確保這些樣式只會套用在這個元件上，不會影響到其他頁面 */

.login-container {
  display: flex; /* 使用 Flexbox 佈局 */
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  width: 100%;
  flex-grow: 1; /* 讓容器填滿 main-content 的剩餘空間 */
  background-color: var(--light-gray, #f5f5f5); /* 使用 App.vue 的淺灰色背景 */
}

.login-box {
  width: 100%;
  max-width: 400px; /* 設定最大寬度，在大螢幕上也不會過寬 */
  padding: 2.5rem; /* 增加內部間距，讓內容更舒適 */
  background-color: white;
  border-radius: 8px; /* 圓角效果 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 加上柔和的陰影增加立體感 */
  text-align: center; /* 讓裡面的 h2 和 button 置中 */
}

h2 {
  margin-top: 0;
  margin-bottom: 1.5rem; /* 標題和表單之間的距離 */
  color: var(--primary-color, #004d40); /* 使用主題色 */
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.5rem; /* 每個輸入項之間的距離 */
  text-align: left; /* 標籤和輸入框靠左對齊 */
}

label {
  display: block; /* 讓 label 單獨佔一行 */
  margin-bottom: 0.5rem; /* label 和 input 之間的距離 */
  font-weight: 600; /* 字體稍微加粗 */
  color: #555;
}

input[type="email"],
input[type="password"] {
  width: 100%; /* 寬度填滿容器 */
  padding: 0.8rem 1rem; /* 輸入框的內部空間 */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box; /* 確保 padding 不會影響總寬度 */
  transition: border-color 0.2s, box-shadow 0.2s; /* 加上平滑的過渡效果 */
}

/* 當使用者點擊輸入框時的樣式 */
input[type="email"]:focus,
input[type="password"]:focus {
  outline: none; /* 移除預設的藍色外框 */
  border-color: var(--primary-color, #004d40); /* 邊框變成主題色 */
  box-shadow: 0 0 0 3px rgba(0, 77, 64, 0.1); /* 加上柔和的光暈效果 */
}

button {
  width: 100%;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: var(--primary-color, #004d40); /* 按鈕使用主題色 */
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer; /* 滑鼠移上去時顯示手指圖示 */
  transition: background-color 0.2s, transform 0.1s; /* 過渡效果 */
}

/* 滑鼠移到按鈕上時的樣式 */
button:hover {
  background-color: #00382e; /* 讓顏色稍微變深 */
}

/* 點擊按鈕時的樣式 */
button:active {
  transform: scale(0.98); /* 讓按鈕有被按下去的感覺 */
}
</style>