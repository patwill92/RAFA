<template>
    <div class="columns" style="width: 95%; margin: auto;">
        <form class="column" >
            <div class="field">
                <label class="label">Name</label>
                <p class="control">
                    <input v-model="name" class="input" type="text" placeholder="First and Last Name">
                </p>
            </div>

            <div class="field">
                <label class="label">Phone Number</label>
                <p class="control has-icons-left has-icons-right">
                    <input v-model="number" id="phone" class="input" type="text" placeholder="Phone">
                    <span class="icon is-small is-left">
                        <i class="fa fa-phone"></i>
                    </span>
                </p>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <p class="control has-icons-left has-icons-right">
                    <input v-model="email" class="input" :class="{'test': validate(email), 'is-danger': !validate(email)}" :style="{borderColor: !validate(email) ? '#ff3860' : 'rgb(219, 219, 219)'}" type="text" placeholder="Email input" value="hello@">
                    <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                    </span>
                    <span v-if="!validate(email)" class="icon is-small is-right">
                        <i class="fa fa-warning"></i>
                    </span>
                </p>
                <p v-if="!validate(email)" class="help is-danger">This email is invalid</p>
            </div>

            <div class="field">
                <label class="label">Subject</label>
                <p class="control has-icons-right">
                    <span class="select">
                      <select>
                        <option>Residential</option>
                        <option>Commercial</option>
                      </select>
                        <span class="icon is-small is-right">
                            <i class="fa fa-angle-down"></i>
                        </span>
                    </span>

                </p>
            </div>

            <div class="field">
                <label class="label">Message</label>
                <p class="control">
                    <textarea v-model="message" class="textarea" placeholder="How can we help you?"></textarea>
                </p>
            </div>

            <div class="field">
                <label class="label">Preferred Contact Method</label>
                <p class="control">
                    <label class="radio">
                        <input v-model="priority" type="radio" value="Phone">
                        Phone
                    </label>
                    <label class="radio">
                        <input v-model="priority" type="radio" value="Email">
                        Email
                    </label>
                    <label class="radio">
                        <input v-model="priority" type="radio" value="Any">
                        Any
                    </label>
                </p>
            </div>

            <div class="field">
                <p class="control">
                    <button @click.prevent ="submit" class="button is-primary is-fullwidth">SUBMIT</button>
                </p>
            </div>
        </form>
        <div class="content column" >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem error harum modi molestiae
                placeat provident sit? At cupiditate, delectus id laborum
                laudantium omnis, sunt temporibus tenetur velit veritatis vero voluptas.</p>
            <p style="font-weight: 500;">Not sure what to say?</p >
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores beatae culpa
                    cupiditate magnam neque quo? Animi dicta et ipsam.</li>
                <li>Dolore error fugiat itaque iure iusto laboriosam modi quas quis quod quos,
                    sapiente temporibus ut veniam.</li>
                <li>Ipsum dolor sit amet, upiditate delectus eligendi ipsum libero maxime
                    reiciendis saepe sequi voluptas?</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mixin} from '../../mixin';
    import $ from 'jquery';

    export default{
        mixins: [mixin],
        data(){
            return{
                name: '',
                email: '',
                number: '',
                message: '',
                priority: 'Email',
                format: true
            }
        },
        methods: {
            submit(){
              var sub = this.error(this.email)
              if(sub){
                $.ajax({
                  url: "https://formspree.io/patrick.rw92@gmail.com",
                  method: "POST",
                  data: {
                    name: this.name,
                    email: this.email,
                    number: this.number,
                    method: this.priority,
                    message: this.message
                  },
                  dataType: "json"
                });
              }else{
                this.format = false
              }
            },
            validate(email){
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                regex = regex.test(email);
                if(this.format || regex){
                  return true
                } else {
                  return false
                }
            },
            error(email){
              var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              return regex.test(email);
            }
        },
        created(){
            jQuery(function($){
                $("#phone").mask("(999) 999-9999");
            });
        }
    }
</script>

<style scoped>


    .select:after {
        display: none !important;
    }

    select:focus{
        border-color: rgb(0, 71, 126) !important;
    }

    input:focus{
        border-color: rgb(0, 71, 126);
    }

    textarea:focus{
        border-color: rgb(0, 71, 126) !important;
    }

    .test:focus{
        border-color: rgb(0, 71, 126) !important;
    }

    /*p{*/
        /*color: #555555;*/
        /*margin-bottom: 5%;*/
        /*font-weight: bold;*/

    /*}*/

    /*label{*/
        /*font-family: Roboto;*/
    /*}*/

    /*.radio1{*/
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*flex-direction: row;*/
        /*align-items: center;*/
        /*width: 40%;*/
        /*margin-left: 4%;*/
    /*}*/

    button{
        background-color: rgb(0, 71, 126) !important;
        color: white !important;
        cursor: pointer !important;
        text-transform: uppercase !important;
        font-size: 1.2rem !important;
    }

    /*input[type=submit]:hover {*/
        /*font-family: Roboto;*/
        /*background-color: rgb(0, 71, 126);*/
    /*}*/

    /*input[type=text], input[type=email], select {*/
        /*font-family: Roboto;*/
        /*width: 100%;*/
        /*padding: 12px 7px;*/
        /*margin: 1% 0;*/
        /*margin-bottom: 3%;*/
        /*display: inline-block;*/
        /*border: 1.5px solid #ccc;*/
        /*border-radius: 1px;*/
        /*box-sizing: border-box;*/
    /*}*/

    /*textarea {*/
        /*width: 100%;*/
        /*height: 150px;*/
        /*padding: 12px 7px;*/
        /*box-sizing: border-box;*/
        /*border: 1.5px solid #ccc;*/
        /*border-radius: 1px;*/
        /*font-size: 16px;*/
        /*resize: none;*/
        /*font-family: Roboto;*/
    /*}*/

    /*label{*/
        /*display: block;*/
    /*}*/

    /*.radio{*/
        /*display: flex;*/
        /*justify-content: flex-start;*/
    /*}*/
    /*form{*/
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*flex-direction: column;*/
        /*font-weight: 400;*/
    /*}*/
</style>