function QS(ele) {
  return document.querySelector(ele);
}
/* lập trình hướng đôi tượng ,đưa biến và hàm vào đúng vị trí của nó 

//Lưu thông tin lớp học 
var ma ='FE58';
var ten ='front end 58'
//thong tin 1 hoc vien
var ma = 'GV001';
var ten = 'Khai';
 var lopHoc ={
     ma:'FE58',
     ten:'front end 58',
     hienThiThongTin:function(){
         console.log("MaLH",this.ma);
     }
 }

  truy xuat bien trong doi tuong ( thuoc tinh )
 This; dai dien cho doi tuong 
 this=lopHoc 
 c1: ten_doi_tuong.thuocTinh
 c2: tenDoiDTuong[tenThuocTinh]
 console.log(lopHoc.ma);
 console.log(lopHoc['ma']);
//  goiham 2 C
lopHoc.hienThiThongTin();
lopHoc['hienThiThongTin']();

 var giangVien={
    ma:'GV001',
    ten:'Khai',
    hienThiThongTin:function(){
        console.log("MaGV",giangVien.ma);
    }
}
giangVien.hienThiThongTin(); */
var sinhVien = new SinhVien();
// sinhVien.maSinhVien =1;
// sinhVien.tenSinhVien='Nguyen van A'
// console.log('sv1',sinhVien);

// var sinhVien2=new SinhVien();
// sinhVien2.maSinhVien =2;
// sinhVien2.tenSinhVien='Nguyen van b'
// console.log('sv1',sinhVien2);
var arrSinhVien = [];
var validate = new Validation();

QS("#btnXacNhan").onclick = function (even) {
  //Lấy thông tin từ người dùng nhập vào gán vào đối tượng
  sinhVien.maSinhVien = QS("#maSinhVien").value;
  sinhVien.tenSinhVien = QS("#tenSinhVien").value;
  sinhVien.diemToan = QS("#diemToan").value;
  sinhVien.diemLy = QS("#diemLy").value;
  sinhVien.diemHoa = QS("#diemHoa").value;
  sinhVien.diemRenLuyen = QS("#diemRenLuyen").value;
  sinhVien.loaiSinhVien = QS("#loaiSinhVien").value;
  console.log(sinhVien);
  //hien thi du lieu len giao dien
  QS("#txtDiemTrungBinh").innerHTML = sinhVien.tinhDiemTrungBinh();
  document.querySelector(
    "#txtDiemTrungBinh"
  ).innerHTML = sinhVien.tinhDiemTrungBinh();
  QS("#txtXepLoai").innerHTML = sinhVien.xepLoaiSinhVien();
  QS("#txtTenSinhVien").innerHTML = sinhVien.tenSinhVien;
  QS("#txtMaSinhVien").innerHTML = sinhVien.maSinhVien;
  QS("#txtLoaiSinhVien").innerHTML = sinhVien.loaiSinhVien;



// KIỂM TRA DỮ LIỆU HỢP LỆ TRƯỚC KHIH THÊM VÀO MẢNG 
var valid=true;
//1 kiem tra rỗng 
valid &= validate.kiemTraRong('#maSinhVien','MA SINH vien','#kiemTraRong_maSinhVien') &
validate.kiemTraRong('#tenSinhVien','ten sv','#kiemTraRong_tenSinhVien');
//   valid &= validate.kiemTraEmail('#email','')
//   console.log(regexCyperlearn.test(value));

//  a &= b
//  a = a & bs
if(!valid){
    return
}





// var valid=true;
// if(sinhVien.maSinhVien===''){
//    QS('#kiemTraRong_maSinhVien').innerHTML='ma sinh vien k dc bo trong '
//    valid=false
// } else{
//     QS('#kiemTraRong_maSinhVien').innerHTML=''
// }
// if(sinhVien.tenSinhVien===''){
//     QS('#kiemTraRong_tenSinhVien').innerHTML='ten sinh vien k dc bo trong '
//     valid=false}
//     else{QS('#kiemTraRong_maSinhVien').innerHTML=''}
    

// if(!valid){
//     return
// }





  //Moi lan click them sinh vien => lay doi tuong sinh vien luu vap bang
  arrSinhVien.push(sinhVien);
  //sau khi them sv vao mang => lay mang sv tao ra chuoi tr roi in len giao dien
  console.log("mangsv", arrSinhVien);
  renderTableSinhVien(arrSinhVien)
};
var renderTableSinhVien = function (mangSinhVien) {
  var content = "";
  for (var i = 0; i < mangSinhVien.length; i++)
  {
    //moi lan duyet lay ra 1 doi tuong sv trong mang
    var sv = mangSinhVien[i];
    content += `
    <tr>
        <td>${sv.maSinhVien}</td>
        <td>${sv.tenSinhVien}</td>
        <td>${sv.loaiSinhVien}</td>
        <td>${sv.diemTrungBinh}</td>
        <td>${sv.diemRenLuyen}</td>
        <td> <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">delete </button> </td>
        </tr>
        `;
  }
  console.log(mangSinhVien)
  document.querySelector("#tblSinhVien").innerHTML = content;
};
// de biet cai nao tao ra tr tao ra sau 
window.xoaSinhVien=function(maSV){
    for(var i =arrSinhVien.length - 1 ;i>=0
        ;i--){
            var sv=arrSinhVien[i];
            if(sv.maSinhVien===maSV){
                arrSinhVien.splice(i,1);
            }
        }
        //goi ham tao lai bang
        renderTableSinhVien(arrSinhVien)
}


