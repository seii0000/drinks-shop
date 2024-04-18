<template>
    <MenuBar/>
    <div class="container">
         <h1 style="font-weight: 700; padding-right: 0; padding-left: 0; margin-bottom: 4rem; margin-top: 4rem; font-size: 2.4rem;">Yêu Thích</h1>
         <div class="mt-5">
             <div class="container_info">
                 <div style="margin-top: 4rem;">
                     <img style=" width: 200px;" src="https://www.starbucks.com/weblx/images/fav-tapes.png" alt="">
                 </div>
                 <p style="margin-top: 1.6rem; font-weight: 600; font-size: 2.8rem; line-height: 1.385;">Lưu lại danh mục ưa thích của bạn</p>
                 <p style="font-size: 1.9rem; margin-top: 1.6rem; margin-bottom: 1.6rem; color: #00000094;">Sử dụng biểu tượng trái tim để lưu các tùy chỉnh. Các đồ uống yêu thích của bạn sẽ xuất hiện ở đây để đặt hàng lại.</p>
                 <div class="pt-2">
                     <router-link style="min-width: 35px; min-height: 35px; color: #000000de; background: none; border-radius: 50px; border-style: solid; border-radius: 50px; display: inline-block; border-width: 1px; padding: 7px 16px; line-height: 1.2; text-decoration: none; text-align: center; font-size: 16px;" to="/account/sign-in"><a >Đăng nhập</a></router-link>
                     <router-link style="margin-left: 1.6rem ;min-width: 35px; min-height: 35px; border-color: #000;color: #fff; background: #000; border-radius: 50px; border-style: solid; border-radius: 50px; display: inline-block; border-width: 1px; padding: 7px 16px; line-height: 1.2; text-decoration: none; text-align: center; font-size: 16px;" to="/account/sign-in"><a >Đăng ký</a></router-link>
 
                 </div>
             </div>
         </div>
    </div>
 </template>
 
 <style>
 .container_info {
     max-width: 314px;
     display: block;
 }
 
 .container {
         margin-left: 131px;
         margin-right: 4rem;
         background-color: #fff;
 }
 </style>
 
 <script>
     import MenuBar from '@/components/MenuBar.vue';
 
     export default {
         components: {
             MenuBar
         }
     }
 </script>