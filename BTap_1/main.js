//BT1
// function kiemTraChiaHet(a, b) {
//     if (b === 0) {
//         return "Số chia không thể bằng 0";
//     }
//     if (a % b === 0) {
//         return `${a} chia hết cho ${b}`;
//     } else {
//         return `${a} không chia hết cho ${b}`;
//     }
// }


// let a = parseInt(prompt("Nhập số a: "), 10);
// let b = parseInt(prompt("Nhập số b: "), 10);


// let ketQua = kiemTraChiaHet(a, b);
// console.log(ketQua);
// alert(ketQua);

//BT2
// function nhapSo(thongDiep) {
//     let so;
//     while (true) {
//         let nhap = prompt(thongDiep);
//         so = parseInt(nhap, 10);
//         if (!isNaN(so) && so > 0) {
//             break;
//         }
//         alert("Giá trị không hợp lệ. Vui lòng nhập một số nguyên dương.");
//     }
//     return so;
// }

// function kiemTraTuoi(soTuoi) {
//     const tuoiToiThieu = 15;
//     if (soTuoi >= tuoiToiThieu) {
        // return `Học sinh đủ điều kiện vào học lớp 10. Tuổi của học sinh: ${soTuoi}`;
//     } else {
//         return `Học sinh không đủ điều kiện vào học lớp 10. Tuổi của học sinh: ${soTuoi}`;
//     }
// }

// let tuoi = nhapSo("Nhập tuổi của học sinh: ");
// let ketQua = kiemTraTuoi(tuoi);
// console.log(ketQua);
// alert(ketQua);

//BT3
// function nhapSo(message){
//     let so;
//     while(true){
//         let nhap = prompt(message);
//         so = parseInt(nhap);
//         if (!isNaN(so) && nhap == so) {
//             break;
//         }
//         alert("Giá trị không hợp lệ. Vui lòng nhập một số nguyên.");
//     }
//     return so;
// }

// function kiemTraSoNguyen(so){
//     if(so > 0){
//         return `${so} là số lớn hơn 0`;
//     } else if(so < 0){
//         return ` ${so} là số nhỏ hơn 0`;
//     }else{
//         return `${so} là số 0`;
//     }
// }

// let soNguyen = nhapSo("Nhập số nguyên: ");
// let ketQua = kiemTraSoNguyen(soNguyen);
// console.log(ketQua);
// alert(ketQua);

//BT4
// function nhapSoNguyen(message) {
//     let so;
//     while (true) {
//         let nhap = prompt(message);
//         so = parseInt(nhap);
//         if (!isNaN(so) && nhap == so) { 
//             break;
//         }
//         alert("Giá trị không hợp lệ. Vui lòng nhập một số nguyên.");
//     }
//     return so;
// }

// function timGiaTriLonNhat(so1, so2, so3) {
//     return Math.max(so1, so2, so3);
// }

// let so1 = nhapSoNguyen("Nhập số nguyên thứ nhất: ");
// let so2 = nhapSoNguyen("Nhập số nguyên thứ hai: ");
// let so3 = nhapSoNguyen("Nhập số nguyên thứ ba: ");

// let giaTriLonNhat = timGiaTriLonNhat(so1, so2, so3);
// let ketQua = `Giá trị lớn nhất trong ba số ${so1}, ${so2}, ${so3} là ${giaTriLonNhat}.`;
// console.log(ketQua);
// alert(ketQua);

//BT5
// function nhapDiem(message){
//     let so;
//     while(true){
//         let nhap = prompt(message);
//         so = parseFloat(nhap);
//         if(!isNaN(so) && so > 0 && nhap == so){
//             break;
//         }
//         alert("Giá trị không hợp lệ. Vui lòng nhập một số nguyên dương")
//     }
//     return so;
// }

// function xepHangHocLuc(diemBaiKiemTra, diemGiuaKy, diemCuoiKy) {
//     let diemTrungBinh = diemBaiKiemTra * 0.2 + diemGiuaKy * 0.3 + diemCuoiKy * 0.5;
    
