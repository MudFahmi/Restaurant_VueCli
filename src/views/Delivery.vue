<template>
<div>
    <div class="main">

<delivery-orders />

<category-simplebar />

<menu-bill />



    <!-- Modals Start From here -->
      <!-- Settings Main Modal -->
      <div class="modal fade" id="settings-main-modal" tabindex="-1" role="dialog" aria-labelledby="Settings popup" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
          <div class="modal-content" style="padding-left:115px;">
              <div id="settings-modal-v-tab" class="v-pills-tab" data-simplebar data-simplebar-auto-hide="true">
                  <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                      <a class="nav-link popup-tabs gradient-box-shadow" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="false">
                        <i class="flaticon-shop-store-frontal-building"></i>
                      </a>
                      <a class="nav-link popup-tabs gradient-box-shadow" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        <i class="flaticon-waiter"></i>
                      </a>
                      <a class="nav-link popup-tabs gradient-box-shadow" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        <i class="flaticon-printer"></i>
                      </a>
                      <a class="nav-link popup-tabs gradient-box-shadow" data-toggle="pill" href="#settings-modal-data" role="tab" aria-controls="settings-modal-data" aria-selected="false">
                        <i class="flaticon-paragraph"></i>
                      </a>
                      <a class="nav-link popup-tabs gradient-box-shadow active" data-toggle="pill" href="#settings-modal-reciept" role="tab" aria-controls="settings-modal-reciept" aria-selected="false">
                        <i class="flaticon-receipt-1"></i>
                      </a>
                      <a class="nav-link popup-tabs gradient-box-shadow" data-toggle="pill" href="#settings-modal-data" role="tab" aria-controls="settings-modal-data" aria-selected="true">
                        <i class="flaticon-data"></i>
                      </a>
                      <a class="nav-link popup-tabs gradient-box-shadow" data-toggle="pill" href="#settings-modal-settings" role="tab" aria-controls="settings-modal-data" aria-selected="false">
                        <i class="flaticon-settings-gears"></i>
                      </a>
                    </div>
              </div>
            <div class="modal-header">
              <h5 class="modal-title">Settings</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
              <div class="tab-content v-pills-tabContent">
                <div class="tab-pane" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore qui architecto et assumenda sunt quasi odit excepturi in consequuntur amet.</div>
                <div class="tab-pane" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore qui architecto et assumenda sunt quasi odit excepturi in consequuntur amet.</div>
                <div class="tab-pane" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore qui architecto et assumenda sunt quasi odit excepturi in consequuntur amet.</div>
                
                <div class="tab-pane show active" id="settings-modal-reciept" role="tabpanel" aria-labelledby="settings-modal-reciept-tab">
                    <ul class="nav nav-tabs settings-modal-inner-tabs" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active " id="home-tab" data-toggle="tab" href="#home1" role="tab" aria-controls="home" aria-selected="true">Daily Cash Up</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#home1" role="tab" aria-controls="profile" aria-selected="false">Monthly Cash Up</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#home1" role="tab" aria-controls="contact" aria-selected="false">Yearly Cash Up</a>
                      </li>
                    </ul>

                    <ul class="nav sort-by-nav">
                      <li class="nav-item">
                        <a href="javascript:;" class="nav-link">Sort By Select</a>
                      </li>
                      <li class="nav-item">
                        <a href="javascript:;" class="nav-link">Sort By Select</a>
                      </li>
                      <li class="nav-item">
                        <a href="javascript:;" class="nav-link">Sort By Date</a>
                      </li>
                      <li class="nav-item">
                        <a href="javascript:;" class="nav-link">Sort By Date</a>
                      </li>
                    </ul>
                    
                      <div class="tab-content" id="settings-modal-reciept-inner-tab-content">
                        <div class="tab-pane show active" style="height:100%" id="home1" role="tabpanel" aria-labelledby="home-tab">
                            <div class="modal-tab-first-half" data-simplebar data-simplebar-auto-hide="true">

                                
                                <div class="reciept-box">
                                  <div class="r-date">
                                    <span>Today</span>
                                    <span>17.12.2018</span>
                                  </div>
                                  <div class="r-dec">
                                    <span>- 150,00 &euro;</span>
                                    <span>10:00 - 15:00</span>
                                  </div>
                                  <div class="r-inc">
                                    <span>+ 350,00 &euro;</span>
                                    <span>17:00 - 18:00</span>
                                  </div>
                                </div>

                                <div class="knob-container">
                                    <input type="text" value="35" class="knob-dial" data-fgColor="#00acc1" data-thickness=.15 data-displayInput=false data-linecap="round">
                                    <div class="knob-inner-text">
                                      <p>350,00 &euro;</p>
                                      <span>Dine In</span>
                                    </div>
                                </div>
                                <div class="knob-container">
                                    <input type="text" value="35" class="knob-dial" data-fgColor="#00acc1" data-thickness=.15 data-displayInput=false data-linecap="round">
                                    <div class="knob-inner-text">
                                      <p>82,00 &euro;</p>
                                      <span>Take Away</span>
                                    </div>
                                </div>
            
                              </div>
            
                            <div class="modal-tab-last-half" data-simplebar data-simplebar-auto-hide="true">
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                              <div class="reciept-box">
                                <div class="r-date">
                                  <span>Today</span>
                                  <span>17.12.2018</span>
                                </div>
                                <div class="r-dec">
                                  <span>- 150,00 &euro;</span>
                                  <span>10:00 - 15:00</span>
                                </div>
                                <div class="r-inc">
                                  <span>+ 350,00 &euro;</span>
                                  <span>17:00 - 18:00</span>
                                </div>

                              </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div class="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                      </div>
                </div>
                
                <div class="tab-pane show" id="settings-modal-data" role="tabpanel" aria-labelledby="settings-modal-data-tab">

                  <div class="modal-tab-first-half" data-simplebar data-simplebar-auto-hide="true">

                    <div class="upload-type icon-box" data-toggle="modal" data-target="#backUpConfig">
                      <i class="flaticon-data"></i>
                      <div>
                        <p>Local/Cloud/Drive Backup</p>
                        <span>Auto Start</span>
                      </div>
                    </div>

                    <div class="upload-type icon-box" data-toggle="modal" data-target="#backUpConfig" >
                      <i class="flaticon-data"></i>
                      <div>
                        <p>Local/Cloud/Drive Backup</p>
                        <span>Manuell Start</span>
                      </div>
                    </div>

                  </div>

                  <div class="modal-tab-last-half" data-simplebar data-simplebar-auto-hide="true">
                    <div class="upload-info gradient-box-shadow">
                      <i class="flaticon-data"></i>
                      <span>12.10.208</span>
                      <span>00:15h</span>
                      <span>2MB</span>
                    </div>
                    <div class="upload-info gradient-box-shadow">
                      <i class="flaticon-data"></i>
                      <span>12.10.208</span>
                      <span>00:15h</span>
                      <span>2MB</span>
                    </div>
                    <div class="upload-info gradient-box-shadow">
                      <i class="flaticon-data"></i>
                      <span>12.10.208</span>
                      <span>00:15h</span>
                      <span>2MB</span>
                    </div>
                    <div class="upload-info gradient-box-shadow">
                      <i class="flaticon-data"></i>
                      <span>12.10.208</span>
                      <span>00:15h</span>
                      <span>2MB</span>
                    </div>
                    <div class="upload-info gradient-box-shadow">
                      <i class="flaticon-data"></i>
                      <span>12.10.208</span>
                      <span>00:15h</span>
                      <span>2MB</span>
                    </div>
                    <div class="upload-info gradient-box-shadow">
                      <i class="flaticon-data"></i>
                      <span>12.10.208</span>
                      <span>00:15h</span>
                      <span>2MB</span>
                    </div>
                    <div class="upload-info gradient-box-shadow">
                      <i class="flaticon-data"></i>
                      <span>12.10.208</span>
                      <span>00:15h</span>
                      <span>2MB</span>
                    </div>
                    <div class="upload-info gradient-box-shadow">
                      <i class="flaticon-data"></i>
                      <span>12.10.208</span>
                      <span>00:15h</span>
                      <span>2MB</span>
                    </div>
                    <div class="upload-info gradient-box-shadow">
                      <i class="flaticon-data"></i>
                      <span>12.10.208</span>
                      <span>00:15h</span>
                      <span>2MB</span>
                    </div>
                  </div>
                </div>

                <div class="tab-pane show" id="settings-modal-settings" role="tabpanel" aria-labelledby="settings-modal-settings-tab">
                    <ul class="nav nav-tabs settings-modal-inner-tabs" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active " id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Security</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#home" role="tab" aria-controls="profile" aria-selected="false">Start</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#home" role="tab" aria-controls="contact" aria-selected="false">Backup</a>
                        </li>
                      </ul>
                      <div class="tab-content" id="settings-modal-settings-inner-tab-content">
                        <div class="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="modal-tab-first-half" data-simplebar data-simplebar-auto-hide="true">

                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
                                <div class="allow-multi-devices">
                                  <i class="flaticon-settings-gears"></i>
                                  <p>Allow Multi Devices</p>
                                </div>
            
                              </div>
            
                            <div class="modal-tab-last-half" data-simplebar data-simplebar-auto-hide="true">
                              <div class="box-with-checkboxes">
                                <div class="checkbox-container">
                                  <input type="radio" name="yes-no-1" id="yes-1">
                                  <label for="yes-1">Yes</label>
                                </div>
                                <div class="checkbox-container">
                                  <input type="radio" checked name="yes-no-1" id="no-1">
                                  <label for="no-1">No</label>
                                </div>
                              </div>
                              <div class="box-with-checkboxes">
                                <div class="checkbox-container">
                                  <input type="radio" name="yes-no-2" id="yes-2">
                                  <label for="yes-2">Yes</label>
                                </div>
                                <div class="checkbox-container">
                                  <input type="radio" checked name="yes-no-2" id="no-2">
                                  <label for="no-2">No</label>
                                </div>
                              </div>
                              <div class="box-with-checkboxes">
                                <div class="checkbox-container">
                                  <input type="radio" name="yes-no-3" id="yes-3">
                                  <label for="yes-3">Yes</label>
                                </div>
                                <div class="checkbox-container">
                                  <input type="radio" checked name="yes-no-3" id="no-3">
                                  <label for="no-3">No</label>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div class="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                      </div>                  
                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-outline-secondary">Save</button>
            </div>
          </div>
        </div>
      </div>

      <!-- BackUpConfig Modal -->
      <div class="modal fade" id="backUpConfig" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Auto Start</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- <input type="text" class="form-control text-center mb-3" placeholder="Interval" name="interval" value="Every Day"> -->
              <select style="text-align-last: center;" class="form-control text-center mb-3" name="interval" id="">
                <option class="text-center" value="">Every Day</option>
                <option class="text-center" value="">Satarday</option>
                <option class="text-center" value="">Sunday</option>
                <option class="text-center" value="">Monday</option>
                <option class="text-center" value="">Tuesday</option>
                <option class="text-center" value="">Wensday</option>
                <option class="text-center" value="">Thursday</option>
                <option class="text-center" value="">Friday</option>
              </select>
              <select style="text-align-last: center;" class="form-control text-center" name="time" id="">
                <option class="text-center" value="">00:00</option>
                <option class="text-center" value="">01:00</option>
                <option class="text-center" value="">02:00</option>
                <option class="text-center" value="">03:00</option>
              </select>
              <!-- <input type="text" class="form-control text-center" placeholder="00:00" name="time"> -->
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-outline-secondary">Save changes</button> -->
              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Setup</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>

    
</template>

<script>


import DeliveryOrders from '@/components/DeliveryOrders.vue'
import CategorySimplebar from '@/components/CategorySimplebar.vue'
import MenuBill from '@/components/MenuBill.vue' 

export default {
  components: {
    DeliveryOrders,
    CategorySimplebar,
    MenuBill
  }
};

</script>

<style>

@media (max-width: 1375px) {
  /* .orderbox {
    height: auto;
    float: left;
  }
  .user {
    margin: auto;
    float: none;
    margin-bottom: 10px;
  }
  .userid {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }
  .price {
    display: inline-block;
  }
  .time {
    display: inline-block;
    margin-left: 10px;
  }
  .worklogo i {
    font-size: 30px;
  }
  .third-box {
    margin-bottom: 0;
  }
  .third-subbox {
    width: calc(100% - 22px);
    margin-bottom: 20px;
  }
  .third {
    width: 25%;
  }
  .fourth {
    width: 30%;
  }
  .fourthsec {
    height: 700px;
    overflow-y: auto;
  } */
}

</style>
