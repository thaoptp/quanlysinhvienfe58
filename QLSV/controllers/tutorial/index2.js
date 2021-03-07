//lấy thông tin người dùng từ thẻ input => sau khi người dùng bấm
function QS(ele) {
  return document.querySelector(ele);
}
document.querySelector("#btnXacNhan").onclick = function (event) {
  // lay thong tin nguoi dung
  var maSinhVien = QS("#maSinhVien").value;
  var tenSinhVien = QS("#tenSinhVien").value;
  var loaiSinhVien = QS("#loaiSinhVien").value;
  var diemRenLuyen = QS("#diemRenLuyen").value;
  var T = QS("#diemToan").value;
  var H = QS("#diemHoa").value;
  var L = QS("#diemLy").value;
  var diemTB = tinhDiemTB(T, L, H);
  var xepLoaiSV=xepLoai(diemTB, diemRenLuyen);
  //hien thi ra giao dien

  QS('#txtTenSinhVien').innerHTML = tenSinhVien;
  QS('#txtMaSinhVien').innerHTML = maSinhVien;
  QS('#txtLoaiSinhVien').innerHTML = loaiSinhVien;
  QS('#txtDiemTrungBinh').innerHTML = diemTB.toFixed(2);
  /* to fixed de lay 2 so thoi */
  QS('#txtXepLoai').innerHTML = xepLoaiSV;
};
//cong thuc tinh diem trung binh
var tinhDiemTB = function DTB(T, H, L) {
  var DTB = (Number(T) + Number(L) + Number(H)) / 3;
  return DTB;
};
//Công thức tính điểm trung bình
// Nếu diemRenLuyen < 5 => yếu
// Nếu diemRenLuyen >= 5
/*
    dtb < 5 => yếu
    5 <= dtb < 6 => Trung bình
    5 <= dtb < 6 => Trung bình 
    6 <= dtb < 7 => Trung bình khá 
    7 <= dtb < 8 => Khá 
    8 <= dtb < 9 => Giỏi 
    9 <= dtb <= 10 => Xuất sắc 
*/
var xepLoai = function (diemTB, diemRenLuyen) {
  var ketQuaXepLoai = "";
  if (diemRenLuyen < 5 || diemTB < 5) {
    ketQuaXepLoai = "Yếu";
  } else if (diemTB >= 5 && diemTB < 6) {
    ketQuaXepLoai = "Trung bình";
  } else if (diemTB >= 6 && diemTB < 7) {
    ketQuaXepLoai = "Trung bình khá";
  } else if (diemTB >= 7 && diemTB < 8) {
    ketQuaXepLoai = "Khá";
  } else if (diemTB >= 8 && diemTB < 9) {
    ketQuaXepLoai = "Giỏi";
  } else if (diemTB >= 9 && diemTB <= 10) {
    ketQuaXepLoai = "Xuất sắc";
  } else {
    ketQuaXepLoai = "Không hợp lệ!";
  }
  return ketQuaXepLoai;
};
