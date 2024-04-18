<template>
    <main>
        <div class="main-container">
            <section>
                <div class="slideshow">
                    <transition name="slide-fade" mode="out-in">
                        <div class="slide-container" :key="currentIndex">
                            <img :src="images[currentIndex]" alt="Slide" />
                        </div>
                    </transition>
                    <div class="controls">
                        <button class="btn" @click="prevSlide">
                            <i class="pi pi-angle-left" style="font-size: 2.5rem"></i>
                        </button>
                        <button class="btn" @click="nextSlide">
                            <i class="pi pi-angle-right" style="font-size: 2.5rem"></i>
                        </button>
                    </div>
                </div>
            </section>
            <section class="announcements">
                <span>
                    Theo hướng dẫn mới nhất của CDC, khẩu trang hiện tại không còn bắt buộc đối với khách hàng đã được tiêm phòng đầy đủ tại các cửa hàng của chúng tôi, trừ những khu vực theo luật địa phương yêu cầu bắt buộc đeo khẩu trang. Tìm hiểu thêm.
                    <a href="#">Đọc thêm</a>
                </span>
            </section>

            <div class="video-intro mb-4">
                <iframe width="100%" height="700px" src="https://www.youtube.com/embed/q3ovyqbfOzk?si=i2ISjlbhsOaX3WZd&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
            <section class="rewards left-right-section" id="promo1-text">
                <div class="text" id="promo1">
                    <h1>MUA CÀ PHÊ TRÚNG THƯỞNG LỚN</h1>
                    <h3>Cơ hội trúng thưởng hấp dẫn đang chờ! Tham gia "Trò Chơi Mùa Hè" để có cơ hội nhận những phần quà tuyệt vời! *</h3>
                    <PrimeButton class="cta" label="Chơi ngay" text raised></PrimeButton>
                </div>
                <div class="image" id="img1">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72796.jpg">
                </div>
            </section>
            <section class="rewards left-right-section" id="promo2-text">
                <div class="text">
                    <h1>CÀ PHÊ MIỄN PHÍ CHỈ CÁCH BẠN MỘT CHẠM!</h1>
                    <h3>Tham gia ngay để nhận Thưởng.*</h3>
                    <PrimeButton class="cta" label="Tham gia" text raised></PrimeButton>
                </div>
                <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71056.png">
                </div>
            </section>
            <section class="chill left-right-section" id="promo3-text">
                <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72801.jpg">
                </div>
                <div class="text" id="poster1">
                    <h1 style="font-size: 24px; font-weight: 400; margin-bottom: 24px; letter-spacing: 0px;">100% CỬA HÀNG Ở MĨ ĐỀU ĐÓNG GÓP THỰC PHẨM.</h1>
                    <h3>Chúng tôi rất tự hào tuyên bố rằng tất cả các cửa hàng do công ty sở hữu tại Mỹ hiện đang quyên góp thực phẩm bổ dưỡng cho các ngân hàng thực phẩm địa phương thông qua chương trình FoodShare của chúng tôi.</h3>
                    <PrimeButton class="cta" label="Đọc thêm" text raised></PrimeButton>
                </div>
            </section>
            <section>
                <div class="top-bottom-section" id="promo4-text">
                    <div class="section-container" >
                        <div class="image">
                            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-89263.jpg">
                        </div>
                        <div class="text">
                            <h1>MUA VÀ LẤY TẠI CỬA HÀNG. CHƯA BAO GIỜ DỄ NHƯ VẬY!</h1>
                            <h3>Chỉ cần mở ứng dụng, đặt món yêu thích và tận hưởng thanh toán không chạm. Sau đó, bạn có thể lựa chọn phương thức nhận hàng phù hợp nhất với mình.</h3>
                            <div class="cta-container">
                                <PrimeButton class="cta" label="Chọn thiết lập tùy chọn" text raised></PrimeButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="top-bottom-section">
                    <div class="section-container" id="promo5-text">
                        <div class="image">
                            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-89035.jpg">
                        </div>
                        <div class="text">
                            <h1>NHƯ BỒNG BỀNH TRÊN DÒNG NƯỚC MÁT. THƯ THÁI ĐÓN HÈ, NHẸ TÊNH NHƯ PHAO</h1>
                            <h3>Bắt nhịp mùa hè thư giãn. Đặt đồ uống Starbucks ngay trên Uber Eats.**</h3>
                            <div class="cta-container">
                                <PrimeButton class="cta" label="Order now" text raised></PrimeButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="chill left-right-section">
                <div class="text">
                    <h2 style="font-size: 24px; font-weight: 400; margin-bottom: 24px;">VỪA QUAY LẠI TRƯỜNG HỌC. BẠN QUÊN THỨ NÀY!</h2>
                    <h3>Chúc may mắn đến các đối tác (nhân viên) của chúng tôi đang quay lại trường học thông qua Chương trình Thành tựu Starbucks College, với 100% chi phí học phí được bao gồm tại ASU Online.</h3>
                    <PrimeButton class="cta" label="Learn more" text raised></PrimeButton>
                </div>
                <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72800.jpg">
                </div>
            </section>
            <section class="des">
                <div class="small-des">
                    <p>*Không cần mua hàng. Chỉ áp dụng tại các cửa hàng tham gia. Kết thúc vào ngày 22/8/2021. Để tham gia và xem thể lệ chính thức,
                    </p>
                    <p>truy cập <a
                            href="https://www.starbuckssummergame.com/?utm_medium=website&utm_source=starbucks&utm_campaign=sum21_20210721&utm_content=homepage#/landing">starbuckssummergame.com</a>.
                    </p>
                </div>
            </section>
        </div>
    </main>

    
</template>

<script>

// import myVideo from '../site/assets/video/Starbucks.mp4';
import Img1 from '@/assets/img/hero1.png';
import Img2 from '@/assets/img/hero2.png';
import Img3 from '@/assets/img/hero3.png';



export default {

    data() {
        return {
            
            currentIndex: 0,
            images: [
                Img3,
                Img2,
                Img1,
                // Add ore image paths here
            ]
        };
    },
    methods: {
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
    }
};
</script>

<script setup>
    import { gsap } from "gsap";
    import { onMounted } from "vue";

    onMounted(() => {
        gsap.fromTo(".slideshow", {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 3
        });

        
        gsap.fromTo(".announcements", {
            x: -400
            
        }, {
            x: 300,
            duration: 2
        });

        gsap.fromTo("#promo1-text", {
            x: -400,
            opacity: 0,
            duration: 2
        }, {
            x: 0,
            opacity: 1,
            duration: 2
        });

        gsap.fromTo("#promo2-text", {
            x: -400,
            opacity: 0,
            duration: 2
        }, {
            x: 0,
            opacity: 1,
            duration: 2
        });

        gsap.fromTo("#promo3-text", {
            x: 2000,
            opacity: 0,
            duration: 2
        }, {
            x: 0,
            opacity: 1,
            duration: 2
        });
        
        
        gsap.fromTo(".section-container", {  
            opacity: 0,
            
        }, {
            opacity: 1,
            duration: 3
        });

        gsap.fromTo(".chill", {
            y: -400,
            opacity: 0,
            duration: 2
        }, {
            y: 0,
            opacity: 1,
            duration: 2
        });
    })
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
}
</style>