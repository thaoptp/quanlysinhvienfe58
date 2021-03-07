/* lập trình hướng đôi tượng ,đưa biến và hàm vào đúng vị trí của nó'
property ( thuộc tính ): danh từ màu sắc....
menthor( phương thức)" động từ hành động của đối tươg ...."
//Lưu thông tin lớp học 
var ma ='FE58';
var ten ='front end 58'
//thong tin 1 hoc vien
var ma = 'GV001';
var ten = 'Khai';
 var lopHoc ={
     ma:'FE58',
     ten:'front end 58',
// CÁCH TẠO HÀM 
     hienThiThongTin:function(){
         console.log("MaLH",this.ma);
     }
 }

  CÁCH truy xuat bien trong doi tuong ( thuoc tinh )
 This; dai dien cho doi tuong 
 this=lopHoc 
 c1: ten_doi_tuong.thuocTinh
  console.log(lopHoc.ma);
 c2: tenDoiDTuong['tenThuocTinh']( k có chấm )
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
function QS(ele) {
    return document.querySelector(ele);
  }
// TẠO ĐỐI TƯỢNG SINH VIÊN 
var sinhVien = {
    maSinhVien: '',
    tenSinhVien:'',
    loaiSinhVien:'',
    diemToan:0,
    diemLy:0,
    diemHoa:0,
    diemRenLuyen:0,
    // ham trong oop
    tinhDiemTrungBinh : function () {
        var diemTrungBinh = ( Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa) ) /3;
        return diemTrungBinh;
    },
    xepLoaiSinhVien: function () { 
        var ketQuaXL = '';
        var diemTrungBinh=this.tinhDiemTrungBinh();
        var diemTrungBinh = this.tinhDiemTrungBinh();
        if(this.diemRenLuyen < 5 || this.tinhDiemTrungBinh() < 5) {
            ketQuaXL = 'Yếu';
        }   else if (diemTrungBinh >= 5 && diemTrungBinh < 6) {
            ketQuaXL = 'Trung bình';
        } else if (diemTrungBinh >= 6 && diemTrungBinh < 7) {
            ketQuaXL = 'Trung bình khá';
        } else if (diemTrungBinh >= 7 && diemTrungBinh < 8) {
            ketQuaXL = 'Khá';
        } else if (diemTrungBinh >=8 && diemTrungBinh < 9) {
            ketQuaXL = 'Giỏi';
        } else if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
            ketQuaXL = 'Xuất sắc';
        } else {
            ketQuaXL = 'Không hợp lệ!';
        }
        return ketQuaXL;
    }
}
QS('#btnXacNhan').onclick=function(even){
    //Lấy thông tin từ người dùng nhập vào gán vào đối tượng
    sinhVien.maSinhVien = QS('#maSinhVien').value;
    sinhVien.tenSinhVien = QS('#tenSinhVien').value;
    sinhVien.diemToan = QS('#diemToan').value;
    sinhVien.diemLy = QS('#diemLy').value;
    sinhVien.diemHoa = QS('#diemHoa').value;
    sinhVien.diemRenLuyen = QS('#diemRenLuyen').value;
    sinhVien.loaiSinhVien = QS('#loaiSinhVien').value;
console.log(sinhVien);
//hien thi du lieu len giao dien 
QS('#txtDiemTrungBinh').innerHTML=sinhVien.tinhDiemTrungBinh();
QS('#txtDiemTrungBinh').innerHTML = sinhVien.tinhDiemTrungBinh();
    QS('#txtXepLoai').innerHTML = sinhVien.xepLoaiSinhVien();
    QS('#txtTenSinhVien').innerHTML = sinhVien.tenSinhVien;
    QS('#txtMaSinhVien').innerHTML = sinhVien.maSinhVien;
    QS('#txtLoaiSinhVien').innerHTML = sinhVien.loaiSinhVien;
}