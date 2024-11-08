<script>
	import ExperienceCard from './ExperienceCard.svelte';

	const experiences = [
		{
			title: 'Internship - Backend Developer',
			company: 'DBT Telkom',
			period: '2022',
			description:
				'Developed and maintained scalable backend services using Node.js and Fastify. Implemented microservices architecture.',
			technologies: ['Node.js', 'Fastify', 'MongoDB', 'Redis']
		},
		{
			title: 'Osistel - Spirituality Division',
			company: 'SMK Telkom Purwokerto',
			period: '2021-2022',
			description: 'Responsible for organizing spiritual activities and events for students.',
			technologies: ['Leadership', 'Event Planning']
		},
        {
            title: 'Rohis Telkom Purwokerto - Treasurer',
            company: 'SMK Telkom Purwokerto',
            period: '2022',
            technologies: ['Leadership', 'Financial Management']
        },
        {
            title: 'Stematel Reader - Decoration Division',
            company: 'SMK Telkom Purwokerto',
            period: '2021-2022',
            technologies: ['Leadership', 'Event Planning']
        }
	];
</script>

<section id="experience" class="mb-16">
	<h2 class="mb-8 text-2xl font-bold">Experience</h2>
	<div class="space-y-6">
		{#each experiences as exp}
			<ExperienceCard {...exp} />
		{/each}
	</div>
</section>

<style>
    section {
        @apply my-16;
    }
</style>
