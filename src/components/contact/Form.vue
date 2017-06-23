<template>
        <form>
            <p>Please fill required fields</p>
            <div class="form-group">
                <label for="firstname">First Name</label>
                <input
                        type="text"
                        id="firstname"
                        class="form-control"
                        v-model="clientData.firstName">
            </div>
            <div class="form-group">
                <label for="lastname">Last Name</label>
                <input
                        type="text"
                        id="lastname"
                        class="form-control"
                        v-model="clientData.lastName">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input
                        type="email"
                        id="email"
                        class="form-control"
                        v-model="clientData.email">
            </div>
            <div class="form-group form">
                <div class="radio">
                    <label style="display: inline-block; width: 50%;"
                           for="phone">Phone</label>
                    <label style="display: inline-block; width: 45%; margin-left: 5%;"
                           for="radio">Preferred contact method</label>
                </div>
                <div id="radio" class="radio">
                    <input
                        style="width: 50%;"
                        type="text"
                        id="phone"
                        class="form-control"
                        v-model="clientData.number">
                    <div class="radio1">
                        <label for="mail">
                            <input
                                    type="radio"
                                    id="mail"
                                    value="Email"
                                    v-model="priority"> Email
                        </label>
                        <label for="cell">
                            <input
                                    type="radio"
                                    id="cell"
                                    value="Phone"
                                    v-model="priority"> Phone
                        </label>
                        <label for="any">
                            <input
                                    type="radio"
                                    id="any"
                                    value="Any"
                                    v-model="priority"> Any
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="message">Message</label><br>
                <textarea
                        id="message"
                        rows="5"
                        class="form-control"
                        v-model="message"
                        placeholder="What can we help you with?"></textarea>
            </div>
            <input type="submit" value="Submit">
        </form>
</template>

<script>
    import { mixin} from '../../mixin';
    import { parse, format, asYouType } from 'libphonenumber-js';


    export default{
        mixins: [mixin],
        data(){
            return{
                clientData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    number: ''
                },
                message: '',
                priority: 'Email',
                isSubmitted: false
            }
        },
        methods: {
            submit(){
                this.isSubmitted = true;
            }
        },
        created(){
            jQuery(function($){
                $("#phone").mask("(999) 999-9999");
            });
        }
    }
</script>

<style>

    p{
        color: #555555;
        margin-bottom: 5%;
        font-weight: bold;

    }

    .radio1{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 40%;
        margin-left: 4%;
    }

    input[type=submit] {
        width: 100%;
        background-color: rgb(0, 71, 126);
        color: white;
        padding: 14px 7px;
        margin: 8px 0;
        font-weight: 300;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        margin-top: 5%;
    }

    input[type=submit]:hover {
        background-color: rgb(0, 71, 126);
    }

    input[type=text], input[type=email], select {
        width: 100%;
        padding: 12px 7px;
        margin: 1% 0;
        margin-bottom: 3%;
        display: inline-block;
        border: 1.5px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    textarea {
        width: 100%;
        height: 150px;
        padding: 12px 7px;
        box-sizing: border-box;
        border: 1.5px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        resize: none;
        font-family: Roboto;
    }

    label{
        display: block;
    }

    .radio{
        display: flex;
        justify-content: flex-start;
    }
    form{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        font-weight: 400;
    }
</style>