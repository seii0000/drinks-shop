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
                    <span  style="font-size: 1.9rem; color: #ffffffb3 !important;">
                        {{ calorieCount }} cal
                    </span>
                    
                    <span class="btn-info" style="margin-left: 3px;">
                        <PrimeButton style="border: 0; padding: 0; background-color: transparent;" label="Show"
                            @click="visible = true"><i class="pi pi-exclamation-circle"></i>
                        </PrimeButton>

                        <PrimeDialog v-model:visible="visible" maximizable modal header="Thông Tin Chi Tiết"
                            :style="{ width: 'auto', 'max-height': 'fit-content', 'font-size': '1.3rem' }"
                            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                            <p style="max-width: fit-content;" class="m-0">
                                Thông tin dinh dưỡng được tính toán dựa trên công thức tiêu chuẩn và không bao gồm các tùy chỉnh.
                            </p>
                        </PrimeDialog>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="header-container">
        <div class="position-relative">
            <div class="d-flex">
                <div style="margin-right: 88px; margin-left: 0; max-width: 420px;" class="flex-grow-1 py-3">
                    <div class="mx-auto w-100 position-relative">
                        <h2 style="font-weight: 600; font-size: 2.4rem; margin-bottom: 32px; padding: 0 8px 12px; position: relative;"
                            class="sub_heading">Tùy Chọn Kích Cỡ</h2>
                        <form style="margin-bottom: 32px;" class="grid align-items-center text-center" action="">
                            <fieldset style="text-align: center; border: 0; margin: 0; padding: 0;">
                                <div @click="selected = 'left'" class="grid-items-info my-2">
                                    <div v-if="selected === 'left'" style="transition: all .25s ease-in-out; background:  #d4e9e2; border: 2px solid #006241; border-radius: 50%; position: absolute; height: 56px; width: 56px; z-index: -1; top: -3px; margin-left: 8px;"></div>
                                    <label @click="changeBackgroundImage('left')">
                                        <div :style="{ backgroundImage: `url(${backgroundImage.left})`}" class="grid-items-info_background-left"></div>
                                        <p style="font-weight: 600; font-size: 1.6rem;" class="text-center">Thấp</p>
                                        <p style="font-size: 1.4rem;" class="text-center">12 fl oz</p>
                                    </label>
                                </div>
                                <div @click="selected = 'center'" class="grid-items-info my-2">
                                    <div v-if="selected === 'center'" style="transition: all .25s ease-in-out; background:  #d4e9e2; border: 2px solid #006241; border-radius: 50%; position: absolute; height: 56px; width: 56px; z-index: -1; top: -3px; margin-left: 8px;"></div>
                                    <label  @click="changeBackgroundImage('center')">
                                        <div :style="{ backgroundImage: `url(${backgroundImage.center})`}" class="grid-items-info_background-center"></div>
                                        <p style="font-weight: 600; font-size: 1.6rem;" class="text-center">Vừa</p>
                                        <p style="font-size: 1.4rem;" class="text-center">16 fl oz</p>
                                    </label>
                                </div>
                                <div @click="selected = 'right'" class="grid-items-info my-2">
                                    <div v-if="selected === 'right'" style="transition: all .25s ease-in-out; background:  #d4e9e2; border: 2px solid #006241; border-radius: 50%; position: absolute; height: 56px; width: 56px; z-index: -1; top: -3px; margin-left: 8px;"></div>
                                    <label @click="changeBackgroundImage('right')">
                                        <div :style="{ backgroundImage: `url(${backgroundImage.right})`}" class="grid-items-info_background-right"></div>
                                        <p style="font-weight: 600; font-size: 1.6rem;" class="text-center">Cao</p>
                                        <p style="font-size: 1.4rem;" class="text-center">24 fl oz</p>
                                    </label>
                                </div>
                            </fieldset>
                        </form>
                        <div style="padding-bottom: 3.2rem; font-size: 1.6rem" class="flex align-items-center">
                            <svg aria-hidden="true" class="valign-middle color-black mr2" focusable="false"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;">
                                <path
                                    d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z">
                                </path>
                                <path
                                    d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z">
                                </path>
                            </svg>
                            Có sẵn tại cửa hàng Timnath - I25 and E. Harmony R
                        </div>
                    </div>
                </div>
                <div style="margin-right: 0; margin-left: 88px; max-width: 420px;" class="flex-grow-1 py-3">
                    <div class="mx-auto w-100 position-relative">
                        <h2 style="font-weight: 600; font-size: 2.4rem; margin-bottom: 32px; padding: 0 8px 12px; position: relative;"
                            class="sub_heading">Thành Phần Bao Gồm</h2>
                        <div style="margin-left: -8px;" class="pb-2">
                            <div style="padding: 12px 1.6rem; position: relative; z-index: 0; display: block; padding-right: .8rem; padding-left: .8rem; margin-right: calc(.8rem* -1); margin-left: calc(.8rem* - 1); width: 436px; height: 72px;"
                                class="overflow-hidden">
                                <div style="background-color: #fff; border-radius: 8px; box-shadow: 0 0 0 1px #0006; padding: 12px 16px; position: relative; height: 48px;"
                                    class="flex align-items-center">
                                    <label class="float-label" @click="toggleLabelColor">Milk</label>
                                    <select class="select_input" v-model="selectedItem">
                                        <option v-for="(item, index) in items" :key="index">{{ item }}</option>
                                    </select>
                                    <span style="font-weight: 400;" aria-hidden="true"
                                        class="flex justify-content-between position-relative align-self-center w-100">
                                        <span style="transition-delay: 100ms; font-size: 1.8rem;">Extra Oleato Golden
                                            Foam™</span>
                                        <svg aria-hidden="true" class="icon-input" focusable="false" viewBox="0 0 24 24"
                                            style="width: 24px; height: 24px; overflow: visible; fill: currentcolor; transition-delay: 100ms;">
                                            <path
                                                d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11.4135 16.2678L6.2265 10.9388C5.9245 10.6288 5.9245 10.1268 6.2265 9.81675C6.5275 9.50675 7.0165 9.50675 7.31851 9.81675L11.9595 14.5848L16.6825 9.73175C16.9835 9.42275 17.4725 9.42275 17.7745 9.73175C18.0756 10.0418 18.0756 10.5438 17.7745 10.8538L12.5055 16.2678C12.3605 16.4158 12.1645 16.4998 11.9595 16.4998C11.7545 16.4998 11.5585 16.4158 11.4135 16.2678Z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div style="margin-left: -8px;" class="pb-2">
                            <div style="padding: 12px 1.6rem; position: relative; z-index: 0; display: block; padding-right: .8rem; padding-left: .8rem; margin-right: calc(.8rem* -1); margin-left: calc(.8rem* - 1); width: 436px; height: 72px;"
                                class="overflow-hidden">
                                <div style="background-color: #fff; border-radius: 8px; box-shadow: 0 0 0 1px #0006; padding: 12px 16px; position: relative; height: 48px;"
                                    class="flex align-items-center">
                                    <label class="float-label" @click="toggleLabelColor">Milk</label>
                                    <select class="select_input" v-model="selectedItem">
                                        <option v-for="(item, index) in items" :key="index">{{ item }}</option>
                                    </select>
                                    <span style="font-weight: 400;" aria-hidden="true"
                                        class="flex justify-content-between position-relative align-self-center w-100">
                                        <span style="transition-delay: 100ms; font-size: 1.8rem;">Extra Oleato Golden
                                            Foam™</span>
                                        <svg aria-hidden="true" class="icon-input" focusable="false" viewBox="0 0 24 24"
                                            style="width: 24px; height: 24px; overflow: visible; fill: currentcolor; transition-delay: 100ms;">
                                            <path
                                                d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11.4135 16.2678L6.2265 10.9388C5.9245 10.6288 5.9245 10.1268 6.2265 9.81675C6.5275 9.50675 7.0165 9.50675 7.31851 9.81675L11.9595 14.5848L16.6825 9.73175C16.9835 9.42275 17.4725 9.42275 17.7745 9.73175C18.0756 10.0418 18.0756 10.5438 17.7745 10.8538L12.5055 16.2678C12.3605 16.4158 12.1645 16.4998 11.9595 16.4998C11.7545 16.4998 11.5585 16.4158 11.4135 16.2678Z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div style="margin-left: -8px;" class="pb-2">
                            <div style="padding: 12px 1.6rem; position: relative; z-index: 0; display: block; padding-right: .8rem; padding-left: .8rem; margin-right: calc(.8rem* -1); margin-left: calc(.8rem* - 1); width: 436px; height: 72px;"
                                class="overflow-hidden">
                                <div style="background-color: #fff; border-radius: 8px; box-shadow: 0 0 0 1px #0006; padding: 12px 16px; position: relative; height: 48px;"
                                    class="flex align-items-center">
                                    <label class="float-label" @click="toggleLabelColor">Milk</label>
                                    <select class="select_input" v-model="selectedItem">
                                        <option v-for="(item, index) in items" :key="index">{{ item }}</option>
                                    </select>
                                    <span style="font-weight: 400;" aria-hidden="true"
                                        class="flex justify-content-between position-relative align-self-center w-100">
                                        <span style="transition-delay: 100ms; font-size: 1.8rem;">Extra Oleato Golden
                                            Foam™</span>
                                        <svg aria-hidden="true" class="icon-input" focusable="false" viewBox="0 0 24 24"
                                            style="width: 24px; height: 24px; overflow: visible; fill: currentcolor; transition-delay: 100ms;">
                                            <path
                                                d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11.4135 16.2678L6.2265 10.9388C5.9245 10.6288 5.9245 10.1268 6.2265 9.81675C6.5275 9.50675 7.0165 9.50675 7.31851 9.81675L11.9595 14.5848L16.6825 9.73175C16.9835 9.42275 17.4725 9.42275 17.7745 9.73175C18.0756 10.0418 18.0756 10.5438 17.7745 10.8538L12.5055 16.2678C12.3605 16.4158 12.1645 16.4998 11.9595 16.4998C11.7545 16.4998 11.5585 16.4158 11.4135 16.2678Z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div style="margin-left: -8px;" class="pb-2">
                            <div style="padding: 12px 1.6rem; position: relative; z-index: 0; display: block; padding-right: .8rem; padding-left: .8rem; margin-right: calc(.8rem* -1); margin-left: calc(.8rem* - 1); width: 436px; height: 72px;"
                                class="overflow-hidden">
                                <div style="background-color: #fff; border-radius: 8px; box-shadow: 0 0 0 1px #0006; padding: 12px 16px; position: relative; height: 48px;"
                                    class="flex align-items-center">
                                    <label class="float-label">Milk</label>
                                    <select class="select_input" @click="toggleSelectColor" v-model="selectedItem">
                                        <option v-for="(item, index) in items" :key="index">{{ item }}</option>
                                    </select>
                                    <span style="font-weight: 400;" aria-hidden="true"
                                        class="flex justify-content-between position-relative align-self-center w-100">
                                        <span style="transition-delay: 100ms; font-size: 1.8rem;">Extra Oleato Golden
                                            Foam™</span>
                                        <svg aria-hidden="true" class="icon-input" focusable="false" viewBox="0 0 24 24"
                                            style="width: 24px; height: 24px; overflow: visible; fill: currentcolor; transition-delay: 100ms;">
                                            <path
                                                d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11.4135 16.2678L6.2265 10.9388C5.9245 10.6288 5.9245 10.1268 6.2265 9.81675C6.5275 9.50675 7.0165 9.50675 7.31851 9.81675L11.9595 14.5848L16.6825 9.73175C16.9835 9.42275 17.4725 9.42275 17.7745 9.73175C18.0756 10.0418 18.0756 10.5438 17.7745 10.8538L12.5055 16.2678C12.3605 16.4158 12.1645 16.4998 11.9595 16.4998C11.7545 16.4998 11.5585 16.4158 11.4135 16.2678Z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div style="margin-left: -8px;" class="pb-2">
                            <div style="padding: 12px 1.6rem; position: relative; z-index: 0; display: block; padding-right: .8rem; padding-left: .8rem; margin-right: calc(.8rem* -1); margin-left: calc(.8rem* - 1); width: 436px; height: 72px;"
                                class="overflow-hidden">
                                <PrimeButton
                                    style="font-size: 1.6rem; background-color: transparent; color: #1f3933; border-radius: 20px; padding: 5px 20px; font-weight: bolder;">
                                    Thiết lập lại hương liệu</PrimeButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="bottom: 94px; right: 0; padding: 3.2rem 4.0rem;" class="z-1 position-fixed">
                <div class="flex flex-column align-items-end">
                    <button class="btn_add-order">
                        <router-link to="/menu/cart">Thêm Vào Giỏ Hàng</router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div style="background-color: #1f3933; padding-bottom: 32px;" class="header-container">
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
                        <p style="font-size: 1.4rem; color: #ffffffb3;">Trà đen được ủ với quế, đinh hương và các loại gia vị ấm nóng khác, kết hợp với sữa và đá lạnh để tạo nên sự cân bằng hoàn hảo giữa ngọt ngào và cay nhẹ. Bên trên được phủ lớp bọt lạnh béo ngậy, làm từ dầu ô liu nguyên chất Partanna® hảo hạng được ủ lạnh.</p>
                        <div class="flex align-items-center pt-3 text-white">
                            <span style="font-size: 1.4rem; font-weight: 600;">430 calo, 42g đường, 27g chất béo</span>
                            <!-- <span class="btn-info" style="margin-left: 3px;">
                                <PrimeButton style="border: 0; padding: 0; background-color: transparent;" label="Show"
                                    @click="visible = true"><i class="pi pi-exclamation-circle"></i>
                                </PrimeButton>

                                <PrimeDialog v-model:visible="visible" maximizable modal header="Information"
                                    :style="{ width: 'auto', 'max-height': 'fit-content', 'font-size': '1.3rem' }"
                                    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                                    <p style="max-width: fit-content;" class="m-0">
                                        Information is based on standard recipes and does not reflect customizations
                                    </p>
                                </PrimeDialog>
                            </span> -->
                        </div>
                        <router-link to="/menu/product/:id/hot/nutrition" class="sub-button">Danh sách thành phần và dinh dưỡng</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-container">
        <div class="position-relative">
            <div class="d-flex">
                <div style="margin-right: 88px; margin-left: 0; max-width: 1020px;" class="flex-grow-1 py-3">
                    <div class="mx-auto w-100 position-relative">
                        <h2 style="font-weight: 600; font-size: 2.4rem; margin-bottom: 32px; padding: 0 8px 12px; position: relative;"
                            class="sub_heading">Bình Luận Sản Phẩm</h2>
                        <form style="margin-bottom: 32px;" class="grid align-items-center text-center" action="">
                            <fieldset style="text-align: center; border: 0; margin: 0; padding: 0;">
                                <div class="flex mb-5">
                                    <div class="user-avatar">
                                        <PrimeAvatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                                    </div>
                                    <div style="padding-left: 20px; text-align: left;" class="user-description">
                                        <h2>Alexandra</h2>
                                        <PrimeRating v-model="value" readonly :cancel="false" />
                                        <p>2024-10-27 11:11</p>
                                        <h1>Sản phẩm chất lượng không bị hư hại, giao nhanh, cảm giác tốt như sản phẩm mua tại siêu thị 💯💯💯.</h1>
                                        <img src="https://caphekhoanbetong.com/wp-content/uploads/2021/08/bac-xiu-ca-phe-da-giao-hang-online-10.jpg" alt="">
                                    </div>
                                </div>

                                <div class="flex mb-5">
                                    <div class="user-avatar">
                                        <PrimeAvatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                                    </div>
                                    <div style="padding-left: 20px; text-align: left;" class="user-description">
                                        <h2>Alexandra</h2>
                                        <PrimeRating v-model="value" readonly :cancel="false" />
                                        <p>2024-10-27 11:11</p>
                                        <h1>Sản phẩm chất lượng không bị hư hại, giao nhanh, cảm giác tốt như sản phẩm mua tại siêu thị 💯💯💯.</h1>
                                        <img src="https://caphekhoanbetong.com/wp-content/uploads/2021/08/bac-xiu-ca-phe-da-giao-hang-online-10.jpg" alt="">
                                    </div>
                                </div>
                                
                                <div class="flex mb-5">
                                    <div class="user-avatar">
                                        <PrimeAvatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                                    </div>
                                    <div style="padding-left: 20px; text-align: left;" class="user-description">
                                        <h2>Alexandra</h2>
                                        <PrimeRating v-model="value" readonly :cancel="false" />
                                        <p>2024-10-27 11:11</p>
                                        <h1>Sản phẩm chất lượng không bị hư hại, giao nhanh, cảm giác tốt như sản phẩm mua tại siêu thị 💯💯💯.</h1>
                                        <img src="https://caphekhoanbetong.com/wp-content/uploads/2021/08/bac-xiu-ca-phe-da-giao-hang-online-10.jpg" alt="">
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        
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
            value: 4,
            visible: false,
            selectedItem: null,
            items: ['Item 1', 'Item 2', 'Item 3'],
            backgroundImage: {
                left: 'https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg',
                center: 'https://www.starbucks.com/app-assets/2920fb2a8c34d3ddb95ad262872526e9.svg',
                right: 'https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg'
            },
            defaultBackgroundImage: {
                left: 'https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg',
                center: 'https://www.starbucks.com/app-assets/2920fb2a8c34d3ddb95ad262872526e9.svg',
                right: 'https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg'
            },
            newBackgroundImage: {
                left: 'https://www.starbucks.com/app-assets/c6d5ff0dfccfc8966d3ad8ab2331921f.svg',
                center: 'https://www.starbucks.com/app-assets/2362af789511c4dbe2446445dcc324f8.svg',
                right: 'https://www.starbucks.com/app-assets/04342268ae304f7757dddb04a8e43b74.svg'
            },
            selected: null,

            calorieCounts: {
                left: 430,
                center: 500,
                right: 600
            },
            // calorieCount: 430
        };
    },
    computed: {
        calorieCount(){
            return this.calorieCounts[this.selected] || 430;
        }
    },
    methods: {
        changeBackgroundImage(position) {
      // Reset all background images to the default
            this.backgroundImage = { ...this.defaultBackgroundImage };

      // Change the background image of the clicked div
            this.backgroundImage[position] = this.newBackgroundImage[position];
        },
        toggleLabelColor() {
            const label = document.querySelector('.float-label');
            label.classList.toggle('float-label--isFocused');
        },
        toggleSelectColor() {
            const select = document.querySelector('.select_input');
            select.classList.toggle('select_input--isFocused');

        }
    }
};
</script>

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

.sub-button  {
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