(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 justify-content-between\" [ngClass]=\"{'header': !navFixed,'header-sticky':navFixed}\">\n    <div class=\"ml-md-5 ml-sm-3 ml-1 my-auto\">\n        <img src=\"assets/imgs/logo.png\" height=\"60px\" style=\"cursor: pointer;\" [routerLink]=\"['/home']\" >\n    </div>\n    <div id=\"dat09navbar\" class=\"my-auto\" [ngClass]=\"{'open': expand}\" *ngIf=\"expand\">\n        <!-- <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\"> -->\n        <div class=\"btn-group-lg mr-2\" role=\"group\" aria-label=\"First group\">\n            <button type=\"button\" class=\"btn btn-link\" [routerLink]=\"['/intro']\" >Giới thiệu </button>\n            <button type=\"button\" class=\"btn btn-link\" [routerLink]=\"['/products']\">Sản phẩm</button>\n            <button type=\"button\" class=\"btn btn-link\" [routerLink]=\"['/post']\">Tin tức</button>\n            <button type=\"button\" class=\"btn btn-link\" [routerLink]=\"['/recruit']\">Tuyển dụng</button>\n            <button type=\"button\" class=\"btn btn-link\" [routerLink]=\"['/contact']\">Liên hệ</button>\n        </div>\n        <!-- </div> -->\n    </div>\n    <div class=\"mr-md-5 mr-sm-3 mr-1 my-auto\">\n        <div id=\"nav-icon1\" [ngClass]=\"{'open': expand}\" (click)=\"expand=!expand\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n<div class=\"fb-customerchat\"\n     page_id=\"963096820403454\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"assets/imgs/image.jpg\" width=\"100%\" style=\"height:40vh\" alt=\"\">\n</div>\n<div class=\"col-12 col-md-10 col-lg-8 col-xl-8 mx-auto mt-5 text-center\">\n    <div class=\"row col-12 p-0\">\n        <div class=\"col-12 col-md-6\">\n            <h2>LIÊN HỆ NGAY VỚI CHÚNG TÔI</h2>\n            <form>\n                <div class=\"form-group row\">\n                    <div class=\"col-12\">\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\">\n                                    <i class=\"fa fa-user\"></i>\n                                </div>\n                            </div>\n                            <input id=\"text\" name=\"text\" type=\"text\" class=\"form-control\" placeholder=\"Họ và tên\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-12\">\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                </div>\n                            </div>\n                            <input id=\"\" name=\"\" type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-12\">\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\">\n                                    <i class=\"fa fa-link\"></i>\n                                </div>\n                            </div>\n                            <input id=\"\" name=\"\" type=\"text\" class=\"form-control\" placeholder=\"Website\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row justify-content-center\">\n                    <button name=\"submit\" type=\"submit\" class=\"btn btn-primary\">Gửi HamonyES</button>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-12 col-md-6 text-left\">\n            <div class=\"col-12 text-center\">\n                <h2>HARMONYES</h2>\n            </div>\n            <div class=\"col-12\">\n                <i class=\"fas fa-map-marker-alt\"></i>&nbsp;&nbsp;<span><strong>Địa chỉ:</strong>&nbsp;&nbsp;Tầng 1, Tòa\n                    nhà\n                    Technosoft, Đường Duy Tân, P.Dịch Vọng Hậu, Q.Cầu Giấy, Hà Nội.</span>\n            </div>\n            <div class=\"col-12\">\n                <i class=\"fas fa-phone\"></i>&nbsp;&nbsp;<span><strong>Số điện thoại:</strong>&nbsp;&nbsp;(+84) 024.35563\n                    482</span>\n            </div>\n            <div class=\"col-12\">\n                <i class=\"fas fa-envelope\"></i>&nbsp;&nbsp;<span><strong>Email:</strong>&nbsp;&nbsp;info@harmonyes.com.vn</span>\n            </div>\n            <div class=\"col-12\">\n                <i class=\"fas fa-globe\"></i>&nbsp;&nbsp;<span><strong>Website:</strong>&nbsp;&nbsp;harmonyes.com.vn</span>\n            </div>\n        </div>\n    </div>\n    <iframe\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0593335178305!2d105.78045591533213!3d21.030311793100253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cb43bddb7%3A0x3759fd5b5ee902e7!2zVGVjaG5vc29mdCBCdWlsZGluZywgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1579062874964!5m2!1sen!2s\"\n        width=\"100%\" height=\"400px\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-6 col-lg-3\">\n                <div class=\"bottom\">\n                    <img src=\"assets/imgs/logo.png\" alt=\"\" class=\"img-fluid\">\n                    <hr style=\"background-color: white;\">\n                    <h4>Đăng ký nhận thư</h4>\n                    <small>Bạn sẽ được nhân những tin tức cập nhật và những ưu đãi từ chúng tôi.</small>\n                    <form action=\"#\" method=\"GET\">\n                        <input type=\"search\" name=\"search\" placeholder=\"E-mail\">\n                        <button type=\"submit\">Đăng ký</button>\n                    </form>\n                    <div class=\"icon\">\n                        <a href=\"#\">\n                            <i class=\"fab fa-facebook-f\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"fab fa-youtube\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"fab fa-google-plus-g\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-lg-3\">\n                <div class=\"bottom\">\n                    <h4>Bài viết mới nhất</h4>\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                <small><i class=\"fas fa-angle-double-right mr-1\"></i>\n                                    Đào tạo và trang bị phần mềm ứng dụng BIM trong quản lý dự án Vân Đồn</small>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                <small><i class=\"fas fa-angle-double-right mr-1\"></i>\n                                    Đào tạo và trang bị phần mềm ứng dụng BIM trong quản lý dự án Vân Đồn</small>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"bottom\">\n                    <h4>Thông tin tuyển dụng</h4>\n                    <ul>\n                        <li>\n                            <a [routerLink]=\"['/recitem',1]\">\n                                <small><i class=\"fas fa-angle-double-right mr-1\"></i>\n                                    Tuyển dụng - TESTER</small>\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/recitem',3]\">\n                                <small><i class=\"fas fa-angle-double-right mr-1\"></i>\n                                    Tuyển dụng FRONT-END (có cơ hội onsite trong và ngoài nước)</small>\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/recitem',2]\" >\n                                <small><i class=\"fas fa-angle-double-right mr-1\"></i>\n                                    Tuyển dụng lập trình viên C#.NET (có cơ hội onsite trong và ngoài nước)</small>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-lg-3\">\n                <div class=\"bottom\">\n                    <h4>Danh mục khác</h4>\n                    <nav>\n                        <ul>\n                            <li>\n                                <a href=\"#\">\n                                    <p><i class=\"fas fa-angle-double-right mr-1\"></i>\n                                        Trang chủ</p>\n                                </a>\n                            </li>\n                            <li>\n                                <a [routerLink]=\"['/product']\" >\n                                    <p><i class=\"fas fa-angle-double-right mr-1\"></i>\n                                        Sản phẩm</p>\n                                </a>\n                            </li>\n                            <li>\n                                <a [routerLink]=\"['/post']\">\n                                    <p><i class=\"fas fa-angle-double-right mr-1\"></i>\n                                        Tin tức</p>\n                                </a>\n                            </li>\n                            <li>\n                                <a [routerLink]=\"['/recruit']\">\n                                    <p><i class=\"fas fa-angle-double-right mr-1\"></i>\n                                        Tuyển dụng</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-lg-3 contact\">\n                <div class=\"bottom\">\n                    <h4 class=\"mb-3\">Liên hệ</h4>\n                    <p><i class=\"fas fa-phone-square-alt\"></i>(+84) 024.35563 482</p>\n                    <a href=\"#\">\n                        <p><i class=\"fas fa-envelope\"></i>info@harmonyes.com.vn</p>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> <!-- end footer -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 p-0\">\n    <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n        <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide\">\n            <!-- <img src=\"{{ slide }}\" alt=\"\" width=\"100%\"> -->\n            <!-- {{slide}} -->\n            <div class=\"fullscreen\" [ngStyle]=\"{'background': '#fff url(' + slide.img + ') no-repeat 0 0'}\">\n                <div class=\"fullscreen dim row m-0 d-flex flex-column justify-content-center\">\n                    <div class=\"col-12 col-md-8 col-lg-8 col-xl-8 mx-auto text-center d-flex flex-column justify-content-center \"\n                        style=\"color: #00FFFF; font-family:'Courier New', Courier, monospace;\" (click)=\"link(slide.link)\">\n                        <h1 style=\"font-size:4vw\">{{slide.h1}}<span style=\"font-size: 2vw;\">{{slide.h4}}</span></h1>\n                        <h5 style=\"font-size:1.5vw\">{{slide.h3}}</h5>\n                        <div class=\"row\">\n                            <div class=\"col-12 col-md-6 p-md-0 p-sm-5 float h-glow image\" >\n                                <img src=\"{{slide.icon}}\" width=\"100%\">\n                            </div>\n                            <div class=\"col-12 col-md-6 text-md-left text-sm-center\">\n                                <div *ngFor=\"let func of slide.listh5\">\n                                    <p style=\"font-size:1.3vw\">{{func}}</p>\n                                </div>                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div ngxSlickItem class=\"slide\">\n            <div class=\"fullscreen\" [ngStyle]=\"{'background': '#fff url(' + slogan.img + ') no-repeat 0 0'}\">\n                <div class=\"fullscreen dim row m-0 d-flex flex-column justify-content-center\">\n                    <div class=\"col-12 mx-auto text-white flyout text-center d-flex flex-column justify-content-center\"\n                        style=\"color: #00FFFF;font-family: 'Courier New', Courier, monospace;\">\n                        <div style=\"color: #00FFFF;\">\n                            <h1 style=\"font-size:3vw; font-style: italic;\">\n                                {{slogan.h1}}\n                            </h1>\n                        </div>\n                        <div class=\"text-right\" style=\"color: #00FFFF;\">\n                            <h5 style=\"font-size: 1.5vw;\">{{slogan.author}}<span\n                                    style=\"font-size: 1vw;\">{{slogan.position}}</span></h5>\n                        </div>\n                        <div class=\"text-center\" style=\"color: #00FFFF;\">\n                            <h6 style=\"font-size: 1.3vw;\">Contact us:</h6>\n                            <h6 style=\"font-size: 1vw;\">{{slogan.address}}</h6>\n                            <h6 style=\"font-size: 1vw;\">{{slogan.phone}}</h6>\n                            <h6 style=\"font-size: 1vw;\">{{slogan.email}}</h6>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ngx-slick-carousel>\n</div>\n<div class=\"col-12 p-0 duanbg\">\n    <div class=\"col-12 p-0 text-white text-center\">\n        <div class=\"col-12 col-md-10 col-lg-8 col-xl-8 p-md-5 p-sm-0 mx-auto gradim\" style=\"color: #00FFFF;\">\n            <h2>Dự án tiêu biểu</h2>\n            <div class=\"row m-0 mt-5\" *ngFor=\"let doitac of doitacs, let i = index\" >\n                <div class=\"row m-0 col-12 itemduan p-0\" [ngClass]=\"{'itemduanreverse': (i+1)%2===0}\">\n                    <div class=\"col-12 col-md-5 col-lg-5 col-xl-5 p-3\">\n                        <ngb-carousel [showNavigationArrows]=\"true\" [showNavigationIndicators]=\"false\">\n                            <ng-template ngbSlide *ngFor=\"let image of doitac.images\">\n                              <div>\n                                <img [src]=\"image\" alt=\"Random slide\" width=\"100%\" height=\"300px\">\n                              </div>\n                            </ng-template>\n                          </ngb-carousel>\n                    </div>\n                    <div class=\"col-12 col-md-7 col-lg-7 col-xl-7 p-3\" style=\"color: white;\">\n                        <h5>{{doitac.tenduan}}</h5>\n                        <h6>{{doitac.doitac}}</h6>\n                        <p class=\"text-left\" style=\"white-space: pre-line\">{{doitac.content}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"col-12 p-0 recuit\">\n    <div class=\"col-12 p-0 dim text-white text-center\">\n        <div class=\"col-12 col-md-10 col-lg-8 col-xl-8 p-5 mx-auto\" style=\"color: #00FFFF;\">\n            <h2>Tin tuyển dụng</h2>\n            <div class=\"row mt-5\">\n                <div class=\"col-12 col-md-4 col-lg-4 mb-3\" style=\"cursor: pointer;\" *ngFor=\"let tin of tuyendung\" [routerLink]=\"['/recitem',tin.id]\" >\n                    <img [src]=\"tin.image\" width=\"100%\" height=\"250px\">\n                    <div class=\"mt-3 p-3\" style=\"color: rgba(24, 24, 83, 1); background-color: white;\">\n                        <h5>{{tin.title.toUpperCase()}}</h5>\n                        <div class=\"row text-left m-0\">\n                            <div class=\"col-6\">Hình thức</div>\n                            <div class=\"col-6 font-weight-bold\">Full time</div>\n                        </div>\n                        <div class=\"row text-left m-0\">\n                            <div class=\"col-6\">Mức lương</div>\n                            <div class=\"col-6 font-weight-bold\">{{tin.payment}}</div>\n                        </div>\n                        <div class=\"row text-left m-0\">\n                            <div class=\"col-6\">Thời hạn</div>\n                            <div class=\"col-6 font-weight-bold\">{{tin.expired}}</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/intro/intro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"assets/imgs/profile.jpg\" width=\"100%\" style=\"height:40vh\" alt=\"\">\n</div>\n<div class=\"col-12 col-md-10 col-lg-8 col-xl-8 mx-auto mt-5\">\n\n    <div class=\"font-weight-bold\" style=\"font-size: 20px;\">Lịch sử hình thành</div>\n\n    <p> </p>\n    <p><img alt=\"\" src=\"http://www.harmony-at.vn/assets/img/resources/3074.jpg\"\n            style=\"float:right; height:450px; width:600px\"></p>\n\n    <p>• Thành lập 05/1994 • 1995 - 1996: Phát triển và phân phối các phần mềm đóng gói cho khách hàng.</p>\n\n    <p>• 1997: Hợp tác với ViaNova (Nauy) phát triển các phần mềm thiết kế hạ tầng</p>\n\n    <p>• 1998: Tham gia ADN (Autodesk Developer Network) • 2001: Nhận chứng chỉ ISO 9001:2000 (nay ISO 9001:2008) về sản\n        xuất và cung cấp phần mềm ứng dụng.</p>\n\n    <p>• 2002: Thành lập liên doanh ViaNova System Vietnam (liên doanh với Nauy).</p>\n\n    <p>• 2002: Cúp vàng về CNTT cho phần mềm xuất khẩu</p>\n\n    <p>• 2003: 2005: Thành lập Công ty BHTech, Công ty Cổ phần Công nghệ phần mềm Hài Hòa (Harmonysoft); Công ty liên\n        doanh HSD (liên doanh với Philippin, New Zealand) </p>\n    <p>• 2007: Hợp tác nghiên cứu và phát triển phần mềm với COADE\n        (thuộc Intergraph, Mỹ)\n    </p>\n\n    <p>• 2008: Khởi công xây dựng Technosoft Building, trụ sở công ty tại Cầu Giấy;</p>\n\n    <p>• 2009: Triển khai dịch vụ mô hình hóa dữ liệu 3D cho các đối tác nước ngoài; Phát triển các giải pháp ứng dụng\n        CNTT Quản lý dự án đầu tư theo công nghệ PLM</p>\n\n    <p>• 2010: Khánh thành Technosoft Building</p>\n\n    <p>• 2011: Ra mắt dòng các sản phẩm Quản lý dự án như SmartBid, SmartBuild, SmartIPM, SmartCPM …</p>\n\n    <p>• 2013: Nghiên cứu phát triển, triển khai các giải pháp ERP cho ngành xây dựng; các giải pháp GIS 3D, BIM phục vụ\n        quản lý qui hoạch đô thị, thiết kế cơ sở hạ tầng, môi trường …</p>\n\n    <p>• 2014: Hình thành Harmony Network</p>\n\n    <p>• 2016: Thành lập Công ty TNHH giải pháp doanh nghiệp Hài Hòa dựa trên bộ phận phát triển giải pháp về Quản lý\n        điều hành doanh nghiệp</p>\n    <p></p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/partners/partners.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/partners/partners.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>partners works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/posts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 80px;\">ạkshdjhá</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"assets/imgs/product.jpg\" width=\"100%\" height=\"100%\" style=\"height:40vh\" alt=\"\">\n</div>\n<div class=\"col-12 col-md-10 col-lg-8 col-xl-8 mx-auto mt-5\">\n    <div class=\"row col-12 text-center\" *ngFor=\"let product of products\">\n        <h1 class=\"mx-auto\">{{product.Name}}</h1>\n        <h2 class=\"mx-auto\">{{product.altName}}</h2>\n        <div class=\"row col-12\">\n            <div class=\"col-12 col-md-4 image\" *ngFor=\"let img of product.images\" [ngStyle]=\"{'background-image': 'url('+img+')','height':'300px'}\">                \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recruititem/recruititem.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recruititem/recruititem.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"assets/imgs/Recruitment.png\" width=\"100%\" style=\"height:40vh\" alt=\"\">\n</div>\n<div class=\"col-12 col-md-10 col-lg-8 col-xl-8 mx-auto mt-5\" [innerHtml]=\"item.html\">\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recruitment/recruitment.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recruitment/recruitment.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"assets/imgs/Recruitment.png\" width=\"100%\" style=\"height:40vh\" alt=\"\">\n</div>\n<div class=\"col-12 col-md-10 col-lg-8 col-xl-8 mx-auto mt-5 text-center\">\n    <h2>Tin tuyển dụng</h2>\n    <div class=\"row mt-5\">\n        <div class=\"col-12 col-md-4 col-lg-4 mb-3\" style=\"cursor: pointer;\" *ngFor=\"let tin of tuyendung\"\n            [routerLink]=\"['/recitem',tin.id]\">\n            <img [src]=\"tin.image\" width=\"100%\" height=\"250px\">\n            <div class=\"mt-3 p-3\" style=\"color: rgba(24, 24, 83, 1); background-color: wheat;\">\n                <h5>{{tin.title.toUpperCase()}}</h5>\n                <div class=\"row text-left m-0\">\n                    <div class=\"col-6\">Hình thức</div>\n                    <div class=\"col-6 font-weight-bold\">Full time</div>\n                </div>\n                <div class=\"row text-left m-0\">\n                    <div class=\"col-6\">Mức lương</div>\n                    <div class=\"col-6 font-weight-bold\">{{tin.payment}}</div>\n                </div>\n                <div class=\"row text-left m-0\">\n                    <div class=\"col-6\">Thời hạn</div>\n                    <div class=\"col-6 font-weight-bold\">{{tin.expired}}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tintuc/tintuc.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tintuc/tintuc.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"assets/imgs/news.jpg\" width=\"100%\" style=\"height:40vh\" alt=\"\">\n</div>\n<div class=\"up\">\n    <div class=\"container\">\n        <a href=\"#\">\n            <div class=\"item active\">All</div>\n        </a>\n        <a href=\"#\">\n            <div class=\"item\">Bim</div>\n        </a>\n        <a href=\"#\">\n            <div class=\"item\">HarmonyES</div>\n        </a>\n        <a href=\"#\">\n            <div class=\"item\">Tuyển dụng</div>\n        </a>\n    </div>\n</div> <!-- end up -->\n\n\n\n<div class=\"down\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-xl-8 mb-5\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-xl-6\">\n                        <div class=\"tin\">\n                            <div class=\"anh\">\n                                <img src=\"assets/imgs/intro.jpg\" width=\"100%\" height=\"100px\" alt=\"\" class=\"img-fluid\">\n                            </div>\n                            <div class=\"noidung mt-3 mb-5\">\n                                <h4><a href=\"#\">Đào tạo và trang bị phần mềm ứng dụng BIM trong quản lý dự án Vân\n                                        Đồn</a></h4>\n                                <p>C.E.O Vân Đồn</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-xl-6\">\n                        <div class=\"tin\">\n                            <div class=\"anh\">\n                                <img src=\"assets/imgs/intro.jpg\" width=\"100%\" height=\"100px\" alt=\"\" class=\"img-fluid\">\n                            </div>\n                            <div class=\"noidung mt-3 mb-5\">\n                                <h4><a href=\"#\">Tuyển dụng - TESTER</a></h4>\n                                <p>Tester</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-xl-6\">\n                        <div class=\"tin\">\n                            <div class=\"anh\">\n                                <img src=\"assets/imgs/intro.jpg\" width=\"100%\" height=\"100px\" alt=\"\" class=\"img-fluid\">\n                            </div>\n                            <div class=\"noidung mt-3 mb-5\">\n                                <h4><a href=\"#\">Tuyển dụng FRONT-END (có cơ hội onside trong và ngoài nước)</a></h4>\n                                <p>Tuyển dụng lập trình viên front-end</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-xl-6\">\n                        <div class=\"tin\">\n                            <div class=\"anh\">\n                                <img src=\"assets/imgs/intro.jpg\" width=\"100%\" height=\"100px\" alt=\"\" class=\"img-fluid\">\n                            </div>\n                            <div class=\"noidung mt-3 mb-5\">\n                                <h4><a href=\"#\">Tuyển dụng lập trình viên C#.NET (có cơ hội onside trong và ngoài\n                                        nước)</a></h4>\n                                <p>Tuyển dụng lập trình viên C#.NET</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-xl-6\">\n                        <div class=\"tin\">\n                            <div class=\"anh\">\n                                <img src=\"assets/imgs/intro.jpg\" width=\"100%\" height=\"100px\" alt=\"\" class=\"img-fluid\">\n                            </div>\n                            <div class=\"noidung mt-3 mb-5\">\n                                <h4><a href=\"#\">Kế hoạch triển khai Hệ thống SmartEOS cho Tổng công ty tư vấn thiết kế\n                                        GTVT - TEDI</a></h4>\n                                <p>TEDI</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-xl-6\">\n                        <div class=\"tin\">\n                            <div class=\"anh\">\n                                <img src=\"assets/imgs/intro.jpg\" width=\"100%\" height=\"100px\" alt=\"\" class=\"img-fluid\">\n                            </div>\n                            <div class=\"noidung mt-3 mb-5\">\n                                <h4><a href=\"#\">Triển khai đào tạo Hệ thống SmartEOS và SmartHRM. Net tại Công ty TNHH\n                                        NipponKoei Việt Nam</a></h4>\n                                <p>NipponKoei</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"pagenumber\">\n                    <ul>\n                        <a href=\"#\" class=\"active\">\n                            <li> 1 </li>\n                        </a>\n                        <a href=\"#\">\n                            <li> 2 </li>\n                        </a>\n                        <a href=\"#\">\n                            <li> > </li>\n                        </a>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-xl-4\">\n                <iframe\n                    src=\"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRioXbutnotmusicpage%2Fposts%2F769761816768465\"\n                    style=\"border:none;overflow:hidden;width: 100%;height: 38rem;\" scrolling=\"no\" frameborder=\"0\"\n                    allowTransparency=\"true\" allow=\"encrypted-media\"></iframe>\n            </div>\n        </div>\n    </div>\n</div> <!-- end down -->"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _tintuc_tintuc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tintuc/tintuc.component */ "./src/app/tintuc/tintuc.component.ts");
/* harmony import */ var _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recruitment/recruitment.component */ "./src/app/recruitment/recruitment.component.ts");
/* harmony import */ var _recruititem_recruititem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recruititem/recruititem.component */ "./src/app/recruititem/recruititem.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");










