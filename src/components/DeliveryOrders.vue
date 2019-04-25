<template>
    
          <div class="first tabscon">
        <div class="b-icon tabshead">
          <a
            href="javascript:;"
            class="b-iconbox ttab active"
            data-target="#orders-delivery"
          >
            <i class="flaticon-delivery">
              <span>6</span>
            </i>
          </a>
          <a
            href="javascript:;"
            class="b-iconbox ttab"
            data-target="#orders-takeway"
          >
            <i class="flaticon-take-away">
              <span>6</span>
            </i>
          </a>
          <a
            href="javascript:;"
            class="b-iconbox ttab"
            data-target="#orders-notifications"
          >
            <i class="flaticon-ring">
              <span>6</span>
            </i>
          </a>
        </div>
        <div class="orders-filtered tabs in" id="orders-delivery">
          <div class="inner-tabscon">
            <div class="s-icon inner-tabshead">
              <div
                class="s-iconbox inner-ttab active"
                data-target=".orders-filtered-by-all"
              >
                <i class="flaticon-download"></i>
              </div>
              <div
                class="s-iconbox inner-ttab"
                data-target=".orders-filtered-by-success"
              >
                <i class="flaticon-approve-circular-button"></i>
              </div>
              <div
                class="s-iconbox inner-ttab"
                data-target=".orders-filtered-by-danger"
              >
                <i class="flaticon-deny"></i>
              </div>
              <div
                class="s-iconbox inner-ttab"
                data-target=".orders-filtered-by-warning"
              >
                <i class="flaticon-logout"></i>
              </div>
            </div>
            <div class="all-orders grass-bg">
              <div
                class="inner-tabs ofb in orders-filtered-by-all"
                data-simplebar
                data-simplebar-auto-hide="true"
              >
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
              </div>
              <div
                class="inner-tabs ofb orders-filtered-by-success"
                data-simplebar
                data-simplebar-auto-hide="true"
              >
                <div class="orderbox shadow-success">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-success">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-success">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
              </div>
              <div
                class="inner-tabs ofb orders-filtered-by-danger"
                data-simplebar
                data-simplebar-auto-hide="true"
              >
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
              </div>
              <div
                class="inner-tabs ofb orders-filtered-by-warning"
                data-simplebar
                data-simplebar-auto-hide="true"
              >
                <div class="orderbox delivery shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p style="color: #d26e1a;">Jhon Doe</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                  <div class="orderid">
                    <p>Order ID:234556</p>
                  </div>
                </div>
                <div class="orderbox delivery shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p style="color: #d26e1a;">Jhon Doe</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                  <div class="orderid">
                    <p>Order ID:234556</p>
                  </div>
                </div>
                <div class="orderbox delivery shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p style="color: #d26e1a;">Jhon Doe</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                  <div class="orderid">
                    <p>Order ID:234556</p>
                  </div>
                </div>
                <div class="orderbox delivery shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p style="color: #d26e1a;">Jhon Doe</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="flaticon-delivery"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                  <div class="orderid">
                    <p>Order ID:234556</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="orders-filtered tabs" id="orders-takeway">
          <div class="inner-tabscon">
            <div class="s-icon inner-tabshead">
              <div
                class="s-iconbox inner-ttab active"
                data-target=".orders-filtered-by-all"
              >
                <i class="flaticon-download"></i>
              </div>
              <div
                class="s-iconbox inner-ttab"
                data-target=".orders-filtered-by-success"
              >
                <i class="flaticon-approve-circular-button"></i>
              </div>
              <div
                class="s-iconbox inner-ttab"
                data-target=".orders-filtered-by-danger"
              >
                <i class="flaticon-deny"></i>
              </div>
              <div
                class="s-iconbox inner-ttab"
                data-target=".orders-filtered-by-warning"
              >
                <i class="flaticon-logout"></i>
              </div>
            </div>
            <div class="all-orders grass-bg">
              <div
                class="inner-tabs ofb in orders-filtered-by-all"
                data-simplebar
                data-simplebar-auto-hide="true"
              >
                <div class="orderbox shadow-success">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-home"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-globe"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-home"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-success">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-globe"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-home"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-globe"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
              </div>
              <div
                class="inner-tabs ofb orders-filtered-by-success"
                data-simplebar
                data-simplebar-auto-hide="true"
              >
                <div class="orderbox shadow-success">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-home"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-success">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-globe"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-success">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-home"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-success">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-globe"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
              </div>
              <div
                class="inner-tabs ofb orders-filtered-by-danger"
                data-simplebar
                data-simplebar-auto-hide="true"
              >
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-home"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-globe"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-home"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
                <div class="orderbox shadow-danger">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-globe"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                </div>
              </div>
              <div
                class="inner-tabs ofb orders-filtered-by-warning"
                data-simplebar
                data-simplebar-auto-hide="true"
              >
                <div class="orderbox delivery shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-home"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                  <div class="orderid">
                    <p>Pick Time: 12:59PM</p>
                  </div>
                </div>
                <div class="orderbox delivery shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-globe"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                  <div class="orderid">
                    <p>Pick Time: 12:59PM</p>
                  </div>
                </div>
                <div class="orderbox delivery shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-home"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                  <div class="orderid">
                    <p>Pick Time: 12:59PM</p>
                  </div>
                </div>
                <div class="orderbox delivery shadow-warning">
                  <div class="user">
                    <img src="@/assets/images/delivery/faces/avatar.jpg" />
                  </div>
                  <div class="userid">
                    <p>Order ID:234556</p>
                    <p class="order-time">22.12.2018 - 19:45:50</p>
                  </div>
                  <div class="worklogo">
                    <i class="fa fa-lg fa-globe"></i>
                  </div>
                  <div class="userprice">
                    <p class="price">29,90&euro;</p>
                    <p class="time">10 min</p>
                  </div>
                  <div class="orderid">
                    <p>Pick Time: 12:59PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="orders-filtered tabs" id="orders-notifications">
          <div
            class="ofb grass-bg"
            data-simplebar
            data-simplebar-auto-hide="true"
          >
            <div class="orderbox shadow-success">
              <div class="user">
                <img src="@/assets/images/delivery/faces/avatar.jpg" />
              </div>
              <div class="userid">
                <p>Order ID:234556</p>
                <p class="order-time">22.12.2018 - 19:45:50</p>
              </div>
              <div class="worklogo">
                <i class="fa fa-lg fa-globe"></i>
              </div>
              <div class="userprice">
                <p class="price">29,90&euro;</p>
                <p class="time">10 min</p>
              </div>
            </div>
            <div class="orderbox shadow-success">
              <div class="user user-icon">
                <i class="flaticon-parking-sign"></i>
              </div>
              <div class="userid">
                <p>Order ID:234556</p>
                <p class="order-time">22.12.2018 - 19:45:50</p>
              </div>
              <div class="worklogo">
                <i class="fa fa-lg fa-home"></i>
              </div>
              <div class="userprice">
                <p class="price">29,90&euro;</p>
                <p class="time">10 min</p>
              </div>
            </div>
            <div class="orderbox shadow-danger">
              <div class="user">
                <img src="@/assets/images/delivery/faces/avatar.jpg" />
              </div>
              <div class="userid">
                <p>Order ID:234556</p>
                <p class="order-time">22.12.2018 - 19:45:50</p>
              </div>
              <div class="worklogo">
                <i class="fa fa-lg fa-globe"></i>
              </div>
              <div class="userprice">
                <p class="price">29,90&euro;</p>
                <p class="time">10 min</p>
              </div>
            </div>
            <div class="orderbox shadow-danger">
              <div class="user user-icon">
                <i class="flaticon-parking-sign"></i>
              </div>
              <div class="userid">
                <p>Order ID:234556</p>
                <p class="order-time">22.12.2018 - 19:45:50</p>
              </div>
              <div class="worklogo">
                <i class="fa fa-lg fa-home"></i>
              </div>
              <div class="userprice">
                <p class="price">29,90&euro;</p>
                <p class="time">10 min</p>
              </div>
            </div>

            <div class="orderbox delivery shadow-warning">
              <div class="user">
                <img src="@/assets/images/delivery/faces/avatar.jpg" />
              </div>
              <div class="userid">
                <p>Order ID:234556</p>
                <p class="order-time">22.12.2018 - 19:45:50</p>
              </div>
              <div class="worklogo">
                <i class="fa fa-lg fa-home"></i>
              </div>
              <div class="userprice">
                <p class="price">29,90&euro;</p>
                <p class="time">10 min</p>
              </div>
              <div class="orderid">
                <p>Pick Time: 12:59PM</p>
              </div>
            </div>
            <div class="orderbox delivery shadow-warning">
              <div class="user user-icon">
                <i class="flaticon-parking-sign"></i>
              </div>
              <div class="userid">
                <p>Order ID:234556</p>
                <p class="order-time">22.12.2018 - 19:45:50</p>
              </div>
              <div class="worklogo">
                <i class="fa fa-lg fa-globe"></i>
              </div>
              <div class="userprice">
                <p class="price">29,90&euro;</p>
                <p class="time">10 min</p>
              </div>
              <div class="orderid">
                <p>Pick Time: 12:59PM</p>
              </div>
            </div>
            <div class="orderbox delivery shadow-warning">
              <div class="user">
                <img src="@/assets/images/delivery/faces/avatar.jpg" />
              </div>
              <div class="userid">
                <p style="color: #d26e1a;">Jhon Doe</p>
                <p class="order-time">22.12.2018 - 19:45:50</p>
              </div>
              <div class="worklogo">
                <i class="flaticon-delivery"></i>
              </div>
              <div class="userprice">
                <p class="price">29,90&euro;</p>
                <p class="time">10 min</p>
              </div>
              <div class="orderid">
                <p>Order ID:234556</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    
</template>

<script>
export default {

}
</script>

<style scoped>



</style>
