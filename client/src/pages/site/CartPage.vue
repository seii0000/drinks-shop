<template>
    <div class="position-relative h-100 z-0">
        <main style="min-height: 100vh;" class="position-relative z-1">
            <div class="content_left flex flex-column">
                <div class="cart_navigation flex align-items-center text-white p-0 position-absolute">
                    <router-link to="/" class="pr-4 d-block">
                        <img style="width: 50px;" src="https://th.bing.com/th/id/OIG3.FJQ2KS36RJXxBA24HYzS?pid=ImgGn"
                            alt="">
                    </router-link>

                    <router-link to="/menu" class="cart_navigation-back_menu">
                        <svg aria-hidden="true" class="valign-middle pr1" focusable="false"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                            style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                            <path
                                d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z">
                            </path>
                        </svg>
                        <span style="font-weight: 700; font-size: 1.6rem;">Về thực đơn</span>
                    </router-link>
                </div>

                <div class="flex flex-grow-1 flex-column">
                    <div style="padding-bottom: 2.4rem; padding-left: 4rem; padding-right: 4rem; background-color: #1e3932;"
                        class="content_left-header my-auto w-100">
                        <div class="p-0">
                            <div class="flex justify-content-between align-items-center">
                                <h1 style="font-weight: 700; font-size: 2.4rem; color: #fff;" tabindex="-1">Tổng Thực
                                    Đơn ({{ totalCount }})</h1>
                            </div>
                            <div class="flex mb-3 mt-1">
                                <div class="content_left-container">
                                    <a style="text-decoration: none; line-height: normal; min-width: 0; flex-grow: 0; font-size: 1.6rem;"
                                        class="pb-1" href="">
                                        <span style="font-size: 1.4rem; color: #ffffffb3;" class="d-block">Chọn Tại Cửa
                                            Hàng</span>
                                        <span style="font-weight: 600; color: #fff;">5th Ave & Benton - Pocatello</span>
                                    </a>
                                    <a href="#">
                                        <svg aria-hidden="true" class="valign-middle color-white" focusable="false"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                            style="width: 18px; height: 18px; overflow: visible;">
                                            <path
                                                d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h1 class="mt-4 text-white">Tổng số tiền cần thanh toán : {{ formattedTotalPrice }}.000
                                    VND</h1>
                                <span style="font-size: 1.4rem; color: #ffffffb3;">Phương thức thanh toán</span>
                                <div style="font-weight: 700; font-size: 1.9rem; border: 1px solid; border-radius: 4px; line-height: 3.2; overflow: hidden;"
                                    class="flex text-white">
                                    <button @click="buttonClicked('store')" :class="{ 'bg-color': isStore }"
                                        style="border-right: 1px solid; padding: 7px 16px; text-align: center; flex: 1 1 auto; min-height: 0; min-width: 0; background: #0000; border-radius: 0; color: #fff;"
                                        aria-pressed="true" class="border-0">
                                        <svg aria-hidden="true" class="valign-middle block mx-auto mb1"
                                            focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                            style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                            <path
                                                d="M22.584 1c.273 0 .5.2.543.46l.007.09v20.9c0 .273-.2.5-.46.543l-.09.007H5.564a.55.55 0 01-.09-1.093l.09-.007h7.8V2.1h-7.65v2.7c0 .273-.2.5-.461.543l-.09.007a.55.55 0 01-.542-.46l-.008-.09V1.55c0-.273.2-.5.461-.543L5.164 1h17.42zM5 12.95c1.396 0 2.576 1.785 3.22 4.066l.066.247.099.412c.107.497.165.952.165 1.325 0 2.39-7.1 2.39-7.1 0 0-.31.04-.679.117-1.087l.051-.25.099-.411C2.34 14.865 3.554 12.95 5 12.95zm0 1.1c-.7 0-1.638 1.436-2.154 3.241l-.062.228-.094.39c-.092.425-.14.805-.14 1.091 0 .306 1.05.693 2.45.693 1.4 0 2.45-.387 2.45-.693 0-.229-.03-.518-.09-.836l-.048-.244-.093-.39c-.502-1.922-1.49-3.48-2.219-3.48zM22.033 2.1l-7.57-.001v19.8l7.57.001V2.1zM11.7 7.374c.273 0 .5.2.542.46l.008.09v8a.55.55 0 01-1.093.089l-.007-.09v-8a.55.55 0 01.55-.55zm4.5 0c.273 0 .5.2.542.46l.008.09v8a.55.55 0 01-1.093.089l-.007-.09v-8a.55.55 0 01.55-.55zm-11.221.1a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z">
                                            </path>
                                        </svg>
                                        Tiền mặt
                                    </button>
                                    <button @click="buttonClicked('drive')" :class="{ 'bg-color': isDrive }"
                                        style="border-right: 1px solid; padding: 7px 16px; text-align: center; flex: 1 1 auto; min-height: 0; min-width: 0; background: #0000; border-radius: 0; color: #fff;"
                                        aria-pressed="false" class="border-0">
                                        <svg aria-hidden="true" class="valign-middle block mx-auto mb1"
                                            focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                            style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                            <path
                                                d="M10.98 11.57c.559 0 1.09.244 1.455.667.222.259.425.533.606.822l.173.294 1.62 2.905c.084.15.136.317.154.487l.007.13.003 2.09-.01.137c-.02.142-.062.277-.124.4v1.218a1.3 1.3 0 01-.756 1.181l3.442-.001a.55.55 0 01.09 1.093l-.09.007H1.05a.55.55 0 01-.09-1.093l.09-.007 1.856.001a1.301 1.301 0 01-.75-1.048l-.007-.133v-1.49l.006-.073a2.018 2.018 0 01-.248-.81l-.008-.178v-1.288c0-.178.037-.353.11-.514l.06-.119 1.68-2.924c.215-.374.457-.73.724-1.069.307-.39.76-.633 1.25-.677l.164-.008h5.093zm.169 8.629H5.864v.52a1.3 1.3 0 01-.756 1.182h6.798a1.301 1.301 0 01-.75-1.048l-.007-.133v-.521zm-7.9-.116v.637a.2.2 0 00.147.193l.053.007h1.115a.2.2 0 00.193-.147l.007-.053v-.521l-.834.001c-.24 0-.468-.041-.681-.117zm10.515.114l-.035.003-1.48-.001v.52a.2.2 0 00.147.194l.053.007h1.115a.2.2 0 00.193-.147l.007-.053v-.523zM10.98 12.67H5.887a.702.702 0 00-.551.267 7.706 7.706 0 00-.437.613l-.196.322-1.681 2.924-.017.041-.006.044v1.288c0 .478.36.871.822.925l.109.006h9.8a.19.19 0 00.152-.08l.012-.029.005-.061-.004-2.054-.006-.042-.016-.04-.503-.903H5.489a.55.55 0 01-.09-1.092l.09-.007 7.268-.001-.504-.903a5.637 5.637 0 00-.471-.712l-.18-.221a.82.82 0 00-.504-.276l-.118-.009zM22.45 1c.273 0 .5.2.543.46l.007.09v20.9c0 .273-.2.5-.46.543l-.09.007H20.2a.55.55 0 01-.543-.46l-.007-.09-.001-4.304-.07-.029-.084-.052-2.852-2.14h-.568a.55.55 0 01-.09-1.093l.09-.007h3.574V9.55H15a.55.55 0 01-.543-.46L14.45 9V6c0-.273.2-.5.46-.543L15 5.45l.869-.001 3.781-3.308V1.55c0-.273.2-.5.46-.543L20.2 1h2.25zm-.55 1.1h-1.15v19.8h1.15V2.1zm-2.251 13.825h-1.173l1.173.88v-.88zM19.45 6.55h-3.9v1.9h3.9v-1.9zm.2-3.08l-2.262 1.979h2.262V3.47z">
                                            </path>
                                        </svg>
                                        Chuyển khoản
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_right position-relative">
                <div style="bottom: 94px; right: 0; padding: 3.2rem 4.0rem;" class="z-1 position-fixed">
                    <div class="flex flex-column align-items-end">
                        <button class="btn_add-order">
                            <a href="#">Thanh Toán</a></button>
                    </div>
                </div>

                <div style="padding: 1.6rem 16px 16px 9rem; max-width: 606px; font-size: 1.6rem;"
                    class="sub_content mx-auto">
                    <div class="flex flex-column flex-nowrap overflow-hidden mb-4"
                        style="background-color: #fff; box-shadow: 0px 0px .5px 0px #00000024, 0px 1px 1px 0px #0000003d; border: none; border-radius: 12px;">
                        <div class="card-items">
                            <div class="flex flex-column p-5">
                                <div style="cursor: pointer;" class="flex text-left">
                                    <div class="position-relative h-100">
                                        <img style="border-radius: 50%; width: 104px; height: 104px; border: 0;"
                                            class=""
                                            src="https://globalassets.starbucks.com/digitalassets/products/bev/OleatoGoldenFoamIcedShakenEspressoToffeenut.jpg?impolicy=1by1_tight_288"
                                            alt="" role="presentation">
                                    </div>
                                    <div style="padding-left: 3.4rem;" class="w-100">
                                        <div class="flex justify-content-between align-items-baseline">
                                            <h3 style="line-height: 1.3; font-size: 2.4rem;" class="mb-3" tabindex="-1"
                                                data-e2e="heading">Cà Phê Lắc Đá Oleato Golden Foam™ với Siro Hạt Dẻ
                                            </h3>
                                        </div>
                                        <div class="cart-item-options">
                                            <div class="pb-3">
                                                <div class="flex justify-content-between pt-1 align-items-stretch">
                                                    <p>Cỡ lớn</p>
                                                </div>
                                            </div>
                                            <div class="pb-3">
                                                <div class="flex justify-content-between pt-1 align-items-stretch">
                                                    <p>Số Lượng {{ quantity1 }}</p>
                                                </div>
                                            </div>
                                            <p class="pt-1">
                                                <span>200.000 đồng</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div style="min-width: 104px;"></div>
                                    <div style="padding-left: 3.4rem;" class="py-2">
                                        <div style="color: #00000094;">
                                            <div class="cart-items-icon">
                                                <button style="margin-right: 1.6rem;"><svg aria-hidden="true"
                                                        class="valign-middle " focusable="false"
                                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                                        style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                                        <path
                                                            d="M7.676 18.837l-2.472-2.48-2.015 2.023-.476 2.914 2.95-.44 2.012-2.017zm7.247-12.223l-8.597 8.62 2.472 2.478 8.596-8.62-2.47-2.478zm5.693 1.496l-1.504 1.508c-.012.014-.016.03-.03.044-.01.013-.028.016-.042.027l-9.647 9.674c-.012.014-.016.03-.028.042-.012.013-.03.016-.042.028L6.6 22.166c-.122.12-.277.2-.445.223l-4.048.602c-.04.006-.078.008-.117.008-.253 0-.476-.128-.623-.322-.26-.167-.41-.475-.356-.8l.655-4.007c.027-.164.105-.316.222-.432l12.475-12.51 1.563-1.567c.31-.31.81-.31 1.12 0 .31.31.31.814 0 1.124l-1 1.005 2.47 2.478.98-.982c.31-.31.812-.31 1.12 0 .31.31.31.813 0 1.124zm1.59-1.91c-.202 0-.405-.078-.56-.233l-3.6-3.61c-.31-.31-.31-.813 0-1.124.31-.31.812-.31 1.122 0l3.6 3.61c.31.31.31.814 0 1.124-.156.155-.36.232-.562.232z">
                                                        </path>
                                                    </svg></button>
                                                <button @click="decrement1()" style="margin-left: 1.6rem;"><svg
                                                        aria-hidden="true" class="valign-middle " focusable="false"
                                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                                        style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                                        <path
                                                            d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75zm0-1.5c-5.11 0-9.25-4.14-9.25-9.25S6.89 2.75 12 2.75s9.25 4.14 9.25 9.25-4.14 9.25-9.25 9.25z">
                                                        </path>
                                                        <path
                                                            d="M7.58 12.75h9.266c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H7.58c-.414 0-.75.336-.75.75s.336.75.75.75z">
                                                        </path>
                                                    </svg></button>
                                                <button @click="increment1()" style="margin-left: 1.6rem;"><svg
                                                        aria-hidden="true" class="valign-middle " focusable="false"
                                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                                        style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                                        <path
                                                            d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75zm0-1.5c-5.11 0-9.25-4.14-9.25-9.25S6.89 2.75 12 2.75s9.25 4.14 9.25 9.25-4.14 9.25-9.25 9.25z">
                                                        </path>
                                                        <path
                                                            d="M11.214 11.25V7.366c0-.434.352-.786.786-.786.434 0 .786.352.786.786v3.884h3.86c.414 0 .75.336.75.75s-.336.75-.75.75h-3.86v3.882c0 .434-.352.786-.786.786-.434 0-.786-.352-.786-.786V12.75H7.38c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.834z">
                                                        </path>
                                                    </svg></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-column flex-nowrap overflow-hidden mb-4"
                        style="background-color: #fff; box-shadow: 0px 0px .5px 0px #00000024, 0px 1px 1px 0px #0000003d; border: none; border-radius: 12px;">
                        <div class="card-items">
                            <div class="flex flex-column p-5">
                                <div style="cursor: pointer;" class="flex text-left">
                                    <div class="position-relative h-100">
                                        <img style="border-radius: 50%; width: 104px; height: 104px; border: 0;"
                                            class=""
                                            src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg?impolicy=1by1_tight_288"
                                            alt="" role="presentation">
                                    </div>
                                    <div style="padding-left: 3.4rem;" class="w-100">
                                        <div class="flex justify-content-between align-items-baseline">
                                            <h3 style="line-height: 1.3; font-size: 2.4rem;" class="mb-3" tabindex="-1"
                                                data-e2e="heading">Cà Phê Americano</h3>
                                        </div>
                                        <div class="cart-item-options">
                                            <div class="pb-3">
                                                <div class="flex justify-content-between pt-1 align-items-stretch">
                                                    <p>Cỡ lớn</p>
                                                </div>
                                            </div>
                                            <div class="pb-3">
                                                <div class="flex justify-content-between pt-1 align-items-stretch">
                                                    <p>Số Lượng {{ quantity2 }}</p>
                                                </div>
                                            </div>
                                            <p class="pt-1">
                                                <span>150.000 đồng</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div style="min-width: 104px;"></div>
                                    <div style="padding-left: 3.4rem;" class="py-2">
                                        <div style="color: #00000094;">
                                            <div class="cart-items-icon">
                                                <button style="margin-right: 1.6rem;"><svg aria-hidden="true"
                                                        class="valign-middle " focusable="false"
                                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                                        style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                                        <path
                                                            d="M7.676 18.837l-2.472-2.48-2.015 2.023-.476 2.914 2.95-.44 2.012-2.017zm7.247-12.223l-8.597 8.62 2.472 2.478 8.596-8.62-2.47-2.478zm5.693 1.496l-1.504 1.508c-.012.014-.016.03-.03.044-.01.013-.028.016-.042.027l-9.647 9.674c-.012.014-.016.03-.028.042-.012.013-.03.016-.042.028L6.6 22.166c-.122.12-.277.2-.445.223l-4.048.602c-.04.006-.078.008-.117.008-.253 0-.476-.128-.623-.322-.26-.167-.41-.475-.356-.8l.655-4.007c.027-.164.105-.316.222-.432l12.475-12.51 1.563-1.567c.31-.31.81-.31 1.12 0 .31.31.31.814 0 1.124l-1 1.005 2.47 2.478.98-.982c.31-.31.812-.31 1.12 0 .31.31.31.813 0 1.124zm1.59-1.91c-.202 0-.405-.078-.56-.233l-3.6-3.61c-.31-.31-.31-.813 0-1.124.31-.31.812-.31 1.122 0l3.6 3.61c.31.31.31.814 0 1.124-.156.155-.36.232-.562.232z">
                                                        </path>
                                                    </svg></button>
                                                <button @click="decrement2()" style="margin-left: 1.6rem;"><svg
                                                        aria-hidden="true" class="valign-middle " focusable="false"
                                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                                        style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                                        <path
                                                            d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75zm0-1.5c-5.11 0-9.25-4.14-9.25-9.25S6.89 2.75 12 2.75s9.25 4.14 9.25 9.25-4.14 9.25-9.25 9.25z">
                                                        </path>
                                                        <path
                                                            d="M7.58 12.75h9.266c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H7.58c-.414 0-.75.336-.75.75s.336.75.75.75z">
                                                        </path>
                                                    </svg></button>
                                                <button @click="increment2()" style="margin-left: 1.6rem;"><svg
                                                        aria-hidden="true" class="valign-middle " focusable="false"
                                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                                        style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                                        <path
                                                            d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75zm0-1.5c-5.11 0-9.25-4.14-9.25-9.25S6.89 2.75 12 2.75s9.25 4.14 9.25 9.25-4.14 9.25-9.25 9.25z">
                                                        </path>
                                                        <path
                                                            d="M11.214 11.25V7.366c0-.434.352-.786.786-.786.434 0 .786.352.786.786v3.884h3.86c.414 0 .75.336.75.75s-.336.75-.75.75h-3.86v3.882c0 .434-.352.786-.786.786-.434 0-.786-.352-.786-.786V12.75H7.38c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.834z">
                                                        </path>
                                                    </svg></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </main>
    </div>
