// lưu ý tên lop đối tương class(prototype) phai viet hoa chua cai dau tien 
// models chứa lớp đối tượng ( công thức )
var SinhVien = function () {
    // ĐỊNH NGHĨA THUỐC TÍNH CHO LỚP ĐÔI TƯƠNG DÙNG CON TRỎ THIS ĐẠI DIỆN CHO ĐỐI TƯỢNG DC TẠO DỰA CT 
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.loaiSinhVien = '';
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.diemRenLuyen = '';
    this.email = ''; 
    this.soDienThoai = '';
    this.tinhDiemTrungBinh = function () {
        var diemTrungBinh = ( Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa) ) /3;
        return diemTrungBinh;
    }
    this.xepLoaiSinhVien = function () {
        var ketQuaXL = '';
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