<script>
	import FooterSocialLinkCard from "./FooterSocialLinkCard.svelte";
  import { faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"; 

</script>
<hr>
<div class="flex flex-col gap-4">
  <p class="text-center text-lg font-bold"><a class="underline underline-offset-4 text-blue-400" href="mailto:antonioimportant@gmail.com" target="_blank">antonioimportant@gmail.com</a> - 2024</p>
  <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
    <FooterSocialLinkCard name="LinkedIn" link="https://linkedin.com/in/antonio-mauricio-4645832b3" icon={faLinkedinIn} />
    <FooterSocialLinkCard name="Instagram" link="https://instagram.com/antonioalmeida2003/" icon={faInstagram} />
    <FooterSocialLinkCard name="GitHub" link="https://github.com/Dedo-Finger2" icon={faGithub} />
  </div>
</div>