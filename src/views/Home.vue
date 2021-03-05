<template>
  <div class="home">
    <TheHeader />
    <TheMenu />

    <section id="about">
      <article class="my">
        <div class="info">
          <h2>Über mich</h2>
          <p>
            <span>
              Mein Name ist Florian Gläser.
            </span>
            <span>
              Ich bin ein Webentwickler aus leidenschaft im (aus dem?) Leipziger Raum.
            </span>
            <span>
              Um meine Fähigkeiten zu erweitern, began ich im April 2018 ein Studium am SAE Institute Leipzig im Fachbereich Webdesign & Development.
              Im September 2019 erhielt ich dann mein Diploma.
            </span>
            <span>
              In meinem Studium habe ich mich sowohl mit den Themengebieten Konzeption/Design, Frontend-Entwicklung und Animation einer Website,
              als auch der Backend-Entwicklung in Zusammenhang mit Datenbanken beschäftigt.
            </span>
            <span>
              Hauptsächlich habe ich mit dem Framework Laravel in Kombination mit VueJS gearbeitet,
              da sich mit diesen Tools moderne Webseiten effizient und performant umsetzen lassen.
            </span>
          </p>
        </div>

        <Picture :src="'Florian_Glaeser.jpg'" :alt="'MyFace'" />
      </article>

      <article>
        <div class="balancing">
          <div>
            <h2>Mein Ausgleich</h2>
            <p>
              <span>
                In meiner Freizeit bin ich sportlich sehr aktiv und betreibe Parkour/Freerunning, was mir die Möglichkeit bietet,
                meinen Sportlichen Ausgleich zu finden.
              </span>
              <span>
                Im Zuge dessen betreue ich seit 2013 verschiedene Projekte und Prozesse für Kinder- Erwachsene,
                um ihnen einen sicheren Raum für den Sport zu bieten.
              </span>
            </p>
          </div>

          <div>
            <h2>Verletzungsrisiko</h2>
            <div class="risk">
              <p>
                <span>
                  Da in diesem Zusammenhang die Frage nach dem Verletzungsrisiko sehr häufig gestellt wird, möchte ich sie mit einem Unfallfreicounter beantworten.
                  <!-- Da spätestenz jetzt die Frage nach dem Verletzungsrisiko im Raum steht, möchte ich sie mit einem Unfallfreicounter beantworten. -->
                </span>
              </p>
              <TheCounter :date="'2014-08-14'" />
            </div>
          </div>

        </div>

        <Picture :src="'beam.jpg'" :alt="'MyFace'" :animation='true' />
      </article>
    </section>

    <section id="skills">
      <header>
        <h2>Fähigkeiten</h2>
      </header>
      <article class="wrapper-skills">
        <div>
          <h3>Planung</h3>
          <ul>
            <li>Konzeption von Projekten</li>
            <li>Figma zur grundlegenden Struktur</li>
            <li>präzise Screendesigns</li>
          </ul>
        </div>

        <div class="line" :class="[isVisible ? 'active' : '']">
          <h3>Frontend</h3>
          <ul>
            <li>übersichtliche HTML Strukturen</li>
            <li>Animationen und Features in nativem JavaScript, JQuery und GreenSocket</li>
            <li>performante Lösungen für (progressive) Web Apps in VueJS</li>
          </ul>
        </div>

        <div>
          <h3>Backend</h3>
          <ul>
            <li>umfangreiche Funktionalität in PHP</li>
            <li>Verwendung von MySQL Datenbanken</li>
            <li>effizientes Arbeiten mit Laravel</li>
          </ul>
        </div>
      </article>
    </section>

    <section id="work">
      <header>
        <h2>Referenzen</h2>
      </header>
      <article>
        <div class="reference">
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ex quia voluptatem! Ratione inventore mollitia laborum.</p>
        </div>

        <Picture :src="'Florian_Glaeser.jpg'" :alt="'MyFace'" />
      </article>
    </section>


    <section id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <article>
        <TheContact />
      </article>
    </section>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheMenu from "@/components/TheMenu";
import TheCounter from '@/components/TheCounter';
import Picture from '@/components/Picture';
import TheContact from '@/components/TheContact';

export default {
  name: "Home",
  components: {
    TheHeader,
    TheMenu,
    TheCounter,
    Picture,
    TheContact,
  },
  data() {
    return {
      isScrolled: false,
      windowTop: 0,
      isVisible: false,
    };
  },
  methods: {
    onScroll(e) {
      let Element = e.target.documentElement.getElementsByClassName('line')[0];
      let ElementTop = Element.offsetTop;
      let WindowHeight = window.innerHeight / 2;

      if( window.pageYOffset > ElementTop - WindowHeight && !this.isVisible ) {
        this.isVisible = true;
      }
    },

    // handleScroll(event) {
    //   if( window.pageYOffset > 650 ) {
    //     this.isScrolled = true;
    //   } else {
    //     this.isScrolled = false;
    //   }
    // },

    // onScroll(e) {
    //   this.windowTop = e.target.documentElement.scrollTop;
    // },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
// .home {
//   position: relative;
//   z-index: 50;
// }
section {
  header {
    text-align: center;
    padding: 6rem 0 1rem 0;
  }

  &#contact, &#skills  {
    color: #a2abb7;
    background-color: #48525e;

    h2 {
      color: white;
    }
  }

  &#contact::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 4.6rem;
    background-color: white;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }

  article {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 10vh 0;

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }

    .info, .balancing, .reference {
      display: inline-block;
      width: 700px;
      min-width: 500px;
    }

    .balancing {
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .risk {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }
    }

    &.wrapper-skills {
      align-items: start;
      padding: 3rem 0;

      display: grid;
      grid-template-columns: repeat(3, minmax(33.3%, 33.3%));

      div {
        // min-height: 400px;
        padding: 2rem 0;

        h3 {
          text-align: center;
          margin-bottom: 2rem;
        }
        ul {
          padding: 0 4rem;
          list-style-type: none;

          li {
            margin-bottom: 1.3rem;
            position: relative;

            &::before {
              content: "";
              display: inline-block;
              width: 25px;
              height: 1px;
              margin-right: 10px;
              background-color: white;
              position: absolute;
              top: 50%;
              left: -35px;
            }
          }
        }
      }

      .line {
        position: relative;

        &.active {
          &::after, &::before {
            content: '';
            height: 100%;
            width: 4px;
            position: absolute;
            top: 0;
            background-color: #a2abb7;
            animation: AnimationLine 1.3s ease;
          }
          &::before {
            left: 0;
          }
          &::after {
            right: 0;
          }

          @keyframes AnimationLine {
            0% {
              height: 0%;
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              height: 100%;
            }
          }
        }
      }

    }

    span {
      display: block;
      margin-bottom: 10px;
    }
  }
}

// code info:
// https://codesandbox.io/s/8klx37rzp9?fontsize=14&module=/src/App.vue&file=/src/App.vue:32-93
// https://www.timeanddate.de/datum/zeitspanne
</style>
