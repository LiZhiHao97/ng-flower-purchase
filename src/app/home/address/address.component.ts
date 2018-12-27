import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

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
    receiver_name: '',
    receiver_phone: '',
    receiver_province: '',
    receiver_city: '',
    receiver_district: '',
    receiver_address: '',
    receiver_zip: ''
  };
  data = [
    {
      receiver_name: '李祉昊',
      receiver_phone: '13868224404',
      receiver_province: '浙江省',
      receiver_city: '舟山市',
      receiver_district: '普陀区',
      receiver_address: 'xxx路xxx',
      receiver_zip: '316100'
    },
    {
      receiver_name: '狗篮子',
      receiver_phone: '120',
      receiver_province: '浙江省',
      receiver_city: '舟山市',
      receiver_district: '普陀区',
      receiver_address: 'xxx路xxx',
      receiver_zip: '316100'
    }
  ];
  constructor(private modalService: NzModalService) { }

  ngOnInit() {
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
        this.curAddress['receiver_name'] = this.curAddressEdit['receiver_name'];
        this.curAddress['receiver_phone'] = this.curAddressEdit['receiver_phone'];
        this.curAddress['receiver_province'] = this.curAddressEdit['receiver_province'];
        this.curAddress['receiver_city'] = this.curAddressEdit['receiver_city'];
        this.curAddress['receiver_district'] = this.curAddressEdit['receiver_district'];
        this.curAddress['receiver_address'] = this.curAddressEdit['receiver_address'];
        this.curAddress['receiver_zip'] = this.curAddressEdit['receiver_zip'];
      }
    });
  }

  createAddModal(addModal) {
    this.modalService.create({
      nzTitle: '设置地址',
      nzContent: addModal,
      nzClosable: false,
      nzOnOk: () => {
        this.data.push(this.intputAddress);
        this.data = [...this.data];
        this.intputAddress = {
          receiver_name: '',
          receiver_phone: '',
          receiver_province: '',
          receiver_city: '',
          receiver_district: '',
          receiver_address: '',
          receiver_zip: ''
        };
        this.isVisible = false;
      }
    });
  }
}
