
function kiemtrasonguyento(n){
    var flag = true;

    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
 
    return flag;
}
 
function danhSachSoNguyenTo()
{
    var n = document.getElementById("txt-n").value*1;
    var html = '';
    if(n<2){
            document.getElementById("insont").innerHTML = `<h2 class="mt-5 text-danger text-center">
            Không có số nguyên tố</h2>`;
    return 0;
    }
    for (var i = 1; i <= n; i++) {
        if (kiemtrasonguyento(i)){
            html += i + ' ';
        }
    }
    document.getElementById("insont").innerHTML = `<h2 class="mt-5 text-danger text-center">
    Dãy số nguyên tố là: ${html} </h2>`;
}