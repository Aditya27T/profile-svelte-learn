<script>
    const skills = {
      languages: [
        { name: "Node.js & JavaScript", color: "bg-green-500" },
        { name: "Python", color: "bg-green-500" },
        { name: "Java", color: "bg-green-500" },
        { name: "C++", color: "bg-green-500" },
        { name: "PHP", color: "bg-green-500" },
        { name: "TypeScript", color: "bg-green-500" },
      ],
      frameworks: [
        { name: "Express.js", color: "bg-blue-500" },
        { name: "React", color: "bg-blue-500" },
        { name: "Next.js", color: "bg-blue-500" },
        { name: "Django", color: "bg-blue-500" },
        { name: "FastAPI", color: "bg-blue-500" },
        { name: "Laravel", color: "bg-blue-500" },
      ],
      learning: [
        { name: "Rust", color: "bg-yellow-500" },
        { name: "Linux", color: "bg-yellow-500" },
        { name: "Docker", color: "bg-yellow-500" },
        { name: "Mechine Learning", color: "bg-yellow-500" },
      ]
    };
  </script>
  
  <section id="skills" class="mb-16">
    <h2 class="text-2xl font-bold mb-8">Technical Skills</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Programming Languages -->
      <div class="card bg-base-200 shadow-xl hover:-translate-y-1 transition-transform duration-300">
        <div class="card-body">
          <h3 class="card-title">Programming Languages</h3>
          <ul class="space-y-2">
            {#each skills.languages as skill}
              <li class="flex items-center">
                <span class="w-2 h-2 {skill.color} rounded-full mr-2"></span>
                {skill.name}
              </li>
            {/each}
          </ul>
        </div>
      </div>
  
      <!-- Frameworks -->
      <div class="card bg-base-200 shadow-xl hover:-translate-y-1 transition-transform duration-300">
        <div class="card-body">
          <h3 class="card-title">Frameworks</h3>
          <ul class="space-y-2">
            {#each skills.frameworks as skill}
              <li class="flex items-center">
                <span class="w-2 h-2 {skill.color} rounded-full mr-2"></span>
                {skill.name}
              </li>
            {/each}
          </ul>
        </div>
      </div>
  
      <!-- Learning Journey -->
      <div class="card bg-base-200 shadow-xl hover:-translate-y-1 transition-transform duration-300">
        <div class="card-body">
          <h3 class="card-title">Learning Journey</h3>
          <ul class="space-y-2">
            {#each skills.learning as skill}
              <li class="flex items-center">
                <span class="w-2 h-2 {skill.color} rounded-full mr-2"></span>
                {skill.name}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>