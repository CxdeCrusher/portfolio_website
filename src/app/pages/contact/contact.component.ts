import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  naam: string = '';

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.contactForm.valueChanges.subscribe(console.log);
  }

  onFormSubmit(contactFormData: any) {
    // this.toastr.success('Your message has been sent!');
    this.toastr.error(
      `Your message is '${contactFormData.message}'. Functionality has not been implemented yet.`
    );
    this.contactForm.reset();
  }
}
