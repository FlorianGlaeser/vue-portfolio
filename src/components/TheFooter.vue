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
          <a id="mail" href="mailto:kontakt@florianGlaeser.de" title="E-Mail">kontakt@florianGlaeser.de</a>
          <label for="tel">Phone</label>
          <a href="tel:015223589422" id="tel" title="Telefon">01522 35 89 4 22</a>
        </div>

        <div id="footer-wrapper-center">
          <ul>
            <li>
              <a href="https://github.com/florianGlaeser" title="GitHub" class="icon-wrapper" target="_blank">
                <i class="icon-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/florianGlaeser" title="LinkedIn" class="icon-wrapper" target="_blank">
                <i class="icon-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.xing.com/profile/florian_Glaeser13" title="Xing" class="icon-wrapper" target="_blank">
                <i class="icon-xing" />
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
          <router-link to="/impressum" rel=”nofollow” title="Impressum">Impressum</router-link>
        </li>
        <li>
          <router-link to="/datenschutz" rel=”nofollow” title="Datenschutz">Datenschutz</router-link>
        </li>
      </ul>
      <span>Copyright © {{ new Date().getFullYear() }} florianGlaeser</span>
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
  background-color: #39373a;
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
      font-size: 2rem;
      margin: 50px 0;

      @media only screen and (min-width: 600px) {
        font-size: 2.6rem;
      }

      &::after, &::before {
        position: absolute;
        top: 50%;
        display: block;
        width: 20%;
        border-bottom: 5px solid rgba(0, 0, 0, 0.25);
        content: "";

        @media only screen and (min-width: 850px) {
          width: 30%;
        }
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
      flex-wrap: wrap;
      font-size: 18px;
      opacity: 0.6;

      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      @media only screen and (min-width: 850px) {
        align-items: stretch;
        flex-direction: row;
      }

      #footer-wrapper-left {
        @media only screen and (min-width: 850px) {
          width: 20%;
        }

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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 4rem 0;

        @media only screen and (min-width: 850px) {
          width: 60%;
          margin: 0;
        }

        ul {
          display: flex;
          list-style: none;
          li {
            margin-right: 10px;

            &:last-of-type {
              margin-right: 0;
            
            }
            i {
              font-family: 'Roboto', Arial, sans-serif;
              font-style: normal;
            }
          }
        }
      }

      #footer-wrapper-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        @media only screen and (min-width: 850px) {
          width: 20%;
        }
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

    flex-direction: column;

    @media only screen and (min-width: 630px) {
      flex-direction: row;
    }

    span {
      opacity: 0.6;
      margin-bottom: 1.5rem;

      @media only screen and (min-width: 630px) {
        margin-bottom: 0;
      }
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
