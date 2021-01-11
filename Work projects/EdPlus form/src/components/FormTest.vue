<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form id="edplus-google-form">
          <b-form-group label="First Name" label-for="firstName">
            <b-form-input
              id="firstName"
              v-model="$v.firstName.$model"
              name="firstName"
              placeholder="Enter first name"
              :state="validateState('firstName')"
              aria-describedby="firstname-feedback"
              @input="checkForSubmit"
            >
            </b-form-input>
            <b-form-invalid-feedback id="firstname-feedback"
              >This is a required field and the last name must contain atleast 3
              characters</b-form-invalid-feedback
            >
          </b-form-group>

          <b-form-group label="Last Name" label-for="lastName">
            <b-form-input
              id="lastName"
              v-model="$v.lastName.$model"
              name="lastName"
              type="text"
              placeholder="Enter last name"
              :state="validateState('lastName')"
              aria-describedby="lastname-feedback"
              @input="checkForSubmit"
            >
            </b-form-input>
            <b-form-invalid-feedback id="lastname-feedback"
              >This is a required field and the first name must contain atleast
              3 characters</b-form-invalid-feedback
            >
          </b-form-group>

          <b-form-group label="Email" label-for="email">
            <b-form-input
              id="email"
              v-model="$v.email.$model"
              name="email"
              type="email"
              placeholder="Enter email"
              :state="validateState('email')"
              aria-describedby="email-feedback"
              @input="checkForSubmit"
            >
            </b-form-input>
            <b-form-invalid-feedback id="email-feedback"
              >This is a required field</b-form-invalid-feedback
            >
          </b-form-group>

          <b-form-group label="Password" label-for="password">
            <b-form-input
              id="password"
              v-model="$v.password.$model"
              name="password"
              type="password"
              placeholder="Enter password"
              :state="validateState('password')"
              aria-describedby="email-feedback"
              @input="checkForSubmit"
            >
            </b-form-input>
            <b-form-invalid-feedback id="password-feedback"
              >This is a required field</b-form-invalid-feedback
            >
          </b-form-group>

          <b-form-group label="About Myself" label-for="aboutMyself">
            <b-form-textarea
              v-model="$v.aboutMyself.$model"
              name="aboutMyself"
              placeholder="Enter your details..."
              :state="validateState('aboutMyself')"
              aria-describedby="aboutmyself-feedback"
              @input="checkForSubmit"
            >
            </b-form-textarea>
            <b-form-invalid-feedback id="aboutmyself-feedback"
              >This is a required field
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-checkbox
            type="checkbox"
            name="consent"
            v-model="$v.consent.$model"
            @input="checkForSubmit"
          >
            Please give your consent
          </b-form-checkbox>

          <button
            @click.prevent="checkForm"
            class="btn btn-outline-primary form-control my-3"
            :disabled="disableSubmitButton"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { required, email, minLength } from 'vuelidate/lib/validators';
import { isConsentGiven } from '../validators/validators.js'
// import { checkName } from '../validators';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      aboutMyself: '',
      consent: false,
      disableSubmitButton: true
    }
  },
  validations: {
      firstName: {
        required,
        minLength: minLength(3) },
      lastName: {
        required,
        minLength: minLength(3) },
      email: {required, email},
      password: {required},
      aboutMyself: {required},
      consent: {
        required, isConsentGiven}
  },
  methods: {
  validateState(name) {
    const {$dirty, $error} = this.$v.[name]
    return $dirty ? !$error : null
  },
  checkForm () {
    this.$v.$touch();
    if (this.$v.$invalid) {
         console.log("Error on 135");
                    return;
                }
    const scriptURL = "https://script.google.com/macros/s/AKfycbzMpyGrNjUNSS5O03EHbC52cxvNg8siM0gZQUQBgJe-GgOcVos/exec";
    const form = document.forms['edplus-google-form'];
    // console.log(form);

    fetch(scriptURL, {method: "POST", body: new FormData(form)}).then(response => alert("Thanks for contacting us...! We will contact you soon... ")).catch(error => console.error('Error!', error.message));
  },
  checkForSubmit() {
    if(!this.$v.['firstName'].$error && !this.$v.['lastName'].$error && !this.$v.['email'].$error && !this.$v.['password'].$error && !this.$v.['aboutMyself'].$error && !this.$v.['consent'].$error && this.$v.['firstName'].$dirty && this.$v.['lastName'].$dirty && this.$v.['email'].$dirty && this.$v.['password'].$dirty && this.$v.['aboutMyself'].$dirty && this.$v.['consent'].$dirty) {
      this.disableSubmitButton = false
    }
    else {
      this.disableSubmitButton = true
    }
  }
}
}
</script>
