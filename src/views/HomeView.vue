<template>
  <div>
    <div class="intro">
      <div class="intro-content">
        <div class="mobile-title">
          <h1>
            dev&
            <br/>design
          </h1>
        </div>
        <div class="desktop-title">
          <h1>
            developer
            <br/>designer
          </h1>
        </div>
        <img id="intro-avatar" src="@/assets/img/avatar.png" alt="Avatar with a fresh fade, a hoodie and a laptop">
      </div>
    </div>
    <div class="title title-1">
      <h2>Projects</h2>
      <span><i class="fa fa-sticky-note" aria-hidden="true"></i></span>
    </div>
    <div class="projects">
      <div class="project"
           :style="{
           backgroundImage : 'url(' + require('@/assets/img/netlab/thumbnail.jpg') + '), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
      }">
        <div class="description">
          <h3>Netlab</h3>
          <p>2020 - Site web</p>
        </div>
        <ul class="tags">
          <li><span>HTML CSS</span></li>
          <li><span>JS</span></li>
        </ul>
      </div>
      <div class="project"
           :style="{
           backgroundImage : 'url(' + require('@/assets/img/thom-yorke/thumbnail.jpg') + '), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
      }">
        <div class="description">
          <h3>Thom Yorke</h3>
          <p>2021 - Site web</p>
        </div>
        <ul class="tags">
          <li><span>HTML CSS</span></li>
          <li><span>JS</span></li>
          <li><span>VueJS</span></li>
          <li><span>Responsive</span></li>
        </ul>
      </div>
    </div>
    <div class="title title-1">
      <h2>More about me</h2>
      <span><i class="fa fa-user-circle" aria-hidden="true"></i></span>
    </div>
    <div class="infos">
      <div class="info">
        <div class="title title-2">
          <span><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>
          <h3>Qualifications</h3></div>
        <ul>
          <li>Baccalauréat L spé Maths
            <br/><small>2017 - 2020</small>
          </li>
          <li>DUT Métiers du Multimédia et d'Internet
            <br/><small>2020 - 2022</small>
          </li>
        </ul>
      </div>
      <div class="info">
        <div class="title title-2"><span><i class="fa fa-flag" aria-hidden="true"></i></span>
          <h3>Languages</h3></div>
        <ul>
          <li>Français
            <br/><small>native</small>
          </li>
          <li>Anglais
            <br/><small>B2 / C1</small>
          </li>
          <li>Allemand
            <br/><small>A2</small></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView'
}
</script>

<style>

.intro {
  margin: 2em auto;
}

.intro h1 {
  margin: auto;
  color: var(--dominant);
  background: var(--tonic);
  font-size: 6rem;
  width: fit-content;
  padding-bottom: 1rem;
}

#intro-avatar {
  display: block;
  margin: auto;
  width: auto;
  position: relative;
  top: -2em;
}

#intro-avatar {
  height: 17em;
}

.project {
  position: relative;
  height: 12em;
  padding: 0.5em;
  margin-bottom: 1em;
  box-shadow: 0 4px 19px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  background-size: cover;
}

.project:active {
  transition: ease-in-out .10s;
}

.project .description, .project .tags {
  display: flex;
  align-items: center;
}

.description {
  width: fit-content;
}

.description h3, .description p {
  margin: 0 0.5em 0.25em 0;
}

.tags {
  margin-top: 0.5rem;
}

.tags span {
  border-radius: 1em;
  background: var(--tonic);
  color: var(--dominant);
  margin-right: 0.5em;
  padding: 0.15em 0.4em;
  white-space: nowrap;
}

.tags span:hover {
  background-blend-mode: saturation;
}

.desktop-title {
  display: none;
}

@media only screen and (min-width: 768px) {
  .desktop-title {
    display: block;
  }

  .mobile-title {
    display: none;
  }

  .intro {
    display: block;
    margin: 10rem auto;
    width: fit-content;
  }

  .intro h1 {
    font-size: 9rem;
    margin: 0;
  }

  .intro-content {
    display: flex;
  }

  #intro-avatar {
    position: relative;
    left: -4em;
    height: 342px;
    width: auto;
    margin: 0;
  }

  .projects {
    grid-template-rows: 12em;
  }

  .infos {
    grid-template-rows: fit-content(100%);
  }

  .info:nth-child(even) {
    border-left: solid 3px var(--contrast);
    padding-left: 1em;
  }

  .projects, .infos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    max-width: 940px;
    margin: auto auto 2em;
  }

  .project {
    transition: ease-in-out .10s;
  }

  .project:hover {
    transform: translateY(0.1em);
    box-shadow: none;
  }
}
</style>
