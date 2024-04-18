<template>
    <MenuBar />
    <div class="menu">
        <MenuNav />
        <div class="product_site">
            <nav style="font-size: 1.6rem;" class="mb-2 py-4">
                <ul class="flex list-unstyled m-0 p-0">
                    <li>
                        <router-link to="/menu" style="color: #00000094;" class="text-decoration-none">
                            Thực đơn
                        </router-link>
                        <span aria-hidden="true">&nbsp; / &nbsp;</span>
                    </li>
                    <li>
                        <span class="font-weight-bold">Oleato™️</span>
                    </li>
                </ul>
            </nav>
            <h1 class="product_site-heading">Oleato™️</h1>
            <div id="drinks">
                <div class="pb-5">
                    <div class="grid">
                        <div class="grid-items-25">
                            <div class="p-3 mb-3 link_overlay w-100 d-block text-center">
                                <div class="thumb-img-25">
                                    <img class="thumb-img_size"
                                        src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_IcedPeachGreenTea.jpg?impolicy=1by1_tight_288"
                                        alt="">
                                </div>
                                <h3>Cà Phê Lắc Đá Oleato Golden Foam™</h3>
                                <h4>🛒 200.000 VND</h4>
                                <router-link to="/menu/product/:id/hot" class="product__link-overlay"></router-link>
                            </div>
                        </div>
                        <div class="grid-items-25">
                            <div class="p-3 mb-3 link_overlay w-100 d-block text-center">
                                <div class="thumb-img-25">
                                    <img class="thumb-img_size"
                                        src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20181127_IcedMatchaGreenTeaLatte.jpg?impolicy=1by1_tight_288"
                                        alt="">
                                </div>
                                <h3 >Cà Phê Siro Hạt Dẻ</h3>
                                <h4>🛒 300.000 VND</h4>
                                <router-link to="/menu/product/:id/hot" class="product__link-overlay"></router-link>
                            </div>
                        </div>
                        <div class="grid-items-25">
                            <div class="p-3 mb-3 link_overlay w-100 d-block text-center">
                                <div class="thumb-img-25">
                                    <img class="thumb-img_size"
                                        src="https://globalassets.starbucks.com/digitalassets/products/bev/OleatoGoldenFoamIcedShakenEspressoToffeenut.jpg?impolicy=1by1_tight_288"
                                        alt="">
                                </div>
                                <h3>Cà Phê Lắc Đá Oleato Golden Foam™ với Siro Hạt Dẻ</h3>
                                <h4>🛒 200.000 VND</h4>
                                <router-link to="/menu/product/:id/hot" class="product__link-overlay"></router-link>
                            </div>
                        </div>
                        <div class="grid-items-25">
                            <div class="p-3 mb-3 link_overlay w-100 d-block text-center">
                                <div class="thumb-img-25">
                                    <img class="thumb-img_size"
                                        src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211029_7356_IcedMatchaTeaLatte-GoldenFoam-onGray_sRGB-1800.jpg?impolicy=1by1_tight_288"
                                        alt="">
                                </div>
                                <h3>Cà Phê Lắc Đá Oleato Golden Siro Hạt Dẻ</h3>
                                <h4>🛒 200.000 VND</h4>
                                <router-link to="/menu/product/:id/hot" class="product__link-overlay"></router-link>
                            </div>
                        </div>
                        <div class="grid-items-25">
                            <div class="p-3 mb-3 link_overlay w-100 d-block text-center">
                                <div class="thumb-img-25">
                                    <img class="thumb-img_size"
                                        src="https://globalassets.starbucks.com/digitalassets/products/bev/OleatoGoldenFoamIcedShakenEspressoToffeenut.jpg?impolicy=1by1_tight_288"
                                        alt="">
                                </div>
                                <h3 class="">Cà Phê Lắc Đá Oleato Golden Foam™ với Siro Hạt Dẻ</h3>
                                <h4>🛒 200.000 VND</h4>
                                <router-link to="/menu/product/:id/hot" class="product__link-overlay"></router-link>
                            </div>
                        </div>
                        <div class="grid-items-25">
                            <div class="p-3 mb-3 link_overlay w-100 d-block">
                                <div class="thumb-img-25">
                                    <img class="thumb-img_size"
                                        src="https://globalassets.starbucks.com/digitalassets/products/bev/OleatoGoldenFoamIcedShakenEspressoToffeenut.jpg?impolicy=1by1_tight_288"
                                        alt="">
                                </div>
                                <div class="whiteSpace-truncate">
                                    <h3 style="overflow: hidden;text-overflow: ellipsis;width: 180px;white-space: nowrap;"
                                        class="text-center">Cà Phê Lắc Đá Oleato Golden Foam™ với Siro Hạt Dẻ</h3>
                                    <div class="text_alert">
                                        <svg aria-hidden="true" class="valign-middle color-red" focusable="false"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                            style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                            <path
                                                d="M9.1005 3H14.8995C15.4299 3 15.9386 3.21071 16.3137 3.58579L20.4142 7.68629C20.7893 8.06136 21 8.57007 21 9.1005L21 14.8995C21 15.4299 20.7893 15.9386 20.4142 16.3137L16.3137 20.4142C15.9386 20.7893 15.4299 21 14.8995 21H9.10051C8.57007 21 8.06136 20.7893 7.68629 20.4142L3.58579 16.3137C3.21071 15.9386 3 15.4299 3 14.8995V9.10051C3 8.57007 3.21071 8.06136 3.58579 7.68629L7.68629 3.58579C8.06136 3.21071 8.57007 3 9.1005 3ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z">
                                            </path>
                                        </svg>
                                        <p class="d-inline">Hết hàng</p>
                                    </div>
                                    <router-link to="/menu/drinks/oleato" class="product__link-overlay-unavailable"></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import MenuNav from '@/components/MenuNav.vue'

export default {
    components: {
        MenuBar,
        MenuNav
    }
}
</script>