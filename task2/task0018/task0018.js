/**
 * Created by Administrator on 2016/4/21.
 */
var btnSpan=document.getElementById("button");
var leftIn=document.getElementById('left-in');
var leftOut=document.getElementById('left-out');
var rightIn=document.getElementById('right-in');
var rightOut=document.getElementById('right-out');
var txt=document.getElementById('text');
var line=document.getElementById('line-show');
var lineArr=[];
var txtInner='';

btnSpan.onclick=function(eve){
    txtInner=txt.value;
    /*利用switch 语句？*/
  /*  switch(eve.target.className){
        case l-in: lineArr.unshift(txtInner);//数组开头加入

            renderLine();break;
    }*/
    if(eve.target.className=='l-in'){
        if(txt.value==""){
            alert("请输入内容！");
        }

        lineArr.unshift(txtInner);//数组开头加入

        renderLine();
    }
    else if(eve.target.className=='r-in'){
        if(txt.value==""){
            alert("请输入内容！");
        }
        lineArr.push(txtInner);//数组结尾加入

        renderLine();
    }
    else if(eve.target.className=='l-out'){
        if(lineArr.length==0){
            alert("无可删除成员!");
        }else{
            lineArr.shift(txtInner);//数组开头删除

            renderLine();
        }

    }
    else if(eve.target.className=='r-out'){
        if(lineArr.length==0){
            alert("无可删除成员!");
        }else{
            lineArr.pop(txtInner);//数组结尾删除

            renderLine();
        }

    }
}
function renderLine(){
    line.innerHTML=null;
    for(i=0;i<lineArr.length;i++){
        var oDiv=document.createElement('div');
        oDiv.innerHTML=lineArr[i];

        line.appendChild(oDiv);
        delItem(oDiv,i);
    }



    /*alert(lineArr);*/
}
function delItem(it,index){
    it.onclick=function(){
        lineArr.splice(index,1);
        /*alert(lineArr);*/
        renderLine();
    }

}