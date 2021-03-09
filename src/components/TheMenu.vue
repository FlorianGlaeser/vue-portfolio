<template>
  <div id="page-navigation" :class="[isFixed ? 'activ' : '']">
    <nav :class="[isVisible ? 'mobile' : '']">

      <div class="second-manu">
        <div class="burger" @click="setVisible($event)">
          <div class="burger-inner"></div>
        </div>
      </div>

      <ul ref="links">
        <li>
          <!-- <router-link to="/">Home</router-link> -->
          <a href="/#app" @click="scrollToDiv($event, 'app')">Home</a>
        </li>
        <li>
          <!-- <router-link to="/about">About</router-link> -->
          <a href="/#about" @click="scrollToDiv($event, 'about')">About</a>
        </li>
        <li>
          <a href="/#skills" @click="scrollToDiv($event, 'skills')">Skills</a>
        </li>
        <li>
          <a href="/#work" @click="scrollToDiv($event, 'work')">Work</a>
        </li>
        <li>
          <a href="/#contact" @click="scrollToDiv($event, 'contact')">Contact</a>
        </li>
      </ul>

      <div class="nav-border" ref="navBorder"></div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      distance: 0,
      isVisible: false,
      isFixed: false,
      scrollDirection: '',
      isNotScroll: true,
      pageCategories: [],
      pageTarget: 0,
    }
  },
  watch: {
    distance(newVal, oldVal) {
      if( newVal > oldVal ) {
        this.scrollDirection = true;
      } else {
        this.scrollDirection = false;
      }
    },
    isVisible() {
      if( !this.isFixed ) {
        // animate mobil menu open
        let nav = this.$el.children[0];
        let Pointer = window.pageYOffset;
        let ElementWindowTop = nav.offsetTop - Pointer;

        nav.style.top = ElementWindowTop +'px';

        this.navIntervalId = setInterval(() => {
          let ElementDistance = nav.style.top.slice (0, -2);
          let speed = 50;

          // speed reduce
          if( ElementDistance < 20 ) {
            speed = 2;
          } else if( ElementDistance < 100 ) {
            speed = 14;
          } else if( ElementDistance > 500 ) {
            speed = 100;
          }
          nav.style.top = (ElementDistance - speed) +'px';

          if( ElementDistance < 2 ) { // scroll cancel
            clearInterval( this.navIntervalId );
            nav.style.top = '0px';
          }
        }, 20);
      }
    }
  },
  methods: {
    setVisible(event) {
      event.preventDefault();

      // toggle body overflow
      if( window.document.body.style.overflowY == 'hidden' ) {
        window.document.body.style.overflowY = 'auto';

        if( this.isFixed ) { // smooth back animation
          this.$refs.navBorder.style.height = '4px';
          this.$refs.navBorder.style.opacity = '0';
        }
      } else {
        window.document.body.style.overflowY = 'hidden';
      }

      if( this.isFixed && !this.isVisible ) { // is over display height and skip replay

        let Element = this.$el.offsetHeight;
        let navBorder = this.$refs.navBorder;
        let windowHeight = window.innerHeight;
        
        navBorder.style.height = '4px'; // set default

        let navBorderHeight = parseInt(navBorder.style.height);
        let ElementHeight = Element + navBorderHeight;
        let ElementDistance = windowHeight - ElementHeight;

        navBorder.style.height = ElementDistance +'px';
        navBorder.style.opacity = 1;

        setTimeout(() =>
          this.isVisible = true
        , 300);
      } else {

        if( this.isVisible ) {
          this.isVisible = false;
        } else {
          this.isVisible = true;
        }
      }
    },
    scrollToDiv(event, target) {
      event.preventDefault();

      if( this.isNotScroll ) {
        this.isNotScroll = false;
        let Element = window.document.getElementById(target);

        this.pageIntervalId = setInterval(() => {
          let Pointer = window.pageYOffset;
          let ElementDistance = Math.abs( Pointer - Element.offsetTop );
          let speed = 50;

          // speed reduce
          if( ElementDistance < 40 ) {
            speed = 2;
          } else if( ElementDistance < 200 ) {
            speed = 14;
          } else if( ElementDistance > 1000 ) {
            speed = 100;
          }

          if( window.pageYOffset < Element.offsetTop ) { // scroll down
            window.scroll(0, Pointer + speed);
          }
          else { // scroll down
            window.scroll(0, Pointer - speed);
          }

          if( ElementDistance < 2 ) { // scroll cancel
            clearInterval( this.pageIntervalId );
            window.scroll(0, Pointer - (Pointer - Element.offsetTop));
            this.isNotScroll = true;
          }
        }, 20);
      }
    },
    setMenuTarget() {
      let self = this;
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {

        let Pointer = window.pageYOffset;
        let windowHeight = window.innerHeight;
        let targetId = self.pageCategories.findIndex(el => el > (Pointer +(windowHeight/2))) -1;

        if( self.pageTarget != targetId ) { // target is different
          if( targetId < 0 ) { // pointer over pageCategories
            targetId = self.pageCategories.length -1;
          }
          let targets = self.$refs.links.getElementsByTagName("a");
          targets[self.pageTarget].style.color = ''; // reset old target color

          self.pageTarget = targetId; // set new target
          let target = targets[targetId];
          target.style.color = 'black'; // set new color
        }
      }, 200);
    },
    onScroll() {
      this.setMenuTarget();

      if( !this.isVisible ) {
        let Pointer = window.pageYOffset;
        let Element = this.$el;
        let ElementTop = Element.offsetTop;
        let ElementBottom = ElementTop + Element.offsetHeight;

        if( Pointer >= ElementTop && ElementTop != 0 ) { // nav active
          this.distance = Pointer;
          let nav = Element.children[0];

          if( this.scrollDirection ) { // nav to down
            if( Pointer >= ElementBottom && nav.style.transform == 'none' ) { // menu active slide when over menu height
              nav.style.transform = 'translate(0, -'+ nav.offsetHeight +'px)'; // animate nav to top
              Element.style.paddingTop = Element.clientHeight +'px'; // set nav placeholder
              this.isFixed = true;
            }
          } else { // nav to top
            if( nav.style.transform != 'none' ) {
              nav.style.transform = 'none'; // animate nav to bottom
            }
          }
        } else {
          Element.style.paddingTop = '0'; // set nav placeholder back
          this.isFixed = false;
        }
      } else { // menu close on scroll
        this.isVisible = false;
        window.document.body.style.overflowY = 'auto';

        if( this.isFixed ) { // smooth back animation
          this.$refs.navBorder.style.height = '4px';
          this.$refs.navBorder.style.opacity = '0';
        }
      }
    },
  },
  mounted() {
    // set page Categories array for menu target
    let targetNames = this.$refs.links.getElementsByTagName("a");

    for (let index=0; index < targetNames.length; index++) {
      let targetId = targetNames[index].hash.slice(1);
      const targetTop = window.document.getElementById(targetId).offsetTop;
      this.pageCategories.push(targetTop);
    }
    // set menu default color
    targetNames[0].style.color = 'black';

    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
}
</script>

