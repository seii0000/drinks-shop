//Nutrition product
<template>
    <div class="nav-menu-product">
        <nav>
            <ul>
                <li>
                    <router-link to="/menu">Thực đơn</router-link>
                    <span aria-hidden="true">&nbsp; / &nbsp;</span>
                </li>
                <li>
                    <router-link to="/menu/drinks/oleato">Oleato™️</router-link>
                    <span aria-hidden="true">&nbsp; / &nbsp;</span>
                </li>
                <li>
                    <span>Trà Sữa Chai Đá với Oleato Golden Foam™</span>
                </li>
            </ul>
        </nav>

    </div>
    <div style="background-color: #1f3933;" class="header-container">
        <div class="d-flex align-items-center">
            <div style="margin-right: 88px; margin-left: 0; max-width: 420px;" class="flex-grow-1 py-3">
                <div style="max-width: 300px; padding-right: 40px;" class="mx-auto w-100 position-relative">
                    <img style="border-radius: 50%; height: 300px; overflow: hidden;"
                        src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20230406_1723_IcedChaiTeaLatte-GoldenFoam-onGray_sRGB-1800.jpg?impolicy=1by1_wide_topcrop_630"
                        alt="">
                </div>
            </div>
            <div style="padding-left: 88px; max-width: 420px;" class="flex-grow-1 pb-5 ">
                <h1 style="font-size: 3.6rem; line-height: 1.29; font-weight: 700;" class="pb-2 text-left text-white">
                    Trà Sữa Chai Đá với Oleato Golden Foam™</h1>
                <div class="flex align-items-center text-left">
                    <span style="font-size: 2.4rem; color: #ffffffb3 !important;">
                        Cao 12fl oz
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="header-container">
        <div class="position-relative">
            <a style="font-weight: 600; text-decoration: none; color: #000000de; font-size: 1.4rem;"
                class="mb-5 d-block" href="/menu/product/:id/hot">
                <svg aria-hidden="true" class="valign-middle pr1" focusable="false" preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24" style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                    <path
                        d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z">
                    </path>
                </svg>Trở về</a>
            <div class="d-flex">
                <div style="margin-right: 88px; margin-left: 0; max-width: 420px; font-size: 1.6rem;"
                    class="flex-grow-1 py-3">
                    <div class="mx-auto w-100 position-relative pb-5">
                        <h2 style="font-weight: 600; margin-bottom: 16px; font-size: 2.4rem; padding: 0 8px 12px; position: relative;"
                            class="sub_heading">Thành Phần</h2>
                        <p class="my-1">
                            <strong>SỮA</strong>, <strong>ĐÁ LẠNH</strong>, <strong>CHAI TEA CONCENTRATE</strong> [AN
                            INFUSION OF (WATER, BLACK TEA, CARDAMOM, BLACK PEPPER, GINGER, CINNAMON, CLOVES, NATURAL
                            FLAVORS, STAR ANISE), SUGAR, HONEY, GINGER JUICE, NATURAL FLAVORS, VANILLA, CITRIC ACID],
                            <strong>GOLDEN FOAM</strong> [VANILLA SWEET CREAM (CREAM (CREAM, MONO AND DIGLYCERIDES,
                            CARRAGEENAN), MILK, VANILLA SYRUP (SUGAR, WATER, NATURAL FLAVORS, POTASSIUM SORBATE, CITRIC
                            ACID)), EXTRA VIRGIN OLIVE OIL]
                        </p>
                    </div>
                    <div class="mx-auto w-100 position-relative">
                        <h2 style="font-weight: 600; margin-bottom: 16px; font-size: 2.4rem; padding: 0 8px 12px; position: relative;"
                            class="sub_heading">Chất gây dị ứng</h2>
                        <p class="my-1">Không có trong thành phần của chất.</p>
                        <div style="color: #00000094;" class="mt-1 pt-3">Chúng tôi không thể đảm bảo bất kỳ sản phẩm nào không được đóng gói sẵn tại cửa hàng của chúng tôi hoàn toàn không gây dị ứng vì chúng tôi sử dụng chung thiết bị để lưu trữ, chế biến và phục vụ chúng. Khách hàng bị dị ứng có thể tìm thấy thông tin thành phần của sản phẩm trên nhãn của các sản phẩm đóng gói của chúng tôi hoặc trực tuyến tại Starbucks.com/menu.</div>
                    </div>
                </div>
                <div style="margin-right: 0; margin-left: 88px; max-width: 420px;" class="flex-grow-1 py-3">
                    <div class="mx-auto w-100 position-relative pb-5">
                        <h2 style="font-weight: 600; font-size: 2.4rem; margin-bottom: 32px; padding: 0 8px 12px; position: relative;"
                            class="sub_heading">Chất Dinh Dưỡng</h2>
                        <div style="padding: 8px 0 0; font-size: 1.6rem"
                            class="flex flex-row hasBorder justify-content-between">
                            <span>
                                <span style="padding-right: .4rem;">Calories</span>
                                <span>430</span></span>
                            <span>
                                <span style="padding-right: .4rem;">Calories chất béo</span>
                                <span>230</span>
                            </span>
                        </div>
                        <div>
                            <div style="padding: 8px 0 0; font-size: 1.6rem"
                                class="flex flex-row hasBorder justify-content-between">
                                <span>
                                    <span style="padding-right: .4rem;">Tổng chất béo</span>
                                    <span>27 g</span>
                                </span>
                                <span>
                                    <span>35%</span>
                                </span>
                            </div>
                            <div style="padding: 8px 0 0 10px; color: #00000094; font-size: 1.6rem"
                                class="flex flex-row hasBorder justify-content-between">
                                <span>
                                    <span style="padding-right: .4rem;">Bão hòa chất lượng</span>
                                    <span>12g</span>
                                </span>
                                <span>
                                    <span>60%</span>
                                </span>
                            </div>
                            <div style="padding: 8px 0 0 10px; color: #00000094; font-size: 1.6rem"
                                class="flex flex-row hasBorder justify-content-between">
                                <span>
                                    <span style="padding-right: .4rem;">Chuyển lượng chất béo</span>
                                    <span>0.5 g</span>
                                </span>
                            </div>
                        </div>
                        <div style="padding: 8px 0 0; font-size: 1.6rem"
                            class="flex flex-row hasBorder justify-content-between">
                            <span>
                                <span style="padding-right: .4rem;">Cholesterol</span>
                                <span>55 mg</span>
                            </span>
                            <span>
                                <span>18%</span>
                            </span>
                        </div>
                        <div style="padding: 8px 0 0; font-size: 1.6rem"
                            class="flex flex-row hasBorder justify-content-between">
                            <span>
                                <span style="padding-right: .4rem;">Sodium</span>
                                <span>100mg</span></span>
                            <span>
                                <span>4%</span>
                            </span>
                        </div>
                        <div>
                            <div style="padding: 8px 0 0; font-size: 1.6rem"
                                class="flex flex-row hasBorder justify-content-between">
                                <span>
                                    <span style="padding-right: .4rem;">Total Fat </span>
                                    <span>27 g</span>
                                </span>
                                <span>
                                    <span>35%</span>
                                </span>
                            </div>
                            <div style="padding: 8px 0 0 10px; color: #00000094; font-size: 1.6rem"
                                class="flex flex-row hasBorder justify-content-between">
                                <span>
                                    <span style="padding-right: .4rem;">Dietary Fiber</span>
                                    <span>0g</span>
                                </span>

                            </div>
                            <div style="padding: 8px 0 0 10px; color: #00000094; font-size: 1.6rem"
                                class="flex flex-row hasBorder justify-content-between">
                                <span>
                                    <span style="padding-right: .4rem;">Sugars</span>
                                    <span>42 g</span>
                                </span>
                            </div>
                        </div>
                        <div style="padding: 8px 0 0; font-size: 1.6rem"
                            class="flex flex-row hasBorder justify-content-between">
                            <span>
                                <span style="padding-right: .4rem;">Protein</span>
                                <span>7g</span>
                            </span>

                        </div>
                        <div style="padding: 8px 0 0; font-size: 1.6rem"
                            class="flex flex-row hasBorder justify-content-between">
                            <span>
                                <span style="padding-right: .4rem;">Caffeine</span>
                                <span style="scroll-margin-top: 100px; animation: identifier 2s"
                                    id="caffeineDisclaimer">70 mg
                                    <a style="text-decoration: none;" aria-labelledby="disclaimerTitleId"
                                        href="#caffeineElement">*</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <ul style="color: #00000094; font-size: 1.6rem;" class="p-0 m-0 list-unstyled">
                        <li class="mt-3">
                            2,000 calories một ngày được sử dụng để cung cấp hướng dẫn dinh dưỡng chung, nhưng nhu cầu calo có thể thay đổi.
                        </li>
                        <li style="scroll-margin-top: 100px;" id="caffeineElement" class="mt-3">
                            * Lượng caffein là giá trị ước tính.
                            <a style="text-decoration: none;" aria-describedby="nutritionHeadingId"
                                aria-label="Back to content" href="#caffeineDisclaimer">↩</a>
                        </li>
                        <li class="mt-3">
                            Thông tin dinh dưỡng được tính toán dựa trên công thức tiêu chuẩn của chúng tôi. Vì sản phẩm của chúng tôi có thể được tùy chỉnh theo yêu cầu, nên thông tin chính xác có thể thay đổi.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div style="background-color: #1f3933; padding-bottom: 32px; margin-top: 64px;" class="header-container">
        <div class="d-flex align-items-center">
            <div style="margin-right: 88px; margin-left: 0; max-width: 420px;" class="flex-grow-1 py-3">
                <div style="padding-right: 40px;" class="w-100 position-relative">
                    <div>
                        <p style="font-size: 1.4rem; border-radius: 6px; border: 1px solid #cba258; color: #cba258"
                            class=" d-inline-block px-2 mb-3">
                            <span>200</span>
                            <span>★</span>
                            item
                        </p>
                        <p style="font-size: 1.4rem; color: #ffffffb3;">Trà đen ủ với quế, đinh hương và các loại gia vị ấm khác, kết hợp với sữa và đá tạo nên sự cân bằng hoàn hảo giữa ngọt ngào và cay nhẹ. Bên trên được phủ lớp bọt lạnh béo ngậy, làm từ dầu oliu nguyên chất Partanna® hảo hạng được ủ lạnh.</p>
                        <div class="flex align-items-center pt-3 text-white">
                            <span style="font-size: 1.4rem; font-weight: 600;">430 calories, 42g sugar, 27g fat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'primeicons/primeicons.css'



