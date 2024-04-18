<template>
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

    <div class="card">

        <TabView v-model:activeIndex="active">
            <TabPanel header="Hồ Sơ">
                <div class="content">
                    <div class="content_header">
                        <h1
                            style="color: #333; font-size: 2.8rem; font-weight: 700; line-height: 1.385; margin-bottom: .8rem; text-transform: capitalize;">
                            Hồ Sơ Của Tôi</h1>
                        <h2>Quản lý thông tin hồ sơ để bảo mật tài khoản</h2>
                    </div>
                    <div class="flex flex-row align-items-start content_header-sub">
                        <form style="width: auto;" class="mt-3 content_header-form">
                            <tr>
                                <td style="padding-bottom: 10px;">
                                    <label style="color: rgba(85, 85, 85, .8);">Tên đăng nhập</label>
                                </td>
                                <td style="padding-left: 20px; box-sizing: border-box; text-align: left;">
                                    <label>User1</label>
                                </td>
                            </tr>
                            <tr style="margin-top: 10px;">
                                <td style="padding-bottom: 10px;">
                                    <label style="color: rgba(85, 85, 85, .8);">Tên</label>
                                </td>
                                <td style="padding-left: 20px; box-sizing: border-box;">
                                    <InputText class="w-100" type="text" v-model="value" />
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 10px;">
                                    <label style="color: rgba(85, 85, 85, .8);">Email</label>
                                </td>
                                <td>
                                    <label
                                        style="padding-left: 20px; box-sizing: border-box; text-align: left;">th***********@gmail.com
                                        <a href="#">Thay đổi</a>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 10px;">
                                    <label style="color: rgba(85, 85, 85, .8);">Số điện thoại</label>
                                </td>
                                <td>
                                    <label
                                        style="padding-left: 20px; box-sizing: border-box; text-align: left;">*********71
                                        <a href="#">Thay đổi</a>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 10px;">
                                    <label style="color: rgba(85, 85, 85, .8);">Giới tính</label>
                                </td>
                                <td>
                                    <div style="padding-left: 20px; box-sizing: border-box; text-align: left;" class="flex flex-wrap gap-4">
                                        <div class="flex align-items-center">
                                            <input type="checkbox" v-model="checkbox1">
                                            <label style="margin-left: 10px;" for="ingredient1" class="ml-2">Nam</label>
                                        </div>
                                        <div class="flex align-items-center">
                                            <input type="checkbox" v-model="checkbox2" :disabled="checkbox1" >
                                            <label style="margin-left: 10px;" for="ingredient2" class="ml-2"> Nữ </label>
                                        </div>
                                        <div class="flex align-items-center">
                                            <input type="checkbox" v-model="checkbox3" :disabled="checkbox1">
                                            <label style="margin-left: 10px;" for="ingredient3" class="ml-2"> Khác </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 10px;">
                                    <label style="color: rgba(85, 85, 85, .8);">Ngày sinh</label>
                                </td>
                                <td  style="padding-left: 20px; box-sizing: border-box; text-align: left;" >
                                    <input type="datetime-local" id="date" v-model="datetime">
                                </td>
                            </tr>
                        </form>
                    </div>
                    <PrimeButton style="width: 100%; border-radius: 500px;" label="Lưu" class="mt-5 btn-save" />
                </div>
            </TabPanel>
            <TabPanel header="Đổi Mật Khẩu">
                <div class="content">
                    <div class="content_header">
                        <h1
                            style="color: #333; font-size: 2.8rem; font-weight: 700; line-height: 1.385; margin-bottom: .8rem; text-transform: capitalize;">
                            Đổi mật khẩu</h1>
                        <h2>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</h2>
                    </div>
                    <div class="flex flex-row align-items-start content_header-sub">
                        <form style="width: auto;" class="mt-3 content_header-form">
                            <tr>
                                <td style="padding-bottom: 10px;">
                                    <label style="color: rgba(85, 85, 85, .8);">Mật Khẩu Mới</label>
                                </td>
                                <td style="padding-left: 20px; box-sizing: border-box; text-align: left;">
                                    <input class="w-100" :type="passwordFieldType" />
                                    <PrimeButton @click="togglePasswordVisibility" style=" transform: translateY(-3px); background: #fff; border: 0; border-radius: 0; padding: 0;">
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
                                </td>
                            </tr>
                            <tr style="margin-top: 10px;">
                                <td style="padding-bottom: 10px;">
                                    <label style="color: rgba(85, 85, 85, .8);">Xác Nhận Mật Khẩu</label>
                                </td>
                                <td style="padding-left: 20px; box-sizing: border-box;">
                                    <input class="w-100" :type="passwordFieldType1" />
                                    <PrimeButton @click="togglePasswordVisibility1" style=" transform: translateY(-3px); background: #fff; border: 0; border-radius: 0; padding: 0;">
                                        <svg style="width: 25px; height: 25px;" v-if="passwordFieldType1 === 'password'"
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
                                </td>
                            </tr>
                            
                            
                        </form>
                    </div>
                    <PrimeButton style="width: 100%; border-radius: 500px;" label="Xác Nhận" class="mt-5 btn-save" />
                </div>
            </TabPanel>
            <TabPanel header="Theo Dõi Đơn Hàng">
                <div class="content_header">
                    <h1 style="color: #333; font-size: 2.8rem; font-weight: 700; line-height: 1.385; margin-bottom: .8rem; text-transform: capitalize;">
                            Đơn Mua</h1>
                    <h2>Các đơn hàng được đặt sẽ xuất hiện ở đây</h2>
                </div>
                <div style="margin-top: 12px; width: 100%; height: 310px;" class="account_order">
                    <div class="header_order flex p-4">
                        <h4 class="flex align-items-center"><i style="font-size: 20px; padding-right: 9px;" class="pi pi-bars"></i>Đơn số 1</h4>
                        <div class="header_order1 flex">
                            <h4 class="order_id flex align-items-center">Mã đơn hàng: 6615e272e</h4>
                            <h4 style="margin-left: 10px; color: red;" class="flex align-items-center ml-2"><i style="font-size: 20px; padding-right: 9px;" class="pi pi-calendar-plus"></i>Đơn hàng chưa thanh toán</h4>
                            <h4 style="margin-left: 10px; color: red;" class="flex align-items-center ml-2"><i style="font-size: 20px; padding-right: 9px;" class="pi pi-question-circle"></i>Đánh giá</h4>
                        </div>
                    </div>

                    <div class="header_content flex p-4">
                        <div class="img_order">
                            <img src="https://imgs.search.brave.com/LxP_phZ_iaKpxT5niS79bQWKdcbLkhYaUDNDeO6LC8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zaG9w/Lm1peGlnYW1pbmcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzA3L2MlRTEl/QkIlOTFjLWdpJUUx/JUJCJUFGLW5oaSVF/MSVCQiU4N3QtbWl4/aS1zY2FsZWQuanBn" alt="">
                        </div>
                        <div class="flex justify-content-between w-100">
                            <div style="margin-left: 10px;" class="img_sub">
                                <h3>test1</h3>
                                <h3>test1</h3>
                                <h3>test1</h3>
                            </div>
                            <div class="order_sale">
                                <h3 style="color: #bdbdbd; text-decoration: line-through; margin-right: 4px;" >đ5,000,000</h3>
                                <h3 style="color: #ee4d2d;">đ4,000,000</h3>
                            </div>
                        </div>
                        
                    </div>

                    <div class="oder_footer p-4">
                        <div class="order_money">
                            <h3 style="margin-right: 10px;">Thành tiền: </h3>    
                            <h1 style="color: #ee4d2d;">đ12,050,000</h1>
                        </div>
                        <div class="order_required">
                            <router-link to="/menu/cart">
                                <PrimeButton style="width: 150px;" label="Mua Lại"/>
                            </router-link>
                            <router-link to="/info">
                                <PrimeButton style="width: 150px; background-color: #fff; border: 1px solid rgba(0, 0, 0, 0.2); color: #333;" label="Liên Hệ Người Bán"/>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 12px; width: 100%; height: 310px;" class="account_order">
                    <div class="header_order flex p-4">
                        <h4 class="flex align-items-center"><i style="font-size: 20px; padding-right: 9px;" class="pi pi-bars"></i>Đơn số 2</h4>
                        <div class="header_order1 flex">
                            <h4 class="order_id flex align-items-center">Mã đơn hàng: 6615e272e</h4>
                            <h4 style="margin-left: 10px; color: red;" class="flex align-items-center ml-2"><i style="font-size: 20px; padding-right: 9px;" class="pi pi-calendar-plus"></i>Đơn hàng chưa thanh toán</h4>
                            <h4 style="margin-left: 10px; color: red;" class="flex align-items-center ml-2"><i style="font-size: 20px; padding-right: 9px;" class="pi pi-question-circle"></i>Đánh giá</h4>
                        </div>
                    </div>

                    <div class="header_content flex p-4">
                        <div class="img_order">
                            <img src="https://imgs.search.brave.com/LxP_phZ_iaKpxT5niS79bQWKdcbLkhYaUDNDeO6LC8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zaG9w/Lm1peGlnYW1pbmcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzA3L2MlRTEl/QkIlOTFjLWdpJUUx/JUJCJUFGLW5oaSVF/MSVCQiU4N3QtbWl4/aS1zY2FsZWQuanBn" alt="">
                        </div>
                        <div class="flex justify-content-between w-100">
                            <div style="margin-left: 10px;" class="img_sub">
                                <h3>test1</h3>
                                <h3>test1</h3>
                                <h3>test1</h3>
                            </div>
                            <div class="order_sale">
                                <h3 style="color: #bdbdbd; text-decoration: line-through; margin-right: 4px;" >đ5,000,000</h3>
                                <h3 style="color: #ee4d2d;">đ4,000,000</h3>
                            </div>
                        </div>
                        
                    </div>

                    <div class="oder_footer p-4">
                        <div class="order_money">
                            <h3 style="margin-right: 10px;">Thành tiền: </h3>    
                            <h1 style="color: #ee4d2d;">đ12,050,000</h1>
                        </div>
                        <div class="order_required">
                            <router-link to="/menu/cart">
                                <PrimeButton style="width: 150px;" label="Mua Lại"/>
                            </router-link>
                            <router-link to="/info">
                                <PrimeButton style="width: 150px; background-color: #fff; border: 1px solid rgba(0, 0, 0, 0.2); color: #333;" label="Liên Hệ Người Bán"/>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 12px; width: 100%; height: 310px;" class="account_order">
                    <div class="header_order flex p-4">
                        <h4 class="flex align-items-center"><i style="font-size: 20px; padding-right: 9px;" class="pi pi-bars"></i>Đơn số 3</h4>
                        <div class="header_order1 flex">
                            <h4 class="order_id flex align-items-center">Mã đơn hàng: 7712er9574</h4>
                            <h4 style="margin-left: 10px; color: gray;" class="flex align-items-center ml-2"><i style="font-size: 20px; padding-right: 9px;" class="pi pi-calendar-plus"></i>Đơn hàng đã thanh toán</h4>
                            <h4 style="margin-left: 10px; color: red;" class="flex align-items-center ml-2"><i style="font-size: 20px; padding-right: 9px;" class="pi pi-question-circle"></i>Đánh giá</h4>
                        </div>
                    </div>

                    <div class="header_content flex p-4">
                        <div class="img_order">
                            <img src="https://imgs.search.brave.com/LxP_phZ_iaKpxT5niS79bQWKdcbLkhYaUDNDeO6LC8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zaG9w/Lm1peGlnYW1pbmcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzA3L2MlRTEl/QkIlOTFjLWdpJUUx/JUJCJUFGLW5oaSVF/MSVCQiU4N3QtbWl4/aS1zY2FsZWQuanBn" alt="">
                        </div>
                        <div class="flex justify-content-between w-100">
                            <div style="margin-left: 10px;" class="img_sub">
                                <h3>test1</h3>
                                <h3>test1</h3>
                                <h3>test1</h3>
                            </div>
                            <div class="order_sale">
                                <h3 style="color: #bdbdbd; text-decoration: line-through; margin-right: 4px;" >đ5,000,000</h3>
                                <h3 style="color: #ee4d2d;">đ4,000,000</h3>
                            </div>
                        </div>
                        
                    </div>

                    <div class="oder_footer p-4">
                        <div class="order_money">
                            <h3 style="margin-right: 10px;">Thành tiền: </h3>    
                            <h1 style="color: #ee4d2d;">đ12,050,000</h1>
                        </div>
                        <div class="order_required">
                            <router-link to="/menu/cart">
                                <PrimeButton style="width: 150px;" label="Mua Lại"/>
                            </router-link>
                            <router-link to="/info">
                                <PrimeButton style="width: 150px; background-color: #fff; border: 1px solid rgba(0, 0, 0, 0.2); color: #333;" label="Liên Hệ Người Bán"/>
                            </router-link>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </div>


