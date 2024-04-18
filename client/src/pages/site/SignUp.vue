<template>
    <!-- Header -->
    <div style="padding-left: 4rem; padding-right: 4rem; box-shadow: 0 1px 3px #0000001a, 0 2px 2px #0000000f, 0 0 2px #00000012;"
        class="header position-relative z-2">
        <div class="flex">
            <div style="height: 51px; width: 51px;" class="logo my-5">
                <router-link to="/">
                    <img style="height: 51px; width: 51px;"  src="https://th.bing.com/th/id/OIG3.FJQ2KS36RJXxBA24HYzS?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="">
                </router-link>
            </div>
        </div>
    </div>

    <!-- Main -->
    <main style="min-height: calc(100vh - 99px);" class=" position-relative z-1">
        <div style=" max-width: 500px; padding: 4.8rem 4.0rem;" class="mx-auto text-center">
            <h1
                style="box-sizing: border-box; font-weight: 700; font-size: 2.8rem; line-height: 1.385; margin-bottom: .8rem; padding-bottom: 4.8rem; line-height: 1.385;">
                Tạo 1 Tài Khoản</h1>
            <h2 style="color: #00000094; text-transform: uppercase; font-weight: 700; font-size: 1.4rem; letter-spacing: .1rem;"
                class="pb-3">Starbucks® Rewards</h2>
            <p
                style="color: #00000094; font-size: 1.4rem; padding-bottom: 4rem; padding-right: .8rem; padding-left: .8rem;">
                Tham gia Starbucks Rewards để tích lũy Ngôi Sao và đổi lấy đồ ăn, thức uống miễn phí, bất kể hình thức thanh toán nào. Bạn cũng sẽ được tận hưởng các ưu đãi khác như đặt hàng qua ứng dụng di động, quà tặng sinh nhật và nhiều hơn thế nữa.</p>
        </div>
        <div style="padding-left: 4.0rem; padding-right: 4.0rem; margin-bottom: 4.8rem; max-width: 500px; box-sizing: initial;"
            class="mx-auto">
            <div
                style="border-radius: 12px; box-shadow: 0 2px 4px #00000012, 0 4px 5px #0000000f, 0 1px 10px #0000001a;">
                <div style="padding: 3.2rem 4rem">
                    <form style="font-size: 1.6rem;">
                        <p>
                            <span style="color: #00754a; padding-left: 1.6rem;">* </span>
                            Yêu cầu nhập thông tin bắt buộc
                        </p>
                        <h2 style="font-weight: 600; font-size: 1.9rem; padding: 12px 15px;" class="mb-2">Thông tin cá nhân</h2>
                        <div style="padding: 12px 1.6rem" class="mt-3 mb-2 overflow-hidden position-relative z-0">
                            <div style="height: 25px; background-color: #fff; border-radius: 8px; box-shadow: 0 0 0 1px #0006; padding: 12px 16px;"
                                class="flex position-relative align-items-center">
                                <label
                                    style="padding-left: .4rem; padding-right: .4rem; transform: translateY(-50%); background-color: #fff; left: 12px;top: -6%; user-select: none; z-index: 2; font-size: 1.9rem; color: #000000de; cursor: text;"
                                    aria-hidden="false" for="username" class=" position-absolute opacity-100">
                                    <span style="color: #00754a;">*</span>
                                    Họ
                                </label>
                                <input style="height: 24.8px;" aria-describedby="" aria-invalid="false"
                                    aria-required="true" class="fieldInput" id="username" type="email" name="username"
                                    autocomplete="email" autocorrect="off" data-e2e="username" value="">
                            </div>
                        </div>
                        <div style="padding: 12px 1.6rem" class="mt-3 mb-2 overflow-hidden position-relative z-0">
                            <div style="height: 25px; background-color: #fff; border-radius: 8px; box-shadow: 0 0 0 1px #0006; padding: 12px 16px;"
                                class="flex position-relative align-items-center">
                                <label
                                    style="padding-left: .4rem; padding-right: .4rem; transform: translateY(-50%); background-color: #fff; left: 12px;top: -6%; user-select: none; z-index: 2; font-size: 1.9rem; color: #000000de; cursor: text;"
                                    aria-hidden="false" for="lastname" class="position-absolute opacity-100">
                                    <span style="color: #00754a;">*</span>
                                    Tên
                                </label>
                                <input style="height: 24.8px;" class="fieldInput" id="lastname" name="lastname"
                                    autocomplete="email" autocorrect="off" data-e2e="username" value="">

                            </div>
                        </div>
                        <h2 style="font-weight: 600; font-size: 1.9rem; padding: 12px 15px;" class="mb-2">Bảo Mật Tài Khoản</h2>
                        <div style="padding: 12px 1.6rem" class="mt-3 mb-2 overflow-hidden position-relative z-0">
                            <div style="height: 25px; background-color: #fff; border-radius: 8px; box-shadow: 0 0 0 1px #0006; padding: 12px 16px;"
                                class="flex position-relative align-items-center">
                                <label
                                    style="padding-left: .4rem; padding-right: .4rem; transform: translateY(-50%); background-color: #fff; left: 12px;top: -6%; user-select: none; z-index: 2; font-size: 1.9rem; color: #000000de; cursor: text;"
                                    aria-hidden="false" for="username" class=" position-absolute opacity-100">
                                    <span style="color: #00754a;">*</span>
                                    Địa Chỉ Email
                                </label>
                                <input style="height: 24.8px;" aria-describedby="" aria-invalid="false"
                                    aria-required="true" class="fieldInput" id="username" type="email" name="username"
                                    autocomplete="email" autocorrect="off" data-e2e="username" value="">
                            </div>
                            <p>Đây là tên tài khoàn đăng nhập của bạn.</p>
                        </div>
                        <div style="padding: 12px 1.6rem" class="mt-3 mb-2 overflow-hidden position-relative z-0">
                            <div style="height: 25px; background-color: #fff; border-radius: 8px; box-shadow: 0 0 0 1px #0006; padding: 12px 16px;"
                                class="flex position-relative align-items-center">
                                <label
                                    style="padding-left: .4rem; padding-right: .4rem; transform: translateY(-50%); background-color: #fff; left: 12px;top: -6%; user-select: none; z-index: 2; font-size: 1.9rem; color: #000000de; cursor: text;"
                                    aria-hidden="false" for="password" class=" position-absolute opacity-100">
                                    <span style="color: #00754a;">*</span>
                                    Mật Khẩu
                                </label>
                                <input style="height: 24.8px;" :type="passwordFieldType" class="fieldInput"
                                    id="password" name="password" autocomplete="email" autocorrect="off"
                                    data-e2e="username" value="">
                                <PrimeButton @click="togglePasswordVisibility"
                                    style="background: #fff; border: 0; border-radius: 0; padding: 0;">
                                    <svg style="width: 25px; height: 25px;" v-if="passwordFieldType === 'password'"
                                        aria-hidden="true" class="valign-middle " focusable="false"
                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path
                                            d="M22.7666,12.0294463 C22.0125135,11.2099699 19.8884152,9.08797941 17.0977677,7.6916 L14.4874682,10.3008467 C14.8397268,10.8049777 15.0348401,11.4019193 15.0348401,12.0294463 C15.0348401,13.7032032 13.6732656,15.0647786 11.9995099,15.0647786 C11.3719834,15.0647786 10.7760968,14.8696652 10.2709116,14.5174063 L7.9517,16.8366195 C9.33225842,17.3924292 10.6917235,17.6909 11.9995099,17.6909 C17.1779223,17.6909 21.6011935,13.295047 22.7666,12.0294463 M13.7217084,11.0676 L11.0376,13.7517084 C11.3297407,13.9151806 11.6556305,14.0101 11.9994495,14.0101 C13.0920767,14.0101 13.9801,13.1220767 13.9801,12.0294495 C13.9801,11.6856305 13.8851806,11.3597407 13.7217084,11.0676 M23.8781861,12.3658587 C23.6619796,12.6263607 18.5088818,18.7455213 11.9994836,18.7455213 C10.4238127,18.7455213 8.79224449,18.3647876 7.14591096,17.6423428 L4.60838471,20.1809191 C4.50502745,20.2832215 4.37003021,20.3349 4.23503297,20.3349 C4.10003573,20.3349 3.96503849,20.2832215 3.86273589,20.1809191 C3.65602137,19.9742049 3.65602137,19.6409311 3.86273589,19.4342169 L16.6336857,6.66329032 C16.6389591,6.658017 16.6442324,6.65274368 16.6495057,6.64852502 L19.142736,4.15424461 C19.3483959,3.94858513 19.682725,3.94858513 19.8883848,4.15424461 C20.0940447,4.36095876 20.0940447,4.69423259 19.8883848,4.89989207 L17.8876836,6.90164438 C21.4144865,8.75574373 23.7727195,11.5664233 23.8781861,11.692983 C24.0406046,11.8880959 24.0406046,12.1707458 23.8781861,12.3658587 M10.0378313,11.7562456 C10.1601725,10.8713937 10.8636339,10.1763789 11.7484978,10.0645859 C12.0374759,10.0287278 12.2420809,9.76506513 12.2062223,9.47609085 C12.1703637,9.18711657 11.9151348,8.98462364 11.6166647,9.01837246 C10.259311,9.18922587 9.18038879,10.2554777 8.99265844,11.6117584 C8.95258118,11.8996781 9.15507683,12.1665047 9.44300035,12.2055267 C9.46725764,12.2097453 9.4925696,12.2108 9.51577222,12.2108 C9.77521978,12.2108 10.0009181,12.0199082 10.0378313,11.7562456 M5.18633767,16.5424 C5.09036274,16.5424 4.99227847,16.5160333 4.90579556,16.4622452 C2.04025831,14.6598169 0.198805216,12.4587239 0.121814337,12.3659131 C-0.0406047789,12.1707994 -0.0406047789,11.8881483 0.121814337,11.6930346 C0.338021601,11.4325315 5.49008251,5.3144 11.9995032,5.3144 C12.9972206,5.3144 14.0244688,5.46099891 15.054881,5.75314206 C15.3364777,5.83224219 15.4988969,6.12333068 15.4197966,6.40387248 C15.3396417,6.68335961 15.0464436,6.84577855 14.7690655,6.76773308 C13.8314642,6.50301131 12.900191,6.36906842 11.9995032,6.36906842 C6.82107553,6.36906842 2.39884597,10.7638717 1.23238141,12.0294738 C1.85252712,12.703407 3.39234471,14.2643162 5.46687978,15.568941 C5.71367246,15.7239773 5.78749933,16.0498698 5.63246291,16.2956076 C5.5322693,16.4559172 5.36141282,16.5424 5.18633767,16.5424">
                                        </path>
                                    </svg>
                                    <svg style="width: 25px; height: 25px;" v-else aria-hidden="true"
                                        class="valign-middle " focusable="false" preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12.1288,9.9698 C10.9654659,9.9698 10.0194,10.9158659 10.0194,12.0792 C10.0194,13.2425341 10.9654659,14.1886 12.1288,14.1886 C13.2921341,14.1886 14.2382,13.2425341 14.2382,12.0792 C14.2382,10.9158659 13.2921341,9.9698 12.1288,9.9698 M12.1288,15.2433 C10.3843262,15.2433 8.9647,13.8236738 8.9647,12.0792 C8.9647,10.3347262 10.3843262,8.9151 12.1288,8.9151 C13.8732738,8.9151 15.2929,10.3347262 15.2929,12.0792 C15.2929,13.8236738 13.8732738,15.2433 12.1288,15.2433 M1.2137,12.1086953 C2.33484719,13.4091441 6.79306841,18.1648 11.9990726,18.1648 C17.2050769,18.1648 21.6643528,13.4091441 22.7855,12.10975 C21.6643528,10.8093012 17.2050769,6.0547 11.9990726,6.0547 C6.7856855,6.0547 2.33273778,10.8093012 1.2137,12.1086953 M11.9990771,19.2195 C5.48102086,19.2195 0.327748542,12.7109305 0.111534701,12.4335437 C-0.0371782336,12.2436972 -0.0371782336,11.9758028 0.111534701,11.7849016 C0.327748542,11.5075148 5.48102086,5 11.9990771,5 C18.5181881,5 23.6714604,11.5075148 23.8876743,11.7849016 C24.0374419,11.9758028 24.0374419,12.2436972 23.8876743,12.4335437 C23.6714604,12.7109305 18.5181881,19.2195 11.9990771,19.2195">
                                        </path>
                                    </svg>
                                </PrimeButton>
                            </div>
                            <p>Tạo một mật khẩu dài từ 8 đến 25 ký tự, bao gồm ít nhất 1 ký tự in hoa, 1 ký tự in thường, 1 ký tự số và 1 ký tự đặc biệt như dấu chấm than hoặc dấu sao.</p>
                        </div>
                        <div style="padding: 12px 1.6rem">
                            <h2 style=" letter-spacing: .1rem; font-weight: 700; font-size: 1.4rem; color: #00000094;"
                                class="mb-4 text-uppercase">
                                ĐIỀU KHOẢN SỬ DỤNG
                            </h2>
                        </div>
                        <div class="flex align-items-center mb-3">
                            <label for="">
                                <input aria-required="false" class="option__input" type="checkbox" id="rememberMe"
                                    name="rememberMe" value="" checked="">
                                <span style="padding-left: 1.6rem; padding-top: 20px" class="flex position-relative">
                                    <span
                                        style="width: 24px; height: 24px; border-radius: 25%; color: #0000; border: 1.5px solid #00754a; cursor: pointer; display: block; position: relative;"
                                        class="flex" v-on:click="toggleSvg">
                                        <span style="width: 24px; height: 24px;" class="block flex-shrink-0">
                                            <svg v-if="showSvg" aria-hidden="true"
                                                class="valign-middle block option__labelIcon" focusable="false"
                                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                                style="width: 24px; height: 24px; overflow: visible;">
                                                <path
                                                    d="M4.29 12.104c-.277-.308-.75-.332-1.06-.054-.306.278-.33.752-.053 1.06l4.485 4.963c.29.322.795.33 1.096.017L20.414 6.003c.288-.298.28-.773-.02-1.06-.297-.288-.772-.28-1.06.02L8.237 16.47 4.29 12.105z">
                                                </path>
                                            </svg>
                                        </span>
                                    </span>
                                    <span style="min-width: 0; padding-left: 10px; padding-top: 2px; cursor: pointer;"
                                        @click="toggleSvg">Tôi Đồng Ý Với
                                        <strong>Điều Khoản Starbucks® Rewards</strong>
                                        và
                                        <strong>Điều khoản Starbucks Card</strong>
                                       và đã đọc kỹ
                                        <strong>Điều khoản Starbucks Privacy</strong>.
                                    </span>
                                </span>
                            </label>
                        </div>
                        <div style="padding: 3.2rem 0 .8rem;" class="position-relative">
                            <div class="flex flex-column align-items-end">
                                <a class="btn_signin" href="#">Tạo Tài Khoản</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>




