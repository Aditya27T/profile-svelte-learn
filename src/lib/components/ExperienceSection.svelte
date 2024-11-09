<script>
    const experiences = [
        {
            title: 'Internship - Backend Developer',
            company: 'DBT Telkom',
            period: '2022',
            description: 'Developed and maintained scalable backend services using Node.js and Fastify. Implemented microservices architecture.',
            technologies: ['Node.js', 'Fastify', 'MongoDB', 'Redis'],
            type: 'tech'
        },
        {
            title: 'Osistel - Spirituality Division',
            company: 'SMK Telkom Purwokerto',
            period: '2021-2022',
            description: 'Responsible for organizing spiritual activities and events for students.',
            technologies: ['Leadership', 'Event Planning'],
            type: 'organization'
        },
        {
            title: 'Rohis Telkom Purwokerto - Treasurer',
            company: 'SMK Telkom Purwokerto',
            period: '2022',
            description: 'Managed organizational finances and budget planning for various activities.',
            technologies: ['Leadership', 'Financial Management'],
            type: 'organization'
        },
        {
            title: 'Stematel Reader - Decoration Division',
            company: 'SMK Telkom Purwokerto',
            period: '2021-2022',
            description: 'Led decoration team for various school events and activities.',
            technologies: ['Leadership', 'Event Planning'],
            type: 'organization'
        }
    ];

    let selectedType = 'all';
    let filteredExperiences = experiences;

    function filterExperiences(type) {
        selectedType = type;
        filteredExperiences = type === 'all' 
            ? experiences 
            : experiences.filter(exp => exp.type === type);
    }

    function getTypeColor(type) {
        const colors = {
            tech: 'bg-blue-100 text-blue-800',
            organization: 'bg-green-100 text-green-800',
        };
        return colors[type] || 'bg-gray-100 text-gray-800';
    }
</script>

<section id="experience" class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Experience</h2>
            <p class="text-base-content/70">
                My journey through technical and organizational roles
            </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex justify-center gap-2 mb-8">
            <button
                class="px-4 py-2 rounded-lg transition-all {selectedType === 'all' ? 'bg-primary text-white' : 'bg-base-200 hover:bg-base-300'}"
                on:click={() => filterExperiences('all')}
            >
                All
            </button>
            <button
                class="px-4 py-2 rounded-lg transition-all {selectedType === 'tech' ? 'bg-primary text-white' : 'bg-base-200 hover:bg-base-300'}"
                on:click={() => filterExperiences('tech')}
            >
                Technical
            </button>
            <button
                class="px-4 py-2 rounded-lg transition-all {selectedType === 'organization' ? 'bg-primary text-white' : 'bg-base-200 hover:bg-base-300'}"
                on:click={() => filterExperiences('organization')}
            >
                Organizational
            </button>
        </div>

        <!-- Experience Cards -->
        <div class="space-y-6">
            {#each filteredExperiences as exp}
                <div 
                    class="card bg-base-200 hover:shadow-lg transition-all duration-300"
                    key={exp.title}	
                >
                    <div class="card-body p-6">
                        <!-- Header -->
                        <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
                            <div class="space-y-1">
                                <h3 class="text-xl font-bold text-primary">{exp.title}</h3>
                                <div class="flex flex-col sm:flex-row sm:items-center gap-2 text-sm opacity-75">
                                    <span>{exp.company}</span>
                                    <span class="hidden sm:inline">•</span>
                                    <span class="badge badge-outline">{exp.period}</span>
                                </div>
                            </div>
                            
                            <span class={`text-xs px-2 py-1 rounded-full ${getTypeColor(exp.type)}`}>
                                {exp.type === 'tech' ? 'Technical' : 'Organizational'}
                            </span>
                        </div>

                        <!-- Description -->
                        {#if exp.description}
                            <p class="py-4 text-base-content/80">{exp.description}</p>
                        {/if}

                        <!-- Technologies -->
                        <div class="flex flex-wrap gap-2 mt-2">
                            {#each exp.technologies as tech}
                                <span class="badge badge-primary badge-sm">{tech}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}

            <!-- Empty State -->
            {#if filteredExperiences.length === 0}
                <div class="text-center py-16">
                    <p class="text-base-content/70">No experiences found in this category.</p>
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    /* Optional: Add hover effect for cards */
    .card {
        @apply transform transition-all duration-300;
    }
    
    .card:hover {
        @apply -translate-y-1;
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
        .card-body {
            @apply p-4;
        }
    }

    /* Animation keyframes for filtering */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .card {
        animation: fadeIn 0.3s ease-out;
    }
</style>