//     if (diemTrungBinh >= 8.5) {
//         return `Học sinh đạt học lực Giỏi với điểm trung bình là ${diemTrungBinh.toFixed(2)}.`;
//     } else if (diemTrungBinh >= 7.0) {
//         return `Học sinh đạt học lực Khá với điểm trung bình là ${diemTrungBinh.toFixed(2)}.`;
//     } else if (diemTrungBinh >= 5.0) {
//         return `Học sinh đạt học lực Trung bình với điểm trung bình là ${diemTrungBinh.toFixed(2)}.`;
//     } else {
//         return `Học sinh đạt học lực Yếu với điểm trung bình là ${diemTrungBinh.toFixed(2)}.`;
//     }
// }

// let diemKt = nhapDiem("Nhập điểm kiểm tra: ");
// let diemGK = nhapDiem("Nhập điểm giữa kì: ");
// let diemCK = nhapDiem("Nhập điểm cuối kì: ");
// let diemTB = xepHangHocLuc(diemKt, diemGK, diemCK);
// console.log(diemTB);
// alert(diemTB);

//BT6
// function nhapSoThuc(message) {
//     let so;
//     while (true) {
//         let nhap = prompt(message);
//         so = parseFloat(nhap);
//         if (!isNaN(so) && so > 0) { // Kiểm tra số thực dương
//             break;
//         }
//         alert("Giá trị không hợp lệ. Vui lòng nhập một số thực dương.");
//     }
//     return so;
// }

// function kiemTraTamGiac(a, b, c) {
//     if (a + b > c && a + c > b && b + c > a) {
//         return `Ba số ${a}, ${b}, ${c}  là 3 cạnh của một tam giác.`;
//     } else {
//         return `Ba số ${a}, ${b}, ${c} không thể là 3 cạnh của một tam giác.`;
//     }
// }

// let a = nhapSoThuc("Nhập cạnh thứ nhất (a): ");
// let b = nhapSoThuc("Nhập cạnh thứ hai (b): ");
// let c = nhapSoThuc("Nhập cạnh thứ ba (c): ");

// let ketQua = kiemTraTamGiac(a, b, c);
// console.log(ketQua);
// alert(ketQua);

//BT7
// function nhapTuoi(message){
//     let tuoi;
//     while(true){
//         let nhap = prompt(message);
//         so = parseInt(nhap);
//         if(!isNaN(so) && so >0 && nhap == so){
//             break;
//         }
//         alert("Giá trị không hợp lệ. Vui lòng nhập một số nguyên dương.");
//     }
//     return so;
// }

// function ktra(tuoi){
//     if(tuoi < 0 || tuoi > 120){
//         return `${tuoi} tuổi không phải là số tuổi của một người`
//     }else{
//         return `${tuoi} tuổi là số tuổi của một người`
//     }
// }

// let tuoi = nhapTuoi("Nhập tuổi: ");
// let kqua = ktra(tuoi);
// console.log(kqua);
// alert(kqua);

//BT8
// function nhapCanh(message) {
//     let canh;
//     while (true) {
//         let nhap = prompt(message);
//         canh = parseFloat(nhap);
//         if (!isNaN(canh) && canh > 0) { 
//             break;
//         }
//         alert("Giá trị không hợp lệ. Vui lòng nhập một số dương.");
//     }
//     return canh;
// }

// function tinhDienTichHinhVuong(a) {
//     return a * a;
// }

// let a = nhapCanh("Nhập độ dài cạnh của hình vuông (a): ");
// let dienTich = tinhDienTichHinhVuong(a);
// let ketQua = `Diện tích của hình vuông có cạnh ${a} là ${dienTich}.`;
// console.log(ketQua);
// alert(ketQua);

//BT9
// function nhapCanh(message) {
//     let canh;
//     while (true) {
//         let nhap = prompt(message);
//         canh = parseFloat(nhap);
//         if (!isNaN(canh) && canh > 0) { 
//             break;
//         }
//         alert("Giá trị không hợp lệ. Vui lòng nhập một số dương.");
//     }
//     return canh;
// }

// function tinhDienTichHinhChuNhat(a, b) {
//     return a * b;
// }

