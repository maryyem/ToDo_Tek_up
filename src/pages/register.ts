import { FormBuilder, FormGroup, Validators } from '@angular/forms';
constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder){}
this.signupForm = formBuilder.group({
    email: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    retype: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
  });