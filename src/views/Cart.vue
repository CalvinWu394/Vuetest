<script setup>
// 從我們建立的 cart.js 檔案中，引入 useCartStore 這個函式；
import { useCartStore } from "../stores/cart.js";

// 呼叫 useCartStore() 來取得購物車 store 的實例 (或稱「遙控器」)；
// 之後我們就可以透過 cartStore 來存取購物車的狀態和方法；
const cartStore = useCartStore();

const goBuy = () => {
   alert('購物車功能建置中');
};


</script>



<template>
  <div class="cart-page">
    <h1>我的購物車</h1>

    <div v-if="cartStore.cart.length === 0" class="cart-empty">
      <p>您的購物車是空的，快去逛逛吧！</p>
    </div>

    <div v-else>
      <div class="cart-items">
        <div v-for="product in cartStore.cart" :key="product.firestoreId" class="cart-item">
          <img :src="product.image" :alt="product.name" class="item-image">
          <div class="item-details">
            <h3>{{ product.name }}</h3>
            <p>NT$ {{ product.price }}</p>
            <p>數量： {{ product.quantity }}</p>
          </div>
          <button @click="cartStore.removeFromCart(product.firestoreId)" class="remove-btn">移除</button>
        </div>
      </div>

      <div class="cart-summary">
        <h2>總計: NT$ {{ cartStore.totalPrice }}</h2>
        <button onclick="alert('系統建置中')" class="checkout-btn">前往結帳</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* scoped 關鍵字代表這裡的 CSS 樣式只會套用在這個元件 (Cart.vue) 上，不會影響到其他元件 */
.cart-page {
  max-width: 800px;
  margin: 2rem auto; /* 上下邊距2rem，左右自動置中 */
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.cart-empty {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #777;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee; /* 每個品項下面加一條分隔線 */
  padding-bottom: 1.5rem;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover; /* 讓圖片等比例縮放填滿容器 */
  border-radius: 5px;
  margin-right: 1.5rem;
}

.item-details {
  flex-grow: 1; /* 讓這個區塊佔據剩餘的所有空間 */
}

.item-details h3 {
  margin: 0 0 0.5rem 0;
}

.remove-btn {
  background-color: #f44336; /* 紅色背景 */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.cart-summary {
  margin-top: 2rem;
  text-align: right;
}

.checkout-btn {
  background-color: var(--primary-color); /* 使用 App.vue 定義的全域變數 */
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
}
</style>