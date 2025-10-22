//Pinia的主要功能，就是為你的 Vue 應用程式提供一個中央數據倉庫，這樣不管在哪個頁面
//都可以抓到相同最新資料

// 從 vue 引入 ref 和 computed，我們在 stores 裡一樣可以用這些組合式 API；
import { ref, computed } from 'vue';

// 從 pinia 引入 defineStore 這個函式；
// defineStore 的意思是「定義一個新的 store」；
import { defineStore } from 'pinia';

//這裡我們開始定義一個 store；
// 'cart' 是這個 store 的唯一 ID，Pinia 會用它來識別這個 store；
// 第二個參數是一個函式，格式類似元件的 <script setup>；
export const useCartStore = defineStore("cart", () => {

//這在 Pinia 中被稱為【狀態 (State)】
// 我們把原本在 Home.vue 裡的 cart 陣列，搬到這裡來；
// 存放的「共享資料」，包含商品資訊+數量；
const cart = ref([]);


//這在 Pinia 中被稱為【動作 (Actions)】
// 我們也把 addToCart 函式搬過來，並把它變成一個「動作 (Action)」；
// 任何元件都可以呼叫這個 action 來把商品加入購物車；
// 接收商品物件與加入的數量
//quantity = 1 是語法糖寫法，表示當quantity沒有傳入就預設為1
const addToCart = (product, quantity = 1 ) => {
    const existProduct = cart.value.find(item => item.firestoreId === product.firestoreId)
    if(existProduct){
      existProduct.quantity = existProduct.quantity + quantity;
    }else{ 
      cart.value.push({ ...product, quantity: quantity });  //展開語法 (...) ,建立複製品並擴充它
        
    }
    alert(`將 ${quantity} 個添加至購物車`);
    
  };

//這在 Pinia 中被稱為【取值器（Getter）】
//計算購物車的商品數量加總
//.reduce() 回傳的值便是累加器迭代完整個陣列的結果
//i是一個暫存
//從總和(sum)為 0 開始，依序把每個項目(i)的數量(quantity)加到總和(sum)裡面
const cartCount = computed(function(){
  return cart.value.reduce(function(sum, i){
    return sum + i.quantity
  }, 0); 
});

//計算購物車總金額
// 0 是初始值
const totalPrice = computed(function() {
    return cart.value.reduce(function(sum, i) {
      return sum + (i.price * i.quantity);
    }, 0);
});

const removeFromCart = (removeId) => {
  //.filter()只有符合條件的項目才會被保留下來
  const remainItem = cart.value.filter(item => item.firestoreId!==removeId)
  //把回傳的陣列塞回去cart
  cart.value = remainItem;
}


// 最後要 export，這樣其他的元件才能使用它們；
return{
    cart,
    addToCart,
    cartCount,
    totalPrice,
    removeFromCart
};
});