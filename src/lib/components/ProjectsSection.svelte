<script>
	import ProjectCard from './ProjectCard.svelte';

	const projects = [
		{
			title: 'CalmQuest',
			description: 'A mental health app that helps users manage stress and anxiety.',
			imageUrl: 'CalmQuest.png',
			liveUrl: 'https://calmquest-dobels-projects.vercel.app/',
			technologies: ['Next.js', 'Tailwind CSS']
		},
    {
      title: 'Grammmar Anti Jaksel API',
      description: 'A RESTful API for a educational platform that helps students learn English grammar.',
      imageUrl: 'https://i.ibb.co.com/KXD8QSG/Whats-App-Image-2024-11-05-at-08-50-59.jpg',
      githubUrl: 'https://github.com/Aditya27T/grammmar-anti-jaksel-BE-JS.git',
      technologies: ['Node.js', 'Express', 'MYSQL']
    },
		{
			title: 'SIP(Sistem Informasi Pelaporan)',
			description:
				'A web-based application for reporting and monitoring the progress of the campus facilities.',
			imageUrl: 'https://i.ibb.co.com/KXD8QSG/Whats-App-Image-2024-11-05-at-08-50-59.jpg',
			githubUrl: 'https://github.com/Aditya27T/sip-fe.git',
			technologies: ['Node.js', 'Express', 'MYSQL', 'Next.js', 'Tailwind CSS']
		},
    {
      title: 'Determining Ambulance Route Using Dijkstra Algorithm',
      description: 'A dekstop application that helps determine the fastest route for an ambulance to reach the hospital.',
      imageUrl: 'https://i.ibb.co.com/KXD8QSG/Whats-App-Image-2024-11-05-at-08-50-59.jpg',
      githubUrl: 'https://github.com/Aditya27T/ini-py-satriadata.git',
      technologies: ['Python', 'Flask', 'Leaflet.js', 'OpenStreetMap', 'Dijkstra Algorithm']
    },
    {
      title: 'StoryHub',
      description: 'A mini social media dekstop app that allows users to share their stories with others.',
      imageUrl: 'https://i.ibb.co.com/KXD8QSG/Whats-App-Image-2024-11-05-at-08-50-59.jpg',
      githubUrl: 'https://github.com/Aditya27T/StoryHub-Java-mysql.git',
      technologies: ['Java', 'JavaFX', 'MYSQL']
    },
    {
      title: 'Zeamart',
      description: 'A Desktop app for managing inventory and sales data for a grocery store.',
      imageUrl: 'https://i.ibb.co.com/KXD8QSG/Whats-App-Image-2024-11-05-at-08-50-59.jpg',
      githubUrl: 'https://github.com/Aditya27T/zeamart--inventory-c-.git',
      technologies: ['C#', 'ASP.NET', 'MYSQL']
    },
	];
</script>

<section id="projects" class="py-16">
	<div class="mb-12 text-center">
		<h2 class="mb-4 text-3xl font-bold">Featured Projects</h2>
		<p class="mx-auto max-w-2xl text-base-content/70">
			Here are some of my notable projects that showcase my skills in backend development, system
			architecture, and problem-solving.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