</template>

<script>
// import NewProduct from '@/components/ProductCart.vue';

export default {
    components: {
        // NewProduct
    },
    data() {
        return {
            isStore: false,
            isDrive: false,
            totalCount: 2,
            totalPrice: 350,
            priceId1: 200,
            priceId2: 150,
            quantity1: 1,
            quantity2: 1,
        }
    },
    computed: {

        // add comma to total price
        formattedTotalPrice() {
            return this.totalPrice.toLocaleString('vi-VN');
        },
    },
    methods: {
        buttonClicked(button) {
            if (button === 'store') {
                this.isStore = true;
                this.isDrive = false;
            } else if (button === 'drive') {
                this.isStore = false;
                this.isDrive = true;
            }
        },
        increment1() {
            this.quantity1++;
            this.totalCount++;
            this.totalPrice += this.priceId1;
        },
        increment2() {
            this.quantity2++;
            this.totalCount++;
            this.totalPrice += this.priceId2;
        },
        decrement1() {
            this.quantity1--;
            this.totalCount--;
            this.totalPrice -= this.priceId1;
        },
        decrement2() {
            this.quantity2--;
            this.totalCount--;
            this.totalPrice -= this.priceId2;
        }
    },
}
</script>

<style scoped>
.bg-color {
    background-color: #d4e9e2 !important;
    color: #1e3932 !important;
}
</style>

