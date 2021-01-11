<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <h1>Signup Form</h1>
                    <hr>

                    <app-full-name
                        v-model="fullName"></app-full-name>

                    <!-- Input the first name of the user -->
                    <!-- <div class="form-group">
                        <label for="first-name">First Name</label>
                        <input 
                            type="text"
                            id="first-name"
                            class="form-control"
                            v-model="first"> -->
                    <!-- </div> -->

                    <!-- Input the last name of the user -->
                    <!-- <div class="form-group">
                        <label for="last-name">Last Name</label>
                        <input 
                            type= "test"
                            id="last-name"
                            class="form-control"
                            v-model="last">
                    </div> -->

                    <!-- Input the mail ID of the user -->
                    <div class="form-group">
                        <label for="email">e-mail ID</label>
                        <input
                            type="text"
                            id="email"
                            class="form-control"
                            v-model="email">
                    </div>

                    <!-- Input the password field -->
                    <div class="form-group">
                        <label for="pass">Password</label>
                        <input
                            type="password"
                            id="pass"
                            class="form-control"
                            v-model="password">
                    </div>

                    <div>
                        <label for="database-bool">Store in Database?</label>
                        <app-toggle-button
                            :value="isStored"
                            @input="isStored = $event.target.value">
                            </app-toggle-button>
                    </div>

                    <div>
                        <!-- Display the submit button to submit the form -->
                        <button class="btn btn-primary"
                                @click.prevent="isSubmitted=true">
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{isStore}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import FullName from './components/FullName.vue';
    import ToggleButton from './components/ToggleButton.vue';

    export default {
        data() {
            return {
                first: '',
                last: '',
                fullName: "Raakesh SS",
                email: '',
                password: '',
                isStore: false,
                isSubmitted: false 
            }
        },
        components: {
            appToggleButton: ToggleButton,
            appFullName: FullName
        }
    }
</script>

<style>
</style>
