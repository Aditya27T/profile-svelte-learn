<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import SkillsSection from '$lib/components/SkillsSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ExperienceSection from '$lib/components/ExperienceSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
</script>

<svelte:head>
  <title>Aditya Eka Rahmadani - Backend Developer</title>
  <meta name="description" content="Backend Developer specializing in Node.js, Linux, and scalable systems" />
</svelte:head>

<div class="min-h-screen bg-base-100">
  <main class="container mx-auto px-4 py-16">
    <Hero />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
  </main>
</div>