<style>
.btn_add-order:active {
    transform: translateY(2px);
}

.btn_add-order {
    background: #00754a;
    border-radius: 500px;
    box-shadow: 0 0 6px #0000003d, 0 8px 12px #00000024;
    font-size: 1.9rem;
    font-weight: 600;
    line-height: 1.2;
    overflow: hidden;
    padding: 18px 2.4rem;
    position: relative;
    border: none;
}

.btn_add-order a {
    color: #fff;
    text-decoration: none;
}

.card-items {
    margin-bottom: 2rem;
}

.cart-items-icon button {
    background: #0000;
    border: 0;
    border-radius: 0;
    padding: 0;
}

.content_right {
    margin-left: 40vw;
    min-height: 100vh;
}

.content_left-container {
    align-items: center;
    box-shadow: inset 0 -1.5px 0 #ffffff4d;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
    min-height: 2.4rem;
    min-width: 24rem;
    text-decoration: none;
}

.content_left {
    position: fixed;
    overflow: auto;
    top: 0;
    bottom: 0;
    width: 40vw;
    box-shadow: 0 1px 1px #0000003d, 0 4px 4px #0000001f;
    z-index: 1;
    background-color: #1e3932;
}

.content_right {
    margin-left: 40vw;
}

.cart_navigation {
    left: 3.2rem;
    top: calc(2.4rem + 4px);
}

.cart_navigation-back_menu {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.6rem;
    color: #fff;
    margin-left: 20px;
}
</style>
