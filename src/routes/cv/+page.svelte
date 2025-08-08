<script>
  let data = {
    name: "Aditya Eka Rahmadani",
    contactInfo: [
      { label: "✉️ aditya.eka.2305336@students.um.ac.id", link: "mailto:aditya.eka.2305336@students.um.ac.id" },
      { label: "🔗 linkedin.com/in/adityaeka", link: "https://linkedin.com/in/adityaeka" }
    ],
    summary: "Undergraduate student majoring in Educational-Informatics at Universitas Negeri Malang. Experienced in developing scalable backend services using Node.js and Fastify.",
    education: [
      { institution: "SDN 2 Jurug", degree: "Elementary School", date: "2011 - 2017", details: "Elementary School in Ponorogo" },
      { institution: "MTsN 2 Ponorogo", degree: "Junior High School", date: "2017 - 2020", details: "Junior High School in Ponorogo with major in Islamic Studies" },
      { institution: "SMK Telkom Purwokerto", degree: "Senior High School", date: "2020 - 2023", details: "Senior High School with major in Software Engineering" },
      { institution: "Universitas Negeri Malang", degree: "Educational-Informatics", date: "2023 - Now", details: "Educational-Informatics in Universitas Negeri Malang" }
    ],
    workExperience: [
      {
        position: "Back-End Developer",
        company: "DBT Telkom",
        date: "April 2021 - September 2021",
        details: [
          "Developed and maintained scalable backend services using Node.js and Fastify",
          "Implemented microservices architecture"
        ]
      }
    ]
  };

  function handlePrint() {
    window.print();
  }
</script>

<style>
  @media print {
    body * {
      visibility: hidden;
    }
    .cv-container, .cv-container * {
      visibility: visible;
    }
    .cv-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
</style>

<div class="cv-container w-full max-w-4xl mx-auto p-8 print:p-0 print:mx-0 print:max-w-none">
  <div class="p-8 shadow-md print:shadow-none border rounded-lg">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">{data.name}</h1>
      <div class="flex flex-col sm:flex-row gap-4">
        {#each data.contactInfo as contact}
          <a href={contact.link} class="text-blue-600 hover:underline print:text-black" target="_blank" rel="noopener noreferrer">
            {contact.label}
          </a>
        {/each}
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-bold border-b-2 border-black pb-2 mb-4">Summary</h2>
      <p class="text-gray-700 print:text-black">{data.summary}</p>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-bold border-b-2 border-black pb-2 mb-4">Education</h2>
      {#each data.education as edu}
        <div class="mb-6">
          <div class="font-bold text-lg">{edu.institution}</div>
          <div class="text-lg">{edu.degree}</div>
          <div class="text-gray-600 print:text-black">{edu.date}</div>
          <div class="text-gray-700 print:text-black">{edu.details}</div>
        </div>
      {/each}
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-bold border-b-2 border-black pb-2 mb-4">Work Experience</h2>
      {#each data.workExperience as exp}
        <div class="mb-6">
          <div class="font-bold text-lg">{exp.position}</div>
          <div class="text-lg font-bold">{exp.company}</div>
          <div class="text-gray-600 print:text-black">{exp.date}</div>
          {#if exp.details.length}
            <ul class="list-disc ml-6 mt-2">
              {#each exp.details as detail}
                <li class="text-gray-700 print:text-black mb-1">{detail}</li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </div>

    <button on:click={handlePrint} class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 print:hidden">
      Export to PDF
    </button>
  </div>
</div>