<style lang="scss">
#page-navigation {
  &.activ nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: transform .2s linear;
  }

  nav {
    box-shadow: rgb(0, 0, 0) 4px 4px 16px -8px;
    position: relative;
    z-index: 100;

    // &::after {
    //   content: "";
    //   display: block;
    //   height: 4px;
    //   // width: 50%;
    //   // background-color: red;
    // }

    .second-manu {
      display: none;
      background-color: #48525e;

      @media only screen and (max-width: 655px) {
        display: block;
      }

      .burger {
        display: inline-block;
        padding: 30px;
        cursor: pointer;

        .burger-inner, .burger-inner::after, .burger-inner::before {
          display: block;
          position: relative;
          width: 34px;
          height: 2px;
          background-color: #fff;
          -webkit-transition: all 250ms ease-in;
          -moz-transition: all 250ms ease-in;
          -ms-transition: all 250ms ease-in;
          -o-transition: all 250ms ease-in;
          transition: all 250ms ease-in;
        }

        .burger-inner::before {
          content: "";
          top: -8px;
        }

        .burger-inner::after {
          content: "";
          bottom: -5px;
        }
      }
    }


    ul {
      background-color: #48525e;
      list-style-type: none;
      padding: 30px;
      
      @media only screen and (max-width: 655px) {
        display: none;
      }

      li {
        display: inline-block;

        a {
          font-size: 20px;
          font-family: "Helvetica", sans-serif;
          text-decoration: none;
          color: #a2abb7;
          padding: 25px 30px;
          transition: all 0.2s ease-out;
          letter-spacing: 0.05em;

          &:hover {
            color: white;
          }

          &.router-link-exact-active {
            background-color: #38d39f;
          }
        }
      }
    }

    .nav-border {
      display: block;
      height: 4px;
      opacity: 0;
      background-color: var(--gray-light);
      transition: all 300ms ease-in-out;
    }

    &.mobile {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;

      .second-manu {
        .burger-inner {
          background-color: unset;

          &::before {
            top: 0px;
            transform: rotate(45deg);
          }

          &::after {
            bottom: 2px;
            transform: rotate(-45deg);
          }
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        position: fixed;
        top: auto;
        left: 0;
        width: 100vw;
        height: calc(100vh - 52px);
        background-color: var(--gray-light);
        transition: background-color 2s ease-in-out;

        li {
          width: 250px;
          margin-bottom: 35px;
          transform: translateX(-100%);
          opacity: 0;

          @for $i from 1 through 5 {
            &:nth-child(#{$i}) {
              animation: menuAnimation .4s #{($i - 1) * .12}s ease-out forwards;
            }
          }

          @-webkit-keyframes menuAnimation {
            from { transform: translateX(-100%); opacity: 0 }
            to { transform: translateX(0%); opacity: 1 }
          }

          a {
            display: inline-block;
            // color: var(--gray);
            font-size: 3rem;
            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>
