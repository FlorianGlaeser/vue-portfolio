<template>
  <footer>
    <div id="footer-top">
      <h3
        v-scroll-reveal="{
          delay: 100,
          scale: 0,
          distance: '0px',
          opacity: null,
          duration: 1500}"
      >Thanks!</h3>

      <div id="footer-table">
        <div id="footer-wrapper-left">
          <label for="mail">E-Mail</label>
          <a id="mail" href="mailto:kontakt@glaeserflorian.de">kontakt@glaeserflorian.de</a>
          <label for="tel">Phone</label>
          <span id="tel">01522 35 89 4 22</span>
        </div>

        <div id="footer-wrapper-center">
          <ul>
            <li>
              <a href>
                <div class="icon-wrapper">
                  <i>Git</i>
                </div>
              </a>
            </li>
            <li>
              <a href>
                <div class="icon-wrapper">
                  <i>In</i>
                </div>
              </a>
            </li>
            <li>
              <a href>
                <div class="icon-wrapper">
                  <i>XING</i>
                </div>
              </a>
            </li>
          </ul>
          <TheLike />
        </div>
        
        <div id="footer-wrapper-right">
          <TheScrollTop />
        </div>
      </div>
    </div>

    <div id="footer-bottom">
      <ul>
        <li>
          <router-link :to="{name: 'About'}">Impressum</router-link>
        </li>
        <li>
          <router-link to="/about">Datenschutz</router-link>
        </li>
      </ul>
      <span>Copyright © 2020 glaeserflorian</span>
    </div>
  </footer>
</template>

<script>
import TheLike from '@/components/TheLike';
import TheScrollTop from '@/components/TheScrollTop';

export default {
  components: {
    TheLike,
    TheScrollTop,
  },
};
</script>

<style lang="scss">
footer {
  // background-color: #333;
  background-color: #39373a;
  // color: rgb(245, 222, 179);
  color: wheat;

  a {
    color: wheat;
    display: inline-block;
    text-decoration: none;
  }

  #footer-top {
    padding: 30px 50px;

    h3 {
      color: white;
      text-align: center;
      text-transform: uppercase;
      position: relative;
      font-size: 42px;
      margin: 50px 0;

      &::after, &::before {
        position: absolute;
        top: 50%;
        display: block;
        width: 30%;
        border-bottom: 5px solid rgba(0, 0, 0, 0.25);
        content: "";
      }
      &::after {
          right: 0;
      }
      &::before {
          left: 0;
      }
    }

    #footer-table {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      flex-wrap: wrap;

      font-family: "Quicksand", sans-serif;
      font-size: 18px;
      opacity: 0.6;

      #footer-wrapper-left {
        width: 20%;
        label {
          font-size: 16px;
          opacity: 0.6;
        }
        span, a {
          display: block;
          padding: 8px 0 18px 12px;
        }
        a:hover {
          text-decoration: underline;
        }
      }

      #footer-wrapper-center {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        ul {
          display: flex;
          list-style: none;
          li {
            margin-right: 10px;
            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }

      #footer-wrapper-right {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .icon-wrapper {
        font-size: 18pt;
        overflow: hidden;
        transition: background 0.4s, color 0.3s, transform 0.3s;
        padding: 10px;
        margin: -10px 0 -10px -10px;
        
        &:hover {
          background: #04c2c9;
          color: white;
          transform: scale(0.9);
          padding: 14px;
          margin: -14px -4px -14px -14px;
        }
      }
    }
  }

  #footer-bottom {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    opacity: 0.6;
    padding: 0 50px;
    font-size: 18px;

    span {
      opacity: 0.6;
    }

    ul {
      display: flex;
      list-style: none;

      li {
        &:last-of-type a {
          padding: 30px 0 30px 16px;
        }
        a {
          padding: 30px 16px 30px 0;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
