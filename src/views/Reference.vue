<template>
  <div class="reference">
    <TheHeader />
    <TheMenu />

    <section id="work" class="wapper-page">
      <div class="container-page">
        <header>
          <h2>Referenz</h2>
        </header>
        <article>
          <div class="reference">
            <h3>Einleitung</h3>
            <h4>Erwartung & Zweck</h4>
            <p>
              <span>
                In diesem Bereich möchte ich auf die Entstehung des Portfolios und einzelner Coding-Entscheidungen eingehen.
                Ich möchte hiermit ein Teil meines aktuellen Wissensstands widerspiegeln, damit Du es einfacher hast, mich einzuschätzen.
              </span>
              <span>
                Für diesen Zweck halte ich es für ein tolles Projekt, ein Portfolio in VueJS umzusetzen.
              </span>
            </p>

            <a href="https://github.com/FlorianGlaeser/vue-portfolio" title="Code" target="_blank">github.com/FlorianGlaeser/vue-portfolio</a>

            <h3>Coming Soon</h3>
          </div>
        </article>
      </div>
    </section>

  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheMenu from '@/components/TheMenu';

export default {
  name: "Reference",
  components: {
    TheHeader,
    TheMenu,
  },
  metaInfo: {
    title: 'Referenz – Webdesign & Development',
  },
};
</script>