export default {
    data() {
        return {
            passwordFieldType: 'password',
            showSvg: false,
            showTooltip: false,
            showTooltip_forgetPassword: false
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
        },
        toggleSvg() {
            this.showSvg = !this.showSvg;
        },
        toggleTooltip() {
            this.showTooltip = !this.showTooltip;
        },
        toggle_forgetPassword() {
            this.showTooltip_forgetPassword = !this.showTooltip_forgetPassword;
        }

    }
}
</script>

<style>
.btn_signin {
    background: #00754a;
    border-radius: 500px;
    box-shadow: 0 0 6px #0000003d, 0 8px 12px #00000024;
    color: #fff;
    display: inline-block;
    font-size: 1.9rem;
    font-weight: 600;
    line-height: 1.2;
    padding: 18px 2.4rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    z-index: 1;
}

.btn_signin span {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    animation: animate 1s linear infinite;
}

.btn_signin:active {
    transform: translateY(4px);
    box-shadow: 0 0 6px #0000003d, 0 8px 12px #0000;
    position: relative;
    text-align: center;
    text-decoration: none;
    z-index: 1;
}

.btn_forget-password {
    min-width: 24px;
    min-height: 24px;
    text-decoration: none;
    font-weight: 700;
}

.btn_forget-password:hover {
    text-decoration: underline;
}

