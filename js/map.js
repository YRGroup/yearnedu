/**
 * Created by user on 2017/11/7.
 */
var labelname1 = '郑州航空港区育人国际学校';
var point1 = new BMap.Point(113.843295,34.488319);

var labelname2 = '郑州外国语女子中学';
var point2 = new BMap.Point(113.761876,34.724177);

var labelname3 = '襄城县育人国际学校';
var point3 = new BMap.Point(113.493993,33.876571);

var labelname4 = '郑州航空港区育人高级中学';
var point4 = new BMap.Point(113.87045,34.59037);

//缩放比例
var zoom = 15;

var map1 = new BMap.Map("map1");    // 创建Map实例
var marker1 = new BMap.Marker(point1);  // 创建标注
map1.centerAndZoom(point1, zoom);  // 初始化地图,设置中心点坐标和地图级别
map1.addOverlay(marker1);       // 将标注添加到地图中
marker1.setAnimation(BMAP_ANIMATION_BOUNCE);  //标注动画
var label1 = new BMap.Label(labelname1,{offset:new BMap.Size(20,-10)}); //标注动画
marker1.setLabel(label1);

var map2 = new BMap.Map("map2");    // 创建Map实例
var marker2 = new BMap.Marker(point2);  // 创建标注
map2.centerAndZoom(point2, zoom);  // 初始化地图,设置中心点坐标和地图级别
map2.addOverlay(marker2);       // 将标注添加到地图中
marker2.setAnimation(BMAP_ANIMATION_BOUNCE);
var label2 = new BMap.Label(labelname2,{offset:new BMap.Size(20,-10)});
marker2.setLabel(label2);

var map3 = new BMap.Map("map3");    // 创建Map实例
var marker3 = new BMap.Marker(point3);  // 创建标注
map3.centerAndZoom(point3, zoom);  // 初始化地图,设置中心点坐标和地图级别
map3.addOverlay(marker3);       // 将标注添加到地图中
marker3.setAnimation(BMAP_ANIMATION_BOUNCE);
var label3 = new BMap.Label(labelname3,{offset:new BMap.Size(20,-10)});
marker3.setLabel(label3);

var map4 = new BMap.Map("map4");    // 创建Map实例
var marker4 = new BMap.Marker(point4);  // 创建标注
map4.centerAndZoom(point4, zoom);  // 初始化地图,设置中心点坐标和地图级别
map4.addOverlay(marker4);       // 将标注添加到地图中
marker4.setAnimation(BMAP_ANIMATION_BOUNCE);
var label4 = new BMap.Label(labelname4,{offset:new BMap.Size(20,-10)});
marker4.setLabel(label4);

//地图中心偏移量

if(window.innerWidth>=900){
    map1.panBy(300,200);
    map2.panBy(300,200);
    map3.panBy(300,200);
    map4.panBy(300,200);
}else{
    map1.panBy(100,150);
    map2.panBy(100,150);
    map3.panBy(100,150);
    map4.panBy(100,150);
}


//左上角，添加默认缩放平移控件
var top_left_navigation1 = new BMap.NavigationControl();
var top_left_navigation2 = new BMap.NavigationControl();
var top_left_navigation3 = new BMap.NavigationControl();
var top_left_navigation4 = new BMap.NavigationControl();
map1.addControl(top_left_navigation1);
map2.addControl(top_left_navigation2);
map3.addControl(top_left_navigation3);
map4.addControl(top_left_navigation4);

//开启鼠标滚轮缩放
map1.enableScrollWheelZoom(true);
map2.enableScrollWheelZoom(true);
map3.enableScrollWheelZoom(true);
map4.enableScrollWheelZoom(true);


$('.provider>li').mouseover(function () {
    console.log(1111)
    var i=$(this).index();
    $('.maps>li').eq(i).show().siblings().hide();
})