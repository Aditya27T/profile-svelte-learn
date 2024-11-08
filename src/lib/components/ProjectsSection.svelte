<script>
    import ProjectCard from './ProjectCard.svelte';
    
    const projects = [
      {
        title: "Lorem API",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
        imageUrl: "https://i.ibb.co.com/KXD8QSG/Whats-App-Image-2024-11-05-at-08-50-59.jpg",
        githubUrl: "https://github.com/yourusername/ecommerce-api",
        liveUrl: "https://api.example.com",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"]
      },
        {
            title: "E-Commerce API",
            description: "A RESTful API for an e-commerce platform. Built with Node.js, Express, and MongoDB.",
            imageUrl: "https://i.ibb.co.com/KXD8QSG/Whats-App-Image-2024-11-05-at-08-50-59.jpg",
            githubUrl: "",
            liveUrl: "",
            technologies: ["Node.js", "Express", "MongoDB", "REST"]
        }
    ];
  </script>
  
  <section id="projects" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Featured Projects</h2>
      <p class="text-base-content/70 max-w-2xl mx-auto">
        Here are some of my notable projects that showcase my skills in backend development,
        system architecture, and problem-solving.
      </p>
    </div>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>