export default {
    data() {
        return {
            selectedItem: null,
            items: ['Item 1', 'Item 2', 'Item 3']
        };
    },
    methods: {


    }
};
</script>

<style>
#caffeineElement,
#caffeineDisclaimer {
    animation: identifier 2s;
}

#caffeineElement {
    animation: identifier 2s;
}

@keyframes identifier {
    0% {
        background: yellow;
        opacity: 0.2;
    }

    50% {
        background: yellow;
        opacity: 0.4;
    }

    100% {
        background: yellow;
        opacity: 0.8;
    }
}

.hasBorder {
    border-bottom: 1px solid #d4e9e2;
    font-weight: 600;
}

.sub-button {
    background: none;
    border-radius: 50px;
    border-style: solid;
    border-width: 1px;
    display: inline-block;
    font-weight: 600;
    line-height: 1.2;
    padding: 7px 16px;
    text-align: center;
    text-decoration: none;
    transition: all .2s ease;
    color: #ffffff;
    font-size: 1.6rem;
    margin-top: 24px;
}

.icon-input {
    position: relative;
    left: 6px;
    margin-left: auto;
    color: #00754a !important;
    vertical-align: middle;
}

.select_input {
    appearance: none;
    cursor: pointer;
    font-size: 1.6rem;
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0;
}