// let a = nhapCanh("Nhập độ dài cạnh thứ nhất của hình chữ nhật (a): ");
// let b = nhapCanh("Nhập độ dài cạnh thứ hai của hình chữ nhật (b): ");
// let dienTich = tinhDienTichHinhChuNhat(a, b);
// let ketQua = `Diện tích của hình chữ nhật có cạnh ${a} và ${b} là ${dienTich}.`;
// console.log(ketQua);
// alert(ketQua);

//BT10
// function nhapCanh(message) {
//         let canh;
//         while (true) {
//             let nhap = prompt(message);
//             canh = parseFloat(nhap);
//             if (!isNaN(canh) && canh > 0) { 
//                 break;
//             }
//             alert("Giá trị không hợp lệ. Vui lòng nhập một số dương.");
//         }
//         return canh;
// }
// function tinhDienTichTamGiacVuong(a, b) {
//     return 0.5 * a * b;
// }

// let a = nhapCanh("Nhập độ dài cạnh thứ nhất (a): ");
// let b = nhapCanh("Nhập độ dài cạnh thứ hai (b): ");

// let dienTich = tinhDienTichTamGiacVuong(a, b);
// let ketQua = `Diện tích của tam giác vuông có hai cạnh kề ${a} và ${b} là ${dienTich}.`;
// console.log(ketQua);
// alert(ketQua);

//BT11
// function giaiPhuongTrinhBacNhat(a, b) {
//     if (a === 0) {
//         if (b === 0) {
//             return "Phương trình vô số nghiệm.";
//         } else {
//             return "Phương trình vô nghiệm.";
//         }
//     } else {
//         let x = -b / a;
//         return `Nghiệm của phương trình là x = ${x}.`;
//     }
// }

// let a = parseFloat(prompt("Nhập hệ số a: "));
// let b = parseFloat(prompt("Nhập hệ số b: "));

// let ketQua = giaiPhuongTrinhBacNhat(a, b);
// console.log(ketQua);
// alert(ketQua);

//BT12
// function giaiPhuongTrinhBacHai(a, b, c) {
//     let delta = b * b - 4 * a * c;
//     if (delta > 0) {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         return `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}.`;
//     } else if (delta === 0) {
//         let x = -b / (2 * a);
//         return `Phương trình có nghiệm kép: x = ${x}.`;
//     } else {
//         return "Phương trình không có nghiệm thực.";
//     }
// }

// let a = parseFloat(prompt("Nhập hệ số a: "));
// let b = parseFloat(prompt("Nhập hệ số b: "));
// let c = parseFloat(prompt("Nhập hệ số c: "));

// let ketQua = giaiPhuongTrinhBacHai(a, b, c);
// console.log(ketQua);
// alert(ketQua);

//BT13
// function chuyenDoCSangF(doC) {
//     return doC * 9 / 5 + 32;
// }

// let doC = parseFloat(prompt("Nhập nhiệt độ Celsius: "));
// let doF = chuyenDoCSangF(doC);
// let ketQua = `Nhiệt độ ${doC} độ Celsius tương ứng là ${doF.toFixed(2)} độ Fahrenheit.`;
// console.log(ketQua);
// alert(ketQua);

//BT14
// function chuyenDoiTuMetSangFeet(met) {
//     return met * 3.28084;
// }

// let met = parseFloat(prompt("Nhập độ dài (mét): "));
// let feet = chuyenDoiTuMetSangFeet(met);
// let ketQua = `${met} mét tương đương ${feet.toFixed(2)} feet.`;
// console.log(ketQua);
// alert(ketQua);

//BT15: Hàm prompt luôn trả về 1 chuỗi 


// let userInput1 = prompt("Nhập vào biến thứ nhất:");
// let userInput2 = prompt("Nhập vào biến thứ hai:");


// let type1 = typeof userInput1;
// let type2 = typeof userInput2;


// alert(`Kiểu dữ liệu của biến thứ nhất là: ${type1}`);
// alert(`Kiểu dữ liệu của biến thứ hai là: ${type2}`);

