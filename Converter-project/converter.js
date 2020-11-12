//alert('welcome');
var unit = {USD:1,
            NGN:0.0026,
            GBP:1.32,
            EUR:1.18,
            KWD:3.27,
            BHD:2.65,
            CAD:0.76,
            JOD:1.41,
            CHF:1.09,
            NZD:0.69};
function from() {
    currencyId=document.getElementById('fromName').value;
    currencyValue=document.getElementById('from').value;
    currencyId2=document.getElementById('toName').value;
    convert(currencyId,currencyValue,currencyId2,2)
}
function to() {
    currencyId=document.getElementById('fromName').value;
    currencyId2=document.getElementById('toName').value;
    currencyValue2=document.getElementById('to').value;
    convert(currencyId2,currencyValue2,currencyId,1)
}


function convert(curId,curVal,curId2,index) {
    //alert('Converting from '+curId+' '+curVal+' to '+curId2+' index: '+index);
    //alert(unit[curId] + ' ' + unit[curId2])
    newValue=(curVal * unit[curId]) / unit[curId2]
    if (index==1) {
        document.getElementById('from').value=newValue
    } else {
        document.getElementById('to').value=newValue   
    }
}
