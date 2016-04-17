/**
 * Created by Administrator on 2016/4/8.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var table=document.getElementById("aqi-table");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city=document.getElementById("aqi-city-input");
    var value=document.getElementById("aqi-value-input");
    var table=document.getElementById("aqi-table");
    /*console.log(table.innerHTML==0);*///判断table是否为空，此方法错误

    var txt1="";
    var txt2="";
    /*console.log(city);*/
    txt1=city.value.trim();
    txt2=value.value.trim();
    aqiData.city=txt1;
    aqiData.value=txt2;
    /*console.log(aqiData);*/
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {


    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var del=document.createElement("a");
    del.setAttribute("class","delete");
    del.setAttribute("href","#");
    /*console.log(del);*/
    td1.innerHTML=aqiData.city;
    tr.appendChild(td1);
    /*console.log(tr);*/
    td2.innerHTML=aqiData.value;
    tr.appendChild(td2);
    del.innerHTML="删除";

    td3.appendChild(del);
    console.log(td3);
    tr.appendChild(td3);
    /*console.log(td2);*/
    table.appendChild(tr);


}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
    $('#aqi-city-input').value='';
    $('#aqi-value-input').value='';
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(eve) {
    // do sth.
    /*console.log(eve.target.className);*/
    if(eve.target.className.toLowerCase()=='delete')
    {
        $(eve.target).parent().parent().remove();

        /*尝试js方法未成功*/
        /*var a=document.getElementsByTagName('a');
        var ap= a.parentNode;
        console.log(a);

        $(a).remove();*/

    }
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var btn=document.getElementById("add-btn");

    /*addEventListener(btn,"click",false);*/
    btn.addEventListener('click',addBtnHandle);
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    table.addEventListener("click",delBtnHandle);

}

init();
