function myFunction1(){
    let inputnumber1 = prompt("nhập vào số a");
    let inputnumber2 = prompt("nhập vào b ");
    let a = parseInt(inputnumber1);
    let b = parseInt(inputnumber2);
    if (a%b ==0) {
        alert(a + " chia hết cho "+ b)
    } else {
        alert(a + " không chia hết cho "+ b)
    }
}
function myFunction2(){
    let age = prompt("nhập tuổi: ");
    if (age < 15){
        alert("không đủ điều kiện vào lớp 10")
    } else {
        alert("có thể nhập học vào lớp 10")
    }
}
function myFunction3(){
    let number = prompt("nhập vào 1 số nguyên khác 0")
    if (number > 0) {
        alert(number + " là số lớn hơn 0")
    } else {
        alert(number + " là số bé hơn 0")
    }
}
function myFunction4(){
    let number1 = prompt("nhập vào 1 số bất kì")
    let number2 = prompt("nhập vào 1 số bất kì khác số đầu tiền")
    let number3 = prompt("nhập vào 1 số bất kì khác số đầu tiền và số thứ 2")
    if (number1 > number2) {
        if (number1 > number3) {
            alert("số lớn nhất là: " + number1)
        } else {
            alert("số lớn nhất là: " +number3)
        }
    } else {
        if (number2 > number3) {
            alert("số lớn nhất là: " + number2)
        } else {
            alert("số lớn nhất là: " + number3)
        }
    }
}
function myFunction5(){
    let testpoint = prompt("nhập vào điểm kiểm tra")
    let midpoint = prompt("nhập vào điểm kiểm tra giữa kì")
    let endpoint = prompt("nhập vào điểm kiểm tra cuối kì")
    let pointtest = parseInt(testpoint);
    let pointmid = parseInt(midpoint);
    let pointend = parseInt(endpoint);
    let diemtb = (pointtest + pointmid*2 + pointend*3)/6;
    if (diemtb >= 8 ) {
        alert("xếp hạng học lực là: giỏi");
    } else {
        if (diemtb >= 7) {
            alert("xếp hạng học lực là: khá")
        } else {
            if (diemtb >=5) {
                alert("xếp hạng học lực là: Trung bình")
            } else {
                if (diemtb > 3) {
                    alert("xếp hạng học lực là: Yếu")
                } else {
                    alert("xếp hạng học lực là: kém")
                }
            }
        }
        
    }
}
function myFunction6(){
    let income = prompt("nhập doanh số tháng này(triệu)")
    if (income >=500) {
        let bonus = income*0.15;
        alert("tiền thưởng tháng này là: " + bonus + "triệu")
    } else {
        if (income >=300) {
            let bonus = income*0.1;
            alert("tiền thưởng tháng này là: " + bonus + "triệu")
        } else {
            if (income >= 100) {
                let bonus = income*0.05;
                alert("tiền thưởng tháng này là: " + bonus + "triệu")
            } else {
                let bonus = income*0.02;
                alert("tiền thưởng tháng này là: " + bonus + "triệu")
            }
        }
    }
}