</template>

<style>
.order_money,
.order_required {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 20px;
}

.order_sale {
    display: flex;
}

.img_order {
    width: 110px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
}

.order_footer {
    border-bottom: .0625rem solid #efefef;
}

.header_content {
    border-bottom: .0625rem solid #efefef;

}

.header_order {
    justify-content: space-between;
    border-bottom: .0625rem solid #efefef;
;
}
.account_order {
    border: .0625rem solid #efefef;
}

.btn-save:active {
    transform: translateY(3px);
}

.content_header-form {
    white-space: nowrap;
}

.content_header {
    border-bottom: .0625rem solid #efefef;
    padding: 1.125rem 0;
}

.content {
    padding: 0 1.875rem .625rem;
}

.card {
    margin: 0 auto;
    width: 50%;
    padding: 1rem;
    margin-top: 4rem;
    text-decoration: none;
    box-shadow: 0 2px 4px #00000012, 0 4px 5px #0000000f, 0 1px 10px #0000001a;
}
</style>

<script>
export default {
    data() {
        return {
            passwordFieldType: 'password',
            visible: false,
            passwordFieldType1: 'password',
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            datetime: ''
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
        },
        togglePasswordVisibility1() {
            this.passwordFieldType1 = this.passwordFieldType1 === 'password' ? 'text' : 'password';
        }
    }
};
</script>