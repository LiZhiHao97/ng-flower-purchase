import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { AddressService } from '../../service/address.service';
import { CookieService } from 'ngx-cookie-service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  tplModal: NzModalRef;
  isVisible = false;
  curAddressEdit;
  curAddress;
  intputAddress = {
    uid: this.cookieService.get('uid'),
    receiver_name: '',
    receiver_phone: '',
    receiver_province: '',
    receiver_city: '',
    receiver_district: '',
    receiver_address: '',
    receiver_zip: ''
  };
  data = [];
  constructor(private modalService: NzModalService,
    private addressService: AddressService,
    private cookieService: CookieService,
    private notification: NzNotificationService) { }

  ngOnInit() {
    this.addressService.fetchById(this.cookieService.get('uid')).subscribe(res => {
      if (res['code'] === 1) {
        this.data = res['data'];
      }
    });
  }

  delete(item: Object) {
    this.modalService.confirm({
      nzTitle     : '你确定要删除这个地址吗?',
      nzContent   : '<b style="color: red;">你的操作将无法撤回</b>',
      nzOkText    : '是',
      nzOkType    : '是',
      nzOnOk      : () => {
        this.addressService.delete(item['id']).subscribe(res => {
          if (res['code'] === 1) {
            this.createNotification('success', res['msg'], '该地址已被永久删除');
            this.data.splice(this.data.indexOf(item), 1);
            this.data = [...this.data];
          }
        });
      },
      nzCancelText: '否',
      nzOnCancel  : () => console.log('Cancel')
    });
  }

  craeteEditModal(editModal, curAddress) {
    this.curAddress = curAddress;
    this.curAddressEdit = {...curAddress};
    console.log(this.curAddress);
    this.modalService.create({
      nzTitle: '编辑地址',
      nzContent: editModal,
      nzClosable: false,
      nzOnOk: () => {
        this.addressService.update(this.curAddressEdit).subscribe(res => {
          if (res['code'] === 1) {
            this.curAddress['receiver_name'] = this.curAddressEdit['receiver_name'];
            this.curAddress['receiver_phone'] = this.curAddressEdit['receiver_phone'];
            this.curAddress['receiver_province'] = this.curAddressEdit['receiver_province'];
            this.curAddress['receiver_city'] = this.curAddressEdit['receiver_city'];
            this.curAddress['receiver_district'] = this.curAddressEdit['receiver_district'];
            this.curAddress['receiver_address'] = this.curAddressEdit['receiver_address'];
            this.curAddress['receiver_zip'] = this.curAddressEdit['receiver_zip'];
            this.createNotification('success', '修改成功', '您可以用您最新修改的地址了');
          }
        });
      }
    });
  }

  createAddModal(addModal) {
    this.modalService.create({
      nzTitle: '设置地址',
      nzContent: addModal,
      nzClosable: false,
      nzOnOk: async () => {
        this.addressService.addAddress(this.intputAddress).subscribe(res => {
          if (res['code'] === 1) {
            this.createNotification('success', res['msg'], '您可以选择您最新添加的地址了');
            this.data.push(res['data']);
            this.data = [...this.data];
            this.intputAddress = {
              uid: this.cookieService.get('uid'),
              receiver_name: '',
              receiver_phone: '',
              receiver_province: '',
              receiver_city: '',
              receiver_district: '',
              receiver_address: '',
              receiver_zip: ''
            };
          }
        });
      }
    });
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }
}