const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'post', component: _tintuc_tintuc_component__WEBPACK_IMPORTED_MODULE_4__["TintucComponent"] },
    { path: 'recruit', component: _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_5__["RecruitmentComponent"] },
    { path: 'recitem/:id', component: _recruititem_recruititem_component__WEBPACK_IMPORTED_MODULE_6__["RecruititemComponent"] },
    { path: 'intro', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"] },
    { path: 'products', component: _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    color: #00ffff;\r\n    -webkit-animation: headertop 1s;\r\n            animation: headertop 1s;\r\n    height: 70px;\r\n    width: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.header-sticky {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    color: #00ffff;\r\n    -webkit-animation: headerstick 1s;\r\n            animation: headerstick 1s;\r\n    background-color: rgba(23, 43, 85, 1);\r\n    height: 70px;\r\n    width: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\n@-webkit-keyframes headertop {\r\n    from {\r\n        background-color: rgba(23, 43, 85, 1);\r\n    }\r\n    to {\r\n        background-color: rgba(23, 43, 85, 0);\r\n    }\r\n}\r\n\r\n/* Standard syntax */\r\n\r\n@keyframes headertop {\r\n    from {\r\n        background-color: rgba(23, 42, 85, 1);\r\n    }\r\n    to {\r\n        background-color: rgba(23, 43, 85, 0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes headerstick {\r\n    from {\r\n        background-color: rgba(23, 43, 85, 0);\r\n    }\r\n    to {\r\n        background-color: rgba(23, 43, 85, 1);\r\n    }\r\n}\r\n\r\n/* Standard syntax */\r\n\r\n@keyframes headerstick {\r\n    from {\r\n        background-color: rgba(23, 43, 85, 0);\r\n    }\r\n    to {\r\n        background-color: rgba(23, 43, 85, 1);\r\n    }\r\n}\r\n\r\n#nav-icon1 {\r\n    width: 30px;\r\n    height: 22px;\r\n    position: relative;\r\n    margin: auto;\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .5s ease-in-out;\r\n    transition: .5s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-icon1 span {\r\n    display: block;\r\n    position: absolute;\r\n    height: 4px;\r\n    width: 100%;\r\n    background: #00ffff;\r\n    border-radius: 4px;\r\n    opacity: 1;\r\n    left: 0;\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .25s ease-in-out;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#nav-icon1 span:nth-child(1) {\r\n    top: 0px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(2) {\r\n    top: 9px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(3) {\r\n    top: 18px;\r\n}\r\n\r\n#nav-icon1.open span:nth-child(1) {\r\n    top: 9px;\r\n    -webkit-transform: rotate(135deg);\r\n    transform: rotate(135deg);\r\n}\r\n\r\n#nav-icon1.open span:nth-child(2) {\r\n    opacity: 0;\r\n    left: -60px;\r\n}\r\n\r\n#nav-icon1.open span:nth-child(3) {\r\n    top: 9px;\r\n    -webkit-transform: rotate(-135deg);\r\n    transform: rotate(-135deg);\r\n}\r\n\r\n#dat09navbar {\r\n    opacity: 0;\r\n    -webkit-transition: ease-out 0.5s;\r\n    transition: ease-out 0.5s;\r\n}\r\n\r\n#dat09navbar.open {\r\n    opacity: 1;\r\n    -webkit-animation: navin 0.5s ease-in;\r\n            animation: navin 0.5s ease-in;\r\n}\r\n\r\n@keyframes navin {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(1000px);\r\n                transform: translateX(1000px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes navin {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(1000px);\r\n                transform: translateX(1000px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n.btn-link, .btn-link:hover {\r\n    color: #00ffff;\r\n    text-decoration: none;\r\n}\r\n\r\n.btn-link:hover {\r\n    -webkit-animation: glow 1s ease-in-out infinite alternate;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n\r\n.footer {\r\n    background-color: rgba(23, 42, 85, 1);\r\n    color: white;\r\n    padding: 50px 0 0 0;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.footer .bottom {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.footer form {\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.footer form input {\r\n    width: 100%;\r\n    padding: 0 90px 0 10px;\r\n    background: #accaef;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.footer form button {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n    height: 40px;\r\n    border: none;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    padding: 5px 15px;\r\n    background: -webkit-gradient(linear, left top, right top, from(#7450fe), to(#21d397));\r\n    background: linear-gradient(to right, #7450fe, #21d397);\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n    color: #b6fcff;\r\n}\r\n\r\n.footer .icon {\r\n    margin-top: 20px;\r\n}\r\n\r\n.footer .icon a {\r\n    color: #ffb76d;\r\n    width: 33.33%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    border-right: 2px solid #5aea5a;\r\n}\r\n\r\n.footer .icon a:nth-child(3) {\r\n    border: none;\r\n}\r\n\r\n.footer .icon a:hover {\r\n    color: #a900ff;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n}\r\n\r\n.footer ul {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n.footer ul li a {\r\n    color: #d4cce6;\r\n}\r\n\r\n.footer ul li:hover a {\r\n    text-decoration: none;\r\n}\r\n\r\n.footer ul li:hover a small {\r\n    color: #2bc0a4;\r\n}\r\n\r\n.footer small {\r\n    color: #d4cce6;\r\n}\r\n\r\n.footer nav ul li {\r\n    width: 50%;\r\n    margin-top: 1.5rem;\r\n    line-height: 1;\r\n    overflow: hidden;\r\n    font-weight: bold;\r\n    display: block;\r\n}\r\n\r\n.footer nav ul li a p {\r\n    margin-left: -20px;\r\n    -webkit-transition: 0.6s;\r\n    transition: 0.6s;\r\n}\r\n\r\n.footer nav ul li a:hover p {\r\n    margin-left: 0px;\r\n    -webkit-transition: 0.6s;\r\n    transition: 0.6s;\r\n    color: #2bc0a4;\r\n}\r\n\r\n.footer .contact p {\r\n    font-size: 1.1rem;\r\n    color: #d4cce6;\r\n}\r\n\r\n.footer .contact i {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.footer .contact a {\r\n    color: #d4cce6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsY0FBYztJQUNkLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsY0FBYztJQUNkLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxxQ0FBcUM7SUFDekM7SUFDQTtRQUNJLHFDQUFxQztJQUN6QztBQUNKOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSTtRQUNJLHFDQUFxQztJQUN6QztJQUNBO1FBQ0kscUNBQXFDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztJQUN6QztJQUNBO1FBQ0kscUNBQXFDO0lBQ3pDO0FBQ0o7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJO1FBQ0kscUNBQXFDO0lBQ3pDO0lBQ0E7UUFDSSxxQ0FBcUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwrQkFBK0I7SUFHL0IsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUduQywyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixPQUFPO0lBQ1AsK0JBQStCO0lBRy9CLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFHcEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGlDQUFpQztJQUdqQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGtDQUFrQztJQUdsQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQXlCO0lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YscUNBQTZCO2dCQUE3Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFVBQVU7UUFDVixnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YscUNBQTZCO2dCQUE3Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFVBQVU7UUFDVixnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUF5RDtJQUV6RCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixxRkFBdUQ7SUFBdkQsdURBQXVEO0lBQ3ZELGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFjO0lBQWQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgY29sb3I6ICMwMGZmZmY7XHJcbiAgICBhbmltYXRpb246IGhlYWRlcnRvcCAxcztcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmhlYWRlci1zdGlja3kge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgY29sb3I6ICMwMGZmZmY7XHJcbiAgICBhbmltYXRpb246IGhlYWRlcnN0aWNrIDFzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgNDMsIDg1LCAxKTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGhlYWRlcnRvcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCA0MywgODUsIDEpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDQzLCA4NSwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFN0YW5kYXJkIHN5bnRheCAqL1xyXG5cclxuQGtleWZyYW1lcyBoZWFkZXJ0b3Age1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgNDIsIDg1LCAxKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCA0MywgODUsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGVhZGVyc3RpY2sge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgNDMsIDg1LCAwKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCA0MywgODUsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBTdGFuZGFyZCBzeW50YXggKi9cclxuXHJcbkBrZXlmcmFtZXMgaGVhZGVyc3RpY2sge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgNDMsIDg1LCAwKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCA0MywgODUsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4jbmF2LWljb24xIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI25hdi1pY29uMSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMGZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jbmF2LWljb24xIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG4jbmF2LWljb24xIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIHRvcDogOXB4O1xyXG59XHJcblxyXG4jbmF2LWljb24xIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgIHRvcDogMThweDtcclxufVxyXG5cclxuI25hdi1pY29uMS5vcGVuIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbn1cclxuXHJcbiNuYXYtaWNvbjEub3BlbiBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgbGVmdDogLTYwcHg7XHJcbn1cclxuXHJcbiNuYXYtaWNvbjEub3BlbiBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICB0b3A6IDlweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxufVxyXG5cclxuI2RhdDA5bmF2YmFyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjVzO1xyXG59XHJcblxyXG4jZGF0MDluYXZiYXIub3BlbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYW5pbWF0aW9uOiBuYXZpbiAwLjVzIGVhc2UtaW47XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbmF2aW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG5hdmluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tbGluaywgLmJ0bi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDBmZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYnRuLWxpbms6aG92ZXIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCA0MiwgODUsIDEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNTBweCAwIDAgMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9vdGVyIC5ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmZvb3RlciBmb3JtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uZm9vdGVyIGZvcm0gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDkwcHggMCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2FjY2FlZjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZvb3RlciBmb3JtIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzc0NTBmZSwgIzIxZDM5Nyk7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNiNmZjZmY7XHJcbn1cclxuXHJcbi5mb290ZXIgLmljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmZvb3RlciAuaWNvbiBhIHtcclxuICAgIGNvbG9yOiAjZmZiNzZkO1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM1YWVhNWE7XHJcbn1cclxuXHJcbi5mb290ZXIgLmljb24gYTpudGgtY2hpbGQoMykge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyIC5pY29uIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNhOTAwZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuLmZvb3RlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZvb3RlciB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiAjZDRjY2U2O1xyXG59XHJcblxyXG4uZm9vdGVyIHVsIGxpOmhvdmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyIHVsIGxpOmhvdmVyIGEgc21hbGwge1xyXG4gICAgY29sb3I6ICMyYmMwYTQ7XHJcbn1cclxuXHJcbi5mb290ZXIgc21hbGwge1xyXG4gICAgY29sb3I6ICNkNGNjZTY7XHJcbn1cclxuXHJcbi5mb290ZXIgbmF2IHVsIGxpIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZm9vdGVyIG5hdiB1bCBsaSBhIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxufVxyXG5cclxuLmZvb3RlciBuYXYgdWwgbGkgYTpob3ZlciBwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgY29sb3I6ICMyYmMwYTQ7XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvbnRhY3QgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjZDRjY2U2O1xyXG59XHJcblxyXG4uZm9vdGVyIC5jb250YWN0IGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvbnRhY3QgYSB7XHJcbiAgICBjb2xvcjogI2Q0Y2NlNjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(router, facebookService) {
        this.router = router;
        this.facebookService = facebookService;
        this.title = 'harmonyes';
        this.expand = false;
        this.navFixed = false;
        this.scrollOffset = 0;
    }
    onWindowScroll() {
        this.navFixed = (window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0) > this.scrollOffset;
    }
    ngOnInit() {
        this.initFacebookService();
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    initFacebookService() {
        const initParams = { xfbml: true, version: 'v3.2' };
        this.facebookService.init(initParams);
    }
    lang() {
    }
    menu() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_facebook__WEBPACK_IMPORTED_MODULE_2__["FacebookService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', [])
], AppComponent.prototype, "onWindowScroll", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _tintuc_tintuc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tintuc/tintuc.component */ "./src/app/tintuc/tintuc.component.ts");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recruitment/recruitment.component */ "./src/app/recruitment/recruitment.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _recruititem_recruititem_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recruititem/recruititem.component */ "./src/app/recruititem/recruititem.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"],
            _partners_partners_component__WEBPACK_IMPORTED_MODULE_8__["PartnersComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _tintuc_tintuc_component__WEBPACK_IMPORTED_MODULE_12__["TintucComponent"],
            _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_14__["RecruitmentComponent"],
            _recruititem_recruititem_component__WEBPACK_IMPORTED_MODULE_16__["RecruititemComponent"],
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_17__["IntroComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            // NoopAnimationsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbCarouselModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__["SlickCarouselModule"],
            ngx_facebook__WEBPACK_IMPORTED_MODULE_13__["FacebookModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_20__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBYZEvyYix45iaolNfZ-LTlFb2ROUtOYVw'
            })
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 500px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwe1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() {
        this.zoom = 18;
        this.lat = 21.030277;
        this.lng = 105.782647;
    }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/fakedata/fakedata.ts":
/*!**************************************!*\
  !*** ./src/app/fakedata/fakedata.ts ***!
  \**************************************/
/*! exports provided: Fakedata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fakedata", function() { return Fakedata; });
class Fakedata {
}
Fakedata.slides = [
    {
        img: `assets/imgs/slide1.jpg`,
        h1: 'SmartEOS',
        h4: ' - Enterpise Operating System',
        h3: 'Hệ thống thông tin điều hành doanh nghiệp',
        listh5: ['Quản lý công việc', 'Quản lý sổ công văn', 'Quản lý kho hồ sơ, tài liệu'],
        icon: `assets/imgs/SEOS/screenshot.png`,
        link: 'http://smarteos.harmonyes.com.vn/',
    },
    {
        img: `assets/imgs/slide2.jpg`,
        h1: 'SmartBuild Enterprise',
        h4: '',
        h3: 'Giải pháp ứng dụng công nghệ thông tin cho nhà thầu xây dựng',
        listh5: ['Quản lý công việc', 'Quản lý sổ công văn', 'Quản lý kho hồ sơ, tài liệu'],
        icon: `assets/imgs/smarteos.png`,
        link: 'http://smartbuildenterprise.harmonyes.com.vn/',
    }
    // ,
    // {
    //     img: `assets/imgs/slide3.jpg`,
    //     h1: 'ERP',
    //     h4: '',
    //     h3: '',
    //     listh5: ['', '', ''],
    //     icon: `assets/imgs/smarteos.png`,
    //     link: ''
    // }
];
Fakedata.slogan = {
    img: `assets/imgs/slide4.jpg`,
    h1: '"Together Digital Transformmation With You"',
    author: 'Vu Thanh Cong',
    position: ' - Director General',
    address: 'Tầng 1, tòa nhà Technosoft, KCN Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
    phone: '(+84) 024.35563 482',
    email: 'info@harmonyes.com.vn'
};
Fakedata.products = [
    {
        Name: 'Hệ thống thông tin điều hành doanh nghiệp',
        altName: 'SmartEOS - Enterpise Operating System',
        content: '',
        images: [
            'assets/imgs/SEOS/1.png',
            'assets/imgs/SEOS/2.png',
            'assets/imgs/SEOS/3.png',
            'assets/imgs/SEOS/4.png',
            'assets/imgs/SEOS/5.png',
            'assets/imgs/SEOS/6.png',
            'assets/imgs/SEOS/7.png',
            'assets/imgs/SEOS/8.png',
        ]
    },
];
Fakedata.doitacs = [
    {
        tenduan: 'Hệ thống hoạch định nguồn lực doanh nghiệp ERP',
        doitac: 'Công ty cổ phần quản lý Phúc Hưng Thịnh',
        content: `• Phân hệ  quản lý thu mua
            • Phân hệ quản lý nhà cung cấp
            • Phân hệ quản lý kho
            • Phân hệ quản lý bán hàng
            • Phân hệ quản lý quan hệ khách hàng
            • Phân hệ quản lý tài sản
            • Phân hệ quản lý nhân sự
            • Phân hệ quản lý tài chính
            • Phân hệ điều hành, hỗ trợ quyết định`,
        images: [
            'assets/imgs/phuchungthinh/1.jpg',
            'assets/imgs/phuchungthinh/2.jpg',
            'assets/imgs/phuchungthinh/3.jpg',
            'assets/imgs/phuchungthinh/4.jpg',
            'assets/imgs/phuchungthinh/5.jpg',
            'assets/imgs/phuchungthinh/6.jpg',
        ],
    },
    {
        tenduan: 'Hệ thống thông tin điều hành doanh nghiệp và quản lý dự án',
        doitac: 'Công ty TNHH Thương mại và xây dựng Trung Chính',
        content: `Phân hệ điều hành với các chức năng:
            • Quản lý công việc: Công việc giao, công việc nhận, công việc phối hợp theo dõi, công việc dừng hủy
            • Thống kê, tổng hợp công việc theo từng cấp độ
            • Quản lý công văn: Công văn đi, công văn đến
            • Cảnh báo, nhắc nhở công việc
            • Cảnh báo quá tải
            • App điều hành công việc
            Phân hệ quản lý dự án
            • Thông tin dự án
            • Giao việc theo dự án
            • Quy trình thực hiện quản lý dự án: Quy trình lập kế hoạch đấu thầu tổng thể, quy trình thiết kế, quy trình thương thảo hợp đồng…
            • Hồ sơ dự án
            • Tổng hợp báo cáo tình hình thực hiện dự án, báo cáo sản lượng theo tháng, quý
            `,
        images: [
            'assets/imgs/trungchinh/1.jpg',
            'assets/imgs/trungchinh/2.jpg',
            'assets/imgs/trungchinh/3.jpg',
            'assets/imgs/trungchinh/4.jpg',
            'assets/imgs/trungchinh/5.jpg',
            'assets/imgs/trungchinh/6.jpg',
            'assets/imgs/trungchinh/7.jpg',
            'assets/imgs/trungchinh/8.jpg',
        ],
    },
    {
        tenduan: 'Hệ thống thông tin điều hành doanh nghiệp SmartEOS',
        doitac: 'Công ty cổ phần tư vấn tư vấn thiết kế cầu đường Tedi',
        content: `• Quản lý công việc: Công việc giao, công việc nhận, công việc phối hợp theo dõi, công việc dừng hủy
            • Thống kê, tổng hợp công việc theo từng cấp độ
            • Quản lý công văn: Công văn đi, công văn đến
            • Cảnh báo, nhắc nhở công việc
            • Cảnh báo quá tải
            • Tủ hồ sơ
            • App điều hành công việc
            `,
        images: [
            'assets/imgs/teddi/1.jpg',
            'assets/imgs/teddi/2.jpg',
            'assets/imgs/teddi/3.jpg',
            'assets/imgs/teddi/4.jpg',
        ],
    },
    {
        tenduan: 'Hệ thống kinh doanh Catalogue CAD',
        doitac: 'Công ty cổ phần EuroWindow',
        content: `• Kết nối với hệ thống: Kết nối trực tiếp hệ thống ERP của EuroWindow để xây dựng hao phí sản phẩm
            • Kết nối trực tiếp Autocad lấy dữ liệu, nhận dạng đối tượng trên bản vẽ Cad
            • Biên tập hao phí sản phẩm hình thành bảng BOM
            • Kết nối cơ sở dữ liệu khách hàng
            • Kết nối cơ sở dữ liệu bảng giá
            • Kết nối hệ thống hợp đồng , doanh thu
            • Xây dựng báo giá, hợp đồng cho khách hàng
            • Kết nối sản xuất : Tối ưu hóa Nguyên vật liệu kết xuất hồ sơ cho các bộ phận sản xuất            
            `,
        images: [
            'assets/imgs/eurowindow/1.jpg',
            'assets/imgs/eurowindow/2.jpg',
            'assets/imgs/eurowindow/3.jpg',
            'assets/imgs/eurowindow/4.jpg',
            'assets/imgs/eurowindow/5.jpg',
            'assets/imgs/eurowindow/6.jpg'
        ],
    },
    {
        tenduan: 'Hệ thống thông tin điều hành doanh nghiệp SmartEOS',
        doitac: 'Bệnh viện Bạch Mai',
        content: `• Quản lý công việc: Công việc giao, công việc nhận, công việc phối hợp theo dõi, công việc dừng hủy
            • Thống kê, tổng hợp công việc theo từng cấp độ
            • Quản lý công văn: Công văn đi, công văn đến
            • Cảnh báo, nhắc nhở công việc
            • Cảnh báo quá tải
            • Tủ hồ sơ
            • App điều hành công việc
            `,
        images: [
            'assets/imgs/bachmai/1.jpg',
            'assets/imgs/bachmai/2.jpg',
            'assets/imgs/bachmai/3.jpg',
            'assets/imgs/bachmai/4.jpg'
        ],
    },
    {
        tenduan: 'Ứng dụng BIM trong quản lý dự án',
        doitac: 'Công ty cổ phần tập đoàn CEO',
        content: `• Ứng dụng BIM trong quản lý dự án Vân Đồn
            • Phân hệ quản lý điều hành doanh nghiệp
            • Phân hệ quản lý nhà cung cấp
            • Phân hệ quản lý Cung ứng vật tư
            • Phân hệ quản lý kho
            • Phân hệ quản lý hợp đồng
            • Phân hệ quản lý P&L
            `,
        images: [
            'assets/imgs/ceo/1.jpg',
            'assets/imgs/ceo/2.jpg',
            'assets/imgs/ceo/3.jpg',
            'assets/imgs/ceo/4.jpg',
            'assets/imgs/ceo/5.jpg',
            'assets/imgs/ceo/6.jpg',
            'assets/imgs/ceo/7.jpg',
            'assets/imgs/ceo/8.jpg',
            'assets/imgs/ceo/9.jpg',
            'assets/imgs/ceo/10.jpg',
        ],
    },
];
Fakedata.tuyendung = [
    {
        id: 1,
        title: 'tuyển tester', image: `https://labs.sogeti.com/wp-content/uploads/2015/07/test-automation.jpg`,
        payment: 'Thỏa thuận',
        requirement: '',
        expired: '31-12-2020',
        html: `
            <div class="font-weight-bold" style="font-size: 20px;">TUYỂN DỤNG - TESTER</div>  
            <div class="about-sub">Tester</div>

            <p> </p><p><strong>I. Mô tả công việc:</strong></p>

<p>• Tham gia vào các giai đoạn phát triển phần mềm, phân tích thiết kế, kiểm thử.<br>
• Đọc hiểu các tài liệu giải pháp, tài liệu thiết kế; phối hợp với các nhóm để hiểu rõ yêu cầu sản phẩm<br>
• Viết các tài liệu hướng dẫn sử dụng và lên kế hoạch test&nbsp;<br>
• Thực hiện kiểm thử sản phẩm.<br>
• Hỗ trợ khách hàng, kiểm tra, tái hiện các lỗi phát sinh theo phản hồi của khách hàng; kiểm thử lại phần mềm sau khi đội Phát triển sửa lỗi.<br>
• Nghiên cứu và cập nhật các công cụ test, các kiến thức mới hỗ trợ cho công việc<br>
• Đề xuất cải tiến sản phẩm hoặc quy trình test.</p>

<p><strong>II. Yêu cầu:</strong></p>

<p>Các ứng viên cần đáp ứng được các yêu cầu sau:<br>
• Tốt nghiệp cao đẳng ,đại học; ưu tiên tốt nghiệp chuyên ngành CNTT, hoặc chuyên ngành liên quan;<br>
• Biết sử dụng phần mềm TFS ( Team Foundation Server 2013 )<br>
• Cẩn thận, tỉ mỉ và có kinh nghiệm giao tiếp, làm việc nhóm tốt<br>
ƯU TIÊN&nbsp;<br>
• Có hơn 1 năm kinh nghiệm làm việc (ưu tiên ứng viên có kinh nghiệm với hệ thống bán hàng, HRM )/ mobile app (iOS, Android)<br>
• Có khả năng phân tích và viết testcase dựa trên tài liệu đặc tả yêu cầu<br>
• Thực hiện test theo test plan và testcase<br>
• Report bugs và quản lý bugs trên tool</p>

<p><strong>III. Những quyền lợi mà các ứng viên được hưởng nếu được tuyển:</strong><br>
• Lương khởi điểm: Thỏa thuận tùy theo năng lực + thưởng&nbsp;<br>
• Được đào tạo hội nhập.<br>
• Được hưởng những quyền lợi theo luật lao động Việt Nam quy định.<br>
• Có cơ hội được làm những công việc tốt, cơ hội được tăng lương và thăng tiến hằng năm tùy theo năng lực .<br>
• Tham gia các kỳ nghỉ, các hoạt động tập thể của công ty như : bóng đá, cầu lông...</p>

<p><strong>IV. Địa điểm nhận hồ sơ:</strong><br>
Công ty TNHH giải pháp doanh nghiệp Hài Hòa<br>
Tầng 1, Tòa nhà Technosoft, Đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội.<br>
ĐT:04.35563482&nbsp;<br>
Tên người liên hệ: Vũ Duy Linh<br>
Email: linh_vd@harmonyes.com.vn</p>
<p></p>`
    },
    {
        id: 2,
        title: 'tuyển back-end', image: `https://blog.siliconstraits.vn/wp-content/uploads/2015/07/Full-time-hiring-8.2015-10-e1440676643494.png`,
        payment: 'Thỏa thuận',
        requirement: '',
        expired: '31-12-2020',
        html: `
            <div class="font-weight-bold" style="font-size: 20px;">TUYỂN DỤNG LẬP TRÌNH VIÊN C#.NET(CÓ CƠ HỘI ONSITE TRONG VÀ NGOÀI NƯỚC)</div>  
            <div class="about-sub">Tuyển dụng lập trình viên C#.NET</div>

            <p> </p><p><strong>1. Chuyên môn</strong>: Tốt nghiệp ĐH, CĐ trong các ngành về công nghệ thông tin hoặc các ngành liên quan.</p>

<p><strong>2. Yêu cầu</strong>:</p>

<p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thành thạo ASP.NET, C#.NET, MS SQL Server</p>

<p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có ít nhất 1 năm kinh nghiệm làm các dự án .NET</p>

<p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có khả năng làm việc nhóm</p>

<p><strong>3. Ưu tiên</strong>:</p>

<p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ưu tiên các ứng viên biết tiếng Anh.</p>

<p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ưu tiên biết lập trình mobile</p>

<p><strong>4. Quyền lợi chung</strong>:</p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mức lương: Thỏa thuận. Tối thiểu 500$</p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được đào tạo trong môi trường chuyên nghiệp và cơ hội làm việc trực tiếp với đối tác quốc tế.</p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được hưởng những quyền lợi theo luật lao động Việt Nam quy định.</p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Xem xét tăng lương hàng năm.</p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có cơ hội đi công tác trong và ngoài nước.&nbsp;</p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tham gia các kỳ nghỉ, các hoạt động tập thể của công ty như: bóng đá, cầu lông..</p>

<p><strong>5. Nơi làm việc</strong>:</p>

<p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tầng 1 tòa nhà Technosoft, Khu công nghiệp, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội</p>

<p><strong>Hồ sơ bao gồm:&nbsp;</strong></p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bản CV nêu rõ quá trình làm việc, kinh nghiệm, bằng cấp kèm ảnh cá nhân.</p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Đơn xin việc (Tiếng Việt hoặc Tiếng Anh);</p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Các bằng cấp và chứng chỉ có liên quan (photo);</p>

<p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ứng viên có thể gửi hồ sơ qua email info@harmonyes.com.vn hoặc nộp trực tiếp tại Văn phòng Công ty.</p>

<p><strong>Chú ý:</strong><br>
<em>Chỉ những hồ sơ đạt yêu cầu mới được mời phỏng vấn.</em></p>
<p></p>`
    },
    {
        id: 3,
        title: 'tuyển front-end', image: `https://itguru.vn/blog/wp-content/uploads/2017/12/front-end-development.jpg`,
        payment: 'Thỏa thuận',
        requirement: '',
        expired: '31-12-2020',
        html: `<div class="font-weight-bold" style="font-size: 20px;">TUYỂN DỤNG FRONTEND (CÓ CƠ HỘI ONSITE TRONG VÀ NGOÀI NƯỚC)</div>
            <div class="about-sub">Tuyển dụng lập trình viên frontend</div>
          
            <p> </p>
            <p>1. <strong>Chuyên môn</strong>: Tốt nghiệp ĐH, CĐ trong các ngành về công nghệ thông tin hoặc các ngành liên
                quan.
            </p>
          
            <p>2<strong>. Yêu cầu</strong>:</p>
          
            <p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có&nbsp;ít&nbsp;nhất&nbsp;1&nbsp;năm&nbsp;kinh&nbsp;nghiệm &nbsp;</p>
          
            <p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hiểu&nbsp;biết&nbsp;về&nbsp;CSS3, HTML5,&nbsp;xHTML&nbsp;</p>
          
            <p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có&nbsp;kỹ&nbsp;năng&nbsp;HTML/CSS&nbsp;Javascript &nbsp;</p>
          
            <p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Biết&nbsp;sử&nbsp;dụng&nbsp;jQuery, Bootstrap …&nbsp;</p>
          
            <p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Kỹ&nbsp;năng&nbsp;làm&nbsp;việc&nbsp;độc&nbsp;lập&nbsp;và&nbsp;theo&nbsp;nhóm,&nbsp;làm&nbsp;việc&nbsp;trong&nbsp;môi&nbsp;trường&nbsp;áp&nbsp;lực&nbsp;cao.&nbsp;
            </p>
          
            <p>3<strong>. Ưu tiên</strong>:</p>
          
            <p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Hiểu&nbsp;biết&nbsp;về&nbsp;ngôn&nbsp;ngữ&nbsp;AngularJS&nbsp;là&nbsp;một&nbsp;lợi&nbsp;thế.&nbsp;</p>
          
            <p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ưu tiên các ứng viên biết tiếng Anh.</p>
          
            <p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ưu tiên biết lập trình mobile</p>
          
            <p>4. <strong>Quyền lợi chung</strong>:</p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mức lương: Thỏa thuận. Tối thiểu 500$</p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được đào tạo trong môi trường chuyên nghiệp và cơ hội làm việc trực tiếp
                với
                đối tác quốc tế.</p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được hưởng những quyền lợi theo luật lao động Việt Nam quy định.</p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Xem xét tăng lương hàng năm.</p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có cơ hội đi công tác trong và ngoài nước.&nbsp;</p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tham gia các kỳ nghỉ, các hoạt động tập thể của công ty như: bóng đá, cầu
                lông..</p>
          
            <p>5. <strong>Nơi làm việc</strong>: Tầng 1 tòa nhà Technosoft, Khu công nghiệp, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà
                Nội
            </p>
          
            <p>* Hồ sơ bao gồm:&nbsp;</p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bản CV nêu rõ quá trình làm việc, kinh nghiệm, bằng cấp kèm ảnh cá nhân.
            </p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Đơn xin việc (Tiếng Việt hoặc Tiếng Anh);</p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Các bằng cấp và chứng chỉ có liên quan (photo);</p>
          
            <p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ứng viên có thể gửi hồ sơ qua email info@harmonyes.com.vn hoặc nộp trực
                tiếp
                tại Văn phòng Công ty.</p>
          
            <p><strong>Chú ý:</strong><br>
                <em>Chỉ những hồ sơ đạt yêu cầu mới được mời phỏng vấn.</em></p>
            <p></p>`
    },
];


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    background-color: rgba(23, 42, 85, 1);\r\n    color: white;\r\n    padding: 50px 0 0 0;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.footer .bottom{\r\n    margin-bottom: 30px;\r\n}\r\n.footer form{\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: 1rem;\r\n}\r\n.footer form input{\r\n    width: 100%;\r\n    padding: 0 90px 0 10px;\r\n    background: #accaef;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n.footer form button{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n    height: 40px;\r\n    border: none;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    padding: 5px 15px;\r\n    background: -webkit-gradient(linear,left top, right top,from(#7450fe),to(#21d397));\r\n    background: linear-gradient(to right,#7450fe,#21d397);\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n    color: #b6fcff;\r\n}\r\n.footer .icon{\r\n    margin-top: 20px;\r\n}\r\n.footer .icon a{\r\n    color: #ffb76d;\r\n    width: 33.33%;\r\n    display: inline-block;  \r\n    text-align: center;\r\n    border-right: 2px solid #5aea5a;\r\n}\r\n.footer .icon a:nth-child(3){\r\n    border: none;\r\n}\r\n.footer .icon a:hover{\r\n    color: #a900ff;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n}\r\n.footer ul {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n.footer ul li a{\r\n    color: #d4cce6;\r\n}\r\n.footer ul li:hover a{\r\n    text-decoration: none;\r\n}\r\n.footer ul li:hover a small{\r\n    color: #2bc0a4;\r\n}\r\n.footer small{\r\n    color: #d4cce6;\r\n}\r\n.footer nav ul li{\r\n    width: 50% ;\r\n    margin-top: 1.5rem;\r\n    line-height: 1;\r\n    overflow: hidden;\r\n    font-weight: bold;\r\n    display: block;\r\n}\r\n.footer nav ul li a p{\r\n    margin-left: -20px;\r\n    -webkit-transition: 0.6s;\r\n    transition: 0.6s;\r\n}\r\n.footer nav ul li a:hover p{\r\n    margin-left: 0px;\r\n    -webkit-transition: 0.6s;\r\n    transition: 0.6s;\r\n    color: #2bc0a4;\r\n}\r\n.footer .contact p{\r\n    font-size: 1.1rem;\r\n    color: #d4cce6;\r\n}\r\n.footer .contact i{\r\n    margin-right: 0.5rem;\r\n}\r\n.footer .contact a{\r\n    color: #d4cce6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixrRkFBcUQ7SUFBckQscURBQXFEO0lBQ3JELGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsc0JBQWM7SUFBZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgNDIsIDg1LCAxKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDUwcHggMCAwIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uZm9vdGVyIC5ib3R0b217XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5mb290ZXIgZm9ybXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uZm9vdGVyIGZvcm0gaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgOTBweCAwIDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWNjYWVmO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5mb290ZXIgZm9ybSBidXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjNzQ1MGZlLCMyMWQzOTcpO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjYjZmY2ZmO1xyXG59XHJcbi5mb290ZXIgLmljb257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5mb290ZXIgLmljb24gYXtcclxuICAgIGNvbG9yOiAjZmZiNzZkO1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzVhZWE1YTtcclxufVxyXG4uZm9vdGVyIC5pY29uIGE6bnRoLWNoaWxkKDMpe1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5mb290ZXIgLmljb24gYTpob3ZlcntcclxuICAgIGNvbG9yOiAjYTkwMGZmO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuLmZvb3RlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uZm9vdGVyIHVsIGxpIGF7XHJcbiAgICBjb2xvcjogI2Q0Y2NlNjtcclxufVxyXG4uZm9vdGVyIHVsIGxpOmhvdmVyIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmZvb3RlciB1bCBsaTpob3ZlciBhIHNtYWxse1xyXG4gICAgY29sb3I6ICMyYmMwYTQ7XHJcbn1cclxuLmZvb3RlciBzbWFsbHtcclxuICAgIGNvbG9yOiAjZDRjY2U2O1xyXG59XHJcbi5mb290ZXIgbmF2IHVsIGxpe1xyXG4gICAgd2lkdGg6IDUwJSA7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5mb290ZXIgbmF2IHVsIGxpIGEgcHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbn1cclxuLmZvb3RlciBuYXYgdWwgbGkgYTpob3ZlciBwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICBjb2xvcjogIzJiYzBhNDtcclxufVxyXG4uZm9vdGVyIC5jb250YWN0IHB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjZDRjY2U2O1xyXG59XHJcbi5mb290ZXIgLmNvbnRhY3QgaXtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcbi5mb290ZXIgLmNvbnRhY3QgYXtcclxuICAgIGNvbG9yOiAjZDRjY2U2O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dat09 {\r\n    /* background-image: url(./../../assets/gif/background.gif) */\r\n    width: 100%;\r\n    height: 100vh;\r\n    /* background: url(./../../assets/imgs/banner.png); */\r\n    background-color: black;\r\n    background: url('banner1.png')no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n}\r\n\r\n.datbg {\r\n    background-color: rgba(12, 42, 107, 0.8);\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: grid;\r\n    vertical-align: top;\r\n    align-content: flex-start;\r\n    /* align-items: center; */\r\n    text-align: center;\r\n}\r\n\r\n.h-glow:hover {\r\n    /* cursor: pointer; */\r\n    -webkit-animation: box-glow 1s ease-in-out infinite alternate;\r\n    animation: box-glow 1s ease-in-out infinite alternate, float 6s ease-in-out infinite;\r\n}\r\n\r\n.proditem {\r\n    background-color: white;\r\n    height: 20vh;\r\n}\r\n\r\n.partneritem {\r\n    background-color: white;\r\n    height: 15vh;\r\n}\r\n\r\n.zoomin {\r\n    animation-name: example;\r\n    animation-duration: 8s;\r\n    -webkit-animation-name: example;\r\n    -webkit-animation-duration: 8s;\r\n}\r\n\r\n.float {\r\n    -webkit-animation: float 6s ease-in-out infinite;\r\n            animation: float 6s ease-in-out infinite;\r\n}\r\n\r\n.dim {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.gradim {\r\n    background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), color-stop(5%, rgba(0, 0, 0, 0.3)), color-stop(95%, rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0)));\r\n    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 5%, rgba(0, 0, 0, 0.3) 95%, rgba(0, 0, 0, 0) 100%);\r\n}\r\n\r\n.itemduan {\r\n    background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.itemduanreverse {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n            flex-direction: row-reverse;\r\n}\r\n\r\n@-webkit-keyframes example {\r\n    from {\r\n        -webkit-filter: blur(8px);\r\n                filter: blur(8px);\r\n        -webkit-transform: scale(0.1);\r\n                transform: scale(0.1);\r\n    }\r\n    to {\r\n        -webkit-filter: blur(0px);\r\n                filter: blur(0px);\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n\r\n/* Standard syntax */\r\n\r\n@keyframes example {\r\n    from {\r\n        -webkit-filter: blur(8px);\r\n                filter: blur(8px);\r\n        -webkit-transform: scale(0.1);\r\n                transform: scale(0.1);\r\n    }\r\n    to {\r\n        -webkit-filter: blur(0px);\r\n                filter: blur(0px);\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes flyout {\r\n    from {\r\n        -webkit-transform: translatey(0px);\r\n                transform: translatey(0px);\r\n    }\r\n    to {\r\n        -webkit-transform: translatey(-1000px);\r\n                transform: translatey(-1000px);\r\n    }\r\n}\r\n\r\n@keyframes flyout {\r\n    from {\r\n        -webkit-transform: translatey(0px);\r\n                transform: translatey(0px);\r\n    }\r\n    to {\r\n        -webkit-transform: translatey(-1000px);\r\n                transform: translatey(-1000px);\r\n    }\r\n}\r\n\r\n@keyframes float {\r\n    0% {\r\n        -webkit-transform: translatey(0px);\r\n                transform: translatey(0px);\r\n    }\r\n    50% {\r\n        -webkit-transform: translatey(20px);\r\n                transform: translatey(20px);\r\n    }\r\n    100% {\r\n        -webkit-transform: translatey(0px);\r\n                transform: translatey(0px);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes float {\r\n    0% {\r\n        -webkit-transform: translatey(0px);\r\n                transform: translatey(0px);\r\n    }\r\n    50% {\r\n        -webkit-transform: translatey(20px);\r\n                transform: translatey(20px);\r\n    }\r\n    100% {\r\n        -webkit-transform: translatey(0px);\r\n                transform: translatey(0px);\r\n    }\r\n}\r\n\r\n@keyframes flyin {\r\n    from {\r\n        -webkit-transform: translatey(1000px);\r\n                transform: translatey(1000px);\r\n    }\r\n    to {\r\n        -webkit-transform: translatey(0px);\r\n                transform: translatey(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes flyin {\r\n    from {\r\n        -webkit-transform: translatey(1000px);\r\n                transform: translatey(1000px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translatey(0px);\r\n                transform: translatey(0px);\r\n    }\r\n}\r\n\r\n@keyframes flyinleft {\r\n    from {\r\n        -webkit-transform: translatex(-1000px);\r\n                transform: translatex(-1000px);\r\n    }\r\n    to {\r\n        -webkit-transform: translatex(0px);\r\n                transform: translatex(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes flyinleft {\r\n    from {\r\n        -webkit-transform: translatex(-1000px);\r\n                transform: translatex(-1000px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translatex(0px);\r\n                transform: translatex(0px);\r\n    }\r\n}\r\n\r\n@keyframes flyinright {\r\n    from {\r\n        -webkit-transform: translatex(1000px);\r\n                transform: translatex(1000px);\r\n    }\r\n    to {\r\n        -webkit-transform: translatex(0px);\r\n                transform: translatex(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes flyinright {\r\n    from {\r\n        -webkit-transform: translatex(1000px);\r\n                transform: translatex(1000px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translatex(0px);\r\n                transform: translatex(0px);\r\n    }\r\n}\r\n\r\n.fullscreen {\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.slick-active h1 {\r\n    -webkit-animation: 2s example 0s;\r\n            animation: 2s example 0s;\r\n}\r\n\r\n.slick-active h5 {\r\n    color: #00FFFF;\r\n    position: relative;\r\n    opacity: 0;\r\n    -webkit-animation: 2s flyinleft 1s forwards;\r\n            animation: 2s flyinleft 1s forwards;\r\n}\r\n\r\n.slick-active img {\r\n    position: relative;\r\n    opacity: 0;\r\n    -webkit-animation: 2s flyin 2s forwards;\r\n            animation: 2s flyin 2s forwards;\r\n    box-shadow: 0 0 20px rgba(255, 255, 255, 1);\r\n}\r\n\r\n.slick-active h6 {\r\n    position: relative;\r\n    opacity: 0;\r\n    -webkit-animation: 2s flyin 2s forwards;\r\n            animation: 2s flyin 2s forwards;\r\n}\r\n\r\n.slick-active p {\r\n    position: relative;\r\n    opacity: 0;\r\n    -webkit-animation: 2s flyinright 3s forwards;\r\n            animation: 2s flyinright 3s forwards;\r\n}\r\n\r\n.slick-slide .flyout {\r\n    -webkit-animation: 1s example 0s;\r\n            animation: 1s example 0s;\r\n}\r\n\r\n.duanbg {\r\n    /* The image used */\r\n    background-image: url('duantieubieu.jpg');\r\n    /* Full height */\r\n    width: 100%;\r\n    /* height: 500px; */\r\n    /* Create the parallax scrolling effect */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.recuit {\r\n    background-image: url('duantieubieu.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2REFBNkQ7SUFDN0QsV0FBVztJQUNYLGFBQWE7SUFDYixxREFBcUQ7SUFDckQsdUJBQXVCO0lBQ3ZCLHVDQUF5RDtJQUN6RCxzQkFBc0I7SUFDdEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2REFBNkQ7SUFFN0Qsb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdEQUF3QztZQUF4Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnTEFBNkg7SUFBN0gsNkhBQTZIO0FBQ2pJOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksOEJBQTJCO0lBQTNCLDhCQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLHlCQUFpQjtnQkFBakIsaUJBQWlCO1FBQ2pCLDZCQUFxQjtnQkFBckIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSx5QkFBaUI7Z0JBQWpCLGlCQUFpQjtRQUNqQiwyQkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSTtRQUNJLHlCQUFpQjtnQkFBakIsaUJBQWlCO1FBQ2pCLDZCQUFxQjtnQkFBckIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSx5QkFBaUI7Z0JBQWpCLGlCQUFpQjtRQUNqQiwyQkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksc0NBQThCO2dCQUE5Qiw4QkFBOEI7SUFDbEM7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksa0NBQTBCO2dCQUExQiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHNDQUE4QjtnQkFBOUIsOEJBQThCO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtDQUEwQjtnQkFBMUIsMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksa0NBQTBCO2dCQUExQiwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0NBQTBCO2dCQUExQiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLG1DQUEyQjtnQkFBM0IsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQ0FBNkI7Z0JBQTdCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksa0NBQTBCO2dCQUExQiwwQkFBMEI7UUFDMUIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFDQUE2QjtnQkFBN0IsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysa0NBQTBCO2dCQUExQiwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0NBQThCO2dCQUE5Qiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGtDQUEwQjtnQkFBMUIsMEJBQTBCO1FBQzFCLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQ0FBOEI7Z0JBQTlCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksVUFBVTtRQUNWLGtDQUEwQjtnQkFBMUIsMEJBQTBCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFDQUE2QjtnQkFBN0IsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtRQUMxQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUNBQTZCO2dCQUE3Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFVBQVU7UUFDVixrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsMkNBQW1DO1lBQW5DLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDRDQUFvQztZQUFwQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlDQUEyRDtJQUMzRCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBMkQ7SUFDM0QsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXQwOSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi9hc3NldHMvZ2lmL2JhY2tncm91bmQuZ2lmKSAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFubmVyLnBuZyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9pbWdzL2Jhbm5lcjEucG5nKW5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG4uZGF0Ymcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgNDIsIDEwNywgMC44KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oLWdsb3c6aG92ZXIge1xyXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJveC1nbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBib3gtZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb246IGJveC1nbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZSwgZmxvYXQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5wcm9kaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMjB2aDtcclxufVxyXG5cclxuLnBhcnRuZXJpdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4uem9vbWluIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XHJcbn1cclxuXHJcbi5mbG9hdCB7XHJcbiAgICBhbmltYXRpb246IGZsb2F0IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uZGltIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLmdyYWRpbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC4zKSA1JSwgcmdiYSgwLCAwLCAwLCAwLjMpIDk1JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcclxufVxyXG5cclxuLml0ZW1kdWFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuXHJcbi5pdGVtZHVhbnJldmVyc2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhhbXBsZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogU3RhbmRhcmQgc3ludGF4ICovXHJcblxyXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5b3V0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtMTAwMHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgyMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxvYXQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMjBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMTAwMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmx5aW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDEwMDBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbmxlZnQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC0xMDAwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmbHlpbmxlZnQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC0xMDAwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5aW5yaWdodCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTAwMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmx5aW5yaWdodCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTAwMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZnVsbHNjcmVlbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5zbGljay1hY3RpdmUgaDEge1xyXG4gICAgYW5pbWF0aW9uOiAycyBleGFtcGxlIDBzO1xyXG59XHJcblxyXG4uc2xpY2stYWN0aXZlIGg1IHtcclxuICAgIGNvbG9yOiAjMDBGRkZGO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogMnMgZmx5aW5sZWZ0IDFzIGZvcndhcmRzO1xyXG59XHJcblxyXG4uc2xpY2stYWN0aXZlIGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYW5pbWF0aW9uOiAycyBmbHlpbiAycyBmb3J3YXJkcztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi5zbGljay1hY3RpdmUgaDYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogMnMgZmx5aW4gMnMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5zbGljay1hY3RpdmUgcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYW5pbWF0aW9uOiAycyBmbHlpbnJpZ2h0IDNzIGZvcndhcmRzO1xyXG59XHJcblxyXG4uc2xpY2stc2xpZGUgLmZseW91dCB7XHJcbiAgICBhbmltYXRpb246IDFzIGV4YW1wbGUgMHM7XHJcbn1cclxuXHJcbi5kdWFuYmcge1xyXG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvZHVhbnRpZXViaWV1LmpwZycpO1xyXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogaGVpZ2h0OiA1MDBweDsgKi9cclxuICAgIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5yZWN1aXQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9kdWFudGlldWJpZXUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../fakedata/fakedata */ "./src/app/fakedata/fakedata.ts");




const listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })), { optional: true })
    ])
]);
const flyInList = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flyInList', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(100%)', }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('600ms 4s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                opacity: 1,
                transform: 'translateY(0%)'
            })))
        ], { optional: true })
    ])
]);
const flyIn1s = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flyIn1s', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(150%)',
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2s 500ms ease-in')),
]);
const fadeIn1s = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn1s', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('4s 2000ms ease-in')),
]);
let HomeComponent = class HomeComponent {
    constructor() {
        this.slides = _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_3__["Fakedata"].slides;
        this.slogan = _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_3__["Fakedata"].slogan;
        this.tuyendung = _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_3__["Fakedata"].tuyendung;
        this.doitacs = _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_3__["Fakedata"].doitacs;
        this.slideConfig = {
            // draggable: true,
            // centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            arrows: false,
        };
    }
    ngOnInit() {
    }
    link(str) {
        if (str != undefined && str.trim() !== '') {
            window.open(str).focus();
        }
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        animations: [listAnimation, flyIn1s, flyInList, fadeIn1s],
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroComponent = class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: __webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html"),
        styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
    })
], IntroComponent);



