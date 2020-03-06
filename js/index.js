$(function () {
  /* navbar回弹问题 */
  $(".mobile-menu .navbar-top li a").on("click", function () {
    let a = $(window).width()
    if (a <= 992) {
      $(".mobile-menu .navbar-toggle").trigger("click")
    }
  });

  /* 点击toggle, 动画事件 */
  // 动画属性
  let animationIn = $(".card-box .container").data("animation-in")
  let animationOut = $(".card-box .container").data("animation-out")
  // 需要点击显示的元素
  let item = $('.item-info .card-item')
  let li = $('.main-menu li')
  $('.main-menu').on('click', 'a', (function () {
    // 当前链接位置id
    let href = $(this).attr("href")
    let a = $(href)
    // 当前索引值
    // let index = $(this).index() - 1
    // 匹配当前元素最近的祖先
    let pp = $(this).closest('li')
    if (!pp.hasClass('active')) {
      li.removeClass('active')
      pp.addClass('active')
      // 移除所有进场, 添加出场
      item.removeClass('animated ' + animationIn)
      item.addClass('animated ' + animationOut)
      // 移除当前出场, 添加进场
      a.removeClass('animated ' + animationOut)
      a.addClass('animated ' + animationIn)
      item.addClass('hide-item')
      a.removeClass('hide-item')
      a.addClass('active')
    }
  }))

  $(window).on("resize", function () {
    /* 定位高度 */
    let h = $('.card-info .link-info').height()
    let item = $('.card-info .item-info')
    if (h) {
      item.height(h)
    } else {
      item.css('height', 'auto')
    }
    /* 滚动条, 要滚动的盒子 */
    let w = $(window).width()
    if (w < 992) {} else {
      $(".card-inner").niceScroll()
    }
  }).trigger("resize")
})