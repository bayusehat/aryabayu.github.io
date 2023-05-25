<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center  me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <i class="bi bi-code-slash"></i>
        <h1></h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link  to="/">Home</router-link></li>
          <li><router-link  to="/about">About</router-link></li>
          <li><router-link  to="/work">Work</router-link></li>
        </ul>
      </nav><!-- .navbar -->

      <div class="header-social-links">
        <!-- <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a> -->
        <a href="https://instagram.com/_aryabayu" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/arya-bayu-18831012a/" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header><!-- End Header -->
<!-- <main id="main" data-aos="fade" data-aos-delay="1500"> -->
  <router-view />
<!-- </main> -->
<!-- End #main -->

<!-- ======= Footer ======= -->
<footer id="footer" class="footer">
  <div class="container">
    <div class="copyright">
      &copy; Copyright <strong><span>Arya Bayu</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/ -->
      <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
    </div>
  </div>
</footer><!-- End Footer -->

<a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>
<script>
// import Favicon from "../src/assets/img/favicon.png";
// import AppletouchIcon from "../src/assets/img/apple-touch-icon.png";
  export default {
    data(){
      return {
        isActive : false
      }
    },
    methods: {
      // myNav(){
      //   this.isActive = !this.isActive;
      //   console.log(this.isActive);
      // }
    },
    async mounted(){
     
    }
  }
</script>
<style>
@import url("https://fonts.googleapis.com");
@import url("https://fonts.gstatic.com");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cardo:ital,wght@0,400;0,700;1,400&display=swap");
@import url("../src/assets/vendor/bootstrap/css/bootstrap.min.css");
@import url("../src/assets/vendor/bootstrap-icons/bootstrap-icons.css");
@import url("../src/assets/vendor/swiper/swiper-bundle.min.css");
@import url("../src/assets/vendor/glightbox/css/glightbox.min.css");
@import url("../src/assets/vendor/aos/aos.css");
@import url("../src/assets/css/main.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
