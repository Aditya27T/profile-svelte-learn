<script>
    export let title = "";
    export let company = "";
    export let period = "";
    export let description = "";
    export let technologies = [];
  </script>
  
  <div class="card bg-base-200 shadow-xl hover:-translate-y-1 transition-transform duration-300 mb-8">
    <div class="card-body">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="card-title text-primary">{title}</h3>
          <p class="text-sm opacity-75">{company}</p>
        </div>
        <span class="badge badge-outline">{period}</span>
      </div>
      
      <p class="py-4">{description}</p>
      
      <div class="flex flex-wrap gap-2">
        {#each technologies as tech}
          <span class="badge badge-primary badge-sm">{tech}</span>
        {/each}
      </div>
    </div>
  </div>
    