.btn_tooltip {
    border: 0;
    padding: 7px 16px;
    line-height: 1.2;
    color: green;
    transition: all .2s ease;
    background-color: transparent;
    border-radius: 50px;
    font-weight: 600;
    min-width: 35px;
    min-height: 35px;
}

.btn_tooltip:hover {
    background-color: #f5f5f5;
}

.btn_detail:hover {
    text-decoration: none;
}

.card_tooltip {
    box-shadow: none;
    filter: drop-shadow(0 8px 4px rgba(0, 0, 0, .12)) drop-shadow(0 0 2px rgba(0, 0, 0, .24));
    background-color: #fff;
    border-radius: 12px;
    color: #000000de;
    margin-bottom: .8rem;
    max-width: 400px;
    padding: 3.2rem 1.6rem;
    position: relative;
}

.card_tooltip::before {
    right: 27px;
    border-color: #fff #0000;
    border-style: solid;
    border-width: 15px 15px 0;
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    width: 0;
}

.tool_tip {
    bottom: 100%;
    right: 0;
    width: 400px;
    z-index: 2;
}

.tool_tip-forgetPassword {
    bottom: 100%;
    right: 0;
    width: 250px;
    z-index: 2;
}

.option__input {
    border: 0 !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
}

.fieldInput {
    appearance: none;
    background-color: initial;
    border: 0;
    border-radius: 0;
    color: #000000e6;
    display: block;
    line-height: 1rem;
    padding: 0;
    width: 100%;
    overflow: visible;
    outline: 0;
}
</style>