/***/ }),

/***/ "./src/app/partners/partners.component.css":
/*!*************************************************!*\
  !*** ./src/app/partners/partners.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/partners/partners.component.ts":
/*!************************************************!*\
  !*** ./src/app/partners/partners.component.ts ***!
  \************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PartnersComponent = class PartnersComponent {
    constructor() { }
    ngOnInit() {
    }
};
PartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partners',
        template: __webpack_require__(/*! raw-loader!./partners.component.html */ "./node_modules/raw-loader/index.js!./src/app/partners/partners.component.html"),
        styles: [__webpack_require__(/*! ./partners.component.css */ "./src/app/partners/partners.component.css")]
    })
], PartnersComponent);



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostsComponent = class PostsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html"),
        styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../fakedata/fakedata */ "./src/app/fakedata/fakedata.ts");



let ProductComponent = class ProductComponent {
    constructor() {
        this.products = _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_2__["Fakedata"].products;
    }
    ngOnInit() {
    }
};
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/recruititem/recruititem.component.css":
/*!*******************************************************!*\
  !*** ./src/app/recruititem/recruititem.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3J1aXRpdGVtL3JlY3J1aXRpdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recruititem/recruititem.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recruititem/recruititem.component.ts ***!
  \******************************************************/
/*! exports provided: RecruititemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruititemComponent", function() { return RecruititemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fakedata/fakedata */ "./src/app/fakedata/fakedata.ts");




