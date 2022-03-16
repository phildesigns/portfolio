<template>
  <div>
    <div class="intro" :style="{ backgroundImage : 'url(' + project.acf.thumbnail.url + ')'}">
      <div class="intro-content">
        <small>project :</small>
        <h1 style="margin: 0;">{{ project.acf.title }}</h1>
        <small v-if="project.acf.subtitle">{{ project.acf.subtitle }}</small>
      </div>
    </div>
    <div class="sections">
      <div class="section" v-for="section in project.acf.sections" :key="section.id">
        <div class="section-content">
          <div class="section-illustration">
            <img :src="section.picture.url" alt="none">
          </div>
          <div class="section-description">
            <div class="section-title">
              <h2>{{ section.title }}</h2>
            </div>
            <div>
              <p>{{ section.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    "
    <a id="cta" v-bind:href="project.acf.link">Open project <b>></b></a>
  </div>
</template>

<script>

import axios from "axios";
import param from "@/param/param";

export default {
  name: "ProjectView",

  data() {
    return {
      project: []
    }
  },

  created() {
    this.project.id = this.$route.params.id;
    console.log("id projet", this.project.id);
    // Projet
    axios.get(param.host + "project/" + this.project.id)
        .then(response => {
          // Récupération de la liste des projets
          this.project = response.data;
          console.log("Projet:", this.project);
        })
  }

}
</script>

<style scoped>

nav {
  z-index: 999;
}

.intro {
  display: flex;
  z-index: -1;
  position: relative;
  left: -1em;
  margin: 0 0 10em;
  width: 100vw;
  min-height: 400px;
  align-items: flex-end;
  background-size: cover;
}

.intro-content {
  margin: 1em;
  display: flex;
  flex-direction: column;
}

.intro-content small, .intro-content h1 {
  width: fit-content;
}

.intro-content small {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: -0.05em;
  color: var(--dominant);
  background: var(--tonic)
}

.intro-content h1 {
  margin: 0;
  padding: 0;
  font-size: 4rem;
}

.section {
  margin: 0 0 10em;
}

.section img {
  display: block;
  max-width: 75%;
  margin: auto;
}

#cta {
  display: block;
  margin: auto;
  width: fit-content;
  padding: 1em 2em;
  background: var(--tonic);
  border-radius: 5px;
  color: var(--dominant);
  text-decoration: none;
}

@media only screen and (min-width: 768px) {
  .intro-content h1 {
    font-size: 9rem;
  }

  .sections {
    max-width: 940px;
    margin: auto;
  }

  .section-title h2 {
    text-align: left;
  }

  .section-illustration {
    display: flex;
    justify-content: center;
  }

  .section {
    margin: 5em 0;
  }

  .section:nth-child(1) {
    margin-top: 0;
  }

  .section:nth-child(even) div:last-child {
    order: -1;
    text-align: right;
  }

  .section:nth-child(even) div:last-child .section-title h2 {
    text-align: right;
  }

  .section-title:nth-child(odd) {
    order: -1;
  }

  .section img {
    display: block;
    margin: auto;
    width: 50%;
    height: auto;
    filter: drop-shadow(-16px 17px 60px rgba(0, 0, 0, 0.25));
  }

  .section-description {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .section-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

}
</style>