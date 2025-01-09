<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let menuOpen = false;
  let theme = 'light';

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/cv", label: "CV" }
  ];

  function closeMenu() {
    menuOpen = false;
  }

  onMount(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  });

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  function setTheme(newTheme) {
    theme = newTheme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
</script>

<div class="bg-primary text-white text-center p-2">
  <p>🚧 This site is under construction 🚧</p>
</div>
<nav class="bg-base-200 py-4 sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center">
      <a href="/" class="text-xl font-bold">Aditya Eka Rahmadani</a>
      
      <div class="flex items-center gap-4">
        <button
          on:click={toggleTheme}
          class="p-2 rounded-full hover:bg-base-300 transition-colors"
          aria-label="Toggle theme"
        >
          {#if theme === 'light'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          {:else}
            <!-- Sun icon -->
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          {/if}
        </button>

        <button 
          class="lg:hidden"
          on:click={() => menuOpen = !menuOpen}
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <ul class="hidden lg:flex gap-4">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                class="hover:text-primary transition-colors {$page.url.pathname === item.href ? 'text-primary' : ''}"
                on:click={closeMenu}
              >
                {item.label}
              </a>
            </li>
          {/each}

      {#if menuOpen}
        <div class="lg:hidden absolute top-full left-0 right-0 bg-base-200 p-4">
          <ul class="flex flex-col gap-2">
            {#each navItems as item}
              <li>
                <a
                  href={item.href}
                  class="block py-2 hover:text-primary transition-colors {$page.url.pathname === item.href ? 'text-primary' : ''}"
                  on:click={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>
</nav>
