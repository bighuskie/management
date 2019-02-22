/**
 * 说明：
 *  由于在ejs模板中统一引用jquery，所以统一将客户端的逻辑处理写在此文件，注意区分
 */

$(document).ready(function() {
  /**
   * 显示和隐藏api接口列表项
   */
  $(".api-control").on("click", function() {
    $(".api-wrapper").toggle("slow");
  });

  /**
   * 用户个人中心设置列表样式控制
   */
  $(".account-wrapper li:not('.title')").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  /**
   * 用户设置页发送请求逻辑
   */
  $("#userSettings").on("submit", function(e) {
    e.preventDefault();
    let user = $("input[name='username']").val();
    let email = $("input[name='email']").val();
    if (user && email) {
      let formdata = $(this).serialize();
      $.ajax({
        type: "post",
        url: "/account/settings",
        data: formdata,
        dataType: "json",
        success: function(res) {
          alert("更改成功");
        },
        error: function(err) {
          alert("更改失败");
          console.log(err);
        }
      });
    } else {
      alert("输入框不可以为空");
    }
  });
});
