/*获取当前平台标识*/
/**
 * @returns strPlatformFlag true->PC false->mobile
 */
function getPlatformFlag() {
    var ua=window.navigator.userAgent;
    var strPlatformFlag=true;
    if(ua.indexOf('Mobile')>=0) strPlatformFlag=false;

    return strPlatformFlag;
}
/*获取当前平台标识*/
/*设置手机版导航*/
function setMobileNavBar() {
    if(getPlatformFlag()) return;
    var oMenuContainer=$(".navbar.navbar-fixed-top .menu-container");
    $(".navbar.navbar-fixed-top .menu-con").appendTo(oMenuContainer);
    $(".navbar.navbar-fixed-top .menu-con-right").appendTo(oMenuContainer);
}
setMobileNavBar();
/*设置手机版导航*/
//展开菜单
$(".navbar.navbar-fixed-top .icon-menu").click(function(){
    $(".navbar.navbar-fixed-top .menu-container").slideDown();
});
// 隐藏菜单
$(".navbar.navbar-fixed-top .icon-close").click(function(){
    $(".navbar.navbar-fixed-top .menu-container").slideUp();
});
//统计代码
var _mtac = {};
(function() {
    var mta = document.createElement("script");
    mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500631479");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
})();
/*ajax请求*/
//生产地址
localStorage.server_ip='http://demo.oramage.com/51basejy.com/';
function ajaxCall(url,params,callback){
    var serverRequest='';
    var options={
        url:url,
        type:'post',
        dataType:'json',
        // contentType: "application/json; charset=utf-8",
        success:function (data){
            callback(data);
        },
        error:function(error,data){
            console.log(data);
        }
    };
    if (params) {
        options.data = JSON.stringify(params);
    }

    try{
        serverRequest=$.ajax(options);
    }catch(e){
        console.log(e);
    }

    return serverRequest;
}
/*ajax请求*/
/*错误提示*/
function errorTip(strMessage) {
    var errorTipHtml='<div class="tips">'
        + '<span class="tiptxt">'+strMessage+'</span>'
        +'</div>';

    var oErrorTipHtml=$(errorTipHtml).appendTo(document.body);

    setTimeout(function () {
        $(oErrorTipHtml).remove();
    },1000);
}
/*错误提示*/