let RecruititemComponent = class RecruititemComponent {
    constructor(activeroute) {
        this.activeroute = activeroute;
        this.item = {};
        this.recId = parseInt(this.activeroute.snapshot.paramMap.get('id'), 0);
        this.item = _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_3__["Fakedata"].tuyendung.filter((ele) => ele.id === this.recId)[0];
    }
    ngOnInit() {
        console.log(this.item);
        console.log(this.recId);
    }
};
RecruititemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RecruititemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recruititem',
        template: __webpack_require__(/*! raw-loader!./recruititem.component.html */ "./node_modules/raw-loader/index.js!./src/app/recruititem/recruititem.component.html"),
        styles: [__webpack_require__(/*! ./recruititem.component.css */ "./src/app/recruititem/recruititem.component.css")]
    })
], RecruititemComponent);



/***/ }),

/***/ "./src/app/recruitment/recruitment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/recruitment/recruitment.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3J1aXRtZW50L3JlY3J1aXRtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recruitment/recruitment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recruitment/recruitment.component.ts ***!
  \******************************************************/
/*! exports provided: RecruitmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentComponent", function() { return RecruitmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../fakedata/fakedata */ "./src/app/fakedata/fakedata.ts");



let RecruitmentComponent = class RecruitmentComponent {
    constructor() {
        this.tuyendung = _fakedata_fakedata__WEBPACK_IMPORTED_MODULE_2__["Fakedata"].tuyendung;
    }
    ngOnInit() {
    }
};
RecruitmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recruitment',
        template: __webpack_require__(/*! raw-loader!./recruitment.component.html */ "./node_modules/raw-loader/index.js!./src/app/recruitment/recruitment.component.html"),
        styles: [__webpack_require__(/*! ./recruitment.component.css */ "./src/app/recruitment/recruitment.component.css")]
    })
], RecruitmentComponent);



