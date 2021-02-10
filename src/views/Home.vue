<template>
  <div class="home">
    <TheHeader />
    <TheMenu />

    <section id="about">
      <article class="my">
        <div class="info">
          <h3>Über mich</h3>
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
            <h3>Mein Ausgleich</h3>
            <p>
              <span>
                In meiner Freizeit bin ich sportlich sehr aktiv und betreibe Parkour/Freerunning, was mir die Möglichkeit bietet,
                meinen Sportlichen Ausgleich zu finden.
              </span>
              <span>
                Im Zuge dessen betreue ich seit 2013 verschiedene Projekte und Prozesse für Kinder- Erwchsene,
                um ihnen einen sicheren Raum für den Sport zu bieten.
              </span>
            </p>
          </div>

          <TheCounter :number="DateDifferenceArray('2014-08-14')" />
        </div>

        <Picture :src="'beam.jpg'" :alt="'MyFace'" :animation='true' />
      </article>
    </section>

    <section id="skills">
      <header>
        <h3>Fähigkeiten</h3>
      </header>
      <article id="wrapper-skills">
        <div>
          <h4>Planung</h4>
          <p>Konzeption von Projekten</p>
          <p>Figma zur grundlegenden Struktur</p>
          <p>präzise Screendesigns</p>
        </div>

        <div>
          <h4>Frontend</h4>
          <p>übersichtliche HTML Strukturen</p>
          <p>Animationen und Features in nativem JavaScript, JQuery und GreenSocket</p>
          <p>performante Lösungen für (progressive) Web Apps in VueJS</p>
        </div>

        <div>
          <h4>Backend</h4>
          <p>umfangreiche Funktionalität in PHP</p>
          <p>Verwendung von MySQL Datenbanken</p>
          <p>effizientes Arbeiten mit Laravel</p>
        </div>
      </article>
    </section>

    <section id="work">
      <header>
        <h3>Referenzen</h3>
      </header>
      <article>
        <div class="reference">
          <h4>Title</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ex quia voluptatem! Ratione inventore mollitia laborum.</p>
        </div>

        <Picture :src="'Florian_Glaeser.jpg'" :alt="'MyFace'" />
      </article>
    </section>


    <section id="contact">
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
      <header>
        <h3>Contact</h3>
      </header>
      <article>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ex quia voluptatem! Ratione inventore mollitia laborum.</p>
          <span>Name...</span>
        </div>
        <div>
          <input type="text" placeholder="Name" />
          <input type="button" value="Next" />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheMenu from "@/components/TheMenu";
import TheCounter from '@/components/TheCounter';
import Picture from '@/components/Picture';

export default {
  name: "Home",
  components: {
    TheHeader,
    TheMenu,
    TheCounter,
    Picture,
  },
  data() {
    return {
      isScrolled: false,
      windowTop: 0,
    };
  },
  methods: {
    DateDifferenceArray(DateString) {
      // https://www.timeanddate.de/datum/zeitspanne-ergebnis?d1=04&m1=11&y1=1995&d2=31&m2=8&y2=2020
      // https://www.it-swarm.dev/de/javascript/differenz-monaten-zwischen-zwei-datumsangaben-javascript/968235315/
      let date1 = new Date(DateString);
      let date2 = new Date();
      let JJ = date2.getFullYear() - date1.getFullYear();
      // let MM = (12 - date1.getMonth()) + date2.getMonth();
      let MM = ((12 - date1.getMonth()) + date2.getMonth() - 12);
      let DD = (31 - date1.getDate()) + date2.getDate();
        if( DD > 31 ) {
          DD = DD - 31;
        } else {
          MM = MM - 1;
        }
      let DateArray = [JJ, MM, DD];

      for (let index=0; index < DateArray.length; index++) {
        DateArray[index] =  String( Math.abs( DateArray[index] ) ).padStart(2, '0');
      }

      DateArray = DateArray.join('').split('');
      return DateArray;
    },
    // onScroll(e) {
    //   this.windowTop = e.target.documentElement.scrollTop;
    // },
  },
  // mounted() {
  //   window.addEventListener("scroll", this.onScroll);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.onScroll);
  // },
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
  }

  &section:nth-of-type(5) svg {
    left: 0;
    position: absolute;
    top: 0;
  }

  &#contact, &#skills  {
    color: #a2abb7;
    background-color: #48525e;
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
    }

    span {
      display: block;
      margin-bottom: 10px;
    }
  }
}

// code info:
// https://codesandbox.io/s/8klx37rzp9?fontsize=14&module=/src/App.vue&file=/src/App.vue:32-93
</style>
