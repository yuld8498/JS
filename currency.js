function myFunction(){
    var fromc = document.getElementById('fromc').value;
    var toc = document.getElementById('toc').value;
    var amount = +document.getElementById('amount').value;
    var result;
    if (fromc==toc) {
        alert("chọn loại tiền cần đổi");
    } else {
        if (fromc=="VND") {
            result = amount/23000;
            document.getElementById('showmemoney').innerHTML= result;
        } else {
            result = amount*23000;
            document.getElementById('showmemoney').innerHTML= result;
        }
    }
    
}