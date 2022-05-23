let iphone = new Mobile(true, 50, [], [], [],'iphoneId','iphoneSentBox');
let samsung = new Mobile(true, 80, [], [], [],'samsungId','samsungSentBox');
if (iphone.checkMobileStatus()) {
    document.write('Điện thoại đang bật<br>');
} else {
    document.write('Điện thoại đang tắt<br>');
}




