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
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.contactForm.valueChanges.subscribe(console.log);
  }

  onFormSubmit(contactFormData: any) {
    // this.toastr.success('Contact form','Your message has been sent!');
    this.toastr.error(`Functionality has not been implemented yet.`, 'Contact');
    this.contactForm.reset();
  }

  resetForm() {
    this.toastr.success('Form has been reset successfully!', 'Contact');
    this.contactForm.reset();
  }
}
