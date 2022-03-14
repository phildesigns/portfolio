<template>
  <div>
  <footer>
    <div class="footer-section">
      <h3>Plan du site</h3>
      <ul>
        <li><a>Accueil <b>></b></a></li>
        <li><a>Projets <b>></b></a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Informations</h3>
      <ul>
        <li><a>Contact <b>></b></a></li>
        <li><a>Mentions légales <b>></b></a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Plus</h3>
      <ul class="socials">
        <li><a href="https://github.com/miowski"><i class="fi-snsuxl-github-alt"></i></a></li>
        <li><a href="https://linkedin.com/in/philemonvarret"><i class="fi-snsuxl-linkedin"></i></a></li>
      </ul>
    </div>
  </footer>
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style>
footer {
  margin-bottom: 2em;
}

.footer-section {
  border-top: solid 3px var(--contrast);
}

footer {
  text-align: center;
}

footer h3 {
  font-size: 1.5rem;
}

footer a {
  font-size: 1rem;
}

@media only screen and (min-width: 768px) {
  footer {
    display: flex;
    justify-content: space-evenly;
  }

  .footer-section {
    border-top: none;
  }
}
</style>