<script>
    let menuOpen = false;
    
  </script>
  
  <nav class="bg-base-200 py-4 shadow-lg sticky top-0 z-10">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <span class="text-xl font-bold">Aditya Eka Rahmadani</span>
        
        <!-- Mobile menu button -->
        <button 
          class="md:hidden" 
          on:click={() => menuOpen = !menuOpen}
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
          </svg>
        </button>
  
        <!-- Desktop menu -->
        <div class="hidden md:flex space-x-4">
          <a href="#about" class="hover:text-primary">About</a>
          <a href="#skills" class="hover:text-primary">Skills</a>
          <a href="#experience" class="hover:text-primary">Experience</a>
          <a href="#projects" class="hover:text-primary">Projects</a>
          <a href="#cv" class="hover:text-primary">My CV</a>
        </div>
      </div>
  
      <!-- Mobile menu -->
      {#if menuOpen}
        <div class="md:hidden mt-4 space-y-2">
          <a href="#about" class="block hover:text-primary">About</a>
          <a href="#skills" class="block hover:text-primary">Skills</a>
          <a href="#experience" class="block hover:text-primary">Experience</a>
          <a href="#cv" class="block hover:text-primary">My CV</a>
        </div>
      {/if}
    </div>
  </nav>
  