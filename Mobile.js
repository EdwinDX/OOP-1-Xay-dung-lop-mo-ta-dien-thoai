class Mobile {
    status; //Trạng thái
    battery; // Pin
    draft; //Hộp thư nháp
    inbox; //Hộp thư đến
    sentBox; //Hộp thư gửi
    textBoxId; //vị trí input nhập text
    showSentBoxId; //vị trí hiển thị sentbox
    constructor(status, battery, draft, inbox, sentBox,textBoxID,showSentBoxId) {
        this.status = status;
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sentBox = sentBox;
        this.textBoxId = textBoxID;
        this.showSentBoxId = showSentBoxId;
    }

    checkMobileStatus() {
        return this.status;
    }

    chargeBattery() {
        this.battery++;
    }

    textMessage(message) {
        this.draft.push(message);
    }

    sentMessage(mobile2) {
        let message = this.draft.pop();
        this.sentBox.push(message);
        mobile2.inbox.push(message);
    }

    receiveMessage(mobile2){
        let message = mobile2.draft.pop();
        mobile2.sentBox.push(message);
        this.inbox.push(message);
    }
    onClickBtn() {
        let a = document.getElementById(this.textBoxId).value;
        document.getElementById(this.textBoxId).value = '';
        this.textMessage(a);
        this.sentMessage()
        console.log(this.draft);
        document.getElementById(this.showSentBoxId).innerHTML = this.draft;
    }

}