.select_input--isFocused {
    color: #00754a;
}

.float-label {
    font-size: 1.9rem;
    z-index: 0;
    cursor: pointer;
    color: #00000094;
    border-radius: 4px;
    position: absolute;
    background-color: #fff;
    user-select: none;
    left: 12px;
    transform: translateY(-95%);
    padding-right: .4rem;
    padding-left: .4rem;
}

.float-label--isFocused {
    color: #00754a;
}

.grid-items-info_background-left {
    background: url(https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 40px;
    transition: background-image .25s ease-in-out;
    transition-delay: .05s;
    margin-bottom: 10px;
}

.grid-items-info_background-center {
    background: url(https://www.starbucks.com/app-assets/2920fb2a8c34d3ddb95ad262872526e9.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 40px;
    transition: background-image .25s ease-in-out;
    transition-delay: .05s;
    margin-bottom: 10px;
}

.grid-items-info_background-right {
    background: url(https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 40px;
    transition: background-image .25s ease-in-out;
    transition-delay: .05s;
    margin-bottom: 10px;
}

.grid-items-info {
    position: relative;
    height: 104px;
    width: 72px;
    padding: 0;
    display: inline-block
}

.sub_heading::after {
    background: #d4e9e2;
    border-radius: 12px;
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
}

.btn-info:hover {
    background-color: gray;
}

.nav-menu-product {
    position: sticky;
    top: 0;
    padding-left: 131px;
    padding-right: 40px;
    width: 100%;
    background-color: #f9f9f9;
    z-index: 100;
}

.nav-menu-product ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}

.nav-menu-product ul li {
    display: block;
    font-size: 1.3rem;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    position: relative;
    text-decoration: none;
}

.nav-menu-product ul li a,
.nav-menu-product ul li span {
    text-decoration: none;
    color: #000000de;
    font-weight: 600;
}
</style>