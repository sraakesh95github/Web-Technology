<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form id="edplus-google-form">
          <input-field
            label="First Name"
            name="firstName"
            @change="modelInput"
            :state="validateState('firstName')"
            error-message="This is a required field and the first name must contain atleast 3 characters"
            clearable
          >
          </input-field>

          <input-field
            label="Last Name"
            name="lastName"
            @change="modelInput"
            :state="validateState('lastName')"
            error-message="This is a required field and the last name must contain atleast 3 characters"
            clearable
          >
          </input-field>

          <!-- <input-field
            label="Email"
            name="email"
            @change="modelInput"
            :state="validateState('email')"
            error-message="Please enter in the email address format"
            clearable
          >
          </input-field>

          <input-field
            label="Password"
            name="password"
            type="password"
            @change="modelInput"
            :state="validateState('password')"
            error-message="Password must contain atleast 3 characters"
            clearable
          >
          </input-field> -->

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
            class="mt-3"
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

import FormField from '../components/FormField'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
import { isConsentGiven } from '../validators/validators.js'
import InputField from '../components/InputField.vue'

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
  components: {
    "input-field": InputField,
    "form-field": FormField,
    FormField
  },
  validations: {
      firstName: {
        required,
        minLength: minLength(3) },
      lastName: {
        required,
        minLength: minLength(3) },
      email: {required, email},
      password: {
        required,
        minLength: minLength(3)
        },
      aboutMyself: {
        required,
        maxLength: maxLength(10) },
      consent: {
        required, isConsentGiven}
  },
  methods: {
  getEle() {
    const form = document.forms['edplus-google-form'];
  },
  modelInput({value, name}) {
    this.[name] = value;
    this.$v.[name].$touch();
    this.checkForSubmit();
  },
  validateState(name) {
    const {$dirty, $error} = this.$v.[name]
    // console.log(name + ": " + $error)
    return $dirty ? !$error : null
  },
  checkForm () {
    const scriptURL = "https://script.google.com/macros/s/AKfycbzMpyGrNjUNSS5O03EHbC52cxvNg8siM0gZQUQBgJe-GgOcVos/exec";
    const form = document.forms['edplus-google-form'];
    var form_data = new FormData(form)

    form_data.forEach((value, key) => {
    })


    fetch(scriptURL, {method: "POST", body: new FormData(form)}).then(response => alert("Thanks for contacting us...! We will contact you soon... ")).catch(error => console.error('Error!', error.message));
  },
  checkForSubmit() {
    var BreakException = {}
    var vm = this;
    var formValidate = false
    const formEles = Object.keys(this.$v.$params);
    try {
    formEles.forEach((param, index) => {
      if(!this.$v.[param].$error && this.$v.[param].$dirty)
        {
          //This is executed when the particular field is dirty and validated
        }
        else {
          formValidate = false
          throw BreakException;
        }
        if(index === formEles.length - 1) {
          formValidate = true
        }
    });
    }
    catch(e) {
      if(e === BreakException) {
        //This is an Exception created just an exception to get out of the forEach loop above if any of the fields is not dirt or contains an error
      }
    }
    if(formValidate) {
      this.disableSubmitButton = false
    }
      else {
        this.disableSubmitButton = true
      }
  }
}
}
</script>
