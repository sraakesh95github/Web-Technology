<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>

                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>

                <button class="btn btn-primary" @click="show=!show">Show Alert</button>
                <br><br>

                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some info</div> 
                </transition>      
                
                <!-- The "type" property/attribute of the "transition" tag ensures if the animation/transition needs -->
                <!-- to be considered as a higher priority. In this case, the animation is to be considered as a higher priority -->
                 <transition :name="alertAnimation" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info</div> 
                </transition>      

                <!-- The appear wrapper tells VueJS to load the DOM element once the page has just been loaded -->
                <!-- This can be seen by reloading the page -->
                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show">This is some info</div> 
                </transition>

                <!-- Use different classes than the default VueJS classes (enter, enter-active, leave, leave-active) for animation -->
                <!-- Note that in the attribute "enter-active-class" the "animated" value refers to the new animation class from the CDN imported from -->
                <!-- https://animate.style/ website -->
                <!-- Note that custom classes do not support the appear wrapper -->
                <transition enter-active-class="animate__animated animate__lightSpeedInLeft animate__slow"
                            leave-active-class="animate__animated animate__lightSpeedOutRight animate__duration-1s">
                    <div class="alert alert-info" v-if="show">This is some info</div> 
                </transition>

                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is optional INFO</div>
                    <div class="alert alert-warning" v-else key="warning">This is optional WARNING</div>  
                </transition>     
                
                <button class="btn btn-primary"
                        @click="load=!load">
                    Load / Remove Element
                </button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css='false'
                    >
                    <div style="width: 300px;
                         height: 100px;
                         background-color: lightgreen"
                         v-if="load">
                    </div>
                </transition>  
                <hr>
                <br>

                <button class="btn btn-primary"
                        @click="selectedComponent == 'app-successful-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-successful-alert'">Toggle</button>
                <br>

                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                
                <button class="btn btn-primary"
                        @click="addItem">
                    Add Item
                </button>

                <ul class = "list-group">
                    <li class="list-group-item" 
                        v-for="(number, index) in numbers"
                        v-bind:key="index"
                        @click="removeItem(index)"
                        style="cursor: pointer">{{ number }}</li>
                </ul>

                </div>
        </div>
    </div>
</template>

<script>

    import DangerousAlert from './components/DangerousAlert.vue';
    import SuccessfulAlert from './components/SuccessfulAlert.vue';

    export default {
        data() {
            return {    
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 100,
                selectedComponent: 'app-successful-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        components: {
            appDangerAlert: DangerousAlert,
            appSuccessfulAlert: SuccessfulAlert
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter')
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave')
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },

            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1)
            },

            removeItem(index) {
                this.numbers.splice(index, 1)
            }
        }
    }
</script>

<style scoped>

    /* make sure the name "fade" matches with the one given as an attribute to the transition tag or component */

    /* renders the first frame while fading in */
    .fade-enter {
        opacity: 0;
    }

    /* renders the upcoming frames until the opacity becomes 1*/
    /* Note that the entire animation duration is for 1s */
    .fade-enter-active {
        transition: opacity 1s;
    }

    /*first frame while fading out */
    .fade-leave {
        /* opacity: 100; */
    }

    /* transition frame while fading out */
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        /* transform: translate(20px) */
        opacity: 0;
    }

    .slide-enter-active {
        /* The ease-out is used to decelerate */
        /* forwards is used to ensure that the element stays in the starting position as it was before instead of moving back to the starting position */
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s;
    }   

    .slide-leave {
        /*transform: translateY(0);*/
        /* opacity: 1; */
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 0.5s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

     @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
     }

</style>