/***/ }),

/***/ "./src/app/tintuc/tintuc.component.css":
/*!*********************************************!*\
  !*** ./src/app/tintuc/tintuc.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".up{\r\n    margin-top: 3rem;\r\n}\r\n.up .container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n.up .item{\r\n    padding: .538em 1.077em;\r\n    border: 1px solid #e8e8e8;\r\n    color: #888;\r\n}\r\n.up .item.active{\r\n    color: #555;\r\n    background-color: #f7f7f7;\r\n}\r\n.up .container a{\r\n    margin-right: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.up .container a:hover{\r\n    text-decoration: none;\r\n}\r\n.up .container a:hover .item{\r\n    color: #555;\r\n    background-color: #f7f7f7;\r\n}\r\n/* end css up */\r\n.down .tin{\r\n    margin-bottom: 40px;\r\n}\r\n.down .tin .noidung a{\r\n    color: black;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n}\r\n.down .tin .noidung a:hover{\r\n    text-decoration: none;\r\n    color: #F4A919;\r\n}\r\n.down .tin .noidung p{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    color: #919191;\r\n}\r\n.down ul{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.down ul li{\r\n    float: left;\r\n    display: block;\r\n    padding: .615em .769em;\r\n    border: 1px solid #e8e8e8;\r\n    border-radius: 3px;\r\n}\r\n.pagenumber a.active li{\r\n    background-color: #f7f7f7;\r\n}\r\n.pagenumber a.active{\r\n    color: #555;\r\n}\r\n.pagenumber a{\r\n    color: #888;\r\n}\r\n.pagenumber a:hover li{\r\n    background-color: #f7f7f7;\r\n}\r\n.pagenumber a:hover{\r\n    color: #555;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGludHVjL3RpbnR1Yy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBR0EsZUFBZTtBQUlmO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdGludHVjL3RpbnR1Yy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwe1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG4udXAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4udXAgLml0ZW17XHJcbiAgICBwYWRkaW5nOiAuNTM4ZW0gMS4wNzdlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG4udXAgLml0ZW0uYWN0aXZle1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG59XHJcbi51cCAuY29udGFpbmVyIGF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4udXAgLmNvbnRhaW5lciBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi51cCAuY29udGFpbmVyIGE6aG92ZXIgLml0ZW17XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcblxyXG4vKiBlbmQgY3NzIHVwICovXHJcblxyXG5cclxuXHJcbi5kb3duIC50aW57XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5kb3duIC50aW4gLm5vaWR1bmcgYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLmRvd24gLnRpbiAubm9pZHVuZyBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNGNEE5MTk7XHJcbn1cclxuLmRvd24gLnRpbiAubm9pZHVuZyBwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBjb2xvcjogIzkxOTE5MTtcclxufVxyXG4uZG93biB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5kb3duIHVsIGxpe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IC42MTVlbSAuNzY5ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5wYWdlbnVtYmVyIGEuYWN0aXZlIGxpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxufVxyXG4ucGFnZW51bWJlciBhLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG59XHJcbi5wYWdlbnVtYmVyIGF7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG4ucGFnZW51bWJlciBhOmhvdmVyIGxpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxufVxyXG4ucGFnZW51bWJlciBhOmhvdmVye1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tintuc/tintuc.component.ts":
/*!********************************************!*\
  !*** ./src/app/tintuc/tintuc.component.ts ***!
  \********************************************/
/*! exports provided: TintucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TintucComponent", function() { return TintucComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TintucComponent = class TintucComponent {
    constructor() { }
    ngOnInit() {
    }
};
TintucComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tintuc',
        template: __webpack_require__(/*! raw-loader!./tintuc.component.html */ "./node_modules/raw-loader/index.js!./src/app/tintuc/tintuc.component.html"),
        styles: [__webpack_require__(/*! ./tintuc.component.css */ "./src/app/tintuc/tintuc.component.css")]
    })
], TintucComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\harmonyes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map