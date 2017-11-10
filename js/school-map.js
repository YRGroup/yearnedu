/**
 * Created by user on 2017/11/9.
 */
function initMap() {
    createMap(); //
    setMapEvent(); //
    addMapControl(); //
    addMarker(); //
}

function createMap() {
    var map = new BMap.Map("dituContent"); //

    var point = new BMap.Point(113.761876, 34.724177); //
    map.centerAndZoom(point, 15);
    window.map = map; //
}


function setMapEvent() {
    map.enableDragging(); //
    map.enableScrollWheelZoom(); //
    map.enableDoubleClickZoom(); //
    map.enableKeyboard(); //
}

//向地图添加控件
function addMapControl(){
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:3});
    map.addControl(navControl);
}

//
var markerArr = [{
    title: "郑州外国语女子中学",
    content: "电 话：0371-62005531 62005169<br>地 址：郑州市经开区经南二路12号",
    point: "113.761876|34.724177",
    isOpen: 1,
    icon: {
        w: 23,
        h: 25,
        l: 46,
        t: 21,
        x: 9,
        lb: 12
    }
}];
//
function addMarker() {
    for (var i = 0; i < markerArr.length; i++) {
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0, p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point, {
            icon: iconImg
        });
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title, {
            "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
        });
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
            borderColor: "#808080",
            color: "#333",
            cursor: "pointer"
        });

        (function () {
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click", function () {
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open", function () {
                _marker.getLabel().hide();
            })
            _iw.addEventListener("close", function () {
                _marker.getLabel().show();
            })
            label.addEventListener("click", function () {
                _marker.openInfoWindow(_iw);
            })
            if (!!json.isOpen) {
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}
function createInfoWindow(i) {
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title +
        "</b><div class='iw_poi_content'>" + json.content + "</div>");
    return iw;
}
function createIcon(json) {
    var icon = new BMap.Icon("http://map.baidu.com/image/us_mk_icon.png", new BMap.Size(json.w, json.h), {
        imageOffset: new BMap.Size(-json.l, -json.t),
        infoWindowOffset: new BMap.Size(json.lb + 5, 1),
        offset: new BMap.Size(json.x, json.h)
    })
    return icon;
}

initMap(); //
