<template>
  <div>
    <footer>
      <div class="footer-section">
        <h3>Site map</h3>
        <ul>
          <li>
            <router-link to="/" tag="a">Home <b>></b></router-link>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>
        <p>Interested in <b>working with me</b> ?</p>
        <p><a class="cta" href="mailto:regard-haubans0z@icloud.com">Get in touch</a> by email :)</p>
      </div>
      <div class="footer-section">
        <h3>Plus</h3>
        <ul class="socials">
          <li><a href="https://linkedin.com/in/philemonvarret"><i class="fa fa-linkedin-square" aria-hidden="true">
          </i></a></li>
          <li><a href="https://github.com/phildesigns"><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
          <li><a href="https://instagram.com/irvingvrt"><i class="fa fa-instagram"></i></a></li>
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
  margin: 5em auto;
}

.footer-section {
  border-top: solid 3px var(--contrast);
}

.socials li {
  display: inline;
  margin-right: 1em;
}

.socials li:last-child {
  margin-right: 0;
}

.socials i {
  font-size: 2rem;
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

a.cta {
  font-weight: 600;
  color: var(--tonic);
  text-decoration: underline;
  text-decoration-thickness: 2px;
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