/**
 * Created by Steven on 2016-10-25.
 */
var oTxt = document.getElementById('txt');
var oBtn = document.getElementById('btn');
var oList = document.getElementById('list');

var fruits = ["����","ƻ��","����","�㽶","���","����","����","����","��ݮ"];
//����¼�
oBtn.addEventListener('click', function(){
    var keyWord = oTxt.value;
    // var fruitList = searchByIndexOf(keyWord,fruits);
    console.log(fruitList);
    var fruitList = searchByRegExp(keyWord, fruits);
    renderFruits(fruitList);
}, false);
//�س���ѯ
oTxt.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        var keyWord = oTxt.value;
        // var fruitList = searchByIndexOf(keyWord,fruits);
        var fruitList = searchByRegExp(keyWord, fruits);
        renderFruits(fruitList);
    }
}, false);

function renderFruits(list){
    if(!(list instanceof Array)){
        return ;
    }
    oList.innerHTML = '';
    var len = list.length;
    var item = null;
    for(var i=0;i<len;i++){
        item = document.createElement('li');
        item.innerHTML = list[i];
        oList.appendChild(item);
    }
}
//ģ��ƥ���ʱ����������ִ�Сд������ʹ��toLowerCase()����toUpperCase()ת��֮��ȥƥ�䡣

//ģ����ѯ1:�����ַ�����indexOf����
function searchByIndexOf(keyWord, list){
    if(!(list instanceof Array)){
        return ;
    }
    var len = list.length;
    var arr = [];
    for(var i=0;i<len;i++){
        //����ַ����в�����Ŀ���ַ��᷵��-1
        if(list[i].indexOf(keyWord)>=0){
            arr.push(list[i]);
        }
    }
    return arr;
}
//����ƥ��
function searchByRegExp(keyWord, list){
    if(!(list instanceof Array)){
        return ;
    }
    var len = list.length;
    var arr = [];
    var reg = new RegExp(keyWord);
    for(var i=0;i<len;i++){
        //����ַ����в�����Ŀ���ַ��᷵��-1
        if(list[i].match(reg)){
            arr.push(list[i]);
        }
    }
    return arr;
}
renderFruits(fruits);