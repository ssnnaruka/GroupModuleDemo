import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the CreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {
  formgroup: FormGroup;
  name: AbstractControl;
  tags: AbstractControl;
  description: AbstractControl;
  status: any;

  nameError: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formbuilder: FormBuilder, public dataProvider: DataProvider) {
    this.setForm();
  }

  setForm() {
    this.formgroup = this.formbuilder.group({
      'name': ["", Validators.required],
      'tags': ["", Validators.required],
      'description': [""]
      ,
      'status': [null, Validators.required],
    })
    this.name = this.formgroup.controls["name"];
    this.tags = this.formgroup.controls["tags"];
    this.description = this.formgroup.controls["description"];
    this.status = this.formgroup.controls["status"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGroupPage');
  }

  selectUsers() {
    this.navCtrl.push("UserPage");
  }

  onChangeName() {
    this.nameError = false;
  }

  submitForm(form) {
    console.log(form);
    console.log(this.status);
    if (form.name !== undefined && form.name !== "") {
      this.navCtrl.push("UserPage", {
        gCallback: {
          passArgs: this,
          callFunc: this.saveGroup
        }
      });
    } else {
      this.nameError = true;
    }

  }

  saveGroup(self: any, users: any) {
    console.log("Before Saving Groups");
    console.log(users);
    console.log(self.formgroup.value);
    let temp = self.formgroup.value;
    
    let obj = {
      name: temp.name,
      description: temp.description,
      individuals: [],
      "admin": "Creatouch Academy",
      "adminId": "3001",
      "status": false
    }
    if(temp.status === "active") {
      obj.status = true;
    } else {
      obj.status = false;
    }

    if (temp.tags.indexOf(",") > -1) {
      let a = temp.tags.split(",");
      obj["tags"] = a;
    }
    for (let us in users) {
      obj.individuals.push(users[us]);
    }
    self.dataProvider.http.post(self.dataProvider.url, obj)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
    self.navCtrl.setRoot("GroupPage");
    console.log("request in progress");
    //this.dataProvider.createGroup(obj);//.subscribe(data => console.log(data.data));
  }

}

// {
//   "name": "Watsica and Sons",
//   "status": false,
//   "description": "Cum eos praesentium corporis eveniet distinctio quia aut dolorum voluptatem.",
//   "admin": "Creatouch Academy",
//   "adminId": "3001",
//   "tags": [
//     "english"
//   ],
//   "individuals": [
//     {
//       "id": "_userId",
//       "firstName": "_userFirstName",
//       "lastName": "_userFirstName",
//       "profileImage": "_userProfileImageUrl"
//     },
//     {
//       "id": "_userId",
//       "firstName": "_userFirstName",
//       "lastName": "_userFirstName",
//       "profileImage": "_userProfileImageUrl"
//     }
//   ]
// }
