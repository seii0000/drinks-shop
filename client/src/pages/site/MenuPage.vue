<template>
    <MenuBar/>
    <div class="menu">
        <MenuNav/>
        <div class="product_site">
            <h1 class="product_site-heading">Thực đơn</h1>
            <div id="drinks">
                <h2>Đồ uống lạnh</h2>
                <hr aria-hidden="true" class="ruler">
                <div class="grid">
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/OleatoGoldenFoamIcedShakenEspressoToffeenut.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Oleato</h3>
                            <router-link to="/menu/drinks/oleato" class="product__link-overlay"></router-link>
                        </div>
                    </div>
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/FY22WIN_PistachioFrapp-onGreen.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Iced Black Tea</h3>
                            <router-link to="/menu/drinks/oleato" class="product__link-overlay"></router-link>
                        </div>
                    </div>
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_IcedBlackTeaLemonade.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Iced Black Tea Lemonade</h3>
                            <router-link to="/menu/drinks/oleato" class="product__link-overlay"></router-link>
                        </div>
                    </div>
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_IcedRoyalEnglishTeaLatte.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Iced Royal English Breakfast Tea Latte</h3>
                            <router-link to="/menu/drinks/oleato" class="product__link-overlay"></router-link>
                        </div>
                    </div>
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220810_IcedChaiTeaLatte.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Iced Chai Tea Latte</h3>
                            <router-link to="/menu/drinks/oleato" class="product__link-overlay"></router-link>
                        </div>
                    </div>
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_IcedPeachGreenTea.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Iced Peach Green Tea</h3>
                            <router-link to="/menu/drinks/oleato" class="product__link-overlay"></router-link>
                        </div>
                    </div>
                    <!-- <div>
                        <div class="thumb-img">
                            <div>
                                <img src="" alt="">
                            </div>
                        </div>
                        <h3>Hot Teas</h3>
                        <a href="/menu/drinks/hot-teas" class="product__link-overlay"></a>
                    </div>
                    <div>
                        <div class="thumb-img">
                            <div>
                                <img src="" alt="">
                            </div>
                        </div>
                        <h3>Hot Drinks</h3>
                        <a href="/menu/drinks/hot-drinks" class="product__link-overlay"></a>
                    </div>
                    <div>
                        <div class="thumb-img">
                            <div>
                                <img src="" alt="">
                            </div>
                        </div>
                        <h3>Hot Teas</h3>
                        <a href="/menu/drinks/cold-coffees" class="product__link-overlay"></a>
                    </div>
                    <div>
                        <div class="thumb-img">
                            <div>
                                <img src="" alt="">
                            </div>
                        </div>
                        <h3>Iced Teas</h3>
                        <a href="/menu/drinks/iced-teas" class="product__link-overlay"></a>
                    </div>
                    <div>
                        <div class="thumb-img">
                            <div>
                                <img src="" alt="">
                            </div>
                        </div>
                        <h3>Cold Drinks</h3>
                        <a href="/menu/drinks/cold-drinks" class="product__link-overlay"></a>
                    </div> -->

                </div>
            </div>
            <div id="drinks">
                <h2>Đồ uống nóng</h2>
                <hr aria-hidden="true" class="ruler">
                <div class="grid">
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220411_ChaiLatte.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Chai Tea Latte</h3>
                            <a href="/menu/drinks/oleato" class="product__link-overlay"></a>
                        </div>
                    </div>
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/ChaiBrewedTea.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Chai Tea</h3>
                            <a href="/menu/drinks/oleato" class="product__link-overlay"></a>
                        </div>
                    </div>
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211115_MatchaTeaLatte.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Matcha Tea Latte</h3>
                            <a href="/menu/drinks/oleato" class="product__link-overlay"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="drinks">
                <h2>Nước ép</h2>
                <hr aria-hidden="true" class="ruler">
                <div class="grid">
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190624_CaramelAppleSpice.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Caramel Apple Spice</h3>
                            <a href="/menu/drinks/oleato" class="product__link-overlay"></a>
                        </div>
                    </div>
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SteamedAppleJuice.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Steamed Apple Juice</h3>
                            <a href="/menu/drinks/oleato" class="product__link-overlay"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="drinks">
                <h2>Cà phê nóng</h2>
                <hr aria-hidden="true" class="ruler">
                <div class="grid">
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_SignatureHotChocolate.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>Hot Chocolate</h3>
                            <a href="/menu/drinks/oleato" class="product__link-overlay"></a>
                        </div>
                    </div>
                    <div class="grid-items">
                        <div class="flex align-items-center position-relative">
                            <div style="max-width: 112px; margin-right: 16px;" >
                                    <div class="thumb-img">
                                        <img class="thumb-img_size" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190624_WhiteHotChocolate.jpg?impolicy=1by1_tight_288" alt="">
                                </div>
                            </div>
                            <h3>White Hot Chocolate</h3>
                            <a href="/menu/drinks/oleato" class="product__link-overlay"></a>
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